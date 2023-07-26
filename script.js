function showResult(tempscore, playerChoice, computerChoice) {
    if (num < 0) {
        alert('Enter the value first and click on start button');
    }
    else if (num <= 0) {
        let winner = 'user';
        let r = robo_score.innerHTML
        let u = user_score.innerHTML
        if (r > u) winner = 'Robo'
        else if (r < u) winner = 'User'
        else {
            winner = 'NO-ONE'
        }
        alert(`${winner} won the game`);
        robo_score.innerHTML = '0'
        user_score.innerHTML = '0'
        inpu.value = ""
        let dr = document.querySelector('.draw');
        let sc = dr.innerHTML
        dr.innerHTML = '0';
    }

    else if (tempscore == 0) {
        let body = document.querySelector('body');
        body.classList.add('transition-colors')
        body.classList.add('bg-red-200')
        setTimeout(() => {
            body.classList.remove('bg-red-200')
        }, 100);
    }
    else if (tempscore == 1) {
        let sc = user_score.innerHTML
        let t = parseInt(`${sc}`) + 1;
        user_score.innerHTML = t;
    }
    else {
        let sc = robo_score.innerHTML
        let t = parseInt(`${sc}`) + 1;
        robo_score.innerHTML = t;
    }

}
function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissor']
    let choice = Math.floor(Math.random() * 3);
    return arr[choice]
}
function getResult(playerChoice, computerChoice) {
    let tempscore = -1
    if (playerChoice == computerChoice) {
        let dr = document.querySelector('.draw');
        let sc = dr.innerHTML
        let t = parseInt(`${sc}`) + 1;
        dr.innerHTML = t;
        tempscore = 0;
    }
    if (playerChoice == 'Rock' && computerChoice == 'Scissor') tempscore = 1
    if (playerChoice == 'Paper' && computerChoice == 'Rock') tempscore = 1
    if (playerChoice == 'Scissor' && computerChoice == 'Paper') tempscore = 1
    return tempscore
}
function onClickRPS(playerChoice) {
    num--;
    if (num >= 0) {
        let rem = document.querySelector('.remaining');
        rem.innerHTML = num
    }

    let computerchoice = getComputerChoice()
    let result = getResult(playerChoice, computerchoice)
    showResult(result, playerChoice, computerchoice);
}
function playGame() {
    if (one == '0') {
        let user = document.querySelectorAll('.userchoice')
        user.forEach(choice => {
            choice.addEventListener('click', (e) => {
                onClickRPS(choice.value)
            })
        })
        one = '1'
    }
}
let robo_score = document.querySelector('.robo-score');
let user_score = document.querySelector('.user-score');
let inpu = document.querySelector('.inputnum')
let start = document.querySelector('.start-button')
let num;
let one = '0';
start.addEventListener('click', () => {
    let rem = document.querySelector('.remaining');
    rem.innerHTML = inpu.value
    if (!isNaN(inpu.value)) {// valid number
        num = parseInt(inpu.value);
        let dr = document.querySelector('.draw');
        let sc = dr.innerHTML
        dr.innerHTML = '0';
        playGame();
    } 
    else { alert("Enter the valid number"); inpu.value = "" }//  not a number 
}) 