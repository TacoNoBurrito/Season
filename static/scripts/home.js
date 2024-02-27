if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Dark");
    localStorage.setItem("cloakData", JSON.stringify({
        title: "Season",
        icon: "assets/images/logo.png"
    }));
    localStorage.setItem("favoriteGames", []);
}

