function displayType(game) {
    var gameType = game.getAttribute("data-game-type");
    alert(gameType + " is a game developed by " + game.innerHTML);
}