import { Flex, Layout } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Headline from "../../headline/Headline";
import type { ReactNode } from "react";

export interface defaultLayout {
    // header 
    viewHeadline: string;

    // content
    children: ReactNode;

    // footer
    choiceButtons?: ReactNode;
    
}


const DefaultLayout: React.FC<defaultLayout> = ({
    viewHeadline,
    children,
    choiceButtons
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
                    { children }
                </Content>
                <Footer style={ footerStyle }>{ choiceButtons ? choiceButtons : <></> }</Footer>
            </Layout>
        </Flex>
    )
}

export default DefaultLayout;