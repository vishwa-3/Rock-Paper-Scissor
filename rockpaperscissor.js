const you = document.getElementById('you')
const bot = document.getElementById('bot')

const point1 = document.getElementById('point1')
const point2 = document.getElementById('point2')

const you_selected = document.getElementById('you-selected')
const bot_selected = document.getElementById('bot-selected')
const win_statement = document.getElementById('win-statement')

const selection=['Rock','Paper','Scissor']

let p1=0,p2=0;

function player(input){
    you_selected.textContent = input;
    bot_input = selection[Math.floor(Math.random()*3)];
    bot_selected.textContent = bot_input;

    if(input == bot_input){
        win_statement.textContent = "TIE!!";
    }
    else if((input=='Rock' && bot_input=='Scissor') || (input=='Paper' && bot_input=='Rock') || (input=='Scissor' && bot_input=='Paper')){
        win_statement.textContent = 'YOU WIN!';
        p1++;
        point1.textContent = p1;
    }
    else{
        win_statement.textContent = 'BOT WIN!';
        p2++;
        point2.textContent = p2;
    }

    win_statement.classList.add('win');
    setTimeout(() => {
        win_statement.classList.remove('win');
    }, 100);
}