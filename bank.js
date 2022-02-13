// // diposit
// document.getElementById('diposit-btn').addEventListener('click', function(){
// //         get input
//           const userfleid = document.getElementById('diposit-input');
//           const userAmount = userfleid.value
//           console.log(userAmount);
          
//           // get diposit tutal
//           const tutalFleid = document.getElementById('diposit-tutal');
         
    
          
//           // tutal diposit
//           const carretAmount = tutalFleid.innerText
//           const tutalAmont = parseFloat(carretAmount)  + parseFloat(userAmount) ;
//           tutalFleid.innerText = tutalAmont

//           // tutal Balace
//           const tutalBalance = document.getElementById('tutal-balace')
//           const tutalBalanceText = tutalBalance.innerText ;
//           const tutal = parseFloat(tutalBalanceText) + tutalAmont

//           tutalBalance.innerText = tutal

//           userfleid.value = ''
        

// })


// // ----------------------------widthdrow
// document.getElementById('withdraw-btn').addEventListener('click', function(){
//          const withdrawFled = document.getElementById('withdraw-input')
//          const withdrowAmount = withdrawFled.value;
//          console.log(withdrowAmount);

// //          widthAmount
//       const withdrawBalace = document.getElementById('withdraw-tutal')
     

// //       tutal withdraw
//           const carretAmount = withdrawBalace.innerText
//           const tutalBalance = parseFloat(carretAmount) + parseFloat(withdrowAmount)
//           withdrawBalace.innerText = tutalBalance

//           // tutalBalance
//           const tutal = document.getElementById('tutal-balace')
//           const balance = tutal.innerText

//           const newBalance = parseFloat(balance) - tutalBalance;
//           tutal.innerText = newBalance;
   
  
      
   
      
// })

document.getElementById('diposit-btn').addEventListener('click', function(){
          // get the Amount diposit
          const dipositInput = document.getElementById('diposit-input')
          const dipositAmount = dipositInput.value;
          console.log(dipositAmount);

          const dipositTutal = document.getElementById('diposit-tutal')
          

          const privesDipositAmount = dipositTutal.innerText;
          const newDipositTutal = parseFloat(privesDipositAmount)  + parseFloat(dipositAmount) 
         dipositTutal.innerText = newDipositTutal;
           
//          update balance
          const balaceTutal = document.getElementById('tutal-balance')
          const privesTutalBalance = balaceTutal.innerText
          const newBalance = parseFloat(privesTutalBalance) + parseFloat(dipositAmount)
          balaceTutal.innerText = newBalance



          // clrar the diposit value
          dipositInput.value = ''
})

// withdraw------------
document.getElementById('withdraw-btn').addEventListener('click', function(){

          // get input 
          const withdrawInput = document.getElementById('withdraw-input')
          const withdrawAmount = withdrawInput.value
          console.log(withdrawAmount);

          // add tutal ----

          const withdrawTutal = document.getElementById('withdraw-tutal')
          const privesWithdrawAmount = withdrawTutal.innerText;
          const newWithdrawTutal = parseFloat(privesWithdrawAmount) + parseFloat(withdrawAmount)
          withdrawTutal.innerText = newWithdrawTutal;

          // update balance 
          const balaceTutal = document.getElementById('tutal-balance');
          const previsTutalBlance = balaceTutal.innerText
          const updateBlace = parseFloat(previsTutalBlance) - parseFloat (withdrawAmount)
          balaceTutal.innerText =updateBlace;

          // cler input
          withdrawInput
          subtotal.value = '';


})

