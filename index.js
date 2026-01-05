const buttons = document.querySelectorAll("button");

buttons.forEach(element => {
    element.addEventListener("click", () => {
        user = element.id;
        com =computerPlay();

        const res = playRound(user, com);
        console.log(res);

        const ha = document.querySelector("#result");
        ha.textContent = res;

        random(res);
        

    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    }

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function random(res){
    if(res == "You win!"){
        let haha = document.querySelector("#user-score");
        let num = Number(haha.innerText);
        num++;
        haha.innerText= num;
    }else if(res == "Computer wins!"){
        let haha  = document.querySelector("#computer-score");
        let num = 0;
        num++;
        haha.textContent = num;
    }
}
