// Використовуючи конструкцію if..else, напишіть код, що реагуе на значення змінної let age;
// Якщо age менще 18 - виведіть у консоль "Access denied!", в іншому випадку — Welcome!”

const age = 20;
const minAge = 18; // за умовою задачі, мінімальний вік для входу 18 років

if(minAge >= 18) {
    console.log('Welcome!');
} else {
    console.log('Access denied!');    
}