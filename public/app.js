
    


const input =document.querySelector('.add');
const knapp =document.querySelector('.knapp');


// henter melding fra input via VisMelding fra functions som sender tibake melding og tid 
knapp.addEventListener('click', (e) => {
    const visMelding=firebase.functions().httpsCallable('visMelding');
    e.preventDefault()
    visMelding({ melding: input.melding.value}).then(result => {
       
        console.log(result.data);
        input.reset()
      
      });
    }
    )   

