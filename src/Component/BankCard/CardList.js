import React from "react";
import AccountService from "../../Service/AccountService";
import Card from "./Card";

function CardList({data, getData}) {
  const activateCard = async(index) => {
    await AccountService.activateCard(index);
    getData();
  };

  return (
    <div>
      {data?.map((data, index) => (
        <Card
          key={index}
          bankName={data?.bank_name}
          accountNumber={data?.account_number}
          companyName={data?.account_name}
          activateCard={() => activateCard(data?.id)}
          isActive={data?.isPrimary}
        />
      ))}
    </div>
  );
}

export default CardList;
