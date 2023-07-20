import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: "5px"
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Button type='primary'>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </Button>
                </Menu>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Button type='primary'>
                        <Link href={"/posts"}>
                            Posts
                        </Link>
                    </Button>
                </Menu>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Button type='primary'>
                        <Link href={"/admin"}>
                            Admin
                        </Link>
                    </Button>
                </Menu>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Button type='primary'>
                        <Link href={"/dashboard"}>
                            Dashboard
                        </Link>
                    </Button>
                </Menu>
            </Header>
            <Content
                style={{
                    padding: '0 0px',
                }}
            >
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        minHeight: "100vh"
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default RootLayout;