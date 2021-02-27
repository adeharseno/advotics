import React from 'react';
import { Layout } from 'antd';

import HeaderPage from '../Header';
import FooterPage from '../Footer';

const { Header, Footer, Content } = Layout;

function MainLayout({ children }) {
    return (
        <>
            <Layout>
                <Header>
                    <HeaderPage />
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    <FooterPage />
                </Footer>
            </Layout>
        </>
    )
}

export default MainLayout;