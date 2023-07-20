import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import RootLayout from '@/components/layouts/RootLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
const { Meta } = Card;
const Posts = () => {
  const router = useRouter();

  const navigateToPostDetails = (postId) => {
    console.log("clicked");
    console.log(postId);
    router.push(`/posts/${postId}`)
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      placeItems: "center",
      paddingTop: "20px"
    }}>
      {
        new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return (
            <Card
              key={index}
              style={{
                width: 300,
                cursor: "pointer"
              }}
              onClick={() => navigateToPostDetails(index + 1)}

              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  width={100}
                  height={150}
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          )
        })
      }
    </div>
  )
}
export default Posts;

Posts.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}