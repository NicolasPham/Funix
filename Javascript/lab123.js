//calcAverageHumanAge function: convert dog age to human age
const calcAverageHumanAge = (arr) => {
  const humanAge = arr
    .map((dog) => {
      if (dog <= 2) return dog * 2;
      else return 16 + dog * 4;
    })
    .filter((dog) => dog >= 18);

  const totalAge = humanAge.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

  let averageAge = totalAge / humanAge.length;
  return averageAge;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
