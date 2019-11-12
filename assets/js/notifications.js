const body = document.querySelector("body");

const CONNECT_COLOR = "rgb(0, 122, 255)";
const DISCONNECT_COLOR = "rgb(255, 149, 0)";

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, CONNECT_COLOR);
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} disconnected`, DISCONNECT_COLOR);
};
