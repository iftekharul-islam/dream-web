import React, { useEffect, useState } from "react";
import CardList from "../Component/BankCard/CardList";
import AddBankPopup from "../Component/Modal/AddBankPopup";
import WithdrawalTransactionTable from "../Component/Table/WithdrawalTransaction Table";
import AccountService from "../Service/AccountService";

function WithdrawA() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await AccountService.getAllData();
    if (res) {
      setData(res);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const isButtonActive = data?.balance?.balance >= data?.minimum;
  const handleWithdraw = async () => {
    if (data?.balance?.balance >= data?.minimum) {
      const res = await AccountService.withdrawBalance(100);
      if (res?.status == 201) {
        getData();
        alert("Withdrawn ₹100.00");
      }
    } else {
      alert("Withdrawal not possible");
    }
  };

  return (
    <div className="withdraw_content">
      <div className="section_title">
        <div className="text_area">
          <h1>Withdraw Your Amount</h1>
          <p>Cashing out your balance</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="card withdraw_card">
            <h2>Available Amount</h2>
            <h1>₹{data?.balance?.balance?.toFixed(2)}</h1>
            <div className="btn_area">
              <button
                className={`btn ${isButtonActive ? "active" : ""}`}
                onClick={handleWithdraw}
                disabled={!isButtonActive}
              >
                Withdraw Balance
              </button>
              <p>Minimum withdraw balance ₹{data?.minimum}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bank_add_card">
            <h2>How you get paid</h2>
            <div className="bank_add_card-list">
              <CardList data={data?.banks} getData={getData} />
            </div>
            <AddBankPopup onUpdate={getData} />
          </div>
        </div>
      </div>
      <div className="table_content">
        <h1 className="mb-4">Recent Transactions</h1>
        <WithdrawalTransactionTable data={data?.transaction}/>
      </div>
    </div>
  );
}

export default WithdrawA;
