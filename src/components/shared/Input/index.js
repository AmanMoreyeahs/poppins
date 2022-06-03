import { Input } from "antd";
import styled from "styled-components";
export const InputField = styled(Input).attrs({
  className: "",
})`
  background: ${(props) => (props.background ? props.background : "#ffffff")};
  border: 0;
  outline: 0;
  border-bottom: 1px solid #c8c8c8;
  color: #2d2d2d;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  &:hover {
    border-bottom: 1px solid #c8c8c8;
  }
`;
