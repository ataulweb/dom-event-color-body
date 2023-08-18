// Option-02
function makeRed (){
    document.body.style.backgroundColor = 'red'
}

// Option-03
const makeBlueButton = document.getElementById('blue-btn')
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// Option-03.1(another)
const makePurpleButton = document.getElementById('purple-btn')
makePurpleButton. onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// Option-04
const makePinkButton = document.getElementById('pink-btn')
makePinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// Option-04.1 (another)
const makeOrangeButton = document.getElementById('orange-btn')
makeOrangeButton.addEventListener('click', function makeOrang(){
    document.body.style.backgroundColor = 'orange'
})

// Option-04.2 (Final)
document.getElementById('green-btn').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green'
})
