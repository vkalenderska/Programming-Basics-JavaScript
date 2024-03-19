function BonusScore (input){
    let score = Number(input[0]); 
    let bonusPoint =0.0; 
    
    
    if(score<=100){
        bonusPoint=5 ;
        
        
    }else if(score>100){
       
        bonusPoint =score*0.2; 

    }else if (score>1000){
        bonusPoint =  score*0.1;
    }   
        if(score%2==0){
        bonusPoint+=1; 
    }else if(score%10==5){
        bonusPoint+=2;
    }
    console.log(bonusPoint);
    console.log(score+bonusPoint); 

}
