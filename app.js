function hasTargetSum2(anArray,theTarget){
    for (let a=0;a<anArray.length;a++){
        myComplement=theTarget-anArray[a]
        for (let b=a+1;b<anArray.length;b++){
            if (anArray[b]==myComplement){
                return True  
            } 
            return False           
        }
    }
}