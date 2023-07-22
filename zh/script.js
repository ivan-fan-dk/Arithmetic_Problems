function zh(cname,cvalue){
    let it = document.querySelector(cname);
    it.textContent = cvalue;
}
function zhButton(cname,cvalue){
    let it = document.querySelector(cname);
    it.value = cvalue;
}
document.documentElement.setAttribute('lang', "zh-Hans");
zh("#h13 h1","算术");
zh("#h13 h3","版本：1.1.3");
zh("#customize h2","私人定制");
zh("#NOQName","题目数量");
zh("#difficultyName","难度");
zh("#right_afterName","即时评估");
zh("#calculationTypeName","计算类型:");
zh("#close","关闭")
zhButton("#setCookies","记录喜好在cookies");
zhButton("#clearCookies","清除cookies");
zhButton("#submit", "开始");
zhButton("#reset", "重置");
zhButton("#timeTrial", "计时模式");
zhButton("#stop", "停止计时");
zhButton("#checkAnswer", "评估答案");
zhButton("#score", "成绩");
zhButton("#time", "计时");
zh("#peekContent", "如果想要悄咪咪地瞄一眼答案，可以在想要的文本框内右键。" + String.fromCodePoint(128541));








/****************************************************************************************/
const exDays = 30;
const defaultNOQ = "20";
const defaultDifficulty = "简单";
const defaultRight_after = true;
const defaultCalculationTypes = ["加法", "减法", "乘法", "除法"];
const versions = ["1.1.2","1.1.1","1.1.0","1.0.3","1.0.2","1.0.1","1.0.0"];

let scoreList;
var printTime;
const body = document.querySelector("body");
const right_after = document.getElementById("right_after");
const checkAnswer = document.getElementById("checkAnswer");
const score = document.getElementById("score");
const setCookies = document.getElementById("setCookies");
const checkCookies = document.getElementById("checkCookies");
const clearCookies = document.getElementById("clearCookies");
const timeTrial = document.getElementById("timeTrial");
const header_h1 = document.querySelector("header h1");
const time = document.getElementById("time");
const stop = document.getElementById("stop");
const submit = document.getElementById("submit");
const customize = document.getElementById("customize");
const reset = document.getElementById("reset");
const options = document.querySelectorAll("options");
const header = document.querySelector("header");
const backgroundColor = ["#cbffcd","#ffe1c8"];
const closeButton = document.getElementById("close");
const navigationMenu = document.getElementById("navigationMenu");
const navigationBar = document.getElementById("navigationBar");
const overlay = document.querySelector(".overlay");
const once = {once: true};
const peek = document.getElementById("peek");
const currentTime = document.getElementById("currentTime");

setInterval(()=>{currentTime.textContent = new Date().toLocaleString()}, 50);

const NOQ = document.querySelector("#NOQ");
const NOQs = [10,20,30,40,50,100];

const difficulty = document.querySelector("#difficulty");
const difficulties = ["小白", "简单", "中等", "困难", "地狱", "亚洲"];

const calculationType = document.querySelector("#calculationType");
const calculationTypes = ["加法", "减法", "乘法", "除法", "分数加减法", "分数乘除法"];

const settings = ["NOQ", "difficulty", "right_after"].concat(calculationTypes);

// version
for (let version of versions){
    let li = navigationMenu.appendChild(document.createElement("li"));
    let a = li.appendChild(document.createElement("a"));
    a.href = `../Arithmetic_Problems v.${version}/index.html`;
    a.textContent = `版本 ${version}`;
}

// Navigation
closeButton.addEventListener("click",closeNavigationMenu);
navigationBar.addEventListener("click", openNavigationMenu);

function closeNavigationMenu(){
    navigationMenu.style.outline = "none";
    navigationMenu.style.width = "0";
    overlay.classList.remove("open");
}

function openNavigationMenu(){
    navigationMenu.style.outline = "solid thin black";
    navigationMenu.style.width = "20%";
    overlay.classList.add("open");
}

// NOQ
for (let i of NOQs){
    let option = NOQ.appendChild(document.createElement("option"));
    option.id = `NOQ_${i}`;
    option.value = String(i);
    option.textContent = String(i);
}

// Difficulty
for (let i of difficulties){
    let option = difficulty.appendChild(document.createElement("option"));
    option.id = i;
    option.value = i;
    option.textContent = i;
    if (i == "亚洲"){
        option.hidden = true;
    }
}

// calculationType
for (let i of calculationTypes){
    let div = calculationType.appendChild(document.createElement("div"));
    div.className = "customizeTitle";
    let label = div.appendChild(document.createElement("label"));
    label.htmlFor = i;
    label.textContent = i;
    let input = div.appendChild(document.createElement("input"));
    input.className = "checkbox";
    input.type = "checkbox";
    input.name = i;
    input.id = i;
}

// initilize typecheck
let typeCheck = [];
for (let _ of Array(calculationTypes.length).keys()){
    typeCheck.push(true);
}

// load cookies (either load default cookie or load the stored cookie)
loadCookie();

//Set Cookies button
setCookies.addEventListener("click",()=>{
    setCookie("NOQ", getOption("NOQ")); 
    setCookie("difficulty", getOption("difficulty"));
    setCookie("right_after", String(getChecked("right_after")));
    for (let i of calculationTypes){
        if (getChecked(i)){
            setCookie(i, "true");
        }
        else{
            setCookie(i, "false");
        }
    }
    alert(`你的喜好已成功保存。保存时长为${exDays}天.`);
});

//Check current cookies
checkCookies.addEventListener("click",()=>{
    alert(`喜好 in json: \n ${document.cookie}`);
});

//Clear Cookies button
clearCookies.addEventListener("click",()=>{
    clearAllCookies(document.cookie);
});

// mode code (0: normal mode, 1: time trial mode)
let mode;

//timeTrial button
normalMode();

function normalMode(){
    mode = 0;
    changeBackgroundColor();
    right_after.disabled = false;
    stop.hidden = true;
    if (right_after.checked){
        checkAnswer.hidden = true;
    }
    else{
        checkAnswer.hidden = false;
    }
    timeTrial.addEventListener("click", timeTrialClickInNormalMode, once);
    console.log(`mode is ${mode}.`);
}

function timeTrialMode(){
    mode = 1;
    changeBackgroundColor();
    right_after.disabled = true;
    stop.hidden = true;
    timeTrial.addEventListener("click", timeTrialClickInTimeTrialMode, once);
    console.log(`mode is ${mode}.`);
}

//Start button
submit.addEventListener("click", generate);

function generate(){
    changeBackgroundColor();
    
    // clear Questions before generate
    clearQuestions();

    // get input of calculationtypes
    for (let i of Array(calculationTypes.length).keys()){
        if (getChecked(calculationTypes[i])){
            typeCheck[i] = true;
        }
        else{
            typeCheck[i] = false;
        }
    }
    
    if (JSON.stringify(typeCheck) == JSON.stringify(Array(calculationTypes.length).fill(false))){
        return;
    }

    // hide peek message
    peek.hidden = true;

    // get input of dificulty level
    let difficultycheck = getOption("difficulty");
    
    // get input of number of questions
    let n = Number(getOption("NOQ"));

    // initilize a list (Qtype) of available calculationtypes 
    let Qtype = [];
    for (let i of Array(typeCheck.length).keys()){
        if (typeCheck[i]){
            Qtype.push(i);
        }
    }

    // generate n questions by their calculationtypes randomly.
    let Q = [];
    for (let _ of Array(n).keys()){
        let random = Math.floor((Math.random() * Qtype.length));
        Q.push(Qtype[random]);
    }

    // construct a class named exercise
    class exercise{
        constructor(question, answer, printOutAnswer=String(answer)){
            this.question = question;
            this.answer = answer;
            this.printOutAnswer = printOutAnswer;
        }
    }

    Qlist = [];
    // The core algorithm (generate all types of questions and store in Qlist)
    for (let i of Array(n).keys()){
        // Addition
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
        // Subtraction
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
            if (a < b && (difficultycheck === difficulties[0]||difficultycheck === difficulties[1])){
                [a,b] = switchVariablesValues(a,b);
            }
            Qlist.push(new exercise(`\\(${a} - ${b} = \\)`, Number(a - b)));
        }
        // Multiplication
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
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 10000;
                bUpperBound = 10000;
            }

            let a = Math.floor((Math.random() * aUpperBound));
            let b = Math.floor((Math.random() * bUpperBound));
            
            // change sequence of a and b in 50% chance
            if (Math.floor(Math.random()*2) === 1){
                [a,b] = switchVariablesValues(a,b);
            }

            Qlist.push(new exercise(`\\(${a} \\times ${b} = \\)`, Number(a * b)));
        }
        // Division
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
                divls = properFactors(a);
            }
            
            let b = divls[Math.floor((Math.random() * divls.length))];
            Qlist.push(new exercise(`\\(${a} \\div ${b} = \\)`, Number(a / b)));
        }
        else if (Q[i] === 4 || Q[i] === 5){
            let aUpperBound, bUpperBound, firstTerm, secondTerm, firstTermToEvaluate, secondTermToEvaluate, firstTermIsInteger, secondTermIsInteger, a, b, c, d;
            let calculationTypeForFraction = Math.floor(Math.random() * 2);
            
            if (difficultycheck === difficulties[0]){
                aUpperBound = 3;
                bUpperBound = 5;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 4;
                bUpperBound = 8;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[3]){
                aUpperBound = 20;
                bUpperBound = 20;
            }
            else if (difficultycheck === difficulties[4]){
                aUpperBound = 100;
                bUpperBound = 100;
            }
            else if (difficultycheck === difficulties[5]){
                aUpperBound = 1000;
                bUpperBound = 1000;
            }
            
            let proper;
            if (difficultycheck === difficulties[0] || difficultycheck === difficulties[1]){
                proper = true;
            }
            else {
                proper = false;
            }

            // make sure that there are highest one integer in the question.
            do{
                [firstTerm, firstTermToEvaluate, firstTermIsInteger] = fraction(aUpperBound, bUpperBound, proper);
                [secondTerm, secondTermToEvaluate, secondTermIsInteger] = fraction(aUpperBound, bUpperBound, proper);
            } while (firstTermIsInteger && secondTermIsInteger);

            /*
            // change sequence of a and b in 50% chance
            if (Math.floor(Math.random()*2) === 1){
                [firstTerm, secondTerm] = switchVariablesValues(firstTerm, secondTerm);
                [firstTermToEvaluate, secondTermToEvaluate] = switchVariablesValues(firstTermToEvaluate, secondTermToEvaluate);
            }
            */

            [a,b] = firstTermToEvaluate.split("/");
            [c,d] = secondTermToEvaluate.split("/");
            [a,b,c,d] = [Number(a),Number(b),Number(c),Number(d)];
            if (Q[i] === 4){
                // fraction(addition)
                if (calculationTypeForFraction === 0){
                    Qlist.push(new exercise(`\\( ${firstTerm} + ${secondTerm} = \\)`, (a*d+b*c)/(b*d), reduceFraction((a*d+b*c), (b*d))));
                }
                // fraction(subtraction)
                else if (calculationTypeForFraction === 1){
                    if (a*d-b*c < 0 && (difficultycheck === difficulties[0] || difficultycheck === difficulties[1])){
                        // switch fractions if subtraction's result is negative and difficulty level is either beginner or easy.
                        [firstTerm, secondTerm] = switchVariablesValues(firstTerm, secondTerm);
                        [firstTermToEvaluate, secondTermToEvaluate] = switchVariablesValues(firstTermToEvaluate, secondTermToEvaluate);
                        [a,c] = switchVariablesValues(a,c);
                        [b,d] = switchVariablesValues(b,d);
                    }
                    Qlist.push(new exercise(`\\( ${firstTerm} - ${secondTerm} = \\)`, (a*d-b*c)/(b*d), reduceFraction((a*d-b*c), (b*d))));
                }
            }
            if (Q[i] === 5){
                // fraction(multiplication)
                if (calculationTypeForFraction === 0){
                    Qlist.push(new exercise(`\\( ${firstTerm} \\times ${secondTerm} = \\)`, (a*c)/(b*d), reduceFraction((a*c), (b*d))));
                }
                // fraction(division)
                else if (calculationTypeForFraction === 1){
                    Qlist.push(new exercise(`\\( ${firstTerm} \\div ${secondTerm} = \\)`, (a*d)/(b*c), reduceFraction((a*d), (b*c))));
                }
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
    
    // print out in four columns
    for (let i of Array(4).keys()){
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
                    input.focus();
                }
            }
        }
        section.hidden = false;
    }
    
    // Load Katex, if Katex is used.
    // renderMathInElement(document.body);  
    
    // load MathJax
    MathJax.typeset();
    
    // reset scoreList to zeros
    scoreList = new Array(n);
    for (let i=0; i<n; ++i){scoreList[i] = 0};

    // update score
    scoreUpdate();
    
    // check answers
    answerCheck();

    // if it is in Time Trial mode, initilize timer, make "time stop" button visible and start timer.
    if (mode === 1){
        clearInterval(printTime);
        stop.hidden = false;
        timer();
    }    
}

function answerCheck(){
    let inputs = document.querySelectorAll("#questions input");
    for (let input of inputs){
        input.addEventListener("contextmenu", async function(e){
            e.preventDefault();
            getAnswer(input);
        });
    }
    // if the user want to check answer right after typed and it is in normal mode, 
    if (right_after.checked && mode === 0){
        checkAnswer.hidden = true;
        for (let input of inputs){
            input.addEventListener('input', async function() {
                await sleep(1);
                answerResponse(input);
            });
        }
    }
    // if the user want to check answer when he/she click "check answer" or in Time Trial Mode.
    else{
        // hide the "check answer" because they need to click "time stop" button first in Time Trial Mode.
        if (mode === 1){
            checkAnswer.hidden = true;
        }
        else{
            checkAnswer.hidden = false;
        }
        
        checkAnswer.addEventListener("click", async function(){
            for (let input of inputs){
                answerResponse(input);
            }
        });
    }
}

function getAnswer(input){
    let Q_Number = Number(input.id.slice(2));   // fetch question number
    let img = input.parentElement.querySelector("img"); // make image element inside parent element of input
    input.value = String(Qlist[Q_Number].printOutAnswer);
    imgQuestion(img);
    scoreList[Q_Number] = 0;
    scoreUpdate();
}

// check answer and store every single score (1 for correct, 0 for wrong) in variable "scoreList".
function answerResponse(input){
    let singleScore = 0;
    let userInput = input.value;                // fetch user input value
    let Q_Number = Number(input.id.slice(2));   // fetch question number
    let img = input.parentElement.querySelector("img"); // make image element inside parent element of input
    let invalidInput = false;
    // if the user didn't type anything in input, don't judge them (be kind).
    if (userInput === ""){
        img.hidden = true;
    }
    // Ester Egg: if "spare me" is typed, then it counts as correct.
    else if (userInput === "spare me" || userInput === "饶了我吧"){
        imgCorrect(img);
        singleScore = 1;
    }
    else{
        // typo check mechanism. Only these chars "0123456789/-." are valid.
        for (var i of userInput){
            if (!("0123456789/-.".includes(i))){
                imgWarning(img);
                invalidInput = true;
            }
        }

        // '-' that does not placed first as regular minus sign is considered invalid.
        if(userInput.includes('-') && userInput[0] != '-'){
            imgWarning(img);
            invalidInput = true;
        }

        // if input is considered valid,
        if (!(invalidInput)){
            // if input is a fraction,
            if (userInput.includes("/")){
                let str = userInput.split("/");
                // if there is and only one "/" which divide userinput in two strings, and first string is non-zero long, and second is not equal to 0 nor empty.
                if (str.length === 2 && str[0].length != 0 && str[1] != 0){
                    if (eval(userInput) === Qlist[Q_Number].answer){
                        imgCorrect(img);
                        singleScore = 1;
                    }
                    else{
                        imgWrong(img);
                    }
                }
                else{
                    // Wrong expression
                    imgWarning(img);
                }
            }
            // if input is just a integer
            else if (Number(userInput) === Qlist[Q_Number].answer){
                imgCorrect(img);
                singleScore = 1;
            }
            else{
                imgWrong(img);
            }
        }
    }
    scoreList[Q_Number] = singleScore;
    scoreUpdate();
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

function imgQuestion (img){
    img.hidden = false;
    img.src = "static/common-answers.png";
    img.alt = "Explore further";
}

function getOption(arg) {
    selectElement = document.getElementById(arg);
    return selectElement.value;
}

function getChecked(arg) {
    selectElement = document.getElementById(arg);
    return selectElement.checked;
}

function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

// reset button
reset.addEventListener("click", clearQuestions);

// clear questions and hide score
function clearQuestions(){
    // hide all sections
    let sections = document.querySelectorAll(".section");
    for (let section of sections){
        section.hidden=true;
    }
    let ols = document.querySelectorAll(".section ol");
    if (ols != null){
        for (var ol of ols){
            ol.remove();
        }
    }
    // nullify score
    score.hidden = true;

    // show peek message
    peek.hidden = false;

    //nullify timer
    clearInterval(printTime);
    setTimeToZero();
    stop.hidden = true;
    checkAnswer.hidden = true;
    if (mode === 0){
        time.hidden = true;
    }
    else if (mode === 1){
        time.hidden = false;
    }
    else{
        captureUnexpected("clearQuestions");
    }
}

function properFactors(n){
    let ls = [];
    for (let i of [...Array(Math.floor(Math.sqrt(n))).keys()].map(i => i + 2)){
        if (n % i === 0){
            if (!(ls.includes(i)) && i >= 2 && i != n){
                ls.push(i);
            }
            if (!(ls.includes(n/i)) && i >= 2 && i != n){
                ls.push(n/i);
            }
        }
    }
    return ls;
}

function factors(n){
    let ls = [];
    for (let i of [...Array(Math.floor(Math.sqrt(n))).keys()].map(i => i + 1)){
        if (n % i === 0){
            if (!(ls.includes(i)) && i >= 1){
                ls.push(i);
            }
            if (!(ls.includes(n/i)) && i >= 1){
                ls.push(n/i);
            }
        }
    }
    return ls;
}

function commonFactors(a, b){
    let ls = [];
    let pa = factors(a);
    let pb = factors(b);
    for (var i of pa){
        if (pb.includes(i)){
            ls.push(i);
        }
    }
    return ls;
}

function reduceFraction(a,b) {
    // handle special case ?/0, where ? is not zero integer
    if (b === 0 && a !== 0){
        return alert("Cannot reduce the fraction, because denominator is zero!")
    }
    let minusPrefix;
    let minus = false;
    // make a,b be positive, and register minus sign
    if (a < 0){
        a = -a;
        minus = !minus;
    }
    if (b < 0){
        b = -b;
        minus = !minus;
    }

    let cF = commonFactors(a,b);    // commonfactors of a and b as an array
    // handle special case, no common factors, meaning one of them is zero or both. 0/0 will be define as 0 because it might exist in situation like 3/2-3/2.
    if (cF.length == 0){
        return '0';
    }

    let gcd = Math.max(...cF);      // greatest common divisor
    
    if (minus == true){
        minusPrefix = '-';
    }
    else{
        minusPrefix = '';
    }
    let result_a = a/gcd;
    let result_b = b/gcd;
    // handle special case, result_b = 1
    
    if (result_b == 1){
        return minusPrefix + String(result_a);
    }
    else{
        return minusPrefix + `${result_a}/${result_b}`;
    }
}

function fraction(aUpperBound, bUpperBound, proper=false){
    let bCandidates,a;
    do {
        a = Math.floor(Math.random()*aUpperBound) + 1;      // [1,aUpperBound]
        if (proper){
            bCandidates = [...Array(bUpperBound - a + 1).keys()].map(i => i + a).filter(number => commonFactors(a,number).length === 1);
        }
        else{
            bCandidates = [...Array(bUpperBound).keys()].map(i => i + 1).filter(number => commonFactors(a,number).length === 1);
        }
    } while (bCandidates.length == 0)
    
    b = bCandidates[Math.floor(Math.random() * bCandidates.length)];

    // b could be 1
    if (b === 1){
        return [String(a), String(`${a}/${b}`), true];              // the third boolean value shows whether this is an integer.
    }
    else{
        return [`\\frac{${a}}{${b}}`, String(`${a}/${b}`), false];  // the third boolean value shows whether this is an integer.
    }
}

function switchVariablesValues(a, b){
    return [b, a];
}

// setCookie function
function setCookie(cname, cvalue, exdays=exDays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = String(cname) + "=" + String(cvalue) + ";" + expires + ";Secure";
}

// clear all cookies function
function clearAllCookies(documentCookie){
    let cookies = documentCookie.split(';');
    for (let cookie of cookies){
        let cookieName = cookie.split('=')[0];
        setCookie(cookieName, "", 0);
    }
    if (document.cookie.length === 0){
        alert(`所有的cookies都已被成功清除！`);
    }
    else {
        alert(`大部分cookies已被成功清除！\n\n剩余的cookies:\n${document.cookie}`);
    }
}

// a helper function, but not used in the main code structure.
function checkACookieExists(aCookieName) {
    if (
        document.cookie.split(";").some((item) => item.trim().startsWith(`${aCookieName}=`))
    )
    {
        return true;
    }
    else{
        return false;
    }
}

function loadCookie(){
    clearSelected();
    // make boolean expressions
    let boolNOQ = false;
    let boolDifficulty = false;
    let boolRight_after = false;
    let boolCalculationTypes = new Array(calculationTypes.length).fill(false);

    for (let cookie of (document.cookie).split(';')){
        let [key, value] = cookie.split('=').map(item => item.trim());
        if (key === "NOQ"){
            document.getElementById(`NOQ_${value}`).selected = true;
            boolNOQ = true;
        }
        else if (key === "difficulty"){
            document.getElementById(value).selected = true;
            boolDifficulty = true;
        }
        else if (key === "right_after"){
            if (value === "true"){
                document.getElementById("right_after").checked = true;
            }
            else if (value === "false"){
                document.getElementById("right_after").checked = false;
            }
            else{
                cookieDeprecationAlert("right_after");
            }
            boolRight_after = true;
        }
        else if (calculationTypes.includes(key)){
            if (value === "true"){
                document.getElementById(key).checked = true;
            }
            else if (value === "false"){
                document.getElementById(key).checked = false;
            }
            else{
                cookieDeprecationAlert(key);
            }
            boolCalculationTypes[calculationTypes.indexOf(key)] = true;
        }
    }

    // Set default cookie if its key didn't exist in document.cookie.
    if (boolNOQ === false){
        document.getElementById(`NOQ_${defaultNOQ}`).selected = true;
    }
    if (boolDifficulty === false){
        document.getElementById(defaultDifficulty).selected = true;
    }
    if (boolRight_after === false){
        document.getElementById("right_after").checked = defaultRight_after;
    }
    for (let i of calculationTypes){
        if (boolCalculationTypes[calculationTypes.indexOf(i)] == false){
            if (defaultCalculationTypes.includes(i)){
                document.getElementById(i).checked = true;
            }
            else{
                document.getElementById(i).checked = false;
            }
        }
    }
}

function cookieDeprecationAlert(error){
    alert("Warning!!! Cookies has been deprecated!!!");
    console.log(`Decprecated cookies in ${error}`);
}

function clearSelected(){
    for (var everyOption of options){
        everyOption.selected = false;
    }
}

function scoreUpdate(){
    var result = 0;
    for (var i in scoreList) {
        result += scoreList[i];
    }
    score.textContent = `成绩: ${result}/${getOption("NOQ")}`;
    score.hidden = false;
}

function captureUnexpected(error){
    alert("An unexpected situation has been captured!");
    console.log(`An error has occurred! Check ${error}`);
}

// rewrite a number to a string with expected length, e.g. pad(2,3) returns "002"
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function timeTrialClickInNormalMode(){
    header_h1.textContent = "计时模式";
    time.hidden = false;
    setTimeToZero();
    timeTrial.value = "回到普通模式";
    clearInterval(printTime);
    timeTrialMode();
}

function timeTrialClickInTimeTrialMode(){
    header_h1.textContent = "算术";
    time.hidden = true;
    timeTrial.value = "计时模式";
    normalMode();
}

function setTimeToZero(){
    time.textContent = "时间: 00:00.0";
}

function stopper(){
    clearInterval(printTime);
    stop.hidden=true;
    checkAnswer.hidden=false;
}

function changeBackgroundColor(){
    let sections = document.getElementsByClassName("section");
    for (let section of sections){
        section.style.backgroundColor = backgroundColor[mode];
    }
}

function timer(){
    var startTime = new Date().getTime();
    printTime = setInterval(function(){
        var now = new Date().getTime();
        var distance = now - startTime;
        var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 2);
        var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000),2);
        var miliseconds = pad(Math.floor((distance % 1000)/100),1);
        time.textContent = `时间: ${minutes}:${seconds}.${miliseconds}`;
    },100);
    stop.addEventListener("click", stopper, once);
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
