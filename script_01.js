"use strict";

/***** Variablen 01 *******/

/** Block-Kommentar 
 *  (STRG + # = in einen Kommentar umwandeln und zurück)
 *  (STRG + S = Speichern)
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Peter"; //Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze";
// console.log(familyName);
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName; 
// firstName = prompt("Bitte Vornamen eingeben"); // Wertzuweisung
// familyName = prompt("Bitte Nachnamen eingeben")
// console.log(firstName + " " + familyName);// Ausgabe

// console.log("Datentyp: " + typeof firstName);


/* JavaScript ist eine untypiesierte Sprache! | untyped */

// let test;
// test = "hallo";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/*********** 03aKonstanten ***********/

// const test = "Hallo"; // Variable mit Konstantem inhalt
// test = "Hallo"; // keine neue Zuweisung zur LZ möglich!---> Fehler!!
// console.log("Inhalt: " + test); // Ausgabe

/********04 Beispiel - Berechnung****************/

// Deklaration
const birthYearJohn = 1897
const birthYearMark = 1977
let ageJohn, ageMark;

// let year = 2023;

let date = new Date();
let year = date.getFullYear()

// Berechnung
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log(ageJohn);
console.log(ageMark);

