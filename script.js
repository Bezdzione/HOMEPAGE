document.addEventListener("DOMContentLoaded", function() {
    var gameItems = document.querySelectorAll(".game-item");
    var logo = document.querySelector(".logo");

    gameItems.forEach(function(gameItem) {
        gameItem.addEventListener("mouseover", function() {
            var newLogoSrc = this.getAttribute("data-logo");

            logo.classList.add("hovered");
            logo.src = newLogoSrc;

            gameItems.forEach(function(item) {
                if (item !== gameItem) {
                    item.classList.add("dimmed");
                }
            });
        });

        gameItem.addEventListener("mouseout", function() {
            logo.classList.remove("hovered");
            logo.src = "logo.png";

            gameItems.forEach(function(item) {
                item.classList.remove("dimmed");
            });
        });

        gameItem.addEventListener("click", function() {
            var gameId = this.getAttribute("id");
            switch (gameId) {
                case "reakcija":
                    window.location.href = "VISI ŽAIDIMAI/REAKCIJOS ŽAIDIMAS/index.html";
                    break;
                case "poros":
                    window.location.href = "VISI ŽAIDIMAI/KORTELIŲ ŽAIDIMAS/index.html";
                    break;
                case "ilgas":
                    window.location.href = "VISI ŽAIDIMAI/ATMINTIES ŽAIDIMAS/index.html";
                    break;
                case "spėjimas":
                    window.location.href = "VISI ŽAIDIMAI/SPĖK ŽAIDIMAS/index.html";
                    break;
                default:
                    break;
            }
        });
    });
});
