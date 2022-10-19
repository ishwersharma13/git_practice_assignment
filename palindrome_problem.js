function checkPalindrome(N, str) {
    let sum = ''
         
    for(let i=N-1;i>0;i++){
         sum += str[i]
         
  }
      
      if(sum === str){
          console.log('Yes')
      }else{
          console.log('No')
      }
      
  }
  