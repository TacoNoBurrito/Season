const cloak = JSON.parse(localStorage.getItem("cloakData"));
document.title = cloak.title;
const link = document.createElement("link");
link.rel = "icon";
document.head.appendChild(link);
link.href = cloak.icon;