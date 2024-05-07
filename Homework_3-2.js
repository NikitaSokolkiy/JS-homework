// Рабочий массив: const data = [
//     { id: 1, name: 'John Doe', age: 30, city: 'New York' },
//     { id: 2, name: 'Jane Smith', age: 25, city: 'London' },
//     { id: 3, name: 'Michael Jones', age: 28, city: 'Paris' },
//     { id: 4, name: 'Sarah Miller', age: 32, city: 'Berlin' },
//     { id: 5, name: 'William Johnson', age: 29, city: 'Rome' },
// ];

const data = [
     { id: 1, name: 'John Doe', age: 30, city: 'New York' },
     { id: 2, name: 'Jane Smith', age: 25, city: 'London' },
     { id: 3, name: 'Michael Jones', age: 28, city: 'Paris' },
     { id: 4, name: 'Sarah Miller', age: 32, city: 'Berlin' },
     { id: 5, name: 'William Johnson', age: 29, city: 'Rome' },
     { id: 6, name: 'Sarah Miller', age: 32, city: 'Berlin' },
 ];

console.log(data)

// reduce:.............................................................................................................................................

// 1.	Найти сумму значений определенного свойства во всех объектах массива.

console.log(data.reduce(function (acc, item){
    return acc += item.age
}, 0))

// 2.	Найти среднее значение значений определенного свойства во всех объектах массива.

console.log(data.reduce(function (acc, item){
     acc += item.age
        return acc / data.length
}, 0))

// 3.	Преобразовать массив объектов в объект с ключами, равными значениям определенного свойства.

const object = "id";
console.log(data.reduce(function (acc, item){
    acc[item[object]] = item;
    return acc;
},{}))

// 4.	Преобразовать массив объектов в массив значений определенного свойства.??????



// 5.	Найти все уникальные значения определенного свойства во всех объектах массива.

console.log(data.reduce(function (acc, item ){
    return [...new Set(data.map(item => item.city))]
}))

// every..............................................................................................................................................

// 1.	Проверить, имеют ли все объекты массива определенное свойство.????

console.log(data.every(item => {
    return item.city
}));

// 2.	Проверить, удовлетворяют ли все объекты массива определенному условию.

console.log(data.every(item => {
    return item.age > 10
}))

// 3.	Проверить, являются ли все значения определенного свойства в объектах массива положительными числами.

console.log(data.every(item => {
    return item.age > 0
}))

// 4.	Проверить, являются ли все значения определенного свойства в объектах массива строками.

console.log(data.every(item => {
    return typeof item.city === "string"
}))

// 5.	Проверить, являются ли все объекты массива валидными (имеют определенные свойства).?????

