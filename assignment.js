
//........feetToMile........

function feetToMile (number){
    var feet = number/5280;
    return feet;
}
// output and resutl.......
var result = feetToMile(10245);
result = result.toFixed(7);
console.log(result);

// ......end........



//.............woodCalculator...........

function woodCalculator(chare, table,khat){
    chareCount = chare * 1;
    tableCount = table * 2;
    khatCount = khat * 5;
    totalKat = chareCount + tableCount + khatCount;
   return totalKat;
}
// output and resutl........
var result = woodCalculator(15, 4, 10);
console.log(result);

// .........end..........



// ..........brickCalculator...........

function brickCalculator(number){
    if(number >= 1 && number <= 10){

        var result = ( number * ( 1000 * 15) );
    }
    else if(number >= 11 && number <= 20 ){
        var result = ( 150000 + (number * ( 1000 *12) ) );
               
    }
    else{
        var result = ( 150000 + ( 120000 + ( number * ( 1000 * 10) ) ) );

    }
    return result ;
}
// output and resutl.....
var floor =  brickCalculator(16);
console.log(floor);

// .........end..........



// .........tinyFrined..........

function tinyFrined(name){
    var smallName = name[0].length;
    for(var i = 0; i< name.length; i++){
        var currentName = name[i];
        if(currentName.length > smallName.length){
             currentName = smallName;
        }
    }
    return currentName;
}
// output...........
var result = tinyFrined(['rashidul', 'rakibul', 'rased', 'rubel']);
console.log(result);

// ...........end.........
