import { Flex, Layout } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Headline from "../components/headline/Headline";
import type { ReactNode } from "react";

export interface mainLayout {
    // header 
    viewHeadline: string;

    // content
    content: ReactNode;

    // footer
    // buttons: ReactNode;
    
}


const MainLayout: React.FC<mainLayout> = ({
    viewHeadline,
    content,
    // buttons
}) => {

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#4096ff',
    };

    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#0958d9',
    };

    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: '90vw',
        maxWidth: "660px"
    };

    return (
        <Flex gap="middle" wrap>
            <Layout style={ layoutStyle }>
                <Header style={ headerStyle }>
                    <Headline text={ viewHeadline } isEditable={ false } />
                </Header>
                <Content style={ contentStyle }>
                    { content }
                </Content>
                <Footer style={ footerStyle }>Footer</Footer>
            </Layout>
        </Flex>
    )
}

export default MainLayout;