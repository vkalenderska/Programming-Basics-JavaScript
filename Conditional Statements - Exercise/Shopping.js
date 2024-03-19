function Shopping (input){
    
    let budjet= Number(input[0]); 
    let videocards = Number(input[1]); 
    let processors = Number(input[2]); 
    let ram = Number(input[3]); 

    let sumForViodeoCrard = videocards*250; //500
    let priceForProcessor = 0.35*sumForViodeoCrard; //175
    let priceFor1Processor = processors*priceForProcessor; //175
    let priceForRam = 0.1*sumForViodeoCrard; //50
    let sumForRam = ram*priceForRam; //150
    
    let wholeSum = sumForViodeoCrard + priceFor1Processor+sumForRam;  //825

    if(videocards>processors){
        wholeSum =  wholeSum - (wholeSum*0.15); //825-(825*0.15)=825-123.75=701.25
    }
    if(wholeSum<=budjet){
        console.log("You have " + (budjet - wholeSum).toFixed(2) + " leva left!");

    }else if(wholeSum>budjet){
        console.log("Not enough money! You need "+ (wholeSum-budjet).toFixed(2) + " leva more!" );
    }

}
Shopping(["900","2", "1", "3"]) 