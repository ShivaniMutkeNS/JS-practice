const form = document.querySelector('form')

// const height = parentInt(document.querySelector('#height').value) --> this usecase will give empty value
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height===''|| height<0 ||  isNaN(height)){
       results.innerHTML = `Please give a valid height ${height}`;
    }else if (weight===''|| weight<0 ||  isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        results.innerHTML = `<span>${(weight/((height*height)/10000)).toFixed(2)}</span`
    }

})
