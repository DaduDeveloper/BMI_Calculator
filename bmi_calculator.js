const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
   

    const weight = parseInt(document.querySelector('#weight').value)
 

    const results = document.querySelector('#results')

    const body = document.querySelector('body')
    

    if (height ==='' || height<0 || isNaN(height)) {
        results.innerHTML=`please give a valid height ${height}`
       
    } else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML= `please give a valid weight ${weight}`
        console.log(weight);
    }else{
          const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi <= 18.6) {
            results.innerHTML=`<span>${bmi} Under Weight</span>`
            body.style.backgroundColor="green"
            
        }else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML=`<span>${bmi} Normal Range</span>`
            body.style.backgroundColor="blue"
        }
        else{
            results.innerHTML=`<span>${bmi} Over Weight</span>`
            body.style.backgroundColor="red"
        }

       
    }
})