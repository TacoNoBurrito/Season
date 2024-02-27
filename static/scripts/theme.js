const theme = localStorage.getItem("theme");

readTextFile("assets/maps/themes.json", (text) => {
    const themeData = JSON.parse(text)[theme];
    let element;
    document.body.style.background = themeData.background;
    for (element of document.querySelectorAll("h1, h2, h3, h4, h5, h6, p")) {
        element.style.color = themeData.text;
    }
});

const cloak = JSON.parse(localStorage.getItem("cloakData"));
document.title = cloak.title;
const link = document.createElement("link");
link.rel = "icon";
document.head.appendChild(link);
link.href = cloak.icon;