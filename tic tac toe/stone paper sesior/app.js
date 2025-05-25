let userScore = 0;
let compScore = 0;

const images = document.querySelectorAll(".image");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score");


const gencompchoice = () => {
    const option = ["stone", "paper", "seicssor"];
    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
};

const DrawGame = () => {
    console.log("game was draw.");
    msg.innerText="Game Draw! Try again";
    msg.style.backgroundColor="yellow";
    msg.style.TextColor="black";
}
const showWinner =(userwin,UserChoice, ComCoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
    }
}
const playgame = (UserChoice) => {
    console.log("user choice ", UserChoice);
    const ComCoice = gencompchoice();
    console.log("comp choice =", ComCoice);

    if (UserChoice === ComCoice) {
        DrawGame();
    } else {
        let userwin = true;


        if (UserChoice === "stone") {
            // paper,seicssor
            userwin = ComCoice === "paper" ? false : true;


        }  else if (UserChoice === "paper") {
            // stone , seissior
            userwin = ComCoice === seicssor ? false : true;
            // paper, stone


        } else {
            // paper seissior
            userwin = ComCoice === "rock" ? false : true;
    }
    showWinner(userwin,UserChoice,ComCoice);
    }
};


images.forEach((image) => {
    image.addEventListener("click", () => {
        const UserChoice = image.getAttribute("id");
        playgame(UserChoice);
    });
});