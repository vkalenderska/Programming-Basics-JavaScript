function GodzillaVsKingKong(input){
    let discount = 0.00; 
    let budjetForFilm = Number(input[0]); 
    let NumberOfStatist = Number(input[1]); 
    let priceForClothesTo1Statist = Number(input[2]); 

    let sumForDecor = 0.1*budjetForFilm; 
    let sumForClothes = NumberOfStatist*priceForClothesTo1Statist; 
    if(NumberOfStatist>=150){
         discount= sumForClothes*0.1; 
        sumForClothes = Math.abs( sumForClothes - discount); 
    
    }

    let wholePriceForFilm = sumForDecor + sumForClothes; 
    let nedostig = budjetForFilm - wholePriceForFilm; 

    if(wholePriceForFilm>budjetForFilm){
        console.log("Not enough money!"); 
        console.log(`Wingard needs ${Math.abs(nedostig).toFixed(2)} leva more.`);
    } else if(wholePriceForFilm<=budjetForFilm){
        console.log("Action!"); 
        console.log("Wingard starts filming with " + (budjetForFilm- wholePriceForFilm).toFixed(2) + " leva left."); 
    }

}
GodzillaVsKingKong(["9587.88","222", "55.68"])