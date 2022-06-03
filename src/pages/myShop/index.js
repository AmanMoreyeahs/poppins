import "./shop.css";
import {
  ShareAltOutlined,
  HeatMapOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { PNG } from "../../assets";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../route/constant";

export const MyShop = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop-header">
        <div className="shop-header-left">
          <div>
            <p className="shop-logo">GS</p>
          </div>
          <div>
            <div className="shop-title">Grand Shop Bake</div>
            <div className="shop-sub-title">grandbake.catalog.to</div>
          </div>
        </div>
        <div className="shop-div">
          <HeatMapOutlined className="f-22" />
          <ShareAltOutlined className="f-22" />
        </div>
      </div>
      <div className="shop-cart">
        <div>
          <div className="cart-image-section ">
            <img src={PNG.SHOP_CART} alt="" className="cart-image" />
          </div>
          <div className="mt-20">
            <h5 className="cart-title">Your shop is empty!</h5>
            <p className="cart-sub-title ">
              Start by adding products in a catalog.
            </p>
          </div>
          <div className="shop-button-section">
            <div>
              <Button
                className="shop-button"
                onClick={() => navigate(ROUTES.CREATE_CATALOG)}
              >
                Create Catalog
              </Button>
            </div>
            <div>
              <Button className="shop-button">
                {" "}
                <PlusOutlined />
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
