


const input =document.querySelector('.add');
const output=document.querySelector('.output');
const knapp =document.querySelector('.knapp');

knapp.addEventListener('click', (e) => {
    const visMelding=firebase.functions().httpsCallable('visMelding');
    e.preventDefault()
    visMelding({ melding: input.melding.value}).then(result => {
       
        console.log(result.data);
        input.reset()
      
      });
    }
    )   