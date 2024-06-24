import React, { useEffect } from "react";
import { Modal, Button, Tag, message } from "antd";
import { format } from "date-fns";
import { DataType } from "../../data/data";

interface ModalDetailProps {
  visible: boolean;
  onClose: () => void;
  selectedItem: DataType | null;
}

const ModalDetail: React.FC<ModalDetailProps> = ({
  visible,
  onClose,
  selectedItem,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (selectedItem?.status === "Late") {
      messageApi.warning("This invoice is overdue.");
    }
  }, [messageApi, selectedItem]);

  if (!selectedItem) return null;

  let statusColor = "";
  switch (selectedItem.status) {
    case "Paid":
      statusColor = "green";
      break;
    case "Late":
      statusColor = "red";
      break;
    default:
      statusColor = "blue";
      break;
  }

  return (
    <>
      {contextHolder}
      <Modal
        title="Invoice Details"
        open={visible}
        onCancel={onClose}
        centered
        footer={[
          <Button key="close" onClick={onClose}>
            Close
          </Button>,
        ]}
      >
        <div className="space-y-3">
          <p>
            <strong>Invoice ID:</strong> {selectedItem.id}
          </p>
          <p>
            <strong>Billed To:</strong> {selectedItem.bill}
          </p>
          <p>
            <strong>Invoice Date:</strong>{" "}
            {format(new Date(selectedItem.date), "MMM dd, yyyy")}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <Tag color={statusColor}>{selectedItem.status}</Tag>
          </p>
          <p>
            <strong>Note:</strong> {selectedItem.note}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalDetail;
