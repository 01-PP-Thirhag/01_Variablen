"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze";
// console.log(familyName);
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben."); // Wertzuweisung
// familyName = prompt("Bitte Nachnamen eingeben."); // Wertzuweisung
// console.log(firstName + " " + familyName);

// console.log("Datenyp: " + typeof firstName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test; 
// test = "hallo";
// test = 2;
// test = true;

// console.log("Datenyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// const test = "hallo";  // Variable mit KONSTANTEM Inhalt
// // test = "hi"; // KEINE neue Zuweisung zur LZ möglich! --> Fehler
// console.log("Inhalt: " + test); // Ausgabe

/***** 04 Beispiel - Berechnung *******/

// Deklaration
const birthYearJohn = 2000;
const birthYearMark = 1990;
let ageJohn, ageMark;

// let year = 2023;

let date = new Date();
let year = date.getFullYear();

// Berechnung
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log(ageJohn);
console.log(ageMark);

