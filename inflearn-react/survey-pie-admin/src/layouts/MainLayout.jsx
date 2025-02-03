import { Layout, Menu } from 'antd';
import { any } from 'prop-types';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function MainLayout({ selectedKeys, children }) {
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
        <Menu theme="dark" selectedKeys={selectedKeys} mode="inline">
          <Menu.Item key="list">
            <Link to="/list">설문 조사 관리</Link>
          </Menu.Item>
          <Menu.Item key="builder">
            <Link to="/builder">빌더</Link>
          </Menu.Item>
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
  selectedKeys: any,
  children: any,
};

export default MainLayout;
