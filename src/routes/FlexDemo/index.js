/**
 * 使用flex实现简单瀑布流效果
 */
import React from "react";
import _ from 'lodash';
import "./index.css";

const FlexDemo = props => {
  const { mockData } = props;
  const columnCount = 3; // 一共展示三列
  const allColumnData = []; // 操作后的数据
  // 计算每一列的高度(根据实际情况进行计算即可)
  const computeColumnHeight = data => {
    let height = 0;
    data.forEach(item => {
      height += 64;
      height += item.length * 24;
    });
    return height;
  };
  // 插入每一列的第一个元素
  _.fill(Array(columnCount), 1).forEach((item, index) => {
    allColumnData[index] = mockData[index] ? [mockData[index]] : [];
  });
  // 获取高度最低的那一列的index的值并将新的数据插入到最低的那一列中
  mockData.slice(columnCount).forEach(item => {
    // 计算每一列的高度
    const columnHeightMap = allColumnData.map(column => computeColumnHeight(column));
    const minHeight = _.min(columnHeightMap);
    const minIndex = columnHeightMap.indexOf(minHeight);
    allColumnData[minIndex].push(item);
  });
  return (
    <div className="flex-row-box">
      {allColumnData.map((item, index) => (
        <div className="flex-column-box" key={index}>
          {item.map((item1, index1) => (
            <div className="flex-item-box" key={`${index}-${index1}`}>
              {item1.map((item2, index2) => (
                <div className="flex-item" key={`${index}-${index1}-${index2}`}>{_.get(item2, 'label')}</div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FlexDemo;