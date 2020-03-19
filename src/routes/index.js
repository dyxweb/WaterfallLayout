import React from "react";
import _ from "lodash";
import { Tabs } from "antd";
import ColumnDemo from "./ColumnDemo";
import FlexDemo from "./FlexDemo";

const { TabPane } = Tabs;

const App = () => {
  let mockData = [];
  _.fill(new Array(15), 1).forEach(() => {
    const rondomNumber = Math.floor(Math.random() * 10 + 5);
    const columnData = _.fill(new Array(rondomNumber), 1).map(
      (item, index) => ({
        label: index,
        value: index
      })
    );
    mockData.push(columnData);
  });
  const newData = [
    [
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
    ],
    [
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
    ],
    [
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
    ],
    [
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
    ],
    [
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
      { label: '测试使用' },
    ],
  ];
  return (
    <Tabs>
      <TabPane tab="columnDemo" key="column">
        <ColumnDemo mockData = {mockData} />
      </TabPane>
      <TabPane tab="flexDemo" key="flex">
        <FlexDemo mockData = {mockData} />
      </TabPane>
    </Tabs>
  );
}

export default App;