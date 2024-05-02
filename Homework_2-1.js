// 1. Задача: Отфильтруйте массив строк так, чтобы в результате остались только строки,
// содержащие определенную подстроку.
// const words = ['apple', 'banana', 'orange', 'grape'];

const words = ['apple', 'banana', 'orange', 'grape'];
let secretWords = words.filter(function (letters){
    return letters.includes("ap");
})
console.log(secretWords);

// 2. Задача: Отфильтруйте массив чисел, чтобы в итоге остались только нечетные числа.
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let hasEvenNumber = numbers_1.filter(function (n){
    const z = n % 2
    return z === 0
})
console.log(hasEvenNumber);

// 3.Задача: У вас есть массив чисел. Отфильтруйте только положительные числа.
//     const numbers = [-2, 5, 10, -8, 3, -1];

const num = [-2, 5, 10, -8, 3, -1];

let positiveNumbers = num.filter(function (x){
    return x > 0
})
console.log(positiveNumbers);

// 4. Задача: Выведите все элементы массива чисел, увеличив каждый элемент на 10.
// const numbers = [1, 2, 3, 4, 5];

const numbers_2 = [1, 2, 3, 4, 5];

numbers_2.forEach((num) => {
    let newNumber = num + 10
    console.log(newNumber);
})

// 5.Выведите все элементы массива строк в верхнем регистре.
//     const words = ['apple', 'banana', 'orange', 'grape'];

const words_2 = ['apple', 'banana', 'orange', 'grape'];

words_2.forEach((word) => {
    console.log(word.toUpperCase());
})


// 6.Создайте новый массив, в котором каждый элемент это квадрат числа из исходного массива.
//     const numbers = [1, 2, 3, 4, 5];

const numbers_3 = [1, 2, 3, 4, 5];
let newArray = numbers_3.map(num => num * num);
console.log(newArray);


// 7.Отсортируйте массив чисел по возрастанию.
//     const numbers = [3, 1, 7, 5, 2, 6, 4];

const numbers_4 = [3, 1, 7, 5, 2, 6, 4];
let sortedNumbers = numbers_4.sort((a, b) => a - b)
console.log(sortedNumbers)


// 8.Отсортируйте массив строк по длине строк.
//     const words = ['apple', 'orange', 'banana', 'grape'];

const words_3 = ['apple', 'orange', 'banana', 'grape'];
let sortWords = words_3.sort((a, b) => a.length - b.length);
console.log(sortWords);

// 9.Задача: Отсортируйте массив строк в алфавитном порядке.
//     const fruits = ["яблоко", "банан", "апельсин", "груша"];

const fruits = ["яблоко", "банан", "апельсин", "груша"];
let sortWords_2 = fruits.sort();
console.log(sortWords_2);

// 10.Задача: Проверьте, есть ли в массиве чисел хотя бы одно отрицательное число.const numbers = [3, -2, 5, 8, -1];


const numbers_5 = [3, -2, 5, 8, -1];
let positiveNumber = numbers_5.some(a =>{
    return a > 0;
})
console.log(positiveNumber);


// 11.Проверьте, содержит ли массив строк хотя бы одну строку длиной больше 10 символов.
//     const words = ['apple', 'banana', 'orange', 'grape'];

const words_4 = ['apple', 'banana', 'orange', 'grape'];

let wordsLength = words_4.some(a => {
    return a.length > 10;
})
console.log(wordsLength);

// 12.Задача: Найдите первое слово в массиве строк, которое начинается с определенной буквы.const words = ['apple', 'banana', 'orange', 'grape'];

const words_5 = ['apple', 'banana', 'orange', 'grape'];
let someWord = words_5.filter(function (a){
    return a.startsWith("o")
})
console.log(someWord);