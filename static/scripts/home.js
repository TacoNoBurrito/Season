if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Dark");
    localStorage.setItem("cloakData", JSON.stringify({
        title: "Season",
        icon: "assets/images/logo.png"
    }));
    localStorage.setItem("favoriteGames", []);
    localStorage.setItem("cloaking", 0);
}

if (localStorage.getItem("cloaking") == 1) {
    const win = window.open();
    const iframe = win.document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = window.location;
    win.document.body.style.margin = "0 0";
    win.document.body.appendChild(iframe);
    window.close();
}

