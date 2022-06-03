import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Form, Button } from "antd";
import { InputField } from "../../../components/shared/Input";
import { PlusOutlined } from "@ant-design/icons";
import { PNG } from "../../../assets";
export const CreateCatalog = () => {
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(PNG.CATALOg);
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      console.log("");
    }
  };
  return (
    <div>
      <div className="shop-header">
        <div className="shop-header-left">
          <div>
            <p className="catalog-back">
              <LeftOutlined />
            </p>
          </div>
          <div>
            <div className="catalog-title">Create Catalogue</div>
          </div>
        </div>
        <div className="mt-20">
          <Button className="create-button">Create Catalog</Button>
        </div>
      </div>
      <div className="create-div">
        <div>
          <div className="file-box-div">
            <div>
              <h2 className="file-title mt-15">Add Catalog image</h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={avatarPreview} className="image-preview" alt="" />
                <div
                  style={{
                    position: "relative",
                    top: -20,
                    bottom: 10,
                    left: 45,
                    zIndex: 10,
                  }}
                >
                  <div className="upload-icon">
                    <label for="file-input">
                      <PlusOutlined />
                    </label>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image*/"
                  name="avatar"
                  id="file-input"
                  onChange={registerDataChange}
                />
              </div>
            </div>
          </div>
          <div className="form-div">
            <Form layout="vertical">
              <Form.Item
                label={<label className="form-label">Catalog Name</label>}
              >
                <InputField placeholder="eg: Cakes,Grocery,Skincare" />
              </Form.Item>
              <Form.Item
                label={
                  <label className="form-label">Description (Optional)</label>
                }
              >
                <InputField />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
