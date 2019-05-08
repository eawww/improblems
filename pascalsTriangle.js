var argv = require("minimist")(process.argv.slice(2));

const depth = argv._[0] - 1;

/*
0   1
1   1 1
2   1 2 1
3   1 3 3 1
4   1 4 6 4 1
5   1 5 10 10 5 1
*/

let theArray = [];

// For each level of depth
for (let i = 0; i <= depth; i++) {
  let theRow = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      theRow.push(1);
    } else {
      // 1  1 1  1 X 1
      // 0  1 2    i = 2, j = 1
      theRow.push(
        theArray[theArray.length - i + j - 1] +
          theArray[theArray.length - i + j]
      );
    }
  }
  console.log(theRow);
  theArray = [...theArray, ...theRow];
}

// 1   1 1   1 2 1   1 3 3 1
// 0   1 2   3 4 5

console.log(theArray);
