import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import React from "react";

function LearningTable() {
  const columns = [
    {
      title: "Course name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, text) => (
        <Tag color={text.status === "Completed" ? "green" : "blue"}>
          {text.status}
        </Tag>
      ),
    },
    {
        title:"Action",
        key:"action",
        render:()=>(
            <Space size="middle">
            <a className="text-xl"><EyeOutlined /></a>
            
            <a className="text-xl"><DeleteOutlined /></a>
            </Space>
        )
    }
  ];
  const data = [
    {
      id: "1",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "Advanced",
      status: "Completed",
    },
    {
      id: "2",
      courseName: "Responsive Web Design",
      duration: "8 hours",
      level: "Intermediate",
      status: "In Progress",
    },
    {
      id: "3",
      courseName: "UI/UX Design Principles",
      duration: "7 hours",
      level: "Intermediate",
      status: "Completed",
    },
    {
      id: "4",
      courseName: "Python for Data Science",
      duration: "12 hours",
      level: "Advanced",
      status: "In Progress",
    },
    {
      id: "5",
      courseName: "Cloud Computing Fundamentals",
      duration: "6 hours",
      level: "Beginner",
      status: "Completed",
    },
    {
      id: "6",
      courseName: "Cybersecurity Essentials",
      duration: "9 hours",
      level: "Advanced",
      status: "In Progress",
    },
  ];
  return <Table className="mt-4" columns={columns} dataSource={data} />;
}

export default LearningTable;
