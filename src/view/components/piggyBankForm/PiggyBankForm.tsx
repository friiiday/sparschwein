import { DatePicker, Form, Input, InputNumber } from "antd";
import dayjs from "dayjs";
import { useSessionStorage } from "../../../control/hooks/useSessionStorage";
import type { PiggyBankData } from "../../../model/types";

const PiggyBankForm = () => {
  const [formData, setFormData] = useSessionStorage<PiggyBankData>("current-piggybank", {
    name: "",
    description: "",
    totalAmount: null,
    due: null,
    participants: []
  });

  const update = <K extends keyof PiggyBankData>(key: K, value: PiggyBankData[K]) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <span className="piggy-bank-form">
      <Form layout="vertical" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
        
        <Form.Item label="Name">
          <Input
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Description">
          <Input
            value={formData.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Total Amount">
          <InputNumber
            prefix="$"
            style={{ width: "100%" }}
            value={formData.totalAmount ?? undefined}
            onChange={(value) => update("totalAmount", value ?? null)}
          />
        </Form.Item>

        <Form.Item label="Due">
          <DatePicker
            value={formData.due ? dayjs(formData.due) : null}
            onChange={(date) => update("due", date)}
          />
        </Form.Item>

      </Form>
    </span>
  );
};

export default PiggyBankForm;
