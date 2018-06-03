$(document).ready(function() {

    resetGame();

    $(".crystals").on("click",function() {
        // console.log($(this).attr("id"));
        // console.log(this);
        // console.log(playerScore);

        addScore($(this).attr("id"));

        if (playerScore === randomScore) {
            wins++;
            $("#status").html("You Win!")
            resetGame();
        }
        else if (playerScore > randomScore) {
            losses++;
            $("#status").html("You Lose!")
            resetGame();
        }
});
})

    // Variables
    var playerScore;
    var randomScore;
    var wins = 0;
    var losses = 0;

    var redGem = new Gem();
    var blueGem = new Gem();
    var greenGem = new Gem();
    var purpleGem = new Gem();

    // Functions & Objects

    function Gem (value) {
        this.value = value;
        // function addScore() {
            // playerScore += this.value;
        // }
    }

    function addScore(gem) {
        switch(gem) {
            case "red":
                playerScore += redGem.value;
                break;
            case "blue":
                playerScore += blueGem.value;
                break;
            case "green":
                playerScore += greenGem.value;
                break;
            case "purple":
                playerScore += purpleGem.value;
                break;
        }
        // Display the new score
        $("#playerScore").html(playerScore);
    }

    function resetGame() {
        var powersArr = [];
        playerScore = 0;
        randomScore = Math.floor(Math.random() * 102) + 19;

        redGem.value = getRandomPower(powersArr)
        blueGem.value = getRandomPower(powersArr);
        greenGem.value = getRandomPower(powersArr);
        purpleGem.value = getRandomPower(powersArr);



        console.log("Red:" + redGem.value)
        console.log("Blue:" + blueGem.value)
        console.log("Green:" + greenGem.value)
        console.log("Purple:"+ purpleGem.value)
    

        // Display values
        $("#playerScore").html(playerScore);
        $("#randomScore").html(randomScore);
        $("#wins").html(wins);
        $("#losses").html(losses);

    }

    function getRandomPower(pa) {
        var power;

        // Loop until a unique power value is generated
        do {
            power = Math.floor(Math.random() * 12)+1;
        } while(pa.includes(power));

        pa.push(power);

        return power;

    }

