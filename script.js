// ==============================================
//    -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// ==============================================
// function tags(name,whatdo,atrname,whatdo1,atrname2 = null,whatdo2 = null) {
//     this.name = name;
//     this.whatdo = whatdo;
//     this.nameofAtr = atrname = [{titleatr: atrname,wd:whatdo1}, {titleatr: atrname2,wd:whatdo2}]
// }
// let link = new tags('посилання','Перехід на наступну сторінку', 'href','надання адреси для переходу','title', 'Назва')
// console.log(link);
//
//
//
// let div = new tags('блок', 'створення окремого блоку', 'align', 'Вирівнювання', 'title', 'назва')
// console.log(div);
//
// let h1 = new tags('заголовок першого рівня', 'створює заголовок', 'align','Вирівнювання заголовку');
// console.log(h1);
//
// let span = new tags('спан', 'визначає строчні елементи','style','задає стиль елементу');
// console.log(span);
//
// let input = new tags('інпут', 'створює деякі елементи інтерфейсу','submit','утворює кнопку');
//  console.log(input);
//
// let form = new tags('форм', 'встановлює форму на веб-сторінці','medhod','метод протоколу даних', 'action', 'документ, який обробляє форму');
//  console.log(form);

// let option = new tags('опція', 'визначає окремі пункти списку', 'value', 'значення пункту списку', 'label', 'вказівка мітки пункту списку');
// console.log(option);

// let select = new tags('селект', 'список, що розкривається', 'size', 'Кількість відображуваних рядків списку','form','пов'язує список з формою');
// console.log(select);


// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// ==============================================
// class tags {
//     constructor(name, whatdo, atrname, whatdo1, atrname2 = null, whatdo2 = null) {
//         this.name = name;
//         this.whatdo = whatdo;
//         this.nameofAtr = atrname = [{titleatr: atrname, wd: whatdo1}, {titleatr: atrname2, wd: whatdo2}]
//     }
// }
// let link = new tags('посилання', 'Переходить на іншу сторінку', 'href', 'дає адресу куди переходити', 'title','підказка')
// console.log(link);

// let div = new tags('блок', 'створює окремий блок для інформації', 'align', 'Вирівнювання', 'title', 'Вспливаюча підказка')
// console.log(div);

// let h1 = new tags('заголовок першого рівня', 'створює найголовніший заголовок', 'align','Вирівнювання заголовку');
// console.log(h1)

// let span = new tags('спан', 'оприділяє строчні елементи','style','задає стиль елементу');
// console.log(span);

// let input = new tags('інпут', 'створює деякі елементи інтерфейсу','submit','утворює кнопку');
// console.log(input);

// let form = new tags('форм', 'встановлює форму на веб-сторінці','method','метод протоколу даних', 'action', 'документ, який обробляє форму');
// console.log(form);

// let option = new tags('опція', 'визначає окремі пункти списку', 'value', 'значення пункту списку', 'label', 'вказівка мітки пункту списку');
// console.log(option);

// let select = new tags('селект', 'список, що розкривається', 'size', 'Кількість відображуваних рядків списку','form','пов'язує список з формою');

// console.log(select);








//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
//

// let car = {
//     model: 'Fate',
//     producer: 'BMW',
//     year: 2010,
//     speed: 150,
//     engine: 1.8
// }
//
// function drive() {
//     console.log(`їдемо зі швидкістю ${car.speed} на годину`);
// }
// drive();
//
// function info() {
//     console.log(car);
// }
// info();
//
// function increaseMaxSpeed(newSpeed) {
//     car.speed += newSpeed;
//     console.log(car);
// }
// increaseMaxSpeed(30);
//
// function changeYear(newValue) {
//     car.year = newValue;
//     console.log(car);
// }
// changeYear(2016);
//
//
// function addDriver(driver) {
//     car.driver = driver;
//     console.log(car);
// }
// let driver = {
//     name: 'Lena',
//     age: 15,
//     exp: 2
// }
// addDriver(driver);






// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, producer, year, speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(this);
//     }
//
//      this.increaseMaxSpeed = function (newSpeed) {
//         this.speed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let opel = new Car('Corsa-e F', 'Opel', '2019', 150, 1.8);
// opel.drive();
// opel.info();
// opel.increaseMaxSpeed(20);
// opel.changeYear(2013);
//
// let driver = {
//     name: 'Ivan',
//     age: 65,
//     exp: 10
// }
// opel.addDriver(driver);









// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
//

// class Car {
//     constructor(model, producer, year, speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     info() {
//         console.log(this);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.speed += newSpeed;
//         console.log(`New max speed: ${this.speed}`);
//         console.log(this);
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//         console.log(`New year: ${this.year}`);
//         console.log(this);
//     }
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(this)
//     }
// }
//
// let audi = new Car('Q7', 'Audi', '2017', 150, 1.8);
// audi.drive();
// audi.info();
// audi.increaseMaxSpeed(20);
// audi.changeYear(2010);
//
// let driver = {
//     name: 'Ivanka',
//     age: 18,
//     exp: 1
// }
// opel.addDriver(driver);
//
// console.log('=================================================================================')
//
// let toyota = new Car('Corolla', 'Toyota', '2010', 170, 1.2);
// toyota.drive();
// toyota.info();
// toyota.increaseMaxSpeed(20);
// toyota.changeYear(2010);
//
// let driver2 = {
//     name: 'Vika',
//     age: 20,
//     exp: 3
// }
// toyota.addDriver(driver2);






// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const Vika = new Cinderella('Vika', 23, 39);
// const Olga = new Cinderella('Anna', 20, 37);
// const Ira = new Cinderella('Ira', 19,37);
// const Natalya = new Cinderella('Natalya', 24, 40);
// const Kristina = new Cinderella('Cristina', 23, 35);
// const Sophia = new Cinderella('Nastya', 21, 38);
//
// const array = [Vika,Olga,Ira,Natalya,Kristina,Sophia];
//
//
// class Prince {
//     constructor(name, age, shose) {
//         this.name = name;
//         this.age = age;
//         this.shose = shose;
//     }
// }
//
// const prinse = new Prince('Oleg', 40, 37);
//
// for (const cinderella of array) {
//     if (cinderella.footSize === prinse.shose) {
//         console.log(`Prince, your Cinderella: ${cinderella.name}`);
//         break;
//     }
// }








//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// function Prince(name, age, shoose) {
//     this.name = name;
//     this.age = age;
//     this.shoose = shoose;
//     this.findPrincess = (princesss) => {
//         for (let i = 0; i < princesss.length; i++) {
//             if (princesss[i].size === this.shoose) {
//                 console.log(`${this.name} and ${princesss[i].name} FIND`);
//                 break;
//             }
//
//         }
//     }
//
// }
//
// let Helen = new Cinderella("Helen", 35, 30);
// let Irina = new Cinderella("Irina", 20, 31);
// let Olga = new Cinderella("Olga", 15, 32);
// let Sophia = new Cinderella("Sophia", 22, 34);
// let Ivanka = new Cinderella("Ivanka", 28, 36);
//
// let girls = [Helen, Irina, Olga, Sophia, Ivanka];
//
// // this.findPrincess = (princesss) => {
// //     for (const find of princesss) {
// //         if (find.size === this.shoose) {
// //             console.log('${this.name} and ${find.name} FIND');
// //             break;
// //         }
// //     }
// // }
//
//
// let ivan = new Prince("Ivan", 25, 34);
// ivan.findPrincess(girls);


















// ==============================================