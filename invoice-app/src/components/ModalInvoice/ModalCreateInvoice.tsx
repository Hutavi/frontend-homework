import React from "react";
import { Modal, Form, Input, DatePicker, Select } from "antd";
import { DataType } from "../../data/data";

interface NewInvoiceFormProps {
  onOpen: boolean;
  onOk: (values: DataType) => void;
  onCancel: () => void;
}

const { Option } = Select;

const ModalCreateInvoice: React.FC<NewInvoiceFormProps> = ({
  onOk,
  onCancel,
  onOpen,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onOk(values as DataType);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="New Invoice"
      open={onOpen}
      onOk={handleOk}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Invoice ID"
          name="id"
          rules={[{ required: true, message: "Please input the invoice ID!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Billed to"
          name="bill"
          rules={[{ required: true, message: "Please input the billed to!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <div className="flex w-full">
          <div style={{ flex: 1, marginRight: "8px" }}>
            <Form.Item
              label="Invoice Date"
              name="date"
              rules={[
                { required: true, message: "Please select the invoice date!" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} size="large" />
            </Form.Item>
          </div>
          <div style={{ flex: 1, marginLeft: "8px" }}>
            <Form.Item
              label="Due Date"
              name="dueDate"
              rules={[
                { required: true, message: "Please select the due date!" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} size="large" />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label="Status"
          name="status"
          rules={[
            { required: true, message: "Please select the invoice status!" },
          ]}
        >
          <Select size="large">
            <Option value="Paid">Paid</Option>
            <Option value="No Paid">No Paid</Option>
            <Option value="Outstanding">Outstanding</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Notes" name="note">
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCreateInvoice;
