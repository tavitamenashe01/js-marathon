const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';


function getRow(firstRow, secondRow) {
  let letterCount = 0;
  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow.charAt(i) == 'а') {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(getRow(firstRow, secondRow));