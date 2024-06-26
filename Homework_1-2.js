/*ЗАДАЧИ ПО JS ЦИКЛЫ*/

// 1. Вывод чисел от 1 до 10:
// Используйте цикл for для вывода чисел от 1 до 10 в консоль.

for (let i = 0; i < 11; i++){
    console.log(i);
}

// 2. Вывод четных чисел от 1 до 20:
// Используйте цикл for для вывода четных чисел от 1 до 20 в консоль.

for (let x = 0; x <= 20; x++){
    console.log(x)
}

// 3. Сумма чисел от 1 до 100:
// Найдите и выведите сумму всех чисел от 1 до 100, используя цикл for.


let g= 0;
for (let z = 0; z <= 100; z++){
    g= g + z
}
console.log(g);
// 4. Таблица умножения на 5:
// Выведите таблицу умножения на 5 (от 1 до 10) в консоль, используя цикл for.


for (let e = 1; e <= 10; e++){
    console.log(`5 x ${e} = ${e * 5}`)
}

// 5. Подсчет факториала:
//     Запросите у пользователя число. Используйте цикл for, чтобы вычислить факториал этого числа и выведите его в консоль.

let numberFactorial = Number(prompt("Ввдите число для факториала"));
let multiplication = 1;

for (let q = numberFactorial; q >= 1; q--){
    multiplication = multiplication * q;
}
console.log(multiplication);

// 6. Вывод чисел в обратном порядке:
//     Используйте цикл for для вывода чисел от 10 до 1 в консоль.

for (let x = 10; x >= 1; x-- ){
    console.log(x);
}

// 7. Подсчет суммы элементов массива:
//     Создайте массив чисел. Используйте цикл for,
//     чтобы найти сумму всех элементов массива и выведите ее в консоль.

let array = [1,2,3,4,5,6,7,8,20,30];
let sum = 0;

for (i = 0; i < array.length; i++){
    sum += array[i];
    console.log(sum);
}
// (В конце NaN)


// 8. Проверка наличия элемента в массиве:
//     Создайте массив строк. Используйте цикл for, чтобы проверить,
//     есть ли в массиве определенный элемент,
//     и выведите соответствующее сообщение

let string = ["Привет", "меня", "зовут", "Никита"];
let secretWord = "Никита";
let foundElement = true;

for (i = 0; i <= array.length; i++){
    if (string[i] === secretWord) {
        foundElement = true;
        break;
    }
}
if (foundElement){
    console.log(`Элемент ${secretWord} найден!`)
    } else {
    console.log(`Элемент ${secretWord} не найден!`)
}

// 9. Генерация и вывод случайных чисел:
//     Используйте цикл for, чтобы сгенерировать и вывести в консоль 5 случайных чисел от 1 до 100.

for (i = 0; i <= 4; i++){
    let randomNumbder = Math.round(Math.random() * 100)+1;
    console.log(randomNumbder);
}

// 10. Перебор и вывод ключей и значений объекта:
//     Создайте объект с несколькими ключами и значениями.
//     Используйте цикл for...in, чтобы перебрать ключи и значения объекта и вывести их в консоль.

// НЕ ЗНАЮ КАК ДЕЛАТЬ
console.log([1, 6, 11, 87, 22, 555, 2, 89,4].sort((a,b)=> a - b))