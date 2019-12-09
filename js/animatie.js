/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* lampje aan en uit zetten ****************/

var image_tracker ='1'

function on(){
    var image = document.getElementById("lamp_off");
    if(image_tracker == '1'){
        image.src = "./images/lamp_on_2.0.png";
        image_tracker = '2';
    }
    else{
        image.src = "./images/lamp_2.0.png";
        image_tracker = '1';
    }
}


/* --------------------------- POP UP 1 ----------------------------*/

/* zorgt voor pop up van een thumbnail */
document.getElementById("button_programmeren").addEventListener('click', function() {
    document.querySelector('.bg-modal_programmeren').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_programmeren').addEventListener('click', function(){
    document.querySelector('.bg-modal_programmeren').style.display = 'none';
});






/* --------------------------- POP UP 2 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_cycle").addEventListener('click', function() {
    document.querySelector('.bg-modal_cycle').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_cycle').addEventListener('click', function(){
    document.querySelector('.bg-modal_cycle').style.display = 'none';
});






/* --------------------------- POP UP 3 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_webcase").addEventListener('click', function() {
    document.querySelector('.bg-modal_webcase').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_webcase').addEventListener('click', function(){
    document.querySelector('.bg-modal_webcase').style.display = 'none';
});




/* --------------------------- POP UP 4 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_planit").addEventListener('click', function() {
    document.querySelector('.bg-modal_planit').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_planit').addEventListener('click', function(){
    document.querySelector('.bg-modal_planit').style.display = 'none';
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

/* --------------------------- POP UP 7 ----------------------------*/


/* zorgt voor pop up van een thumbnail */
document.getElementById("button_geschiedenis").addEventListener('click', function() {
    document.querySelector('.bg-modal_geschiedenis').style.display = 'flex';
});

/* zorgt voor pop down van een thumbnail */
document.querySelector('.close_geschiedenis').addEventListener('click', function(){
    document.querySelector('.bg-modal_geschiedenis').style.display = 'none';
});

