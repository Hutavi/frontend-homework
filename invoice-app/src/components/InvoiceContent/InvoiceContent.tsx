import React, { useState } from "react";
import { Button, Table, Tag } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import ModalCreateInvoice from "../ModalInvoice/ModalCreateInvoice";
import { format } from "date-fns";
import ModalDetail from "../ModalInvoice/ModalDetailInvoice";
import { DataType, initialData } from "../../data/data";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const InvoiceContent = () => {
  const [data, setData] = useState<DataType[]>(initialData);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDetail, setIsModalDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values: DataType) => {
    const currentDate = new Date();
    const selectedDate = new Date(values.dueDate);

    // Tạo một bản sao của values để tránh thay đổi trực tiếp giá trị đầu vào
    const newInvoice = { ...values, key: (data.length + 1).toString() };

    // Kiểm tra nếu dueDate trước currentDate thì cập nhật status thành "Late"
    if (selectedDate < currentDate) {
      newInvoice.status = "Late";
    }

    console.log("Received values of form: ", newInvoice);
    console.log("Date:", newInvoice.date);
    console.log("Due Date:", newInvoice.dueDate);

    setData([...data, newInvoice]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRowClick = (record: DataType) => {
    setSelectedItem(record);
    setIsModalDetail(true);
  };

  const handleModalClose = () => {
    setIsModalDetail(false);
    setSelectedItem(null);
  };

  const hasSelected = selectedRowKeys.length > 0;

  const columns: TableColumnsType<DataType> = [
    {
      title: "Invoice ID",
      dataIndex: "id",
      key: "id",
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value as string),
      sorter: (a, b) => a.id.localeCompare(b.id),
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Billed to",
      dataIndex: "bill",
      key: "bill",
      filteredValue: filteredInfo.bill || null,
      onFilter: (value, record) => record.bill.includes(value as string),
      sorter: (a, b) => a.bill.localeCompare(b.bill),
      sortOrder: sortedInfo.columnKey === "bill" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Invoice Date",
      dataIndex: "date",
      key: "date",
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value as string),
      sorter: (a, b) => a.date.localeCompare(b.date),
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
      render: (date) => format(new Date(date), "MMM dd, yyyy"),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      filteredValue: filteredInfo.dueDate || null,
      onFilter: (value, record) => record.dueDate.includes(value as string),
      sorter: (a, b) => a.dueDate.localeCompare(b.dueDate),
      sortOrder: sortedInfo.columnKey === "dueDate" ? sortedInfo.order : null,
      ellipsis: true,
      render: (dueDate) => format(new Date(dueDate), "MMM dd, yyyy"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value as string),
      sorter: (a, b) => a.status.localeCompare(b.status),
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (status) => {
        let color = "geekblue";
        if (status === "Paid") {
          color = "green";
        } else if (status === "Late") {
          color = "volcano";
        } else if (status === "Outstanding") {
          color = "geekblue";
        } else {
          color = "yellow";
        }

        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        { text: "Paid", value: "Paid" },
        { text: "Late", value: "Late" },
        { text: "Outstanding", value: "Outstanding" },
      ],
    },
    {
      title: "Notes",
      dataIndex: "note",
      key: "note",
      filteredValue: filteredInfo.note || null,
      onFilter: (value, record) => record.note.includes(value as string),
      sorter: (a, b) => a.note.localeCompare(b.note),
      sortOrder: sortedInfo.columnKey === "note" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters as Filters);
    setSortedInfo(sorter as Sorts);
  };

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-4">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <Button type="primary" onClick={showModal}>
          New Invoice
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        scroll={{ y: "70vh" }}
        onChange={handleChange}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />

      <ModalCreateInvoice
        onOpen={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />

      <ModalDetail
        visible={isModalDetail}
        onClose={handleModalClose}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default InvoiceContent;
