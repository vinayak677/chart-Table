import React, { useState } from 'react';
import { Table, Typography, Switch,Select } from 'antd';
import { PieChart, Pie, Legend } from "recharts";

const { Text } = Typography;
const { Option } = Select;

const Table2 = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const onChangeSwitch = (check) => {
    setSwitchValue(!check);
  };

  const adInsightsDropdown = (
    <Select defaultValue="Clicks" style={{ width: 120 }}>
      <Option value="male">Male</Option>
      <Option value="female">Female</Option>
      <Option value="others">Others</Option>
    </Select>
  );

  const columns = [
    {
      title: "Ad Insights",
      children: [
        {
          title: 'Male',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Female',
          dataIndex: 'borrow',
          sorter: (a, b) => a.borrow - b.borrow,
        },
        {
          title: 'Unknown',
          dataIndex: 'repayment',
          sorter: (a, b) => a.repayment - b.repayment,
        },
        {
          title: 'Conversion',
          dataIndex: 'conversion',
          sorter: (a, b) => a.repayment - b.repayment,
          render: (_, record) => (switchValue ? record.conversion : '-'),
        },
        {
          title: 'Revenue',
          dataIndex: 'Revanue',
          sorter: (a, b) => a.repayment - b.repayment,
          render: (_, record) => (switchValue ? record.Revanue : '-'),
        },
      ],
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Male',
      borrow: 348,
      repayment: 12528,
      conversion: 42,
      Revanue: 62118,
    },
    {
      key: '2',
      name: 'Female',
      borrow: 692,
      repayment: 24912,
      conversion: 35,
      Revanue: 5175,
    },
    {
      key: '3',
      name: 'Unknown',
      borrow: 105,
      repayment: 3943,
      conversion: 3,
      Revanue: 4489,
    },
  ];

  const chartData = [
    { name: "40% Male", value: 40, fill: "#0088FE" },
    { name: "35% Female", value: 35, fill: "#00C49F" },
    { name: "25% Unknown", value: 25, fill: "#FFBB28" },
  ];

  const renderColorfulLegendText = (value, entry) => (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px", paddingRight:"10px", top:'0px'}}>
      {value}
    </span>
  );
  
  return (
    <>
     
      {switchValue ? (
        <>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            className='custom-table h-[328px]'
            summary={(pageData) => {
              let totalBorrow = 0;
              let totalRepayment = 0;
              let totalConversion = 0;
              let totalRevanue = 0;
              pageData.forEach(({ borrow, repayment, conversion, Revanue }) => {
                totalBorrow += borrow;
                totalRepayment += repayment;
                totalConversion += conversion;
                totalRevanue += Revanue;
              });
              return (
                <>
                  <Table.Summary.Row className="custom-summary-row ">
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
        </>
      ) : (
        <>
        <div className='flex flex-row justify-around py-3 border-b-2'>
        <p>Ad Insights</p>
        <div className='flex align-middle'>

            {adInsightsDropdown}
        </div>
        </div>
        <PieChart width={500} height={270}>
          <Legend
            height={20}
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            iconSize={10}
            padding={0}
            formatter={renderColorfulLegendText}
          />
          <Pie
            data={chartData}
            cx={150} // Adjust this value based on your layout
            cy={150}
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          />
        </PieChart>
      </>
      )
      }
      {/* <br /> */}
      <div className={`w-[40rem] fixed h-[150px] flex justify-end items-end pr-5`}>
        <Switch defaultChecked onChange={onChangeSwitch} />
      </div>
    </>
  );
};

export default Table2;
