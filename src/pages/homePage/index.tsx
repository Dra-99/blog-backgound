import React, { useEffect, useState } from 'react';
import { queryHomePage } from '@/services/ant-design-pro/api';
import { isSuccessful } from '@/utils/commom';
import { message, Table, Space, Divider, Modal, Form, Input, Upload, Image } from 'antd';
import { EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';
import NavHeader from '@/components/NavHeader';
import { PageContainer, ModalForm } from '@ant-design/pro-components';

const HomePage: React.FC = () => {
  const [homePageData, setHomePageData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    (async () => {
      const res = await queryHomePage();
      if (isSuccessful(res)) {
        setHomePageData(res.data);
      } else {
        message.error('请求失败');
      }
    })();
  }, []);

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '中图',
      dataIndex: 'midImg',
      render: (src: string) => {
        return <Image width={150} src={src} />;
      },
    },
    {
      title: '大图',
      dataIndex: 'bigImg',
      render: (src: string) => {
        return <Image width={150} src={src} />;
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '操作',
      render: (row: any) => {
        return (
          <Space split={<Divider type="vertical" />}>
            <span style={{ cursor: 'pointer' }} onClick={() => setVisible(true)}>
              <EditOutlined />
            </span>
          </Space>
        );
      },
    },
  ];

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <PageContainer>
      <NavHeader title="首页标语" />
      <Table dataSource={homePageData} columns={columns} />
      <Modal
        title="编辑标语"
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Form layout="vertical">
          <Form.Item name="title" key={'title'} required={true} label="标题">
            <Input placeholder="请输入标题" />
          </Form.Item>
          <Form.Item name="midImg" key={'midImg'} required={true} label="中图">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              //   beforeUpload={beforeUpload}
              //   onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item name="bigImg" key={'bigImg'} required={true} label="大图">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              //   beforeUpload={beforeUpload}
              //   onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item name="description" key={'description'} required={true} label="描述">
            <Input.TextArea autoSize={{ minRows: 3 }} />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default HomePage;
