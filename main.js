//Modal
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const btn = document.getElementById('btn')
const body = document.body

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    body.style.backgroundColor = 'black'
}

function closeModal () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    body.style.backgroundColor = '#fff'
}

btn.onclick = openModal;
backdrop.onclick = closeModal;

//Change color
const btn_submit = document.querySelector('.submit')

btn_submit.addEventListener('click', (e) => {
    e.preventDefault()

    const input = document.querySelector('.myInput')

    if(!input.value) {
        return alert(`Please enter color`)
    }
    if(input.value !== 'red' && input.value !== 'blue' && input.value !== 'green' && input.value !== 'black' && input.value !== 'white') {
        return alert(`Please enter valid color`)
    }
    if(input.value == 'red' || input.value == 'blue' || input.value == 'green' || input.value == 'black' || input.value == 'white') {
        return alert(`Background color successfully changed with ${input.value}`),
        body.style.backgroundColor = input.value
        
    }
    
    // ==========================    second way      ==========================
    // const colors = ['red','blue','green','black','white']
    // colors.map((el) => {
    //     if(!input.value){
    //         return alert(`Color is not defined`)
    //     }
    //     if(input.value !== el){
    //         return alert(`${input.value} is not valid color`)
    //     }
    //     if(input.value == el) {
    //         return body.style.backgroundColor = input.value
    //     }
    // })
})


//Calculate average
const btn_calculate = document.querySelector('.calculate')

btn_calculate.addEventListener('click', (e) => {
    e.preventDefault()

    const input = document.querySelector('.numbers_input').value.split(":")
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += parseFloat(input[i]);
    }

    const average = Math.floor(sum / input.length)

    return alert(average ,'this is the average of the numbers')
})