// Some variables are defined in the relevant language javascript.

// Add titleName and versionName
const currentVersion = "1.5.1";
const h13 = document.getElementById("h13");
h13.appendChild(document.createElement("h1"));
h13.appendChild(document.createElement("h3"));
changeName("#h13 h1", arithmetricProblemsTitleName);
changeName("#h13 h3", versionName + ": " + currentVersion);

const defaultNOQ = "20";
const defaultRight_after = true;
const versions = ["1.4.12","1.3.0","1.2.0","1.1.4","1.1.3","1.1.2","1.1.1","1.1.0","1.0.2","1.0.0"];

var alertIPhoneHasDone = false;
var result;
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
const reset = document.getElementById("reset");
const options = document.querySelectorAll("options");
const backgroundColor = ["#cbffcd","#ffe1c8"];
const closeButton = document.getElementById("close");
const navigationMenu = document.getElementById("navigationMenu");
const navigationBar = document.getElementById("navigationBar");
const overlay = document.querySelector(".overlay");
const once = {once: true};
const currentTime = document.getElementById("currentTime");

setInterval(()=>{currentTime.textContent = new Date().toLocaleString()}, 50);

const NOQ = document.querySelector("#NOQ");
const NOQs = [10,20,30,40,50,100];

const difficulty = document.querySelector("#difficulty");

const calculationType = document.querySelector("#calculationType");

const settings = ["NOQ", "difficulty", "right_after"].concat(calculationTypes);

// version
for (let version of versions){
    let li = navigationMenu.appendChild(document.createElement("li"));
    let a = li.appendChild(document.createElement("a"));
    a.href = inAFolder + `./Arithmetic_Problems v.${version}/index.html`;
    a.textContent = versionName + ` ${version}`;
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
    if (i === AsianName){
        option.hidden = true;
    }
}

// calculationType
for (let i of calculationTypes){
    let label = calculationType.appendChild(document.createElement("label"));
    label.htmlFor = i;
    let div = label.appendChild(document.createElement("div"));
    div.className = "customizeTitle";
    div.textContent = i;
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
    alert(alertPreferencesStored + `\n${document.cookie}`);
});

//Check current cookies
checkCookies.addEventListener("click",()=>{
    alert(preferencesCheck + `\n${document.cookie}`);
});

//Clear Cookies button
clearCookies.addEventListener("click",()=>{
    clearAllCookies(document.cookie);
});

// mode code (0: normal mode, 1: time trial mode)
var mode;

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
    // console.log(`mode is ${mode}.`);
}

function timeTrialMode(){
    mode = 1;
    changeBackgroundColor();
    right_after.disabled = true;
    stop.hidden = true;
    timeTrial.addEventListener("click", timeTrialClickInTimeTrialMode, once);
    // console.log(`mode is ${mode}.`);
}

//Start button
submit.addEventListener("click", generate);

window.addEventListener("DOMContentLoaded", function(){
    // confettiSchoolPride();
    snow();
    body.classList.toggle('shown');
}, false);

// Some preparation for unit conversion questions
var lengthUnitsConversion = new Map([
    ["mm", 1],
    ["cm", 10],
    ["dm", 1e2],
    ["m", 1e3],
    ["km", 1e6],
]);
var areaUnitsConversion = new Map([
    ["mm^2", 1],
    ["cm^2", 1e2],
    ["dm^2", 1e4],
    ["m^2", 1e6],
    ["km^2", 1e12],
]);
var volumeUnits_m_Conversion = new Map([
    ["mm^3", 1],
    ["cm^3", 1e3],
    ["dm^3", 1e6],
    ["m^3", 1e9],
    ["km^3", 1e18],
]);
var volumeUnits_L_Conversion = new Map([
    ["L", 1e3],
    ["mL", 1],
]);
var volumeUnits_Extended_Conversion = new Map([
    ["mm^3", 1],
    ["cm^3", 1e3],
    ["dm^3", 1e6],
    ["m^3", 1e9],
    ["km^3", 1e18],
    ["L", 1e6],
    ["mL", 1e3],
]);
var massUnitsConversion = new Map([
    ["mg", 1],
    ["g", 1e3],
    ["kg", 1e6],
    ["t", 1e9],
]);
var timeUnitsConversion = new Map([
    ["s", 1],
    ["min", 60],
    ["h", 3600],
]);
var speedUnitsConversion = new Map([
    ["m/s", 3600],
    ["m/min", 60],
    ["m/h", 1],
    ["km/s", 3600e3],
    ["km/min", 60e3],
    ["km/h", 1e3],
]);

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
    var Q = [];
    for (let _ of Array(n).keys()){
        Q.push(randomChoice(Qtype));
    }

    // construct a class named exercise
    class exercise{
        constructor(question, answer, printOutAnswer=answer){
            this.question = question;
            this.answer = answer;
            this.printOutAnswer = printOutAnswer;
        }
    }

    Qlist = [];
    // The core algorithm (generate all types of questions and store in Qlist)
    let zeroInAddition = false;
    let zeroInMultiplication = false;
    let oneInMultiplication = false;
    let answerFieldForLinearEquation = "<br>\\(x=\\)";
    let unitIndex = 0;
    let aValueInUnitList = [];
    let aUnitInLatexList = [];
    let bUnitInLatexList = [];
    for (let i of Array(n).keys()){
        // Addition
        if (Q[i] === 0){
            let a, b, aUpperBound, bUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 30;
                bUpperBound = 30;
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
            if (zeroInAddition){
                a = randomIntInRange(1, aUpperBound);    // [1, aUpperBound)
                b = randomIntInRange(1, bUpperBound);    // [1, bUpperBound)
            }
            else{
                a = randomIntInRange(0, aUpperBound);  // [0, aUpperBound)
                b = randomIntInRange(0, bUpperBound);  // [0, bUpperBound)
            }
            if (a == 0 || b == 0){
                zeroInAddition = true;
            }
            
            Qlist.push(new exercise(`\\(${a} + ${b} = \\)`, Number(a + b)));
        }
        // Subtraction
        else if (Q[i] === 1){
            let aUpperBound, bUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 30;
                bUpperBound = 30;
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
            let a = randomIntInRange(0, aUpperBound);  // [0, aUpperBound)
            let b = randomIntInRange(0, bUpperBound);  // [0, bUpperBound)
            if (a < b && (difficultycheck === difficulties[0]||difficultycheck === difficulties[1])){
                [a,b] = switchVariablesValues(a,b);
            }
            Qlist.push(new exercise(`\\(${a} - ${b} = \\)`, Number(a - b)));
        }
        // Multiplication
        else if (Q[i] === 2){
            // aUpperBound, bUpperBound should be >= 4 at least.
            let a, b, aUpperBound, bUpperBound;
            if (difficultycheck === difficulties[0]){
                aUpperBound = 5;
                bUpperBound = 5;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 20;
                bUpperBound = 20;
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
            
            // 0 times non-zero should highest exist once. 1 times non-zero should highest exist once.
            if (zeroInMultiplication){
                // both 0 times non-zero and 1 times non-zero already exist. (do not choose 0 and 1)
                if (oneInMultiplication){
                    a = randomIntInRange(2, aUpperBound);    // [2, aUpperBound)
                    b = randomIntInRange(2, bUpperBound);    // [2, bUpperBound)
                }
                // 0 times non-zero already exists, 1 times non-zero does not exist. (do not choose 0)
                else{
                    a = randomIntInRange(1, aUpperBound);    // [1, aUpperBound)
                    b = randomIntInRange(1, bUpperBound);    // [1, bUpperBound)
                }
            }
            else{
                // 0 times non-zero does not exist, 1 times non-zero already exist. (do not choose 1)
                if (oneInMultiplication){
                    do {
                        let candidates = [0].concat([...Array(aUpperBound - 2).keys()].map(i => i + 2));    // [0] + [2, aUpperBound)
                        [a, b] = Array(2).fill(randomChoice(candidates));   // Noice that a and b are the same here, thus it works.
                    } while (a == 0 && b == 0)  // delete possibilities to have 0 times 0
                }
                // Neither 0 times non-zero nor 1 times non-zero exist. (choose freely)
                else{
                    do {
                        a = randomIntInRange(0, aUpperBound);  // [0, aUpperBound)
                        b = randomIntInRange(0, bUpperBound);  // [0, bUpperBound)
                    } while (a == 0 && b == 0)  // delete possibilities to have 0 times 0
                }
            }
            
            // register if 0 already exists
            if (a == 0 || b == 0){
                zeroInMultiplication = true;
            }
            // register if 1 already exists
            if (a == 1 || b == 1){
                oneInMultiplication = true;
            }

            // change sequence of a and b in 50% chance
            if (randomChoice([0, 1]) === 1){
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
                a = randomIntInRange(0, aUpperBound);  // [0, aUpperBound)
                divls = properFactors(a);
            }
            
            let b = randomChoice(divls);
            Qlist.push(new exercise(`\\(${a} \\div ${b} = \\)`, Number(a / b)));
        }
        // fraction(+-)
        else if (Q[i] === 4){
            // Caution!!! aUpperBound should always smaller than or equal to bUpperBound.
            let aUpperBound, bUpperBound, firstTerm, secondTerm, firstTermToEvaluate, secondTermToEvaluate, firstTermIsInteger, secondTermIsInteger, a, b, c, d;
            let calculationTypeForFraction = randomChoice([0, 1]); // 0: addition, 1: subtraction
            
            if (difficultycheck === difficulties[0]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 20;
                bUpperBound = 20;
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
            
            if (difficultycheck === difficulties[0] || difficultycheck === difficulties[1]){
                // Do calculations of two fractions with the same denominator if it is at the easiest two levels.
                [firstTerm, firstTermToEvaluate, secondTerm, secondTermToEvaluate] = twoFractionsWithSameDenominator(aUpperBound, bUpperBound);
            }
            else{
                // make sure that there is highest one integer in the question.
                do{
                    [firstTerm, firstTermToEvaluate, firstTermIsInteger] = fraction(aUpperBound, bUpperBound, proper=false);
                    [secondTerm, secondTermToEvaluate, secondTermIsInteger] = fraction(aUpperBound, bUpperBound, proper=false);
                } while (firstTermIsInteger && secondTermIsInteger);
            }
            
            [a,b] = firstTermToEvaluate.split("/");
            [c,d] = secondTermToEvaluate.split("/");
            [a,b,c,d] = [Number(a),Number(b),Number(c),Number(d)];

            // fraction(addition)
            if (calculationTypeForFraction === 0){
                Qlist.push(new exercise(`\\( ${firstTerm} + ${secondTerm} = \\)`, (a*d+b*c)/(b*d), reduceFraction((a*d+b*c), (b*d))));
            }
            // fraction(subtraction)
            else if (calculationTypeForFraction === 1){
                // switch fractions if subtraction's result is negative and difficulty level is either beginner or easy.
                if (a*d-b*c < 0 && (difficultycheck === difficulties[0] || difficultycheck === difficulties[1])){
                    [firstTerm, secondTerm] = switchVariablesValues(firstTerm, secondTerm);
                    [firstTermToEvaluate, secondTermToEvaluate] = switchVariablesValues(firstTermToEvaluate, secondTermToEvaluate);
                    [a,c] = switchVariablesValues(a,c);
                    [b,d] = switchVariablesValues(b,d);
                }
                Qlist.push(new exercise(`\\( ${firstTerm} - ${secondTerm} = \\)`, (a*d-b*c)/(b*d), reduceFraction((a*d-b*c), (b*d))));
            }
        }
        // fraction(*/)
        else if (Q[i] === 5){
            // Caution!!! aUpperBound should always smaller than or equal to bUpperBound.
            let aUpperBound, bUpperBound, firstTerm, secondTerm, firstTermToEvaluate, secondTermToEvaluate, firstTermIsInteger, secondTermIsInteger, a, b, c, d;
            let calculationTypeForFraction = randomChoice([0, 1]);   // 0: multiplication, 1: division

            if (difficultycheck === difficulties[0]){
                aUpperBound = 5;
                bUpperBound = 5;
            }
            else if (difficultycheck === difficulties[1]){
                aUpperBound = 10;
                bUpperBound = 10;
            }
            else if (difficultycheck === difficulties[2]){
                aUpperBound = 20;
                bUpperBound = 20;
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

            // make sure that there are highest one integer in the question.
            do{
                [firstTerm, firstTermToEvaluate, firstTermIsInteger] = fraction(aUpperBound, bUpperBound, proper=false);
                [secondTerm, secondTermToEvaluate, secondTermIsInteger] = fraction(aUpperBound, bUpperBound, proper=false);
            } while (firstTermIsInteger && secondTermIsInteger);

            [a,b] = firstTermToEvaluate.split("/");
            [c,d] = secondTermToEvaluate.split("/");
            [a,b,c,d] = [Number(a),Number(b),Number(c),Number(d)];

            // fraction(multiplication)
            if (calculationTypeForFraction === 0){
                Qlist.push(new exercise(`\\( ${firstTerm} \\times ${secondTerm} = \\)`, (a*c)/(b*d), reduceFraction((a*c), (b*d))));
            }
            // fraction(division)
            else if (calculationTypeForFraction === 1){
                Qlist.push(new exercise(`\\( ${firstTerm} \\div ${secondTerm} = \\)`, (a*d)/(b*c), reduceFraction((a*d), (b*c))));
            }
        }
        // Linear equation (coef[0]*answer + coef[1] = coef[2], or coef[1] + coef[0]*answer = coef[2])
        else if (Q[i] === 6){
            let answerBound, answer;
            let coef = [], coefBound = [], coefSign = [];

            if (difficultycheck === difficulties[0]){
                answerBound = [1,5];
                coefBound = [[1,5], [-5,5]];
            }
            else if (difficultycheck === difficulties[1]){
                answerBound = [1,10];
                coefBound = [[1,10], [-10,10]];
            }
            else if (difficultycheck === difficulties[2]){
                answerBound = [-5,5];
                coefBound = [[-5,5], [-10,10]];
            }
            else if (difficultycheck === difficulties[3]){
                answerBound = [-10,10];
                coefBound = [[-10,10], [-10,10]];
            }
            else if (difficultycheck === difficulties[4]){
                answerBound = [-30,30];
                coefBound = [[-30,30], [-100,100]];
            }
            else if (difficultycheck === difficulties[5]){
                answerBound = [-100,1000];
                coefBound = [[-100,100], [-100,100]];
            }
            // determine answer
            do {
                answer = randomIntInClosedRange(answerBound[0], answerBound[1]);    //[answerBound[0], answerBound[1]] without 0
            } while (answer == 0);
            // determine three coefficients, and register the first two coefficients' signs.
            for (let i of Array(2).keys()){
                let tmp;
                do {
                    tmp = randomIntInClosedRange(coefBound[i][0], coefBound[i][1]);    //[coefBound[i][0], coefBound[i][1]] without 0
                } while (tmp == 0);
                coef.push(tmp);
                if (tmp > 0){
                    coefSign.push("+");
                }
                else{
                    coefSign.push("-");
                }
            }
            coef.push(answer*coef[0] + coef[1]);

            // change 1x and -1x to x and -x.
            if (coef[0] == 1 || coef[0] == -1){
                coef[0] = String(coef[0]).slice(0, -1);
            }
            
            let signInBetween = "";
            // coef[0]*answer + coef[1] = coef[2]
            if (difficultycheck === difficulties[0] || difficultycheck === difficulties[1] || randomChoice([0, 1]) == 0){
                if (coefSign[1] == "+"){
                    signInBetween = "+";
                }
                Qlist.push(new exercise(`\\( ${coef[0]}x ${signInBetween} ${coef[1]} = ${coef[2]} \\)` + answerFieldForLinearEquation, answer));
            }
            // coef[1] + coef[0]*answer = coef[2]
            else{
                if (coefSign[0] == "+"){
                    signInBetween = "+";
                }
                Qlist.push(new exercise(`\\( ${coef[1]} ${signInBetween} ${coef[0]}x = ${coef[2]} \\)` + answerFieldForLinearEquation, answer));
            }
        }
        // Quadratic equation
        else if (Q[i] === 7){
            let answer = [], coef = [];
            let tmp, answerBound, coefBound;
            if (difficultycheck === difficulties[0]){
                answerBound = [[1,5],[1,5]];
                coefBound = [1,1];
            }
            else if (difficultycheck === difficulties[1]){
                answerBound = [[1,10],[1,10]];
                coefBound = [1,1];
            }
            else if (difficultycheck === difficulties[2]){
                answerBound = [[-5,5],[-5,5]];
                coefBound = [-1,1];
            }
            else if (difficultycheck === difficulties[3]){
                answerBound = [[-5,5],[-5,5]];
                coefBound = [-5,5];
            }
            else if (difficultycheck === difficulties[4]){
                answerBound = [[-10,10],[-10,10]];
                coefBound = [-5,5];
            }
            else if (difficultycheck === difficulties[5]){
                answerBound = [[-10,10],[-10,10]];
                coefBound = [-10,10];
            }

            for (let i of Array(2).keys()){
                // determine answer
                do {
                    tmp = randomIntInClosedRange(answerBound[i][0], answerBound[i][1]);    //[answerBound[0], answerBound[1]] without 0
                } while (tmp == 0);
                answer.push(tmp);    //[answerBound[0], answerBound[1]]
            }
            
            // make sure answer[0] <= answer[1]
            if (answer[0] > answer[1]){
                [answer[0], answer[1]] = switchVariablesValues(answer[0], answer[1]);
            }

            // generate coefs
            do {
                tmp = randomIntInClosedRange(coefBound[0], coefBound[1]);    //[coefBound[0], coefBound[1]] without 0
            } while (tmp == 0);
            coef.push(tmp);
            coef.push(-(answer[0]+answer[1])*coef[0]);
            coef.push(answer[0]*answer[1]*coef[0]);

            let signInBetween = [];
            for (let i of Array(2).keys()){
                if (coef[i + 1] < 0){
                    signInBetween.push("");
                }
                else{
                    signInBetween.push("+");
                }
            }

            // change 1x and -1x to x and -x.
            for (let i of [0,1]){
                if (coef[i] == 1 || coef[i] == -1){
                    coef[i] = String(coef[i]).slice(0, -1);
                }
            }
            let firstOrderTerm = `${coef[1]}x`;
            if (coef[1] === 0){
                firstOrderTerm = "";
                signInBetween[0] = "";
            }
            Qlist.push(new exercise(`\\( ${coef[0]} x^2 ${signInBetween[0]}` + firstOrderTerm + `${signInBetween[1]} ${coef[2]} = 0 \\)`, answer));
        }
        // Unit conversion
        else if (Q[i] === 8){
            let unitsConversionSample;
            let aValueUnitConversion = randomIntInClosedRange(1, 20);   // [1, 20]
            let fixedDigits = 1;
            if (difficultycheck === difficulties[0]){
                unitsConversionSample = [massUnitsConversion, timeUnitsConversion];
            }
            else if (difficultycheck === difficulties[1]){
                unitsConversionSample = [massUnitsConversion, timeUnitsConversion, lengthUnitsConversion];
            }
            else if (difficultycheck === difficulties[2]){
                unitsConversionSample = [massUnitsConversion, timeUnitsConversion, lengthUnitsConversion, areaUnitsConversion];
            }
            else if (difficultycheck === difficulties[3]){
                unitsConversionSample = [massUnitsConversion, timeUnitsConversion, lengthUnitsConversion, areaUnitsConversion, volumeUnits_m_Conversion, volumeUnits_L_Conversion];
                aValueUnitConversion = randomInClosedRange(1, 10).toFixed(fixedDigits);
            }
            else if (difficultycheck === difficulties[4] || difficultycheck === difficulties[5]){
                unitsConversionSample = [lengthUnitsConversion, areaUnitsConversion, volumeUnits_m_Conversion, volumeUnits_L_Conversion, volumeUnits_Extended_Conversion, massUnitsConversion, timeUnitsConversion, speedUnitsConversion];
                aValueUnitConversion = randomInClosedRange(1, 100).toFixed(fixedDigits);
            }
            
            unitConversion = randomChoice(unitsConversionSample);
            units = [...unitConversion.keys()];

            // randomly pick two units from lengthUnits
            aUnit = randomChoice(units);
            units.splice(units.indexOf(aUnit), 1);
            bUnit = randomChoice(units);
            let [aUnitNumber, bUnitNumber] = [unitConversion.get(aUnit), unitConversion.get(bUnit)];
            let [aUnitInLatex, bUnitInLatex] = [aUnit, bUnit];
            
            // unitInLatex
            aValueInUnitList.push(aValueUnitConversion);
            aUnitInLatexList.push(unit2Latex(aUnitInLatex));
            bUnitInLatexList.push(unit2Latex(bUnitInLatex));

            let answer = aValueUnitConversion*aUnitNumber/bUnitNumber;
            // Making sure the answer is an integer if it is an integer. (Stupid JavaScript)
            if (aUnitNumber >= bUnitNumber || ((difficultycheck === difficulties[4] || difficultycheck === difficulties[5]) && aUnitNumber >= bUnitNumber*10**fixedDigits)){
                answer = Math.round(answer);
                printOut = String(answer);
            }            
            else if (unitConversion == timeUnitsConversion || unitConversion == speedUnitsConversion){
                // If the answer is not an integer(only in time and speed unit conversion it might not be terminating), use fraction.
                // reduceFraction can only work when arguments it takes are integers.
                // Math.round is used because of the precision problem. JavaScript cannot even calculate 71.6*360*10 correctly. Solution is to make sure the number I give are integers, then small errors can just be rounded
                printOut = reduceFraction(Math.round(aValueUnitConversion*aUnitNumber*10**fixedDigits), Math.round(bUnitNumber*10**fixedDigits));
                if (printOut.includes("/")){
                    answer = printOut.split("/")[0]/printOut.split("/")[1];
                }
            }
            else{
                // If the answer is a terminating decimal, in our case when it is divided by 整十数, use the tailered exponentialCalculator.
                answer = exponentialCalculator(aValueUnitConversion, aUnitNumber, bUnitNumber);
                printOut = String(answer);
            }

            if (!printOut.includes("/") && (answer >= 1e4 || answer <= 1e-4)){
                // If the answer is too large to be displayed, use exponential notation.
                printOut = answer.toExponential();
            }
            Qlist.push(new exercise(`\\( ${aValueUnitConversion} ${aUnitInLatex} = ? ${bUnitInLatex}\\)`, answer, printOut));
        }
        else if (Q[i] === 9){
            let vectorBound, aBound, bBound, a, b, matrixLaTeX;
            let [coefInVector, matrix] = [[], []];
            if (difficultycheck === difficulties[0]){
                vectorBound = [0, 5];
                aBound = [1, 1];
                bBound = [1, 1];
            }
            else if (difficultycheck === difficulties[1]){
                vectorBound = [0, 10];
                aBound = [1, 1];
                bBound = [-1, 1];
            }
            else if (difficultycheck === difficulties[2]){
                vectorBound = [-5, 5];
                aBound = [1, 1];
                bBound = [-1, 1];
            }
            else if (difficultycheck === difficulties[3]){
                vectorBound = [-5, 5];
                aBound = [-5, 5];
                bBound = [-5, 5];
            }
            else if (difficultycheck === difficulties[4]){
                vectorBound = [-10, 10];
                aBound = [-10, 10];
                bBound = [-10, 10];
            }
            else if (difficultycheck === difficulties[5]){
                vectorBound = [-100, 100];
                aBound = [-100, 100];
                bBound = [-100, 100];
            }

            // determine a and b
            do{
                a = randomIntInClosedRange(aBound[0], aBound[1]);
            } while (a == 0)
            do{
                b = randomIntInClosedRange(bBound[0], bBound[1]);
            } while (b == 0)
            // determine coefficients in vector
            for (let _ of Array(4).keys()){
                coefInVector.push(randomIntInClosedRange(vectorBound[0], vectorBound[1]));
            }

            // construct two matrices
            for (let j of [0,1]){
                matrixLaTeX = "\\begin{bmatrix}";
                for (let k of [0,1]){
                    matrixLaTeX = matrixLaTeX.concat(`${coefInVector[j*2+k]} \\\\`);
                }
                matrixLaTeX = matrixLaTeX.concat("\\end{bmatrix}");
                matrix.push(matrixLaTeX);
            }
            answer = `${a*coefInVector[0] + b*coefInVector[2]},${a*coefInVector[1] + b*coefInVector[3]}`;
            let aText = `${a}`;
            let bText = `${b}`;
            if (a == 1){
                aText = "";
            }
            else if (a == -1){
                aText = "-";
            }
            if (b == 1){
                bText = "+";
            }
            else if (b == -1){
                bText = "-";
            }
            else if (b > 0){
                bText = `+ ${b}`;
            }
            Qlist.push(new exercise(`\\( ${aText}${matrix[0]} ${bText}${matrix[1]} = \\)`, answer));
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
            Qindex = nby4*i + j;
            if (Qindex < n){
                let li = ol.appendChild(document.createElement("li"));
                if (Q[Qindex] in [...Array(7).keys()] || Q[Qindex] == 9){
                    li.innerHTML = Qlist[Qindex].question + " ";
                    let input = li.appendChild(document.createElement("input"));
                    input.className = "questionbox";
                    input.autocomplete = "off";
                    input.name = "userinput";
                    input.id = `Q_${nby4*i+j}`;
                    input.type = "text";
                    
                    // determine inputmode (when there are fractions, change to textpad due to stupid Gboard which doesn't have forward slash in numericpad)
                    if (Q[Qindex] == 4 || Q[Qindex] == 5){
                        input.inputMode = "text";
                    }
                    else{
                        input.inputMode = "numeric";
                    }

                    let img = li.appendChild(document.createElement("img"));
                    img.hidden = true;
                }
                else if (Q[Qindex] == 7){
                    // special for quadratic equation
                    li.innerHTML = Qlist[Qindex].question + "<br>";
                    for (let k of Array(2).keys()){
                        let span = li.appendChild(document.createElement("span"));
                        span.className = "spanForQuadraticEquation";
                        if (k == 0){
                            span.textContent = `\\(x_{1}=\\) `;
                        }
                        else{
                            span.textContent = `\\(,x_{2}=\\) `;
                        }
                        let input = li.appendChild(document.createElement("input"));
                        input.className = "questionboxForQuadraticEquation";
                        input.autocomplete = "off";
                        input.name = "userinput";
                        input.id = `Q_${nby4*i+j}_${k}`;
                        input.type = "text";
                        input.inputMode = "numeric";
                        let img = li.appendChild(document.createElement("img"));
                        img.id = `img_${nby4*i+j}_${1-k}`;
                        img.hidden = true;
                    }
                }
                else if (Q[Qindex] == 8){
                    // special for unit conversion
                    li.innerHTML = "\\(" + aValueInUnitList[unitIndex] + `~\\)`;
                    let span = li.appendChild(document.createElement("span"));
                    span.className = "spanForUnitConversion";
                    span.textContent = "\\(" + aUnitInLatexList[unitIndex] + `=~\\)`;
                    let input = li.appendChild(document.createElement("input"));
                    input.className = "questionbox";
                    input.autocomplete = "off";
                    input.name = "userinput";
                    input.id = `Q_${nby4*i+j}`;
                    input.type = "text";
                    input.inputMode = "numeric";
                    span = li.appendChild(document.createElement("span"));
                    span.className = "spanForUnitConversion";
                    span.textContent = "\\(~" + bUnitInLatexList[unitIndex] + `\\)`;
                    let img = li.appendChild(document.createElement("img"));
                    img.hidden = true;
                    unitIndex += 1;
                }
            }
        }
        section.hidden = false;
    }
    
    // Get all of the input fields on the page. When "Enter" is pressed on one textfield, it will move to the next textfield. When "Shift + Enter" is pressed on one textfield, it will move to the previous textfield.
    var inputFields = document.querySelectorAll("#questions input");
    // Add an event listener to the enter key on each input field.
    inputFields.forEach((inputField) => {
        inputField.addEventListener("keydown", (event) => {
            if (event.key == "Enter"){
                let aInputField;
                let inputIdInfo = inputField.id.split("_");
                let Q_tmp = inputIdInfo[1];
                    if (!event.shiftKey) {
                        // Get the next input field.
                        if (inputIdInfo.length === 3){
                            let subNumber = Number(inputIdInfo[2]);
                            if (subNumber === 0){
                                aInputField = document.getElementById(`Q_${Q_tmp}_1`);
                            }
                            ////(1)
                            else{
                                let Q_tmp_adjacent = Number(inputIdInfo[1]) + 1;   // fetch question number
                                if (Q[Q_tmp_adjacent] === 7){
                                    aInputField = document.getElementById(`Q_${Q_tmp_adjacent}_0`);
                                }
                                else{
                                    aInputField = document.getElementById(`Q_${Q_tmp_adjacent}`);
                                }
                            }
                        }
                        ////(1)
                        else{
                            let Q_tmp_adjacent = Number(inputIdInfo[1]) + 1;   // fetch question number
                            if (Q[Q_tmp_adjacent] === 7){
                                aInputField = document.getElementById(`Q_${Q_tmp_adjacent}_0`);
                            }
                            else{
                                aInputField = document.getElementById(`Q_${Q_tmp_adjacent}`);
                            }
                        }
                    }
                    else{
                        // Get the previous input field
                        if (inputIdInfo.length === 3){
                            let subNumber = Number(inputIdInfo[2]);
                            if (subNumber === 1){
                                aInputField = document.getElementById(`Q_${Q_tmp}_0`);
                            }
                            ////(2)
                            else{
                                let Q_tmp_adjacent = Number(inputIdInfo[1]) - 1;   // fetch question number
                                if (Q[Q_tmp_adjacent] === 7){
                                    aInputField = document.getElementById(`Q_${Q_tmp_adjacent}_1`);
                                }
                                else{
                                    aInputField = document.getElementById(`Q_${Q_tmp_adjacent}`);
                                }
                            }
                        }
                        ////(2)
                        else{
                            let Q_tmp_adjacent = Number(inputIdInfo[1]) - 1;   // fetch question number
                            if (Q[Q_tmp_adjacent] === 7){
                                aInputField = document.getElementById(`Q_${Q_tmp_adjacent}_1`);
                            }
                            else{
                                aInputField = document.getElementById(`Q_${Q_tmp_adjacent}`);
                            }
                        }
                    }                
                // If there exists a input field, focus on it.
                if (aInputField) {
                    aInputField.focus();
                }
                else if (!event.shiftKey && mode == 1){
                    /* stop.scrollIntoView(); */
                    stop.focus();
                    /* window.scrollTo({top: 0}); */
                    event.preventDefault();
                }
            }
            // Press and hold ArrowUp key or ArrowDown key to display your answer beautifully (LaTeX supported).
            else if (event.key == "ArrowDown" || event.key == "ArrowUp"){
                event.preventDefault();
                if (!event.repeat){
                    let span = inputField.parentElement.appendChild(document.createElement("span"));
                    span.className = "spanMath";
                    let str = inputField.value;
                    if (str != ""){
                        // convert cases like 1/2 to \frac{1}{2}
                        let valid = true;   // check if it is a valid input in general.
                        if (str.includes("/")){
                            for (let i of str){
                                if (!("0123456789/-.".includes(i))){
                                    valid = false;
                                }
                            }
                            if (valid){
                                s = str.split("/");
                                // One "/" splits string in two
                                if (s.length == 2){
                                    // cases like -1/2.
                                    if (str[0] == "-"){
                                        str = `-\\frac{${s[0].slice(1)}}{${s[1]}}`;
                                    }
                                    else{
                                        str = `\\frac{${s[0]}}{${s[1]}}`;
                                    }
                                }
                            }
                        }
                        span.innerHTML = " \\(" + str + "\\)";
                        MathJax.typeset([span]);
                        window.addEventListener("keyup", function(){
                            let elems = document.getElementsByClassName("spanMath");
                            for (let elem of elems){
                                elem.parentElement.removeChild(elem);
                            }
                        })
                    }
                }
            }
            
        });
    });

    // focus on the first question after clicking "Start" button.
    document.querySelector("#questions input").focus();

    // Load Katex, if Katex is used.
    // renderMathInElement(document.body);  
    
    // load MathJax
    MathJax.typeset();
    
    // reset scoreList to zeros
    scoreList = new Array(n);
    for (let i=0; i<n; ++i){scoreList[i] = 0;}

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
    
    if (isIPhone() && !alertIPhoneHasDone){
        alert(alertIPhoneMessage);
        alertIPhoneHasDone = true;
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
                // iPhone special ("00" to '-')
                if (isIPhone() && input.value.slice(0,2) == "00"){
                    input.value = '-' + input.value.slice(2);
                }

                await sleep(1);
                answerResponse(input);
                correctHurray();
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

        // iPhone special ("00" to '-')
        for (let input of inputs){
            input.addEventListener('input', async function() {
                if (isIPhone() && input.value.slice(0,2) == "00"){
                    input.value = '-' + input.value.slice(2);
                }
            });
        }

        checkAnswer.addEventListener("click", async function(){
            for (let input of inputs){
                answerResponse(input);
            }
            correctHurray();
        });
    }
}

function correctHurray(){
    // make confetti if all correct.
    if (result == Number(getOption("NOQ"))){
        confettiCannon();
    }
}

function getAnswer(input){
    let inputIdInfo = input.id.split("_");
    let Q_Number = Number(inputIdInfo[1]);   // fetch question number
    if (inputIdInfo.length == 2){
        let img = input.parentElement.querySelector("img"); // make image element inside parent element of input
        input.value = String(Qlist[Q_Number].printOutAnswer);
        imgResponse(img, "Reveal");
        scoreList[Q_Number] = 0;
    }
    else{
        // special for Quadratic questions
        let subNumber = Number(inputIdInfo[2]);
        let img = document.getElementById(`img_${Q_Number}_${subNumber}`)
        input.value = String(Qlist[Q_Number].printOutAnswer[subNumber]);
        imgResponse(img, "Reveal");
        scoreList[Q_Number][subNumber] = 0;
    }
    
    scoreUpdate();
}

// check answer and store every single score (1 for correct, 0 for wrong) in variable "scoreList".
function answerResponse(input){
    let userInput = input.value;                // fetch user input value
    let inputIdInfo = input.id.split("_");
    let Q_Number = Number(inputIdInfo[1]);   // fetch question number
    let subNumber, singleScore;
    if (inputIdInfo.length === 2){
        img = input.parentElement.querySelector("img"); // make image element inside parent element of input
        singleScore = inputCheck(userInput, img, Q_Number);
    }
    // special for Quadratic equation
    else if (inputIdInfo.length === 3){
        subNumber = Number(inputIdInfo[2]);
        let img = document.getElementById(`img_${Q_Number}_${subNumber}`);
        let anotherInput = document.getElementById(`Q_${Q_Number}_${1-subNumber}`).value;
        let anotherImg = document.getElementById(`img_${Q_Number}_${1-subNumber}`);
        
        let [singleScore_0, singleScore_1] = [inputCheck(userInput, img, Q_Number), inputCheck(anotherInput, anotherImg, Q_Number)];

        // capture special case (e.g x^2-3x+2=0 where answer x1=1, x2=1 is not accepted)
        if (Qlist[Q_Number].answer.includes(Number(userInput)) && Qlist[Q_Number].answer.includes(Number(anotherInput))){
            if ((Number(userInput) == Number(anotherInput)) && (Qlist[Q_Number].answer[0] != Qlist[Q_Number].answer[1])){
                // half right, half wrong
                imgResponse(anotherImg, "Correct");
                imgResponse(img, "Wrong");
                [singleScore_0, singleScore_1] = [0, 0.5];
            }
        }
        singleScore = [singleScore_0, singleScore_1];
    }

    scoreList[Q_Number] = singleScore;
    scoreUpdate();
}

// check answer for every input
function inputCheck(userInput, img, Q_Number, singleScore=0){
    // trim whitespaces from both ends of a string
    userInput = userInput.trim();

    let invalidInput = false;
    // if the user didn't type anything in input, don't judge them (be kind).
    if (userInput === ""){
        img.hidden = true;
    }
    // Ester Egg: if "spare me" is typed, then it counts as correct.
    else if (userInput === spareMe){
        imgResponse(img, "Correct");
        singleScore = 1;
    }
    else{
        // typo check mechanism. Only these chars "0123456789/+-.e," are valid.
        let nonNumber = "/-.";
        for (var i of Array(userInput.length).keys()){
            if (!("0123456789/+-.e,".includes(userInput[i]))){
                imgResponse(img, "Invalid");
                invalidInput = true;
                return singleScore;
            }
            // check cases where nonNumber stick together, "/-?" is exempted. (? is a number)
            if (nonNumber.includes(userInput[i])){
                if (nonNumber.includes(userInput[i + 1]) && !(userInput[i] == "/" && userInput[i + 1] == "-" && "0123456789".includes(userInput[i + 2]))){
                    imgResponse(img, "Invalid");
                    invalidInput = true;
                    return singleScore;
                }
            }
        }

        // '-' that does not placed first as regular minus sign is considered invalid.
        let minusSignCount = countOneChar("-", userInput);
        let firstMinusSign = (userInput[0] == '-');
        let slashMinusincluded = userInput.includes("/-");
        let eMinusincluded = userInput.includes("e-");
        let commaMinusincluded = userInput.includes(",-");
        // if there is only one "-", it should be first or "/-" or "e-" or ",-". if there are two "-", it should be "-?/-?" or "-?,-?". if there are more than two, then it is not valid.
        if ((minusSignCount == 1 && !(firstMinusSign || slashMinusincluded || eMinusincluded || commaMinusincluded)) || (minusSignCount == 2 && !((firstMinusSign && slashMinusincluded) || (firstMinusSign && commaMinusincluded))) || (minusSignCount > 2)){
            imgResponse(img, "Invalid");
            invalidInput = true;
            return singleScore;
        }

        // if input is considered valid,
        if (!(invalidInput)){
            // if input is a fraction,
            if (userInput.includes("/")){
                let str = userInput.split("/");
                // if there is and only one "/" which divide userinput in two strings, and first string is non-zero long, and second is not equal to 0 nor empty.
                if (str.length === 2 && str[0].length != 0 && str[1] != 0){
                    if (eval(userInput) === Qlist[Q_Number].answer){
                        imgResponse(img, "Correct");
                        singleScore = 1;
                    }
                    else{
                        imgResponse(img, "Wrong");
                    }
                }
                else{
                    // Wrong expression
                    imgResponse(img, "Invalid");
                }
            }
            // if there are two answers (special for Quadratic equation)
            else if (Qlist[Q_Number].answer.length === 2){
                if (Qlist[Q_Number].answer.includes(Number(userInput))){
                    // every correct input in Quadratic equation counts 0.5 point.
                    imgResponse(img, "Correct");
                    singleScore = 0.5;
                }
                else{
                    imgResponse(img, "Wrong");
                }
            }
            // if input is just a integer or userInput is the same as the string of answer.
            else if (Number(userInput) === Qlist[Q_Number].answer || userInput == Qlist[Q_Number].answer){
                imgResponse(img, "Correct");
                singleScore = 1;
            }
            else{
                imgResponse(img, "Wrong");
            }
        }
    }
    return singleScore;
}

function imgResponse(img, answerIs) {
    img.hidden = false;
    if (answerIs === "Correct"){
        img.src = inAFolder + "./static/accept.png";
        img.alt = "Correct";
    }
    else if (answerIs === "Wrong"){
        img.src = inAFolder + "./static/cross.png";
        img.alt = "Wrong";
    }
    else if (answerIs === "Invalid"){
        img.src = inAFolder + "./static/warning.png";
        img.alt = "Invalid";
    }
    else if (answerIs === "Reveal"){
        img.src = inAFolder + "./static/common-answers.png";
        img.alt = "Explore further";
    }
    else{
        captureUnexpected("imgResponse");
    }
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
    // handle special case, no common factors, meaning one of them is zero or both. 0/0 will be defined as 0 because it might exist in situation like 3/2-3/2.
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
    let bCandidates, a;
    do {
        a = randomIntInClosedRange(1, aUpperBound);      // [1,aUpperBound]
        if (proper){
            // [a,bUpperBound] where there is only one common factor
            bCandidates = [...Array(bUpperBound - a + 1).keys()].map(i => i + a).filter(number => commonFactors(a,number).length === 1);
        }
        else{
            // [1,bUpperBound] where there is only one common factor
            bCandidates = [...Array(bUpperBound).keys()].map(i => i + 1).filter(number => commonFactors(a,number).length === 1);
        }
    } while (bCandidates.length == 0)
    
    b = randomChoice(bCandidates);

    // b could be 1
    if (b === 1){
        return [String(a), String(`${a}/${b}`), true];              // the third boolean value shows whether this is an integer.
    }
    else{
        return [`\\frac{${a}}{${b}}`, String(`${a}/${b}`), false];  // the third boolean value shows whether this is an integer.
    }
}

function twoFractionsWithSameDenominator(aUpperBound, bUpperBound){
    let aCandidates, b;
    b = randomIntInClosedRange(2, bUpperBound);      // [2,bUpperBound]
    aCandidates = [...Array(aUpperBound).keys()].map(i => i + 1).filter(number => commonFactors(b,number).length === 1);// [a,bUpperBound] where there is only one common factor
    
    // get two nominators(can be the same).
    var [a1, a2] = [randomChoice(aCandidates), randomChoice(aCandidates)];

    return [`\\frac{${a1}}{${b}}`, String(`${a1}/${b}`), `\\frac{${a2}}{${b}}`, String(`${a2}/${b}`)];  // return two fractions 
}

function switchVariablesValues(a, b){
    return [b, a];
}

// Not a perfect function in general cases, but enough for this program.
function unit2Latex(string){
    if (string.includes("^")){
        return "\\text{" + string.replace("^", "}^");
    }
    if (string.includes("/")){
        let s = string.split("/");
        return `\\frac{\\text{${s[0]}}}{\\text{${s[1]}}}`;
    }
    else{
        return `\\text{${string}}`;
    }
}

function toExp(n){
    return Number.parseFloat(n).toExponential();
}

// exponential calculator a*b/c
function exponentialCalculator(a, b, c){
    [a, b, c] = [String(toExp(a)), String(toExp(b)), String(toExp(c))];
    let [a1, a2] = a.split("e");
    let [b1, b2] = b.split("e");
    let [c1, c2] = c.split("e");
    let [res1, res2] = [Number(a1)*Number(b1)/Number(c1), Number(a2)+Number(b2)-Number(c2)];
    return Number(`${res1}e${res2}`);
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
        alert(alertCookiesCleared);
    }
    else {
        alert(alertMostCookiesCleared + `\n${document.cookie}`);
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
    result = 0;
    for (let i of scoreList) {
        // special for Quadratic equation
        if (i.length == 2){
            for (let j = 0; j < 2; ++j){
                result += i[j];
            }
        }
        else{
            result += i;
        }
    }
    score.textContent = scoreName + `: ${result}/${getOption("NOQ")}`;
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
    header_h1.textContent = timeTrialModeName;
    time.hidden = false;
    setTimeToZero();
    timeTrial.value = returnToNormalModeName;
    clearInterval(printTime);
    timeTrialMode();
}

function timeTrialClickInTimeTrialMode(){
    header_h1.textContent = arithmetricProblemsTitleName;
    time.hidden = true;
    timeTrial.value = timeTrialModeName;
    normalMode();
}

function setTimeToZero(){
    time.textContent = timeName + ": 00:00.0";
}

function stopper(){
    clearInterval(printTime);
    stop.hidden=true;
    checkAnswer.hidden=false;
    checkAnswer.focus();
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
        time.textContent = timeName + `: ${minutes}:${seconds}.${miliseconds}`;
    },100);
    stop.addEventListener("click", stopper, once);
}

function confettiCannon(){
    var count = 200;
    var defaults = {
    origin: { y: 0.75 }
    };

    function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
    }

    fire(0.25, {
    spread: 26,
    startVelocity: 55,
    });
    fire(0.2, {
    spread: 60,
    });
    fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 45,
    });
}
/*
function confettiSchoolPride(){
    // do this for 2 seconds
    var duration = 2 * 1000;
    var end = Date.now() + duration;

    (function frame() {
    // launch a few confetti from the left edge
    confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });
    // and launch a few from the right edge
    confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });

    // keep going until we are out of time
    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}
 */
const repeat = (arr, n) => [].concat(...Array(n).fill(arr));

function countOneChar(char, str) {
    let count = 0;
    for (let c of str) {
        if (char == c){
            count += 1;
        }
    }
    return count;
}

function isIPhone(){
    let UA = navigator.userAgent;
    if (UA.includes("iPhone")){
        return true;
    }
    else{
        return false;
    }
}

// Get a number in range [min, max)
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Get a number in closed range [min, max]
function randomInClosedRange(min, max) {
    return Math.random() * (max - min + 1) + min;
}

// Get an integer in range [min, max)
function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Get an integer in closed range [min, max]
function randomIntInClosedRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get a random element from an array
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var duration = 17 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomColor() {
    let colors = ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    return randomChoice(colors);
}

function snow() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);
    
    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'], // [randomColor()],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
    });

    if (timeLeft > 0) {
        requestAnimationFrame(snow);
    }
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
