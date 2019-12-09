/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* --------------------------- POP UP 2 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_cycle").addEventListener('click', function() {
    document.querySelector('.bg-modal_cycle').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_cycle').addEventListener('click', function(){
    document.querySelector('.bg-modal_cycle').style.display = 'none';
});