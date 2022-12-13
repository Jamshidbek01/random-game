let btn = document.querySelector('button')
let body = document.querySelector('body')
let random = Math.trunc(Math.random() * 50) + 1;
btn.addEventListener('click', function () {
    let text = document.querySelector('.text')
    let input = document.querySelector('input').value;
    if (input == random) {
        text.innerHTML = 'To`g`ri'
        body.style.backgroundColor = 'rgb(153, 255, 0)'
    } else if (input < random) {
        text.innerHTML = 'Kattaroq son kiriting'
        body.style.backgroundColor = 'red'
    } else if (input > 50) {
        text.innerHTML = 'Iltimos 50gacha bo`lgan son kiriting'
        body.style.backgroundColor = 'orange'
    } else if (input > random) {
        text.innerHTML = 'Kichikroq son kiriting'
        body.style.backgroundColor = 'red'
    }
})
console.log(random);