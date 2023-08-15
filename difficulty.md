Here are some clarifications of different difficulty levels. (Updated 2023-08-15)

**Note: All variables presented below $\in \mathbb{Z}$.**

# Overview
||[Addition](#Addition)|[Subtraction](#Subtraction)|[Multiplication](#Multiplication)|[Division](#Division)|[Fraction(+-)](#Fraction(+-))|[Fraction(*/)](#Fraction(*/))|[Linear equation](<#Linear equation>)|[Quadratic equation](<#Quadratic equation>)|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|_Notations_|$$a+b$$|$$a-b$$|$$a \times b$$|$$a \div b$$|$$\frac{a}{b}+\frac{c}{d}$$ $$\frac{a}{b}+\frac{c}{d}$$|$$\frac{a}{b}\times \frac{c}{d}$$ $$\frac{a}{b}\div \frac{c}{d}$$|$$\frac{a}{b} \times \frac{c}{d}$$ $$\frac{a}{b} \div \frac{c}{d}$$|$$a_{2}x^{2} + a_{1}x + a_{0} = 0$$ Derived from $$\text{coef} \cdot (x - \text{answer}[0])(x - \text{answer}[1]) = 0$$|
|**Beginner**|$$0 \leq a \leq 10$$ $$0 \leq b \leq 10$$|$$0 \leq a \leq 10$$ $$0 \leq b \leq 10$$|$$0 \leq a \leq 5$$ $$0 \leq b \leq 5$$|$$0 \leq a \leq 20$$|$$0 \leq a \leq 10$$ $$0 \leq b \leq 10$$ $$b=d$$|$$0 \leq a \leq 5$$ $$0 \leq b \leq 5$$|$$1 \leq x \leq 5$$ $$1 \leq \text{coef}[0] \leq 5$$ $$-5 \leq \text{coef}[1] \leq 5$$|$$1 \leq \text{answer}[0] \leq 5$$ $$1 \leq \text{answer}[1] \leq 5$$ $$\text{coef} = 1$$|
|**Easy**|$$0 \leq a \leq 30$$ $$0 \leq b \leq 30$$|$$0 \leq a \leq 30$$ $$0 \leq b \leq 30$$|$$0 \leq a \leq 10$$ $$0 \leq b \leq 10$$|$$0 \leq a \leq 50$$|$$0 \leq a \leq 20$$ $$0 \leq b \leq 20$$ $$b=d$$|$$0 \leq a \leq 10$$ $$0 \leq b \leq 10$$|$$1 \leq x \leq 10$$ $$1 \leq \text{coef}[0] \leq 10$$ $$-10 \leq \text{coef}[1] \leq 10$$|$$1 \leq \text{answer}[0] \leq 10$$ $$1 \leq \text{answer}[1] \leq 10$$ $$\text{coef} = 1$$|
|**Intermediate**|$$0 \leq a \leq 50$$ $$0 \leq b \leq 50$$|$$0 \leq a \leq 50$$ $$0 \leq b \leq 50$$|$$0 \leq a \leq 20$$ $$0 \leq b \leq 20$$|$$0 \leq a \leq 80$$|$$0 \leq a \leq 10$$ $$0 \leq b \leq 10$$|$$0 \leq a \leq 20$$ $$0 \leq b \leq 20$$|$$-5 \leq x \leq 5$$ $$-5 \leq \text{coef}[0] \leq 5$$ $$-10 \leq \text{coef}[1] \leq 10$$|$$-5 \leq \text{answer}[0] \leq 5$$ $$-5 \leq \text{answer}[1] \leq 5$$ $$-1 \leq \text{coef} \leq 1$$|
|**Hard**|$$0 \leq a \leq 100$$ $$0 \leq b \leq 100$$|$$0 \leq a \leq 100$$ $$0 \leq b \leq 100$$|$$0 \leq a \leq 50$$ $$0 \leq b \leq 50$$|$$0 \leq a \leq 100$$|$$0 \leq a \leq 20$$ $$0 \leq b \leq 20$$|$$0 \leq a \leq 50$$ $$0 \leq b \leq 50$$|$$-10 \leq x \leq 10$$ $$-10 \leq \text{coef}[0] \leq 10$$ $$-10 \leq \text{coef}[1] \leq 10$$|$$-5 \leq \text{answer}[0] \leq 5$$ $$-5 \leq \text{answer}[1] \leq 5$$ $$-5 \leq \text{coef} \leq 5$$|
|**Hell**|$$0 \leq a \leq 1000$$ $$0 \leq b \leq 1000$$|$$0 \leq a \leq 1000$$ $$0 \leq b \leq 1000$$|$$0 \leq a \leq 100$$ $$0 \leq b \leq 100$$|$$0 \leq a \leq 1000$$|$$0 \leq a \leq 100$$ $$0 \leq b \leq 100$$|$$0 \leq a \leq 100$$ $$0 \leq b \leq 100$$|$$-30 \leq x \leq 30$$ $$-30 \leq \text{coef}[0] \leq 30$$ $$-100 \leq \text{coef}[1] \leq 100$$|$$-10 \leq \text{answer}[0] \leq 10$$ $$-10 \leq \text{answer}[1] \leq 10$$ $$-5 \leq \text{coef} \leq 5$$|
|**Asian**|$$0 \leq a \leq 10000$$ $$0 \leq b \leq 10000$$|$$0 \leq a \leq 10000$$ $$0 \leq b \leq 10000$$|$$0 \leq a \leq 1000$$ $$0 \leq b \leq 1000$$|$$0 \leq a \leq 100000$$|$$0 \leq a \leq 1000$$ $$0 \leq b \leq 1000$$|$$0 \leq a \leq 1000$$ $$0 \leq b \leq 1000$$|$$-100 \leq x \leq 1000$$ $$-100 \leq \text{coef}[0] \leq 100$$ $$-100 \leq \text{coef}[1] \leq 100$$|$$-10 \leq \text{answer}[0] \leq 10$$ $$-10 \leq \text{answer}[1] \leq 10$$ $$-10 \leq \text{coef} \leq 10$$|

# Addition
<details>
<summary>code snippet</summary>

```
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
    a = Math.floor((Math.random() * (aUpperBound - 1))) + 1;
    b = Math.floor((Math.random() * (bUpperBound - 1))) + 1;
}
else{
    a = Math.floor((Math.random() * aUpperBound));
    b = Math.floor((Math.random() * bUpperBound));
}
if (a == 0 || b == 0){
    zeroInAddition = true;
}

Qlist.push(new exercise(`\\(${a} + ${b} = \\)`, Number(a + b)));
```
</details>

## Notations
$$a + b$$
## General rules
To reduce the occurence of zeros in equation, zeros can exist in highest one equation.
## Beginner
$$0 \leq a \leq 10, 0 \leq b \leq 10$$
## Easy
$$0 \leq a \leq 30, 0 \leq b \leq 30$$
## Intermediate
$$0 \leq a \leq 50, 0 \leq b \leq 50$$
## Hard
$$0 \leq a \leq 100, 0 \leq b \leq 100$$
## Hell
$$0 \leq a \leq 1000, 0 \leq b \leq 1000$$
## Asian
$$0 \leq a \leq 10000, 0 \leq b \leq 10000$$

# Subtraction
<details>
<summary>code snippet</summary>

```
let aUpperBound;
let bUpperBound;
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
let a = Math.floor((Math.random() * aUpperBound));
let b = Math.floor((Math.random() * bUpperBound));
if (a < b && (difficultycheck === difficulties[0]||difficultycheck === difficulties[1])){
    [a,b] = switchVariablesValues(a,b);
}
Qlist.push(new exercise(`\\(${a} - ${b} = \\)`, Number(a - b)));
```
</details>

## Notations
$$ a - b$$
## General rules
For **Beginner** and **Easy** mode, $a \geq b$.
## Beginner
$$ 0 \leq a \leq 10, 0 \leq b \leq 10$$
## Easy
$$ 0 \leq a \leq 30, 0 \leq b \leq 30$$
## Intermediate
$$ 0 \leq a \leq 50, 0 \leq b \leq 50$$
## Hard
$$ 0 \leq a \leq 100, 0 \leq b \leq 100$$
## Hell
$$ 0 \leq a \leq 1000, 0 \leq b \leq 1000$$
## Asian
$$ 0 \leq a \leq 10000, 0 \leq b \leq 10000$$

# Multiplication
<details>
<summary>code snippet</summary>

```
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
        a = Math.floor((Math.random() * (aUpperBound - 2))) + 2;
        b = Math.floor((Math.random() * (bUpperBound - 2))) + 2;
    }
    // 0 times non-zero already exists, 1 times non-zero does not exist. (do not choose 0)
    else{
        a = Math.floor((Math.random() * (aUpperBound - 1))) + 1;
        b = Math.floor((Math.random() * (bUpperBound - 1))) + 1;
    }
}
else{
    // 0 times non-zero does not exist, 1 times non-zero already exist. (do not choose 1)
    if (oneInMultiplication){
        do {
            let candidates = [0].concat([...Array(aUpperBound - 2).keys()].map(i => i + 2));
            a = candidates[Math.floor(Math.random() * candidates.length)];
            b = candidates[Math.floor(Math.random() * candidates.length)];
        } while (a == 0 && b == 0)  // delete possibilities to have 0 times 0
    }
    // Neither 0 times non-zero nor 1 times non-zero exist. (choose freely)
    else{
        do {
            a = Math.floor((Math.random() * aUpperBound));
            b = Math.floor((Math.random() * bUpperBound));
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
if (Math.floor(Math.random()*2) === 1){
    [a,b] = switchVariablesValues(a,b);
}

Qlist.push(new exercise(`\\(${a} \\times ${b} = \\)`, Number(a * b)));
```

</details>

## Notations
$$ a \times b$$
## General rules
- $0 \times \text{nonzero}$ should highest exist once.
- $1 \times \text{nonzero}$ should highest exist once.

## Beginner
$$0 \leq a \leq 5, 0 \leq b \leq 5$$
## Easy
$$0 \leq a \leq 10, 0 \leq b \leq 10$$
## Intermediate
$$0 \leq a \leq 20, 0 \leq b \leq 20$$
## Hard
$$0 \leq a \leq 50, 0 \leq b \leq 50$$
## Hell
$$0 \leq a \leq 100, 0 \leq b \leq 100$$
## Asian
$$0 \leq a \leq 1000, 0 \leq b \leq 1000$$

# Division
<details>
<summary>code snippet</summary>

```
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
```

</details>

## Notations
$$ a \div b$$
## General rules
$b$ are chosen from the factors of $a$, so results are always integers. 
## Beginner
$$0 \leq a \leq 20$$
## Easy
$$0 \leq a \leq 50$$
## Intermediate
$$0 \leq a \leq 80$$
## Hard
$$0 \leq a \leq 100$$
## Hell
$$0 \leq a \leq 1000$$
## Asian
$$0 \leq a \leq 100000$$

# Fraction(+-)
<details>
<summary>code snippet</summary>

```
// Caution!!! aUpperBound should always smaller than or equal to bUpperBound.
let aUpperBound, bUpperBound, firstTerm, secondTerm, firstTermToEvaluate, secondTermToEvaluate, firstTermIsInteger, secondTermIsInteger, a, b, c, d;
let calculationTypeForFraction = Math.floor(Math.random() * 2);

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
    // make sure that there are highest one integer in the question.
    do{
        [firstTerm, firstTermToEvaluate, firstTermIsInteger] = fraction(aUpperBound, bUpperBound, proper=false);
        [secondTerm, secondTermToEvaluate, secondTermIsInteger] = fraction(aUpperBound, bUpperBound, proper=false);
    } while (firstTermIsInteger && secondTermIsInteger);
}

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
```

</details>

## Notations
$$\frac{a}{b} + \frac{c}{d}$$
$$\frac{a}{b} - \frac{c}{d}$$
## General rules
- Higest one integer can appear in equations, which means that $1+\frac{1}{2}$ is acceptable.
- $a$ and $c$ have the same interval in terms of same difficulty level. Same rules apply to $b$ and $d$.
- For **Beginner** and **Easy** mode, two fractions with the same denominator appears in equations.
- For **Fraction Subtraction** in **Beginner** and **Easy** mode, the value of the first fraction is larger than the second one.

## Beginner
$$0 \leq a \leq 10, 0 \leq b \leq 10$$
## Easy
$$0 \leq a \leq 20, 0 \leq b \leq 20$$
## Intermediate
$$0 \leq a \leq 10, 0 \leq b \leq 10$$
## Hard
$$0 \leq a \leq 20, 0 \leq b \leq 20$$
## Hell
$$0 \leq a \leq 100, 0 \leq b \leq 100$$
## Asian
$$0 \leq a \leq 1000, 0 \leq b \leq 1000$$

# Fraction(*/)
<details>
<summary>code snippet</summary>

```
// Caution!!! aUpperBound should always smaller than or equal to bUpperBound.
let aUpperBound, bUpperBound, firstTerm, secondTerm, firstTermToEvaluate, secondTermToEvaluate, firstTermIsInteger, secondTermIsInteger, a, b, c, d;
let calculationTypeForFraction = Math.floor(Math.random() * 2);

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
```

</details>

## Notations
$$\frac{a}{b} \times \frac{c}{d}$$
$$\frac{a}{b} \div \frac{c}{d}$$
## General rules
There are highest one integer in a equation.
## Beginner
$$0 \leq a \leq 5, 0 \leq b \leq 5$$
## Easy
$$0 \leq a \leq 10, 0 \leq b \leq 10$$
## Intermediate
$$0 \leq a \leq 20, 0 \leq b \leq 20$$
## Hard
$$0 \leq a \leq 50, 0 \leq b \leq 50$$
## Hell
$$0 \leq a \leq 100, 0 \leq b \leq 100$$
## Asian
$$0 \leq a \leq 1000, 0 \leq b \leq 1000$$

# Linear equation
<details>
<summary>code snippet</summary>

```
let answerBound, answer;
let coef = [];
let coefBound = [];
let coefSign = [];

let answerField = "<br>\\(x=\\)";

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
    answer = Math.floor(Math.random()*(answerBound[1] - answerBound[0] + 1)) + answerBound[0];    //[answerBound[0], answerBound[1]] without 0
} while (answer == 0);
// determine three coefficients, and register the first two coefficients' signs.
for (let i of Array(2).keys()){
    let tmp;
    do {
        tmp = Math.floor(Math.random()*(coefBound[i][1] - coefBound[i][0] + 1)) + coefBound[i][0];    //[coef_1Bound[0], coef_1Bound[0´1]] without 0
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
if (difficultycheck === difficulties[0] || difficultycheck === difficulties[1] || Math.floor(Math.random()*2) == 0){
    if (coefSign[1] == "+"){
        signInBetween = "+";
    }

    Qlist.push(new exercise(`\\( ${coef[0]}x ${signInBetween} ${coef[1]} = ${coef[2]} \\)` + answerField, answer));
}
// coef[1] + coef[0]*answer = coef[2]
else{
    if (coefSign[0] == "+"){
        signInBetween = "+";
    }
    Qlist.push(new exercise(`\\( ${coef[1]} ${signInBetween} ${coef[0]}x = ${coef[2]} \\)` + answerField, answer));
}
```

</details>

## Notations
$$\text{coef}[0]x + \text{coef}[1] = \text{coef}[2]$$
$$\text{coef}[1] + \text{coef}[0]x= \text{coef}[2]$$
## General rules
None
## Beginner
$$1 \leq x \leq 5, 1 \leq \text{coef}[0] \leq 5, -5 \leq \text{coef}[1] \leq 5$$
## Easy
$$1 \leq x \leq 10, 1 \leq \text{coef}[0] \leq 10, -10 \leq \text{coef}[1] \leq 10$$
## Intermediate
$$-5 \leq x \leq 5, -5 \leq \text{coef}[0] \leq 5, -10 \leq \text{coef}[1] \leq 10$$
## Hard
$$-10 \leq x \leq 10, -10 \leq \text{coef}[0] \leq 10, -10 \leq \text{coef}[1] \leq 10$$
## Hell
$$-30 \leq x \leq 30, -30 \leq \text{coef}[0] \leq 30, -100 \leq \text{coef}[1] \leq 100$$
## Asian
$$-100 \leq x \leq 1000, -100 \leq \text{coef}[0] \leq 100, -100 \leq \text{coef}[1] \leq 100$$

# Quadratic equation
<details>
<summary>code snippet</summary>

```
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
        tmp = Math.floor(Math.random()*(answerBound[i][1] - answerBound[i][0] + 1)) + answerBound[i][0];    //[answerBound[0], answerBound[1]] without 0
    } while (tmp == 0);
    answer.push(tmp);    //[answerBound[0], answerBound[1]]
}

// make sure answer[0] <= answer[1]
if (answer[0] > answer[1]){
    [answer[0], answer[1]] = switchVariablesValues(answer[0], answer[1]);
}

// generate coefs
do {
    tmp = Math.floor(Math.random()*(coefBound[1] - coefBound[0] + 1)) + coefBound[0];
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
```
</details>

## Notations
$$a_{2}x^{2} + a_{1}x + a_{0} = 0$$
Derived from
$$\text{coef} \cdot (x - \text{answer}[0])(x - \text{answer}[1]) = 0$$
## General rules
None
## Beginner
$$1 \leq \text{answer}[0] \leq 5, 1 \leq \text{answer}[1] \leq 5, \text{coef} = 1$$
## Easy
$$1 \leq \text{answer}[0] \leq 10, 1 \leq \text{answer}[1] \leq 10, \text{coef} = 1$$
## Intermediate
$$-5 \leq \text{answer}[0] \leq 5, -5 \leq \text{answer}[1] \leq 5, -1 \leq \text{coef} \leq 1$$
## Hard
$$-5 \leq \text{answer}[0] \leq 5, -5 \leq \text{answer}[1] \leq 5, -5 \leq \text{coef} \leq 5$$
## Hell
$$-10 \leq \text{answer}[0] \leq 10, -10 \leq \text{answer}[1] \leq 10, -5 \leq \text{coef} \leq 5$$
## Asian
$$-10 \leq \text{answer}[0] \leq 10, -10 \leq \text{answer}[1] \leq 10, -10 \leq \text{coef} \leq 10$$

Thanks for watching. &#128536;
