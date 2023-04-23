const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];

const names = [
    'Petr',
    'Jana',
    'Pavel',
    'Zuzana',
    'Eva',
    'Adam',
    'Onyx',
    'Alex',
];

const persons = [{
    name: 'Petr',
    age: 16,
    gender: 'male'
}, {
    name: 'Jana',
    age: 8,
    gender: 'female'
}, {
    name: 'Pavel',
    age: 34,
    gender: 'male'
}, {
    name: 'Zuzana',
    age: 41,
    gender: 'female'
}, {
    name: 'Eva',
    age: 22,
    gender: 'female'
}, {
    name: 'Adam',
    age: 22,
    gender: 'male'
}, {
    name: 'Onyx',
    age: 37,
    gender: 'intersex'
}, {
    name: 'Alex',
    age: 29,
    gender: 'androgyne'
},];

// Pomocí metody `forEach` napište cyklus, který vypíše do konzole poslední písmeno z každého jména v poli `names`.
names.forEach(oneNames => {
    console.log(`jméno: ${oneNames}, poslední písmeno: ${oneNames.slice(oneNames.length-1, oneNames.lenght)}`);
});

// Pomocí metody `filter` získejte z pole `names` pouze ta jména, která jsou delší než 4 znaky.

const result2 = names.filter(oneNames => oneNames.length > 4);
console.log(result2);

// Pomocí metody `filter` získejte z pole `persons` pouze dospělé muže.
const result3 = persons.filter(onePersons => onePersons.age > 18 && onePersons.gender === 'male');
console.log(result3);

// Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že každá zletilá osoba je vždy buď muž nebo žena (tedy že vlastnost `gender` má hodnotu `male` nebo hodnotu `female`).
const result4 = persons.every(onePersons => onePersons.age > 18 && (onePersons.gender === 'male' || onePersons === 'female'));
console.log(result4);

// Pomocí metody `forEach` napište cyklus, který spočítá průměr čísel v poli `numbers`.
let soucet = 0;
numbers.forEach((oneNumbers) => soucet += oneNumbers);
console.log('Průměr čísel: ' + soucet / numbers.length);