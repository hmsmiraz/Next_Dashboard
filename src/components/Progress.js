import { Flex, Progress, Typography } from "antd";
import Avatar from "antd/es/avatar/avatar";
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import React from "react";
const {Text} = Typography;
function userProgress() {
  return (
    <Card title="Progress">
      <Flex vertical align="center">
        <Avatar size={64} src="/01.png" />
        <Title
          level={4}
          style={{
            marginBottom: 3,
            marginTop: 5,
          }}
        >
         HMS MIRAZ
        </Title>
        <Text type="secondary">Basic Member</Text>
      </Flex>
      <Text>Front End</Text>
      <Progress percent={60} status="active"/>
      <Text>Back End</Text>
      <Progress percent={70} status="active"/>
      <Text>Devops</Text>
      <Progress percent={30} status="active"/>
      <Text>Testings</Text>
      <Progress percent={40} status="active"/>
    </Card>
  );
}

export default userProgress;
