(function(){
    "use strict";

    const jKey = $('#j-key')[0];


    $(document).keydown(function(e) {

        if (e.which === 84) {
            console.log('t');
        }

        else if (e.which === 89) {
            console.log('y');
        }

        else if (e.which === 70) {
            console.log('f');
        }

        else if (e.which === 71) {
            console.log('g');
        }

        else if (e.which === 66) {
            console.log('b');
        }

        else if (e.which === 72) {
            console.log('h');
        }

        else if (e.which === 74) {
            console.log('j');
            jKey.play();
        } else {

        }




    });








})();