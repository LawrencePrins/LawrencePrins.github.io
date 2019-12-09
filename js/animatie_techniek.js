/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/* --------------------------- POP UP 1 ----------------------------*/

/* zorgt voor pop up van een thumbnail */
document.getElementById("button_programmeren").addEventListener('click', function() {
    document.querySelector('.bg-modal_programmeren').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_programmeren').addEventListener('click', function(){
    document.querySelector('.bg-modal_programmeren').style.display = 'none';
});
