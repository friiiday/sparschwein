import { Form, InputNumber } from "antd";

const Contribute = () => {


    return (
        <span className="contribute">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
            >
                <Form.Item label="Payment">
                    <InputNumber prefix="$" style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </span>
    )
}

export default Contribute;