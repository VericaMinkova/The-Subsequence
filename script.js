class TheSubsequences {
  count(a, b, c) {
    let counter = 0;
    const numBetween = [];
    const arrC = c.toString().split("").map(Number);

    for (let x = a; x <= b; x++) {
      const arrX = x.toString().split("").map(Number);

      let i = 0;
      arrX.forEach((num) => {
        if (num === arrC[i]) {
          i++;
          if (i === arrC.length) {
            counter++;
            numBetween.push(x);
          }
        }
      });
    }
    console.log(
      ` ${
        counter === 0
          ? `The result is ${counter} and there are no numbers in between`
          : `The result is ${counter} and the numbers between A and B are: ${numBetween}`
      }.`
    );
    return counter, numBetween;
  }
}

const TheSubsequence = new TheSubsequences();

// The example from the assignment:
TheSubsequence.count(100, 650, 65);

//Case 1:
TheSubsequence.count(26, 69, 3);
//Case 2:
TheSubsequence.count(11, 100, 4);
//Test Case 3:
TheSubsequence.count(77, 78, 4);
//Case 4:
TheSubsequence.count(13834, 26066, 1380);
//Case 5:
TheSubsequence.count(1, 1000000, 1);
//Case 6:
TheSubsequence.count(25272, 31576, 757);
//Case 7:
TheSubsequence.count(23051, 27967, 62);
//Case 8:
TheSubsequence.count(6122, 30043, 8);
//Case 9:
TheSubsequence.count(10, 999999, 46);
//Case 10:
TheSubsequence.count(9, 6405, 95);
