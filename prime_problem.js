function identifyPrime(num) {
    let count = 0
 for(let i=0;i<=num-1;i++){
   if(num%i == 0){
          count++
         
        }
   }if(count<=1){
   console.log('Yes')
   }else
     console.log('No')
    
}