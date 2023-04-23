# Funkcionální zpracování dat - Lekce 2

Domácí úkol pro kurz JavaScript 2 od Czechitas.

## 1. Zpracování dat

V tomto cvičení budeme opět pracovat s poli z našich jednohubek.

```javascript
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
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];
```

- Pomocí metody `forEach` napište cyklus, který vypíše do konzole poslední písmeno z každého jména v poli `names`.
- Pomocí metody `filter` získejte z pole `names` pouze ta jména, která jsou delší než 4 znaky.
- Pomocí metody `filter` získejte z pole `persons` pouze dospělé muže.
- Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že každá zletilá osoba je vždy buď muž nebo žena (tedy že vlastnost `gender` má hodnotu `male` nebo hodnotu `female`).
- Pomocí metody `forEach` napište cyklus, který spočítá průměr čísel v poli `numbers`.