const cloakData = JSON.parse(localStorage.getItem("cloakData"));
document.getElementById("title").value = cloakData.title;
document.getElementById("icon").value = cloakData.icon;
const currentTheme = localStorage.getItem("theme");
const themeElement = document.getElementById("theme");
for (var i = 0; i < themeElement.options.length; i++) {
    if (themeElement.options[i].text === currentTheme) {
        themeElement.selectedIndex = i;
        break;
    }
}

window.addEventListener("beforeunload", () => {
    localStorage.setItem("cloakData", JSON.stringify({
        title: document.getElementById("title").value,
        icon: document.getElementById("icon").value
    }));
    localStorage.setItem("theme", themeElement.options[themeElement.selectedIndex].text);
});