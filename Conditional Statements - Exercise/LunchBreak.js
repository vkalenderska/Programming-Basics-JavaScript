function LunchBreak (input){
    let nameOfSerial = input[0];
    let continuosOfEpisode = Number(input[1]); 
    let continuosOfBreak = Number(input[2]); 

    let timeForLuch = continuosOfBreak*0.125;
    let timeForO = continuosOfBreak*0.25; 
    let freeTime = continuosOfBreak - timeForLuch - timeForO; 

    if(freeTime>=continuosOfEpisode){
        console.log("You have enough time to watch " +  nameOfSerial + " and left with " +  Math.ceil(freeTime - continuosOfEpisode) + " minutes free time."); 
    }
    else if(freeTime<continuosOfBreak){
        console.log("You don't have enough time to watch " +  nameOfSerial  +  ", you need "+  Math.ceil(continuosOfEpisode - freeTime)   +" more minutes." )
    }
}
LunchBreak(["Teen Wolf","48","60"]) 