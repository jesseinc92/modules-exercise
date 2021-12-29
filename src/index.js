import { choice, remove } from './helpers';
import fruits from './foods';


const fruitChoice = choice(fruits);

console.log(`I'd like one ${fruitChoice}, please.`);
console.log(`Here you go: ${fruitChoice}.`);
console.log(`Delicious! May I have another?`);

const remainingItems = remove(fruits, fruitChoice);

console.log(`I'm sorry, we're all out. We have ${remainingItems.length} left.`)