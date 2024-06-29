let uscore = 0;
let pscore = 0;
let msg = document.querySelector("#ans");
const userscore =document.querySelector("#uscore")
const compscore =document.querySelector("#pscore")

const hands = document.querySelectorAll(".choice");
hands.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const pcchoice = () => {
    let options = ["rock", "paper", "scissor"];
    const rndmindx = Math.floor(Math.random() * 3);
    return options[rndmindx];
}

const showinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        uscore++;
        userscore.innerHTML = uscore;
        console.log("You Win..");
        msg.innerText = `You win.. Your ${userchoice} beats PC's ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        pscore++;
        compscore.innerHTML = pscore;
        console.log("You loose..");
        msg.innerText = `You lose.. PC's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user-choice: ", userchoice);
    const compchoice = pcchoice();
    console.log("computer-choice: ", compchoice);

    if (userchoice === compchoice) {
        console.log("Draw game");
        msg.innerText = "Draw Game..";
        msg.style.backgroundColor = "grey";
    } else {
        let userwin = false;
        if (userchoice === "rock") {
            userwin = compchoice === "scissor";
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock";
        } else if (userchoice === "scissor") {
            userwin = compchoice === "paper";
        }
        showinner(userwin, userchoice, compchoice);
    }
}
