


const input =document.querySelector('.add');

input.addEventListener('click', () => {
    const visMelding=firebase.functions().httpsCallable('visMelding');
    visMelding({ melding: input.melding.value}).then(result => {
        console.log(result.data);
      
      });
    }
    )   