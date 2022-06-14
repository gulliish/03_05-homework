// Создайте ассоциативный массив (объект) заработных плат obj. Напишите зарплату для Коли, Пети, Васи, Анны и Виктории. Выведите на экран зарплаты Пети и Коли.

// Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.


//1
const obj = [
    {
        name:'Коля',
        sallary: 160,
    },
    {
        name:'Петя',
        sallary:350,
    },
    {
        name:'Вася',
        sallary:180,
    },
    {
        name:'Анна',
        sallary:470,
    },
    {
        name:'Виктория',
        sallary:100,
    },
    
];
obj.forEach(function(person){
    if (person.name == 'Коля' || person.name == 'Петя'){
        console.log(person)
    }}
)

// Используя предыдущий объект Запишите  в него нового сотрудника и удалите Васю.
//2
obj[2] = {
    name: 'kate',
    sallary:100,
};
console.log(obj);

// Создайте объект кошки с рядом свойств. например именем, цвет глаз, цвет шерсти, вес и так далее. напишите метод который проверяет, если кошка голодна, то выведет текст "Кыс Кыс {Имя кошки}. Идем кушать" и после этого меняет значение свойства голода. 
//3
const cat ={
    name: 'murr',
    eyeColor: 'blue',
    color: 'white',
    weight: 8,
    appearens: 'hungry'
}
obj.filter(function(selection){
    if (selection.appearens == 'hungry'){
        console.log("Кыс Кыс "+ cat.name +". Идем кушать")
        cat.appearens = 'satisfying';
    }}
)