document.getElementById('input-btn').addEventListener('click', function(){
          const emailFeild = document.getElementById('user-email');
         const userEmail = emailFeild.value;
//          console.log(userEmail);

//          get user password
        const passwordFeild = document.getElementById('user-pass');
        const userPassword = passwordFeild.value;
//         console.log(userPassword);

//         condiation
          if(userEmail == "juboraj22@gmail.com" && userPassword == "mamun"){
                    window.location.href = 'bank.html'
                    console.log('valid User');
                   
          }
        

})

