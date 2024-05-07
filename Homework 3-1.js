// ЗАДАЧИ НА МЕТОД reduce:

// Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.

//     Аргументы функции callback(previousValue, currentItem, index, arr):
//     previousValue – последний результат вызова функции, он же «промежуточный результат».
//     currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
//     index – номер текущего элемента.
//     arr – обрабатываемый массив.

let arrayString = ["a", "b", "c", "d", "e"];
let arrayNumbers = [1, 44, 3, 6, 20,4002, 7, 8, 354, -33];
let arrayNumbersAndStrings = ["a", "b", "c", "d", "e", 1, 44, 3, 6, 20, 4002, 7, 8, 354, -33]


//     1.	Найти сумму всех элементов массива.

let sum = arrayNumbers.reduce(function (acc, item){
    return acc += item;
}, 0)
console.log(sum);

//     2.	Найти произведение всех элементов массива.

let multiplication = arrayNumbers.reduce(function (acc, item){
    return acc  *= item;
}, 1)
console.log(multiplication);

//     3.	Найти максимальный элемент в массиве.

let maxValue = arrayNumbers.reduce(function (acc, item){
    return acc > item ? acc : item
})
console.log(maxValue);


// ЗАДАЧИ НА МЕТОД every:

// Метод массива .every() позволяет узнать, удовлетворяют ли все элементы в массиве условию в функции-колбэке.
// Результатом вызова метода .every() будет boolean-значение true или false.


// 1.	Проверить, являются ли все элементы массива четными.

let evenNumber = arrayNumbers.every(item => {
    return item % 2 === 0
})
console.log(evenNumber);

// 2.	Проверить, являются ли все элементы массива строками.

let stringArray_1 = arrayNumbers.every(item => {
    return typeof item === "string"
})
console.log(stringArray_1);

let stringArray_2 = arrayString.every(item => {
    return typeof item === "string"
})
console.log(stringArray_2);

// 3.	Проверить, являются ли все элементы массива положительными числами.

let positiveNumbers = arrayNumbers.every(item => {
    return item > 0
})
console.log(positiveNumbers);

// ЗАДАЧИ НА МЕТОД some:

// Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке.
// Колбэк-функция будет вызываться для каждого элемента массива до тех пор,
// пока не вернётся true, либо пока не закончатся элементы массива.

// 1.	Проверить, содержит ли массив хотя бы один четный элемент.

let evenNumber_2 = arrayNumbers.some(item => {
    return item % 2 === 0
})
console.log(evenNumber_2);

// 2.	Проверить, содержит ли массив хотя бы одну строку.

let someStringInArray_number  = arrayNumbers.some(item => {
    return typeof item === "string"
})
let someStringInArray_string = arrayString.some(item => {
    return typeof item === "string"
})
console.log(someStringInArray_string)
console.log(someStringInArray_number);

// 3.	Проверить, содержит ли массив хотя бы одно отрицательное число.


let positiveNumbers_2 = arrayNumbers.some(item => {
    return item < 0
})
console.log(positiveNumbers_2);

// Задачи на метод map:

// Метод map() позволяет трансформировать один массив в другой при помощи функций-колбэка.
// Переданная функция будет вызвана для каждого элемента массива по порядку.
// Из результатов вызова функции будет собран новый массив.

// 1.	Удвоить каждый элемент массива.

let doubleNumber = arrayNumbers.map(function (item){
    return item *= 2
})
console.log(doubleNumber);

// 2.	Преобразовать каждый элемент массива в строку.

let numberToString  =  arrayNumbers.map(function (item){
    return String(item)
})
console.log(numberToString);

// 3.	Вычислить квадратный корень каждого элемента массива.

let sqrtNumbers = arrayNumbers.map(function (item ){
    return Math.sqrt(item)
})
console.log(sqrtNumbers);

// Задачи на метод filter:

// Метод массива .filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции.
// Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.

// 1.	Отфильтровать все четные элементы из массива.

let evenNumber_3 = arrayNumbers.filter(function (item ){
    return item % 2 === 0
})
console.log(evenNumber_3);

// 2.	Отфильтровать все строки из массива.

let  arrayOnlyStrings= arrayNumbersAndStrings.filter(function (item){
    return typeof item === "string"
})
console.log(arrayOnlyStrings);


// 3.	Отфильтровать все отрицательные числа из массива.

let positiveValue  = arrayNumbers.filter(function (item){
    return item > 0
})
console.log(positiveValue);

// Задачи на метод find:

// Находит первый элемент по параметрам

// 1.	Найти первый элемент массива, который больше 10.

let firstElement = arrayNumbers.find((item) =>{
    return item > 10
})
console.log(firstElement);

// 2.	Найти первую строку массива, которая начинается с буквы “А”.

let firstElement_2 = arrayString.find((item) => {
    return item.startsWith("a")
})
console.log(firstElement_2);

// 3.	Найти первый отрицательный элемент массива.

let firstElement_3 = arrayNumbers.find((item) => {
    return item < 0
})
console.log(firstElement_3);

// Задачи на метод push:

// Добавляет новый элемент в массив

// 1.	Добавить новый элемент в конец массива.

let addNewElement = arrayNumbers.push(-10);
console.log(addNewElement);

// 2.	Добавить несколько новых элементов в конец массива.

let addNewElement_2 = arrayNumbers.push(66, -300, 5)
console.log(arrayNumbers);

// 3.	Добавить новый массив в конец массива.
let newArrayNumber = [3, 45, -20, 100];
let addNewElement_3 = arrayNumbers.push(newArrayNumber);
console.log(arrayNumbers);

// Задачи на метод pop:

// Удаляет последний элемент массива

// 1.	Удалить последний элемент из массива.

let delNumber = arrayNumbers.pop();
console.log(`Числа которые удалил метод ${delNumber}, то что осталось от массива ${arrayNumbers}`);

// 2.	Удалить несколько последних элементов из массива.

let delNumbers = arrayNumbers.slice(-2);
console.log(arrayNumbers);

// 3.	Удалить все элементы из массива.

// let delAllNumbers = arrayNumbers.splice(0, arrayNumbers.length);
// console.log(arrayNumbers);


// Задачи на метод sort:

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
// Сортировка не обязательно устойчива (англ.).
// Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.

// 1.	Сортировать массив чисел в порядке возрастания.

let sortArray = arrayNumbers.sort();
console.log(sortArray);

// 2.	Сортировать массив строк в алфавитном порядке.

let sortString = arrayString.sort();
console.log(sortString);

// 3.	Сортировать массив объектов по значению определенного свойства.



