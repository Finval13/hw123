"use strict";

const ul = document.querySelector("ul");

// Приклад, як потрібно виконати кожне завдання:
// 0. Вивести перший підпорядкований елемент та вказати тип даних
// console.dir(ul.firstElementChild); //Object
// console.dir(ul.children[0]); //Object

// 1. Вивести останній підпорядкований елемент та його тип

// console.dir(ul.lastElementChild); //Object

// 2. Вивести наступний елемент, що слідує за відібраним та вказати його тип

// let fr = ul.firstElementChild;

// console.dir(fr.nextElementSibling); // Object

// 3. Вивести зміст першого підпорядкованого елементу та вказати його тип

// console.log(ul.firstElementChild.innerHTML); // String

// 4. Вивести батьківський елемент відібраного та вказати його тип

// console.log(ul.firstElementChild.parentElement); //Object

// 5. Вивести назву класу батьківського елементу, та вказати його тип

// console.log(ul.parentElement.className); //String

// 6. Вивести всі підпордковані елементи та визначити тип властивості, що їх містить

// console.log(ul.getElementsByTagName("li")); // HTMLCollection

// 7. Вивести інформацію про кількість підпорядкованих елементів (двома способами) та їх типи

// console.dir(ul.childElementCount); // Number
// console.dir(ul.children); //HTMLCollection

// 8. Вивести всі підпорядковані по відношенню до батьківського елементи

// console.log(ul.children);

// 9. Вивести попередній по відношенню до відібраного елемент та вказати його тип

// let prev = ul.lastElementChild;
// console.log(prev.previousElementSibling); // Object
// 10. Вивести наступний по відношенню до відібраного елемент та вказати його тип

// let next = ul.firstElementChild;
// console.log(next.nextElementSibling) // Object

// 11. Вивести властивості, де вказано назву відібраного елемента

// let elem = ul.firstElementChild;
// console.dir(elem.localName);

// 12. Вивести другий підпорядкований елемент

// let el = ul.firstElementChild;
// console.log(el.nextElementSibling);
