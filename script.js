$(document).ready(() => {
    function d1() {
        console.log('d1')
        $('#d05').css('background-color', 'red')
    }

    function d2() {
        console.log('d2')
        $('#d01, #d09').css('background-color', 'red')
    }

    function d3() {
        console.log('d3')
        $('#d01, #d05, #d09').css('background-color', 'red')
    }

    function d4() {
        console.log('d4')
        $('#d01, #d03, #d07, #d09').css('background-color', 'red')
    }

    function d5() {
        console.log('d5')
        $('#d01, #d03, #d05, #d07, #d09').css('background-color', 'red')
    }

    function d6() {
        console.log('d6')
        $('#d01, #d03, #d04, #d06, #d07, #d09').css('background-color', 'red')
    }

    $('#lancerD').click(function() {
        var minNumber = 1; // le minimum
        var maxNumber = 5; // le maximum
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
        console.log(randomnumber)

        $('.pointD').css('background-color', 'white')

        if (randomnumber === 1) {
            d1()
        }
        if (randomnumber === 2) {
            d2()
        }
        if (randomnumber === 3) {
            d3()
        }
        if (randomnumber === 4) {
            d4()
        }
        if (randomnumber === 5) {
            d5()
        }
        if (randomnumber === 6) {
            d6()
        }

        var scoreCurrent = $('.scoreCurrent1').text()
        var score = parseInt(scoreCurrent, 10)
        $('.scoreCurrent1').text(score + randomnumber)
    })

    $('#newGame').click(function() {
        $('.scoreCurrent1').text(0)
        $('.globalScore1').text(0)
    })

    $('#hold').click(function() {
        var globalScore1 = $('.globalScore1').text()
        var globalScore = parseInt(globalScore1, 10)
        var scoreCurrent1 = $('.scoreCurrent1').text()
        var scoreCurrent = parseInt(scoreCurrent1, 10)
        $('.globalScore1').text(scoreCurrent + globalScore)
        $('.scoreCurrent1').text(0)
    })
































})