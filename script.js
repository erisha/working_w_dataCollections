const Csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let firstColumn = Csv.indexOf('\n')
let firstRow = Csv.substring(0, firstColumn)
let column = firstRow.split(',').length;
console.log(column);

let  currentCell = "";
let currentRow = [];
let columnNum = 0;
let allData = [];

for(let i = 0; i < Csv.length; i++){
    let char = Csv[i];
    let comma = char == ',';
    let newLine = char === '\n';

    if (comma || newLine){
        currentRow.push(currentCell);
        currentCell = "";
        columnNum++;

    if (columnNum === column || newLine ){
        allData.push(currentRow);
        currentRow = [];// starts for loop over
        columnNum = 0;
    }

    if(newLine && i === firstColumn){
        firstColumn = -1; 
    }

    } else{
        currentCell += char
    }
}
if (currentRow.length > 0 || currentCell){
    if (currentCell){
        currentRow.push(currentCell)
    }
    allData.push(currentRow)
}
console.log(allData);


console.log('part 3')

//data in arrays
let csvObj = [
    // ["ID", "Name", "Occupation", "Age"],
    // ["42", "Bruce", "Knight", "41"],
    // ["57", "Bob", "Fry Cook", "19"],
    // ["63", "Blaine", "Quiz Master", "58"],
    // ["98", "Bill", "Doctor’s Assistant", "26"],
  ]


csvObj.length = csvArray.length -1

for (let i = 0; i < csvObj.length; i++) {  
    csvObj[i]= {};
}

for (let i = 0; i < csvObj.length; i++){
    for (let x = 0; x < csvArray; x++){
        let data = csvArray[0][x];
        csvObj[i][data] = csvArray[i + 1][x];
    
    }
}
console.log(csvObj);