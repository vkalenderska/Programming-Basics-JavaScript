function ShopForChild(input){
    let priceForExcursion = Number(input[0]); 
    let discount = 0.00; 
    let numberOfPuzzles = Number(input[1]); 
    let numberOfDolls = Number(input[2]); 
    let numberOfBears = Number(input[3]); 
    let NumberOfMinions = Number(input[4]); 
    let NumberOfKamions =Number(input[5]); 

    let wholeSum = (numberOfPuzzles*2.6) + (numberOfDolls*3 )+ (numberOfBears*4.10) + (NumberOfMinions*8.20 )+ (NumberOfKamions*2);
    let numberOfPlays = numberOfPuzzles+numberOfDolls+numberOfBears+NumberOfMinions+NumberOfKamions; 
    if(numberOfPlays>=50) {
       discount= wholeSum*0.25;
    }
    let theEnd = wholeSum - discount; 
    let naem = 0.1 * theEnd; 
    let pechalba = theEnd - naem; 
    if(pechalba>=priceForExcursion){
        console.log("Yes! " +  (pechalba - priceForExcursion).toFixed(2) +" lv left."); 

    }else{
        console.log("Not enough money! " + (priceForExcursion - pechalba).toFixed(2) + " lv needed." ); 
    }
}
ShopForChild(["320", "8", "2", "5", "5", "1"])