const handOptions = {
    'rock': "/rockPaperScissors/images/rock.png",
    'paper': "/rockPaperScissors/images/paper.png",
    'scissors': "/rockPaperScissors/images/scissors.png"
}
let SCORE = 0

const pickUserHand = (hand) => {
    let hands = document.querySelector('.hands');
    hands.style.display = 'none';
    let contest = document.querySelector('.contest');
    contest.style.display = 'flex';

    document.getElementById('userPickImage').src = handOptions[hand];
    let cpHands = pickComputerHand();
    referee(hand, cpHands)
}

const pickComputerHand = () => {
    let hands = ['rock','paper','scissors']
    let cpHands = hands[Math.floor(Math.random() * 3)]

    document.getElementById('computerPickImage').src = handOptions[cpHands];
    return cpHands
}

const referee = (userHand, cpHands) => {
    if(userHand == 'paper' && cpHands == 'scissors'){
        setDecision('YOU LOSE')
    } else if(userHand == 'paper' && cpHands == 'rock'){
        setDecision('YOU WIN')
        setScore(SCORE + 1);
    }
    if(userHand == 'paper' && cpHands == 'paper'){
        setDecision("it's a tie")
    }
        if(userHand == 'rock' && cpHands == 'scissors'){
        setDecision('YOU WIN')
        setScore(SCORE + 1);
        }
        if(userHand == 'rock' && cpHands == 'paper'){
            setDecision('YOU LOSE')
        }
        if(userHand == 'rock' && cpHands == 'rock'){
            setDecision('it"s a tie')
        }
        if(userHand == 'scissors' && cpHands == 'scissors'){
            setDecision('it"s a tie')
        }
        if(userHand == 'scissors' && cpHands == 'rock'){
            setDecision('YOU LOSE')
        }
        if(userHand == 'scissors' && cpHands == 'paper'){
            setDecision('YOU WIN')
            setScore(SCORE + 1);
        }


}
const restartGame = () => {
    let hands = document.querySelector('.hands');
    hands.style.display = 'flex';
    let contest = document.querySelector('.contest');
    contest.style.display = 'none';

}

const setDecision = (decision) => {
    document.querySelector('.decision h1').innerText = decision;
}

const setScore = (score) =>{
    SCORE = score;
    document.querySelector('.score h1').innerText = score;
}
