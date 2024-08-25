function Choice1() {
    var rock = document.getElementById('rock_button');
    this.rock = rock;
    let max = 4; 
    let min = 1;
    let computer = Math.floor(Math.random() * (max - min) + min);
    console.log(computer);
    if (computer==1){
        console.log("Tie!");
        var Result = document.getElementById("Result").value="Tie"
        document.getElementById("Result").innerHTML = Result
    }
    else if (computer==2){
        console.log("Computer Won!");
        var Result = document.getElementById("Result").value="Computer Won!" 
        document.getElementById("Result").innerHTML = Result
    }
    else {
        console.log("Player Won!");
        var Result = document.getElementById("Result").value="Player Won!" 
        document.getElementById("Result").innerHTML = Result
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
        console.log("Player Won!");
        var Result = document.getElementById("Result").value="Player Won!" 
        document.getElementById("Result").innerHTML = Result
    }
    else if (computer==2){
        console.log("Tie!");
        var Result = document.getElementById("Result").value="Tie"
        document.getElementById("Result").innerHTML = Result
    }
    else {
        console.log("Computer Won!");
        var Result = document.getElementById("Result").value="Computer Won!" 
        document.getElementById("Result").innerHTML = Result
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
        console.log("Computer Won!");
        var Result = document.getElementById("Result").value="Computer Won!" 
        document.getElementById("Result").innerHTML = Result
    }
    else if (computer==2){
        console.log("Player Won!");
        var Result = document.getElementById("Result").value="Player Won!" 
        document.getElementById("Result").innerHTML = Result
    }
    else {
        console.log("Tie!");
        var Result = document.getElementById("Result").value="Tie"
        document.getElementById("Result").innerHTML = Result
    }
}
