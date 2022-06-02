import { LogoutOutlined, WechatFilled, AlertFilled } from "@ant-design/icons";
import { PNG } from "../../assets";
export const AppHeader = () => {
  return (
    <div className="header">
      <div>
        <img src={PNG.POPIN_LOGO} className="poppin-logo" alt="" />
      </div>
      <div className="icon-div">
        <div>
          <WechatFilled className="head-icon" />
        </div>
        <div>
          <AlertFilled className="head-icon" />
        </div>
        <div>
          <LogoutOutlined className="head-icon" />
        </div>
      </div>
    </div>
  );
};
