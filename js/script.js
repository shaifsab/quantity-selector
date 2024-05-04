let number = document.querySelector('.number')
let remove = document.querySelector('.remove')
let add = document.querySelector('.add')
let value = 0


add.addEventListener('click', () => {
    value++
    number.innerHTML = value
})

remove.addEventListener('click', () => {
    if (value == 1) { 
        alert('১ নিচে রাখা যাবে না!')
    } else {
        value--
        number.innerHTML = value
    }
})