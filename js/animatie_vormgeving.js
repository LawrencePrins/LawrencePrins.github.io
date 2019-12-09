/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* --------------------------- POP UP 4 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_planit").addEventListener('click', function() {
    document.querySelector('.bg-modal_planit').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_planit').addEventListener('click', function(){
    document.querySelector('.bg-modal_planit').style.display = 'none';
});


/* --------------------------- POP UP 7 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_geschiedenis").addEventListener('click', function() {
    document.querySelector('.bg-modal_geschiedenis').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_geschiedenis').addEventListener('click', function(){
    document.querySelector('.bg-modal_geschiedenis').style.display = 'none';
});
