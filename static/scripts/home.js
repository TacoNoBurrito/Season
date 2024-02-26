localStorage.clear();
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Normal");
    localStorage.setItem("cloakData", JSON.stringify({
        title: "Season",
        icon: "assets/images/logo.png"
    }));
    localStorage.setItem("favoriteGames", []);
}

