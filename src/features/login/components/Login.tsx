import React from 'react';
import { Layout, Form, Input, Button, Checkbox, Typography } from 'antd';
import 'antd/dist/reset.css';
import './Login.css'

const { Header, Content } = Layout;
const { Title } = Typography;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: '#D60F12', alignItems: 'center', height: '15vh', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '15vh', justifyContent: 'center' }}>
          <div className='header-logo' style={{ marginRight: '20px' }}>
            <img src="https://dgcbcc.toaan.gov.vn/_forms/LogoToaAn.svg" alt="Logo Tòa Án" />
          </div>
          <div className='header-title'>
            <h1>
              TÒA ÁN NHÂN DÂN TỐI CAO
            </h1>
            <h2>
              THE SUPREME PEOPLE'S COURT OF THE SOCIALIST REPUBLIC OF VIETNAM
            </h2>
          </div>
        </div>
      </Header>

      <Content style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://dgcbcc.toaan.gov.vn/_forms/bg-content-min.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='form-container'>
          <h3 className="form-title">
            ĐĂNG NHẬP HỆ THỐNG
            <br></br>
            ĐÁNH GIÁ CÁN BỘ, CÔNG CHỨC
          </h3>

          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <Input placeholder="Tài khoản" style={{ padding: '12px', border: 'none' }} />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder="Mật khẩu" style={{ padding: '12px', border: 'none' }} visibilityToggle={false} />
            </Form.Item>
            <Form.Item>
              <Checkbox className='custom-checkbox'>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                type="primary"
                htmlType="submit"
                className='custom-button'
              >
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <a href="#" style={{ color: 'black' }}>Hướng dẫn sử dụng</a>
            </Form.Item>
            <Form.Item>
              <span>© 2023 <a href="#" target="_blank">TÒA ÁN NHÂN DÂN TỐI CAO</a></span>
            </Form.Item>
          </Form>

        </div>
      </Content>
    </Layout>
  );
};

export default Login;
