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
    d6()































})