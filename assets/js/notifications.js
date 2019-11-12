const notifications = document.getElementById("jsNotifications");

const CONNECT_COLOR = "rgb(0, 122, 255)";
const DISCONNECT_COLOR = "rgb(255, 59, 48)";

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notifications.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, CONNECT_COLOR);
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} disconnected`, DISCONNECT_COLOR);
};
