import { Pagination } from 'antd';

const PaginationList = ({total, current, onShowSizeChange, onChange}) => (
  <>
    <Pagination
      showSizeChanger
      // onShowSizeChange={onShowSizeChange}
      current={current}
      pageSizeOptions={['4']}
      defaultPageSize={4}
      onChange={onChange}
      total={total}
    />
  </>
);
export default PaginationList;