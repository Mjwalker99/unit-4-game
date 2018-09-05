$(document).ready(function () {

    var randomNmbr = Math.floor(Math.random() * 120 + 19)

    $(".grn-box").text(randomNmbr);

    var redGem = Math.floor(Math.random() * 12 + 1)
    var blueGem = Math.floor(Math.random() * 12 + 1)
    var yellowGem = Math.floor(Math.random() * 12 + 1)
    var greenGem = Math.floor(Math.random() * 12 + 1)


    var total = 0;
    var wins = 0;
    var losses = 0;


    function reset() {
        Random = Math.floor(Math.random() * 120 + 19);
        $(".grn-box").text(randomNmbr);
        redGem = Math.floor(Math.random() * 12 + 1);
        blueGem = Math.floor(Math.random() * 12 + 1);
        yellowGem = Math.floor(Math.random() * 12 + 1);
        greenGem = Math.floor(Math.random() * 12 + 1);
        total = 0;
        $(".zero").text(total);
    }



    function win() {
        wins++;
        $(".nwins").text(wins);
        reset();
    }

    function lose() {
        losses++;
        $('.nlosses').text(losses);
        reset();
    }

    $(".red").on('click', function () {
        total = total + redGem;
        $(".zero").text(total);
        if (total == randomNmbr) {
            win();
        }

        else if (total > randomNmbr) {
            lose();
        }
    })

    $(".blue").on('click', function () {
        total = total + blueGem;
        $(".zero").text(total);
        if (total == randomNmbr) {
            win();
        }

        else if (total > randomNmbr) {
            lose();
        }
    })
    $(".yellow").on('click', function () {
        total = total + yellowGem;
        $(".zero").text(total);
        if (total == randomNmbr) {
            win();
        }

        else if (total > randomNmbr) {
            lose();
        }

    })
    $(".green").on('click', function () {
        total = total + greenGem;
        $(".zero").text(total);
        if (total == randomNmbr) {
            win();
        }

        else if (total > randomNmbr) {
            lose();
        }
    })
});