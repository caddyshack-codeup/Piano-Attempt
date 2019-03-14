(function(){
    "use strict";


    const tKey = $('#t-key')[0];
    const yKey = $('#y-key')[0];
    const fKey = $('#f-key')[0];
    const gKey = $('#g-key')[0];
    const bKey = $('#b-key')[0];
    const hKey = $('#h-key')[0];
    const jKey = $('#j-key')[0];


    $(document).keydown(function(e) {

        if (e.which === 84) {
            console.log('t');
            tKey.play();
        }

        else if (e.which === 89) {
            console.log('y');
            yKey.play();
        }

        else if (e.which === 70) {
            console.log('f');
            fKey.play();
        }

        else if (e.which === 71) {
            console.log('g');
            gKey.play();
        }

        else if (e.which === 66) {
            console.log('b');
            bKey.play();
        }

        else if (e.which === 72) {
            console.log('h');
            hKey.play();
        }

        else if (e.which === 74) {
            console.log('j');
            jKey.play();
        } else {

        }




    });








})();