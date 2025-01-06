const arr = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

for (const a1 of arr) {
  console.log('a1 = ' + a1);
  for (const a2 of arr2) {
    console.log('a2 = ' + a2);
    if (a2 === 'b' && a1 === 3) {
      break;
    }
  }
}
