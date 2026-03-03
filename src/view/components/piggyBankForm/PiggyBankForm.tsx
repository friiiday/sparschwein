import { DatePicker, Form, Input, InputNumber } from "antd";


const PiggyBankDetails = () => {

    return (
        <span className="piggy-bank-details">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
            >
                <Form.Item label="Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Description">
                    <Input />
                </Form.Item>
                <Form.Item label="Total Amount">
                    <InputNumber prefix="$" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Due">
                    <DatePicker />
                </Form.Item>
                
            </Form>
        </span>
    )
}

export default PiggyBankDetails;