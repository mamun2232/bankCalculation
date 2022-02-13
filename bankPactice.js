function getInputValue(inputId){
      const dipositInput = document.getElementById(inputId)
      const dipositAmount = dipositInput.value
      dipositInput.value = ''
      return dipositAmount
}

function updateTotalFlied(dipositAmount, input){
      
      const dipositTutal = document.getElementById(input)
      const previsTutalBlance = dipositTutal.innerText;

      const newDipositTutal = parseFloat(previsTutalBlance) + parseFloat(dipositAmount)
      dipositTutal.innerText = newDipositTutal
      return newDipositTutal
      

}


const inputButton = document.getElementById('diposit-btn').addEventListener('click', function(){
      //     const dipositInput = document.getElementById('diposit-input')
      //     const dipositAmount = dipositInput.value
      const dipositAmount = getInputValue('diposit-input')
         if(dipositAmount < 0 || dipositAmount == ""  ){
                   const arrow = document.getElementById('arrow')
                arrow.innerText = 'Please Enter Amount'
                   

          dipositInput.value = ''
                   return

         }
      //     console.log(dipositAmount);
/* 
          const dipositTutal = document.getElementById('diposit-tutal')
          const previsTutalBlance = dipositTutal.innerText;

          const newDipositTutal = parseFloat(previsTutalBlance) + parseFloat(dipositAmount)
          dipositTutal.innerText = newDipositTutal */
          const dipositTutal = updateTotalFlied(dipositAmount, 'diposit-tutal' )
      //     dipositTutal.innerText = newDipositTutal


          const updateBalance = document.getElementById('tutal-balance')
          const priversUpdateBalnce = updateBalance.innerText
          const newUpdateBalance = parseFloat(priversUpdateBalnce) + parseFloat(dipositAmount)
          updateBalance.innerText = newUpdateBalance

          dipositAmount.value = ''
})

// withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function(){
      //     const withdrawInput = document.getElementById('withdraw-input')
      //     const withdrawAmount = withdrawInput.value
            const withdrawAmount = getInputValue('withdraw-input') 

          if(withdrawAmount < 0 || withdrawAmount == ""  ){
                    const arrows = document.getElementById('arrows')
                 arrows.innerText = 'Please Enter Amount'
                    
 
           withdrawInput.value = ''
                    return
 
          }
          /* console.log(withdrawAmount);

          const withdrawTutal = document.getElementById('withdraw-tutal')
          const privesWithdrawAmount = withdrawTutal.innerHTML;
           
          const withdrawTutalAmount = parseFloat(privesWithdrawAmount) + parseFloat(withdrawAmount)
          withdrawTutal.innerText = withdrawTutalAmount */
          const withdrawTutal = updateTotalFlied(withdrawAmount, 'withdraw-tutal')

          const tutalUpdate = document.getElementById('tutal-balance')
          const privesTutalUpdate = tutalUpdate.innerText;
          const newUpdateBalance = parseFloat(privesTutalUpdate) - parseFloat(withdrawAmount)
          tutalUpdate.innerHTML = newUpdateBalance


      //     withdrawInput.value = '';
})