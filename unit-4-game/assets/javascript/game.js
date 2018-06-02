$(document).ready(function() {

    resetGame();

    $(".crystals").on("click",function() {
        console.log($(this).attr("id"))

    console.log("Red:" + redGem.value)
    console.log("Blue:" + blueGem.value)
    console.log("Green:" + greenGem.value)
    console.log("Purple:"+ purpleGem.value)

});
})

    // Variables
    var playerScore;

    var redGem = new Gem();
    var blueGem = new Gem();
    var greenGem = new Gem();
    var purpleGem = new Gem();

    // Functions & Objects

    function Gem (value) {
        this.value = value;
        function addScore() {
            playerScore += this.value;
        }
    }

    function resetGame() {
        playerScore = 0;
        redGem.value = Math.floor(Math.random() *12)+1;
        blueGem.value = Math.floor(Math.random() *12)+1;
        greenGem.value = Math.floor(Math.random() *12)+1;
        purpleGem.value = Math.floor(Math.random() *12)+1;

        // Display
        $("#playerScore").html(playerScore);
        $("#randomScore").html(Math.floor(Math.random() * 102) + 19);

    }

