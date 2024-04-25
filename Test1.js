// Строгий режим
'use strict'


// Обычная переменная
let message= 'Привет'
console.log(message)

let a = "пока"
console.log(a)

// Неизменяемая переменная

const name = 'nikita'
const age = 22
const isDeveloper = true
console.log(name)

console.log(age)

// Типы переменных
let name_2 = 'Nikita'
let age_2 = 22
let isDeveloper_2 = true
let power = 9999999999n
let sign = Symbol()
const something = undefined

const user = {
    login: '123',
    password: 'qwerty',
}
const data = null

// Функция alert

alert('Привет Никита')
console.log('Hello Nikita')
alert('Hello Nikita 2')
console.log('Hello Nikita 2')

// Функция prompt
// const userAge= prompt('Сколько тебе лет?', 18)
// console.log(`Возраст: ${userAge}`)

// Условные функции
// if (userAge >= 18){
//     console.log('доступ разрешен')
// }else {
//     console.log('Доступ запрещен')
// }
// // Фукция confirm
// const isUserReady = confirm('Ты готов?')
//
// if (isUserReady){
//     console.log('Начинаем!')
// } else {
//     console.log('Ладно, подождем');
// }

// Функция switch (есть вопросы)
//  const myAge = Number(prompt('Сколько тебе лет?'))

// switch (true){
//     case 0: {
//         console.log('Такого возраста не бывает!')
//         break
//     }
//     case 18:{
//         console.log('Не верю! Покажи паспорт. ')
//         break
//     }
//     case 1000:{
//         console.log('Ты вампир?')
//         break
//     }
// }

// Циклы

let count = 0
while (count <= 10) {
    console.log(count)
    count = count + 1
}

for (let i = 0; i <= 5; i++){
    console.log('Число:'+ i)
}
// Не работает
while (count < 10){
    console.log(count)

    if (count % 5 === 0){
        console.log('Остаток от деления на 5. Цикл Прерывается!')
        break
    }

    count = count + 1
}
console.log('Цикл окончен')