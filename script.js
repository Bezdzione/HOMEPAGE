document.addEventListener("DOMContentLoaded", function() {
    var gameItems = document.querySelectorAll(".game-item");
    gameItems.forEach(function(gameItem) {
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
                    window.location.href = "VISI ŽAIDIMAI/404/index.html";
                    break;
                case "skaičiai":
                    window.location.href = "VISI ŽAIDIMAI/404/index.html";
                    break;
                case "spėjimas":
                     window.location.href = "VISI ŽAIDIMAI/ATSPĖK ŽAIDIMAS/index.html";
                    break;
                case "matematika":
                    window.location.href = "VISI ŽAIDIMAI/404/index.html";
                    break;
                default:
                    break;
            }
        });
    });
});
