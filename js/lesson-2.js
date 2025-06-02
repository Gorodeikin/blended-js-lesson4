//=============================================================================================
//Задание 1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
//=============================================================================================



//let styles = ['jazz', 'blues'];
//styles.push('rock-n-roll');
//let index = styles.indexOf('blues');
//if (index !== -1) {
//    styles[index] = 'classic';
//}
//function logItems(array) {
//    for (let i = 0; i < array.length; i++) {
//        console.log(`${i + 1} - ${array[i]}`);
//    }
//}
//logItems(styles);



//=============================================================================================
//Задание 2
// Напишите функцию checkLogin ( array) , которая:
// Принимает массив логинов как аргумент .
// Запрашивает имя пользователя через prompt . .

// const logins = [ "Peter" , "John" , "Igor" , "Sasha" ];
//=============================================================================================



//const logins = ["Peter", "John", "Igor", "Sasha"];
//function checkLogin(array) {
//    const username = prompt("Ввкдите ваше имя пользователя:");
//    if (array.includes(username)) {
//        alert("Добро пожаловать, " + username + "!");
//    } else {
//        alert("Пользователь не найден.");
//    }
//}
//checkLogin(logins);



//=============================================================================================
//Задание 3
// Напишите функцию caclculateAverage(),
// которая принимает произвольное количество
// аргументов и возвращает их среднее значение.
// Добавьте проверку, что аргументы - это числа.
//=============================================================================================



//function calculateAverage(...args) {
//    let sum = 0;
//    let count = 0;
//    for (const arg of args) {
//        if (typeof arg === 'number' && !isNaN(arg)) {
//            sum += arg;
//            count++;
//        }
//    }
//    return count > 0 ? sum / count : 0;
//}
//console.log(calculateAverage(10, 20, 30));
//console.log(calculateAverage(1, 'hello', 3, 4));
//console.log(calculateAverage('no numbers here'));



//=============================================================================================
//Задание 4
// Напишите функцию, которая будет скучать соседние числа
// и будет пушить их в новый массив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнение: составлять необходимо первое число со вторым, затем второе - с третьим,
// третье - с четвертым и так до конца.
// В результате функция должна возвращать массив [33, 45, 39, 17, 25, 27, 29].
//=============================================================================================



//const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
//function sumAdjacentNumbers(arr) {
//    let result = [];
//    for (let i = 0; i < arr.length - 1; i++) {
//        result.push(arr[i] + arr[i + 1]);
//    }
//    return result;
//}
//console.log(sumAdjacentNumbers(someArr));



//=============================================================================================
//Задание 5
// Напишите функцию findSmallestNumber(numbers),
// ищущее наименьшее число в массиве.
// Добавьте проверку, что функция получает именно массив, и
// если функция получает массив - верните из функции наименьшее число,
// в противном случае - верните 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
//=============================================================================================



//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
//function findSmallestNumber(number) {
//    if (!Array.isArray(number)) {
//        return 'Sorry, it is not an array!';
//    }
//    let smallest = numbers[0];
//    for (const num of numbers) {
//        if (num < smallest) {
//            smallest = num;
//        }
//    }
//    return smallest;
//}
//console.log(findSmallestNumber(numbers));
//console.log(findSmallestNumber('not an array'));



//=============================================================================================
//Задание 6
// Напишите функцию findLongestWord(string), которая
// принимает произвольную строку, состоящую только из слов, разделенных
// пробелами (параметр string), и будет возвращать самое длинное слово в предложении.

// Воспользуйтесь этим примером вызова функции для проверки ее работы:
// console.log(findLongestWord( "London is the capital of Great Britain" )); //  'capital'
//=============================================================================================



//function findLongestWord(string) {
//    const words = string.split(' ');
//    let longestWord = '';
//    for (const word of words) {
//        if (word.length > longestWord.length) {
//            longestWord = word;
//        }
//    }
//    return longestWord;
//}
//console.log(findLongestWord("London is the capital of Great Britain"));



//=============================================================================================
//Задание 7
// Напишите скрипт, который для объекта user последовательно:
// 1 - добавит поле mood со значением 'happy',
// 2 - заменит hobby на 'skydiving',
// 3 - заменит значение premium на false ,
// 4 - выведет содержание объекта user в формате // '> s ' ) . ..of

// const user = {
//      name: "John" ,
//      age: 20,
//      hobby: "tenis" ,
//      premium: true ,
//    };
//=============================================================================================



//const user = {
//    name: "John",
//    age: 20,
//    hobby: "tenis",
//    premium: true,
//};
//user.mood = 'happy';
//user.hobby = 'skydiving';
//user.premium = false;
//for (const key of Object.keys(user)) {
//    console.log(`${key}: ${user[key]}`);
//}



//=============================================================================================
//Задание 8
// Есть объект, в котором хранятся зарплаты команды
// Напишите код для добавления всех зарплат и
// сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0

// const salaries = {
// Mango: 100,
// Poly: 160,
// Ajax: 1470,
// };
//=============================================================================================



//const salaries = {
//Mango: 100,
//Poly: 160,
//Ajax: 1470,
//};
//let sum = 0;
//for (const salary of Object.values(salaries)) {
//    sum += salary;
//}
//console.log(sum);



//=============================================================================================
//Задание 9
// Создайте объект calculator со следующими методами:
// read(a, b) - принимает два аргумента и сохраняет их как свойства объекта,
// sum() - возвращает сумму сохраненных значений (с проверкой на наличие свойств в объекте),
// mult() - преумножает сохранение значения и возвращает результат (с проверкой на наличие свойств в объекте в отдельный метод exist().

// Если указанные свойства в объекте отсутствуют (т.е. метод exist возвращает false),
// методы sum и mult должны возвращать строку 'No such propeties'
//=============================================================================================



//const calculator = {
//    a: null,
//    b: null,
//    read(a, b) {
//        this.a = a;
//        this.b = b;
//    },
//    exist() {
//        return this.a !== null && this.b !== null;
//    },
//    sum() {
//        if (this.exist()) {
//            return this.a + this.b;
//        } else {
//            return 'No such propeties';
//        }
//    },
//    mult() {
//        if (this.exist()) {
//            return this.a * this.b;
//        } else {
//            return 'No such propeties';
//        }
//    }
//};
//calculator.read(5, 3);
//console.log(calculator.sum());
//console.log(calculator.mult());



//=============================================================================================
//Задание 10
// Напишите функцию calcTotalPrice(fruits, fruitName),
// принимающую массив объектов (fruits) и строку с названием фрукта (fruitName).
// Функция считает и возвращает общую стоимость фрукта
// с таким именем, ценой и количеством объекта.

// Обратите внимание, что в массиве может быть несколько объектов с одинаковым
// названием фрукта, это тоже нужно учесть.

// const fruits = [
//      { name:  "Яблоко" , price:  45 , quantity:  7 },
//      { name:  "Апельсин" , price :  60 , quantity:  4 } ,
//      { name:  " Банан " , price:  125 , quantity : 8 } ,
//      { name: "Виноград" , price: 440 , quantity: 3 },
//      { name: "Банан" , price: 125 , quantity: 3 },
//    ];
//=============================================================================================



//const fruits = [
//    { name: "Яблоко" , price:  45 , quantity:  7 },
//    { name: "Апельсин" , price :  60 , quantity:  4 } ,
//    { name: "Банан" , price:  125 , quantity : 8 } ,
//    { name: "Виноград" , price: 440 , quantity: 3 },
//    { name: "Банан" , price: 125 , quantity: 3 },
//];
//function calcTotalPrice(fruits, fruitName) {
//    let total = 0;
//    for (const fruit of fruits) {
//        if (fruit.name.trim() === fruitName.trim()) {
//            total += fruit.price * fruit.quantity;
//        }
//    }
//    return total;
//}
//console.log(calcTotalPrice(fruits, "Банан"));
//console.log(calcTotalPrice(fruits, "Яблоко"));