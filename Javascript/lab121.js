const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

//checkDogs function: join 2 arrays and return console.log
function checkDogs(array1, array2) {
  const newArray1 = array1.slice(1, -1);
  const joinArray = newArray1.concat(array2);
  joinArray.map((dog, i) => {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy`);
  });

  return joinArray;
}

checkDogs(julia, kate);
checkDogs(julia2, kate2);
