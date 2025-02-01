import { Layout, Menu } from 'antd';
import { any } from 'prop-types';

const { Header, Content, Sider } = Layout;

function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: '32px',
            margin: '16px',
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          logo
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">설문 조사 관리</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: any,
};

export default MainLayout;
