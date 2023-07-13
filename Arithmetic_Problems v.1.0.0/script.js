// NOQ
const NOQ = document.querySelector("#NOQ");
const NOQs = [10,20,30,40,50,100];

for (let i of NOQs){
    let option = NOQ.appendChild(document.createElement("option"));
    option.value = String(i);
    option.textContent = String(i);
    if (i === 20){option.selected = true}
}

// Difficulty
const difficulty = document.querySelector("#difficulty");
const difficulties = ["Beginner", "Easy", "Intermediate", "Hard", "Hell", "Asian"];

for (let i of difficulties){
    let option = difficulty.appendChild(document.createElement("option"));
    option.value = i;
    option.textContent = i;
    if (i === "Easy"){
        option.selected = true
    }
    if (i === "Asian"){
        option.hidden = true
    }
}


// calculationType
const calculationType = document.querySelector("#calculationType");
const calculationTypes = ["Addition", "Substraction", "Multiplication", "Division", "Fraction"];

for (let i of calculationTypes){
    let div = calculationType.appendChild(document.createElement("div"));
    div.textContent = i;
    div.className = "customizeTitle"
    let input = div.appendChild(document.createElement("input"));
    input.className = "checkbox";
    input.type = "checkbox";
    // default setting for calculationTypes
    if (i === "Addition" || i === "Substraction" || i === "Multiplication" || i === "Division"){
    //if (i === "Fraction"){
        input.checked = "checked"
    }
    input.name = i;
    input.id = i;
}



let typeCheck = [];
for (let i of Array(calculationTypes.length).keys()){
    typeCheck.push(true);

}

// default setting for See answer right after typed
document.getElementById("right_after").checked = true

const submit = document.getElementById("submit");
submit.addEventListener("click", generate);



function generate(){
    for (let i of Array(calculationTypes.length).keys()){
        if (document.getElementById(calculationTypes[i]).checked){
            typeCheck[i] = true;
            //console.log(typeCheck)
        }
        else{
            typeCheck[i] = false;
            //console.log(typeCheck)
        }
    }
    NOQcheck = getOption("NOQ");
    let difficultycheck = getOption("difficulty");

    let n = Number(NOQcheck);
    
    let Qtype = [];
    for (let i of Array(typeCheck.length).keys()){
        if (typeCheck[i]){
            Qtype.push(i);
        }
    }

    let Q = [];
    for (let i of Array(n).keys()){
        let random = Math.floor((Math.random() * Qtype.length));
        Q.push(Qtype[random]);
    }

    class exercise{
        constructor(question, answer){
            this.question = question;
            this.answer = answer;
        }
    }

    Qlist = [];
    for (let i of Array(n).keys()){
        if (Q[i] === 0){
            let aUpperBound;
            let bUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 20;
                bUpperBound = 20;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 50;
                bUpperBound = 50;
            }
            else if (difficultycheck === difficulties[3]){
                aUpperBound = 100;
                bUpperBound = 100;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 1000;
                bUpperBound = 1000;
            }
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 10000;
                bUpperBound = 10000;
            }
            let a = Math.floor((Math.random() * aUpperBound));
            let b = Math.floor((Math.random() * bUpperBound));
            Qlist.push(new exercise(`\\(${a} + ${b} = \\)`, Number(a + b)));
        }
        else if (Q[i] === 1){
            let aUpperBound;
            let bUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 20;
                bUpperBound = 20;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 50;
                bUpperBound = 50;
            }
            else if (difficultycheck === difficulties[3]){
                aUpperBound = 100;
                bUpperBound = 100;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 1000;
                bUpperBound = 1000;
            }
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 10000;
                bUpperBound = 10000;
            }
            let a = Math.floor((Math.random() * aUpperBound));
            let b = Math.floor((Math.random() * bUpperBound));
            Qlist.push(new exercise(`\\(${a} - ${b} = \\)`, Number(a - b)));
        }
        else if (Q[i] === 2){
            let aUpperBound;
            let bUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 10;
                bUpperBound = 20;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 20;
                bUpperBound = 20;
            }
            else if (difficultycheck === difficulties[3]){
                aUpperBound = 20;
                bUpperBound = 100;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 100;
                bUpperBound = 100;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 1000;
                bUpperBound = 1000;
            }
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 10000;
                bUpperBound = 10000;
            }

            let a = Math.floor((Math.random() * aUpperBound));
            let b = Math.floor((Math.random() * bUpperBound));
            
            // change sequence of a and b in 50% chance
            if (Math.floor(Math.random()*2) === 1){
                [a,b] = switchVariablesValues(a,b)
            }

            Qlist.push(new exercise(`\\(${a} \\times ${b} = \\)`, Number(a * b)));
        }
        else if (Q[i] === 3){
            let aUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 20;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 50;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 80;
            }
            else if (difficultycheck === difficulties[3]){
                aUpperBound = 100;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 1000;
            }
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 100000;
            }

            let divls = [];
            let a;
            while (divls.length === 0){
                a = Math.floor((Math.random() * aUpperBound));
                divls = properFactors(a)
            }
            
            let b = divls[Math.floor((Math.random() * divls.length))];
            Qlist.push(new exercise(`\\(${a} \\div ${b} = \\)`, Number(a / b)));
        }
        else if (Q[i] === 4){
            let aUpperBound, bUpperBound, firstTerm, secondTerm, firstTermToEvaluate, secondTermToEvaluate, a, b, c, d;
            let calculationTypeForFraction = Math.floor(Math.random() * 4);
            
            if (difficultycheck === difficulties[0]){
                aUpperBound = 5;
                bUpperBound = 5;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 30;
                bUpperBound = 30;
            }
            else if (difficultycheck === difficulties[3]){
                aUpperBound = 50;
                bUpperBound = 50;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 100;
                bUpperBound = 100;
            }
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 1000;
                bUpperBound = 1000;
            }
        
            

            // change sequence of a and b in 50% chance
            if (Math.floor(Math.random()*2) === 1){
                [firstTerm, secondTerm] = switchVariablesValues(firstTerm, secondTerm);
                [firstTermToEvaluate, secondTermToEvaluate] = switchVariablesValues(firstTermToEvaluate, secondTermToEvaluate);
            }

            [firstTerm, firstTermToEvaluate] = properFraction(aUpperBound, bUpperBound);
            [secondTerm, secondTermToEvaluate] = properFraction(aUpperBound, bUpperBound);
            [a,b] = firstTermToEvaluate.split("/");
            [c,d] = secondTermToEvaluate.split("/");
            [a,b,c,d] = [Number(a),Number(b),Number(c),Number(d)]

            if (calculationTypeForFraction === 0){
                Qlist.push(new exercise(`\\( ${firstTerm} + ${secondTerm} = \\)`, (a*d+b*c)/(b*d)));
            }
            else if (calculationTypeForFraction === 1){
                Qlist.push(new exercise(`\\( ${firstTerm} - ${secondTerm} = \\)`, (a*d-b*c)/(b*d)));
            }
            else if (calculationTypeForFraction === 2){
                Qlist.push(new exercise(`\\( ${firstTerm} \\times ${secondTerm} = \\)`, (a*c)/(b*d)));
            }
            else if (calculationTypeForFraction === 3){
                Qlist.push(new exercise(`\\( ${firstTerm} \\div ${secondTerm} = \\)`, (a*d)/(b*c)));
            }
            
        }
    }

    let nby4;
    // it's time to print it out
    if (Number.isInteger(n/4)){
        nby4 = n/4;
    }
    else{
        nby4 = Math.floor(n/4) + 1;
    }
    
    clearQuestions();
    /*
    let ols = document.querySelectorAll(".section ol")
    if (ols != null){
        for (ol of ols){
            ol.remove();
        }
    }
    */

    for (let i of Array(4).keys()){
        //let section = document.getElementById(`#section_${i}`);
        let section = document.getElementById(`section_${i}`);
        let ol = section.appendChild(document.createElement("ol"));
        ol.type = "1";
        ol.start = nby4*i + 1;
        for (j of Array(nby4).keys()){
            if (nby4*i + j < n){
                let li = ol.appendChild(document.createElement("li"));
                li.textContent = Qlist[nby4*i + j].question + " ";
                let input = li.appendChild(document.createElement("input"));
                input.className = "questionbox";
                input.autocomplete = "off";
                input.name = "name";
                input.id = `Q_${nby4*i+j}`;
                input.type = "text";
                let img = li.appendChild(document.createElement("img"));
                img.hidden = true
                if (i === 0 && j === 0){
                    input.autofocus = true;
                }
            }
        }
        section.hidden = false;
    }
    MathJax.typeset();
    answerCheck();
    

    


}

function answerCheck(){
    let inputs = document.querySelectorAll("#questions input");
    let right_after = document.getElementById("right_after");
    if (right_after.checked){
        let checkAnswer = document.getElementById("checkAnswer");
        checkAnswer.hidden = true;
        for (let input of inputs){
            //console.log(input)
            input.addEventListener('input', async function() {
                await sleep(1);
                answerResponse(input);
            });
        }
    }
    else{
        let checkAnswer = document.getElementById("checkAnswer");
        checkAnswer.hidden = false;
        checkAnswer.addEventListener("click", function(){
            for (let input of inputs){
                answerResponse(input);
                }
        })
    }
}

function answerResponse(input){
    let userInput = input.value;
    let Q_Number = Number(input.id.slice(2));
    let img = input.parentElement.querySelector("img");
    console.log(userInput);
    console.log(Qlist[Q_Number].answer);
    let invalidInput = false
    if (userInput === ""){
        img.hidden = true;
    }
    else{
        for (i of userInput){
            if (!("0123456789/-.".includes(i))){
                imgWarning(img);
                invalidInput = true;
            }
            // '-' does not occur as regular minus sign
            else if(userInput.includes('-') && userInput[0] != '-'){
                imgWarning(img);
                invalidInput = true;
            }
        }
        //else if ((userInput.includes("/") && eval(userInput) === Qlist[Q_Number].answer) || Number(userInput) === Qlist[Q_Number].answer){
        if (!(invalidInput)){
            if (userInput.includes("/")){
                let str = userInput.split("/")
                if (str.length === 2 && str[0].length != 0 && str[1] != 0){
                    if (str[1] === "0"){
                        // divided by zero
                        imgWarning(img);
                    }
                    else{
                        if (eval(userInput) === Qlist[Q_Number].answer){
                            imgCorrect(img);
                        }
                        else{
                            imgWrong(img);
                        }
                    }
                }
                else{
                    // Wrong expression
                    imgWarning(img);
                }
            }
            else if (Number(userInput) === Qlist[Q_Number].answer){
                img.hidden = false;
                img.src = "static/accept.png";
                img.alt = "Correct";
            }
            else{
                imgWrong(img);
            }
        }
    }
}

function imgCorrect (img) {
    img.hidden = false;
    img.src = "static/accept.png";
    img.alt = "Correct";
}

function imgWrong (img) {
    img.hidden = false;
    img.src = "static/cross.png";
    img.alt = "Wrong";
}

function imgWarning (img) {
    img.hidden = false;
    img.src = "static/warning.png";
    img.alt = "Invalid";
}

function getOption(arg) {
    selectElement = document.getElementById(arg);
    return selectElement.value;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000))
};

// reset button
const reset = document.getElementById("reset");
reset.addEventListener("click", clearQuestions)

function clearQuestions(){
    let sections = document.querySelectorAll(".section")
    for (section of sections){
        section.hidden=true;
    }
    let ols = document.querySelectorAll(".section ol")
    if (ols != null){
        for (ol of ols){
            ol.remove();
        }
    }
}

function properFactors(n){
    let ls = [];
    for (let i of [...Array(Math.floor(Math.sqrt(n))).keys()].map(i => i + 2)){
        if (n % i === 0){
            if (!(ls.includes(ls))){
                ls.push(i);
            }
            if (!(ls.includes(n/i))){
                ls.push(n/i);
            }
        }
    }
    return ls;
}

function commonFactors(a, b){
    let ls = [];
    let pa = properFactors(a);
    if (!pa.includes(a)){
        pa.push(a);
    }
    let pb = properFactors(b);
    if (!pb.includes(b)){
        pb.push(b);
    }
    for (i of pa){
        if (pb.includes(i)){
            ls.push(i);
        }
    }
    return ls;
}

function properFraction(aUpperBound, bUpperBound){
    a = Math.floor(Math.random()*aUpperBound) + 1
    if (a === 1){
        b = Math.floor(Math.random()*bUpperBound) + 1;  // [1,bUpperBound]
    }
    else{
        bCandidates = [...Array(bUpperBound).keys()].map(i => i + 1).filter(number => commonFactors(a,number).length === 0)
        b = bCandidates[Math.floor(Math.random() * bCandidates.length)]
    }

    // b could be 1
    if (b === 1){
        return [String(a), String(`${a}/${b}`)];
    }
    else{
        return [`\\frac{${a}}{${b}}`, String(`${a}/${b}`)];
    }
}

function switchVariablesValues(a, b){
    return [b, a];
}

/*
from numpy import *
a = linspace(0,100,101)
a
count = 1
for i in arange(0,101):
    print(str(i) + "% {background: linear-gradient(to right, var(--dark) 0% "+ str(i) + "%, white "+ str(i)+"% 100%);}")
    count += 1
*/