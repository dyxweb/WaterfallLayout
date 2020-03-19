/**
 * 使用column实现简单瀑布流效果
 */
import React from "react";
import "./index.css";

const ColumnDemo = props => {
  const { mockData } = props;
  return (
    <div className="column-row-box">
      {mockData.map((item, index) => (
        <div className="column-item-box" key={index}>
          {item.map((item1, index1) => (
            <div className="column-item" key={`${index}-${index1}`}>{item1.label}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColumnDemo;