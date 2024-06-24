
export interface DataType {
  key: string;
  id: string;
  bill: string;
  date: string;
  dueDate: string;
  status: string;
  note: string;
}

export const initialData: DataType[] = [
  {
    key: "1",
    id: "1001",
    bill: "Bill #1001",
    date: "2024-06-24",
    dueDate: "2024-07-25",
    status: "Paid",
    note: "Payment received on time",
  },
  {
    key: "2",
    id: "1002",
    bill: "Bill #1002",
    date: "2024-06-23",
    dueDate: "2024-06-10",
    status: "Late",
    note: "Waiting for approval",
  },
  {
    key: "3",
    id: "1003",
    bill: "Bill #1003",
    date: "2024-06-22",
    dueDate: "2024-10-25",
    status: "Paid",
    note: "Invoice settled",
  },
  {
    key: "4",
    id: "1004",
    bill: "Bill #1004",
    date: "2024-06-21",
    dueDate: "2024-06-09",
    status: "Late",
    note: "Payment overdue",
  },
  {
    key: "5",
    id: "1005",
    bill: "Bill #1005",
    date: "2024-06-20",
    dueDate: "2024-09-10",
    status: "Paid",
    note: "Paid in full",
  },
  {
    key: "6",
    id: "1006",
    bill: "Bill #1006",
    date: "2024-06-19",
    dueDate: "2024-09-25",
    status: "Outstanding",
    note: "Pending review",
  },
  {
    key: "7",
    id: "1007",
    bill: "Bill #1007",
    date: "2024-06-18",
    dueDate: "2024-07-25",
    status: "Paid",
    note: "Payment confirmed",
  },
  {
    key: "8",
    id: "1008",
    bill: "Bill #1008",
    date: "2024-06-17",
    dueDate: "2024-03-12",
    status: "Late",
    note: "Awaiting processing",
  },
  {
    key: "9",
    id: "1009",
    bill: "Bill #1009",
    date: "2024-06-16",
    dueDate: "2024-06-25",
    status: "Paid",
    note: "Payment successful",
  },
  {
    key: "10",
    id: "1010",
    bill: "Bill #1010",
    date: "2024-06-15",
    dueDate: "2024-07-12",
    status: "Outstanding",
    note: "Under review",
  },
   {
    key: "11",
    id: "1012",
    bill: "Bill #1010",
    date: "2024-06-15",
    dueDate: "2024-07-12",
    status: "Outstanding",
    note: "Under review",
  },
   {
    key: "12",
    id: "1012",
    bill: "Bill #1010",
    date: "2024-06-15",
    dueDate: "2024-07-12",
    status: "Outstanding",
    note: "Under review",
  },
];