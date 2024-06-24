import { DropboxCircleFilled } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { BellOutlined } from "@ant-design/icons";

const HeaderCustom = ({ selectedMenuItem }: { selectedMenuItem: string }) => {
  let headerTitle = "Microinvoice";
  switch (selectedMenuItem) {
    case "home":
      headerTitle = "Home";
      break;
    case "invoices":
      headerTitle = "Invoices";
      break;
    default:
      headerTitle = "Home";
  }

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <div className="w-[180px] flex bg-white  font-semibold text-xl items-center justify-center gap-2 text-[#132f70]">
          <DropboxCircleFilled style={{ color: "#132f70", fontSize: "25px" }} />
          Microinvoice
        </div>
        <p className="text-2xl flex items-center font-semibold bg-white text-[#132f70]">
          {headerTitle}{" "}
        </p>
      </div>
      <div className="flex gap-5 justify-center items-center ">
        <div className="h-full flex items-center">
          <Search
            placeholder="Search..."
            allowClear
            onSearch={onSearch}
            style={{ width: 250 }}
            size="large"
          />
        </div>
        <Badge count={1}>
          <Avatar
            size="large"
            style={{
              backgroundColor: "#fff",
              verticalAlign: "middle",
              background: "#f3f3fb",
            }}
            icon={<BellOutlined style={{ color: "#132f70" }} />}
          />
        </Badge>
        <Avatar
          style={{ backgroundColor: "#132f70", verticalAlign: "middle" }}
          size="large"
        >
          Vinh
        </Avatar>
      </div>
    </div>
  );
};

export default HeaderCustom;
