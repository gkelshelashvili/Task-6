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

    const input_value = document.querySelector('.myInput').value

    const colors = ['red','blue','green','black','white']

    if(colors.includes(input_value)){
        return alert(`Background color successfully changed with ${input_value}`),
        body.style.backgroundColor = input_value
    }
    if(!input_value){
        return alert("Enter color")
    }
    if(!colors.includes(input_value)){
        return alert("Color is not available")
    }
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