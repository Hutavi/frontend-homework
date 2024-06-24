import { Empty, Typography } from "antd";

const HomeContent = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Empty
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 100 }}
        description={
          <Typography.Text>
            Customize <a href="#API">Description</a>
          </Typography.Text>
        }
      >
        Please choose Invoices Tab to see the demo
      </Empty>
    </div>
  );
};

export default HomeContent;
