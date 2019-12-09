/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* --------------------------- POP UP 3 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_webcase").addEventListener('click', function() {
    document.querySelector('.bg-modal_webcase').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_webcase').addEventListener('click', function(){
    document.querySelector('.bg-modal_webcase').style.display = 'none';
});



/* --------------------------- POP UP 5 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_ucd").addEventListener('click', function() {
    document.querySelector('.bg-modal_ucd').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_ucd').addEventListener('click', function(){
    document.querySelector('.bg-modal_ucd').style.display = 'none';
});


/* --------------------------- POP UP 6 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_hci").addEventListener('click', function() {
    document.querySelector('.bg-modal_hci').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_hci').addEventListener('click', function(){
    document.querySelector('.bg-modal_hci').style.display = 'none';
});
