

window.onload = function(){

    let link1 = document.getElementById('link1')
    let link2 = document.getElementById('link2')
    let showRoom = document.getElementById('showRoom');
    let showSuite = document.getElementById('showSuite');

   
    link1.addEventListener("click", function() {
        showRoom.style.display = "block";   
        showSuite.style.display = "none";
        link1.classList.add("en-cours")
        link2.classList.remove("en-cours")
    })
  
 
    link2.addEventListener("click", function () {
        showRoom.style.display = "none";   
        showSuite.style.display = "block";
        link2.classList.add("en-cours")
        link1.classList.remove("en-cours")
    })
    
    
 //------------------FORMULAIRE----------------------

  

 let controleEmail = false;
 let controleTel = false;

    let patternEmail = /^([a-z0-9\_\-\.]+)@((?:[a-z0-9\_\-\.]+\.)+)([a-z]{2,6})$/;

    document.getElementsByClassName('email').addEventListener('input',function(){
        let messageEmail = document.querySelectorAll('email+span');
         controleEmail = this.value.match(patternEmail);
         if(controleEmail){
            
             messageEmail.innerHTML = 'Format email valide';
         }
         else{
           
             messageEmail.innerHTML = 'Format email incorrect';
         };
     
         verifControles();
        });


        let patternTel = /^[0-9]{2}\.[0-9]{2}\.[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/;
     
        document.getElementsByClassName('tel').addEventListener('input',function(){
         
            let messageTel = document.querySelectorAll('tel+span');
            controleTel = this.value.match(patternTel);
            if( controleTel){
             
                messageTel.innerHTML = 'Numéro OK';
            }
            else{
              
                messageTel.innerHTML = 'Format de téléphone incorrect';
            }
            verifControles();
       });    
  
        function verifControles(){
    
            let bouton = document.querySelector('form input[type="submit"]');
            if(controleEmail && controleTel ){
                bouton.disabled = false;
            }
            else{
                bouton.disabled = true;
            }
        }

}; //------Fin
