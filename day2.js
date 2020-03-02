const input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,2,13,23,27,2,27,13,31,2,31,10,35,1,6,35,39,1,5,39,43,1,10,43,47,1,5,47,51,1,13,51,55,2,55,9,59,1,6,59,63,1,13,63,67,1,6,67,71,1,71,10,75,2,13,75,79,1,5,79,83,2,83,6,87,1,6,87,91,1,91,13,95,1,95,13,99,2,99,13,103,1,103,5,107,2,107,10,111,1,5,111,115,1,2,115,119,1,119,6,0,99,2,0,14,0];

function findCombo(input) {
  for (let i = 0; i < 99; i++) {
    for (let j = 0; j < 99; j++) {
      input[1] = i;
      input[2] = j;
      if (19690720 === computer(input)[0]) {
        return 100 * i + j;
      }
    }
  }
}

function computer(input) {
  let result = [...input];

  for (let i = 0; i < result.length - 1; i += 4) {
    const opcode = result[i];
    const noun = result[result[i + 1]];
    const verb = result[result[i + 2]];
    const storePos = result[i + 3];

    if (opcode === 1) {
      result[storePos] = noun + verb;
    } else if (opcode === 2) {
      result[storePos] = noun * verb;
    } else if (opcode === 99) {
      break;
    }
  }
  return result;
}

console.log(findCombo(input));
