userScore = 0;
compScore = 0;

choices = document.querySelectorAll(".choice");

msg = document.querySelector("#msg");

userScorepara = document.querySelector("#user-score");
compScorepara = document.querySelector("#comp-score");

genCompChoice = () => {
    const options = ["Rock","Paper","Scissors"];
    let l = Math.floor(Math.random()*3);
    return options[l];
}

showWinner = (Userwin,userChoice,compChoice) => {
    if(Userwin)
    {   userScore = userScore + 1;
        userScorepara.innerText = userScore;
        msg.innerText = "You Win "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore = compScore + 1;
        compScorepara.innerText = compScore;
        msg.innerText = "You Lose "+compChoice+" beats "+userChoice;
        msg.style.backgroundColor = "red";
    }
}

playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();
    if (userChoice==compChoice)
    {
        console.log("Draw Game");
        msg.innerText = "Draw Game, Both Chose "+userChoice;
        msg.style.backgroundColor = "rgb(0, 255, 255)";
    }
    else{
        let Userwin = true;
        if(userChoice==="Rock")
        {
            Userwin = compChoice ==="Paper" ? false : true;
        }
        else if(userChoice === "Paper") {
            Userwin = compChoice ==="Scissors" ? false : true;
        }
        else
        {
            Userwin = compChoice ==="Rock" ? false : true;
        }
        showWinner(Userwin,userChoice,compChoice);
    }

}
choices.forEach((choice)=> {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});