let uScore = 0;
let cScore = 0;
const uScore_span = document.getElementById('user-score');
const cScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

main();

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

function game(userChoice){
    const cChoice = getCompChoice();
    switch(userChoice + cChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, cChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, cChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, cChoice);
            break;
    }
}

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function win(user, comp){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    uScore++;
    uScore_span.innerHTML = uScore;
    cScore_span.innerHTML = cScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(comp)}${smallComp}. You win !!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, comp){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    cScore++;
    uScore_span.innerHTML = uScore;
    cScore_span.innerHTML = cScore;
    result_p.innerHTML = `${convertToWord(comp)}${smallComp} beats ${convertToWord(win)}${smallUser}. You lose !!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, comp){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(comp)}${smallComp} equals ${convertToWord(win)}${smallUser}. Its a draw !!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function convertToWord(letter){
    if(letter === 'r'){
        return 'Rock';
    }

    if(letter === 'p'){
        return 'Paper';
    }

    return 'Scissors';
}

