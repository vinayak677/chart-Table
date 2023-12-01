import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;
const columnHead=[
    {
        title: 'Custom Header Row',
        colSpan: 3,
        dataIndex: 'headerRow', // Dummy dataIndex to avoid warnings
      },
]
const columns = [
    {
        title:"Ad Insights",
    children: [
        {
            title: 'Campaigns',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
          },
          {
            title: 'clicks',
            dataIndex: 'borrow',
            sorter: (a, b) => a.borrow - b.borrow,
          },
          {
            title: 'cost',
            dataIndex: 'repayment',
            sorter: (a, b) => a.repayment - b.repayment,
          },
          {
            title: 'conversion',
            dataIndex: 'conversion',
            sorter: (a, b) => a.repayment - b.repayment,
          },
          {
            title: 'Revanue',
            dataIndex: 'Revanue',
            sorter: (a, b) => a.repayment - b.repayment,
          },
    ]
    },
 
];
const data = [
    {
        key: '1',
        name: 'Cosmatics',
        borrow: 712,
        repayment: 4272,
        conversion: 8,
        Revanue: 16568,
      },
      {
        key: '2',
        name: 'Serums',
        borrow: 3961,
        repayment: 27331,
        conversion: 115,
        Revanue: 362526,
      },
      {
        key: '3',
        name: 'Facewash',
        borrow: 9462,
        repayment: 76831,
        conversion: 123,
        Revanue: 266800,
      },
      {
        key: '4',
        name: 'Shampoos',
        borrow: 439,
        repayment: 2151,
        conversion: 5,
        Revanue: 11029
      },
      {
        key: '5',
        name: 'Conditioners',
        borrow: 1680,
        repayment: 3864,
        conversion: 49,
        Revanue: 175245,
      },
      {
        key: '6',
        name: 'Facewash 2',
        borrow: 4978,
        repayment: 29370,
        conversion: 189,
        Revanue: 623106
      },
];

const fixedData = [];
for (let i = 0; i < 20; i += 1) {
  fixedData.push({
    key: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description: 'Everything that has a beginning, has an end.',
  });
}
const Table1 = () => (
  <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      className='custom-table'
      summary={(pageData) => {
        let totalBorrow = 0;
        let totalRepayment = 0;
        let totalConversion = 0;
        let totalRevanue =0;
        pageData.forEach(({ borrow, repayment,conversion,Revanue }) => {
          totalBorrow += borrow;
          totalRepayment += repayment;
          totalConversion += conversion;
          totalRevanue += Revanue
        });
        return (
          <>
            <Table.Summary.Row className="custom-summary-row">
              <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text>{totalBorrow}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                <Text>{totalConversion}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={4}>
                <Text>{totalRevanue}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
    <br />
  </>
);
export default Table1;