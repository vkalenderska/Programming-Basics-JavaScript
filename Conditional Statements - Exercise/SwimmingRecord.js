function SwimmingRecord (input){
    let recordInSec = Number(input[0]); 
    let distanceInMetres = Number(input[1]); 
    let timeInSec1M = Number(input[2]); 

    let distanceInSec = distanceInMetres*timeInSec1M;
    let distance = Math.floor(distanceInMetres/15);
    let wholeDistance= distance*12.5; 
    let wholeTime = distanceInSec+wholeDistance;
    
    if(recordInSec>wholeTime){
        console.log(" Yes, he succeeded! The new world record is "+ wholeTime.toFixed(2) +   " seconds." );
    }
    
    else if(recordInSec<=wholeTime){
        console.log("No, he failed! He was " +( wholeTime-recordInSec).toFixed(2) + " seconds slower.");
    }
    
}
SwimmingRecord(["55555.67","3017","5.03"])