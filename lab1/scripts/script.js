/*
    Student Name: Jovensky Sainthilaire
    File Name: script.js
    Date: 11/18/22
*/

/* Hamburger menu function */
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
    menu.style.display = "none";
    } else {
    menu.style.display = "block";
    }
    }