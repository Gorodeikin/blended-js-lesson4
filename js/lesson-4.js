//==============================================================================================================================================================================================
//Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
const body = document.body;
console.log(body);
// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.getElementById('title');
console.log(title);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicElements = document.querySelectorAll('[data-topic]');
console.log(dataTopicElements);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopicElements[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopicElements[dataTopicElements.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector('h1');
console.log(h1.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allH3 = document.querySelectorAll('h3');
console.log(allH3);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allH3.forEach((h3) => h3.classList.add('active'));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navElement = document.querySelector('[data-topic="navigation"]');
console.log(navElement);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navElement.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const navParagraph = navElement.querySelector('p');
navParagraph.textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const manipulationElement = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(manipulationElement);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manipulationElement.style.backgroundColor = 'lightblue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedHeader = document.querySelector('h3.completed');
console.log(completedHeader);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedLi = completedHeader.closest('li');
completedLi.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newParagraph = document.createElement('p');
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
h1.insertAdjacentElement('afterend', newParagraph);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement('li');
newLi.setAttribute('data-topic', 'innerHTML');
const newH3 = document.createElement('h3');
newH3.textContent = 'Властивість innerHTML';
const newP = document.createElement('p');
newP.textContent = 'Ще один спосіб створити DOM-елементи i помістити їх в дерево - це використовувати рядки з тегами i дозволити браузеру зробити всю важку роботу';
newLi.appendChild(newP);
list.appendChild(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
list.insertAdjacentHTML(
    'beforeend',
    `
    <li data-topic="innerHTML">
        <h3>Властивість innerHTML</h3>
        <p>Ще один спосіб створити DOM-елементи i помістити їх в дерево - це використовувати рядки з тегами i дозволити браузеру зробити всю важку роботу</p>
    </li>`
);
// 20 - очисти список
list.innerHTML = '';
//==================================================================================================================================================================================================


//==============================================================================================================================================================================================
//Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).
//
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
//
const numberContainer = document.querySelector('.number-container');
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
for (let i = 0; i < 100; i++) {
    const numberBlock = document.createElement('div');
    numberBlock.classList.add('number');
    const num = randomNumber();
    numberBlock.textContent = num;
    if (num % 2 === 0) {
        numberBlock.classList.add('even');
    } else {
        numberBlock.classList.add('odd');
    }
    numberContainer.appendChild(numberBlock);
}
//==============================================================================================================================================================================================


//==============================================================================================================================================================================================
//Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const checkbox = document.querySelector('input[type="checkbox"]');
const userNameSpan = document.querySelector('span.js-username-output');
input.addEventListener('input', () => {
    const value = input.value;
    if (value.length >= 6) {
        input.classList.add('success');
        input.classList.remove('error');
    } else {
        input.classList.add('error');
        input.classList.remove('success');
    }
    if (value.trim() !== '') {
        userNameSpan.textContent = value;
    } else {
        userNameSpan.textContent = 'Anonymous';
    }
});
input.addEventListener('focus', () => {
    if (input.value.trim() === '') {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid green';
    }
});
input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid lime';
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = input.value.trim();
    const isChecked = checkbox.checked;
    if (userName !== '' && isChecked) {
        const userData = {
            userName,
        };
        console.log(userData);
        input.value = '';
        checkbox.checked = false;
        userNameSpan.textContent = 'Anonymous';
        input.classList.remove('success', 'error');
        input.style.outline = 'none';
    } else {
        console.log('Будь ласка, введіть ім\'я (мінімум 1 символ) i погодьтесь з умовами!');
    }
});
//==============================================================================================================================================================================================



//==============================================================================================================================================================================================
//Завдання 4:
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const box = document.querySelector('.box');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
function changeSize(amount) {
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    box.style.width = (width + amount) + 'px';
    box.style.height = (height + amount) + 'px';
}
decreaseBtn.addEventListener('click', () => {
    changeSize(-20);
});
increaseBtn.addEventListener('click', () => {
    changeSize(20);
});
//==============================================================================================================================================================================================
