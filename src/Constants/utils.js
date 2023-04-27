import { notification } from "antd";

export const Notification = (status, message) => {
  notification[status]({ message });
};
