// window.onorientationchange = function() {
//     var portraitOrientation = window.matchMedia("(orientation:paysage)");
//     if (portraitOrientation.matches) {
//         document.getElementById("portrait").style.display = "none";
//         document.getElementById("paysage").style.display = "block";
//     } else {
//         document.getElementById("paysage").style.display = "none";
//         document.getElementById("portrait").style.display = "block";
//     }
// }

// window.addEventListener("orientationchange", function() {
//     console.log("The orientation of the screen is: " + window.orientation);

//     if (window.orientation === 0) {
//         document.getElementById("portrait").style.display = "block";
//         document.getElementById("paysage").style.display = "none";
//     }
//     if (window.orientation === 90) {
//         document.getElementById("paysage").style.display = "block";
//         document.getElementById("portrait").style.display = "none";
//     }
// });

$(document).ready(() => {
    if (window.orientation === 0) {
        $("#portrait").css('display', 'flex');
        $("#paysage").css('display', 'none');
    }
    if (window.orientation === 90) {
        $("#portrait").css('display', 'none');
        $("#paysage").css('display', 'flex');
    }

    $(window).on("orientationchange", function(event) {
        if (window.orientation === 0) {
            $("#portrait").css('display', 'flex');
            $("#paysage").css('display', 'none');
        }
        if (window.orientation === 90) {
            $("#portrait").css('display', 'none');
            $("#paysage").css('display', 'flex');
        }

    });

    //**fonction pour générer un dé en css */
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
    //**fin fonctions générateur de dé */

    //**fonction du joueur en cours */
    var players = false; //**false = player1 true = player2 */
    statut()
        //**fin fonction joueur en cours */

    //**Fonction pour générer un dé aléatoire */
    $('#lancerD').click(function() {
            var minNumber = 1; // le minimum
            var maxNumber = 5; // le maximum
            var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
            console.log(randomnumber)

            if (players == false) {
                var scoreCurrent = $('.scoreCurrent1').text()
            }
            if (players == true) {
                var scoreCurrent = $('.scoreCurrent2').text()
            }
            var score = parseInt(scoreCurrent, 10) + randomnumber


            $('.pointD').css('background-color', 'white')

            if (randomnumber === 1) {
                d1()
                score = 0
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


            if (players == false) {
                $('.scoreCurrent1').text(score)
                if (score == 0) {
                    console.log('changement joueur')
                    players = true
                    statut()
                }
            } else if (players == true) {
                $('.scoreCurrent2').text(score)
                if (score == 0) {
                    console.log('changement joueur')
                    players = false
                    statut()
                }
            }


        })
        //**fin dé aléatoire */

    //**redémarrer une partie */
    $('#newGame').click(function() {
            $('.scoreCurrent1').text(0)
            $('.globalScore1').text(0)
            $('.scoreCurrent2').text(0)
            $('.globalScore2').text(0)
            players = false
            statut()
        })
        //**fin fonction redémarrer une partie */

    //**fonction hold : ajouter current au global + changement de joueur*/
    $('#hold').click(function() {
            if (players == false) {
                var globalScore1 = $('.globalScore1').text()
                var globalScore = parseInt(globalScore1, 10)
                var scoreCurrent1 = $('.scoreCurrent1').text()
                var scoreCurrent = parseInt(scoreCurrent1, 10)
                $('.globalScore1').text(scoreCurrent + globalScore)
                $('.scoreCurrent1').text(0)
                winners(scoreCurrent + globalScore)
                players = true
                statut()
            } else if (players == true) {
                var globalScore2 = $('.globalScore2').text()
                var globalScore = parseInt(globalScore2, 10)
                var scoreCurrent2 = $('.scoreCurrent2').text()
                var scoreCurrent = parseInt(scoreCurrent2, 10)
                $('.globalScore2').text(scoreCurrent + globalScore)
                $('.scoreCurrent2').text(0)
                winners(scoreCurrent + globalScore)
                players = false
                statut()
            }
        })
        //**fin fonction hold */


    //**Fonctions pour déclarer le gagnant de la partie */
    function winners(score) {
        if (players == false) {
            var name = 'player1'
        }
        if (players == true) {
            var name = 'player2'
        }
        if (score >= 100) {
            alert(name + ' gagne la partie')
        }
    }
    //**Fin fonction winners */


    //**Gestion du point à côté des players */
    function statut() {
        if (players == false) {
            $('.player1 .point').css('display', 'inline-block')
            $('.player2 .point').css('display', 'none')
        }
        if (players == true) {
            $('.player2 .point').css('display', 'inline-block')
            $('.player1 .point').css('display', 'none')
        }
    }

})