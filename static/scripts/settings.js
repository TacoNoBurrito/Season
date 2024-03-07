const cloakData = JSON.parse(localStorage.getItem("cloakData"));
document.getElementById("title").value = cloakData.title;
document.getElementById("icon").value = cloakData.icon;
const cloakElement = document.getElementById("cloaking");
cloakElement.selectedIndex = localStorage.getItem("cloaking");

window.addEventListener("beforeunload", () => {
    localStorage.setItem("cloakData", JSON.stringify({
        title: document.getElementById("title").value,
        icon: document.getElementById("icon").value
    }));
    localStorage.setItem("cloaking", cloakElement.selectedIndex);
});