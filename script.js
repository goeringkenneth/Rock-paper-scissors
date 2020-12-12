const game=()=>{
    let pScore=0;
    let cScore=0;
    // start game
const startGame=()=>{
    const playBtn=document.querySelector('.intro button');
    const introScreen=document.querySelector('.intro');
    const match=document.querySelector('.match');

    playBtn.addEventListener('click', ()=>{
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });
  };
//   play match
const playMatch=()=>{
    const options=document.querySelectorAll('.options button');
    const playerHand=document.querySelector('.playerHand');
     const compHand=document.querySelector('.compHand');
     const hands=document.querySelectorAll('.hands img');
    
     hands.forEach(hand =>{
     hand.addEventListener('animationend',function(){
        this.style.animation="";

        });
    });
    // comp options
    const compOptions= ['rock','paper','scissors'];
    options.forEach(option=>{
        option.addEventListener('click',function(){
            // comp choice
            const compNumber=Math.floor(Math.random()*3);
            const compChoice=compOptions[compNumber];

setTimeout(()=>{
// compare Hands
compareHands(this.textContent,compChoice);
// update img
playerHand.src=`./${this.textContent}.png`;
compHand.src=`./${compChoice}.png`;
},2000);

playerHand.style.animation='shakePlayer 2s ease';
compHand.style.animation='shakeComp 2s ease';

        });
    });
};

const updateScore=()=>{
    const playerScore=document.querySelector('.player p');
    const compScore=document.querySelector('.computer p');
    playerScore.textContent=pScore;
    compScore.textContent=cScore;

}

const compareHands=(playerChoice, compChoice)=>{
    const winner=document.querySelector('.winner');
    // check for tie
    if(playerChoice===compChoice){
    winner.textContent= "It's a Tie";
    return;
    };
if(playerChoice==='rock'){
    if(compChoice==='scissors'){
        winner.textContent="Player Wins"
        pScore++;
        updateScore();
        return;
    }else{
        winner.textContent="Computer Wins";
        cScore++;
        updateScore();
        return;
    }
  };
//   check for papper
  if(playerChoice==='paper'){
    if(compChoice==='scissors'){
        winner.textContent="Computer Wins"
        cScore++;
        updateScore();
        return;
    }else{
        winner.textContent="Player Wins";
        pScore++;
        updateScore();
        return;
        }
    };
    // check for scissors
    if(playerChoice==='scissors'){
        if(compChoice==='rock'){
            winner.textContent="Compter Wins"
    cor++;
            updateScore();
            return;
        }else{
            winner.textContent="Player Wins";
            pScore++;
            updateScore();
            return;
        }
    } ; 
};

//   call all inner functions
startGame();
playMatch();
// updateScore()
};
game();