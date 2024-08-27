import { Header } from "antd/es/layout/layout";
import React from "react";
import { RadarChartOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";

function AppHeader() {
  return (
    <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <RadarChartOutlined />
        <div>Academic</div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar size={32} src='/01.png'></Avatar>
        <div>John</div>
      </div>
    </Header>
  );
}

export default AppHeader;
