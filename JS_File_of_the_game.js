function Choice1() {
    var rock = document.getElementById('rock_button');
    this.rock = rock;
    let max = 4; 
    let min = 1;
    let computer = Math.floor(Math.random() * (max - min) + min);
    console.log(computer);
    if (computer==1){
        console.log("Tie!")
    }
    else if (computer==2){
        console.log("Computer Won!")
    }
    else {
        console.log("Player Won!")
    }
}

function Choice2() {
    var paper = document.getElementById('paper_button');
    this.paper = paper;
    let max = 4; 
    let min = 1;
    let computer = Math.floor(Math.random() * (max - min) + min);
    console.log(computer);
    if (computer==1){
        console.log("Player Won!")
    }
    else if (computer==2){
        console.log("Tie!")
    }
    else {
        console.log("Computer Won!")
    }
}

function Choice3() {
    var scissors = document.getElementById('scissors_button');
    this.scissors = scissors;
    let max = 4; 
    let min = 1;
    let computer = Math.floor(Math.random() * (max - min) + min);
    console.log(computer);
    if (computer==1){
        console.log("Computer Won!")
    }
    else if (computer==2){
        console.log("Player Won!")
    }
    else {
        console.log("Tie!")
    }
}



