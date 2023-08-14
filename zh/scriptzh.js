const lang = "zh";
const exDays = 30;
const peek = document.getElementById("peek");
const github = document.getElementById("github");
const inAFolder = ".";    //used when this script is in a folder.
// Chinese version
const defaultDifficulty = "简单";
const defaultCalculationTypes = ["加法", "减法", "乘法", "除法"];
const difficulties = ["小白", "简单", "中等", "困难", "地狱", "亚洲"];
const calculationTypes = ["加法", "减法", "乘法", "除法", "分数加减法", "分数乘除法", "一元一次方程", "一元二次方程"];
const versionName = "版本";
const AsianName = "亚洲";
const alertPreferencesStored = `你的喜好已成功保存。保存时长为${exDays}天.\n\n喜好 in json:`;
const preferencesCheck = "喜好 in json:";
const spareMe = "饶了我吧";
const alertCookiesCleared = "所有的cookies都已被成功清除！";
const alertMostCookiesCleared = "大部分cookies已被成功清除！\n\n剩余的cookies:";
const scoreName = "成绩";
const timeTrialModeName = "计时模式";
const returnToNormalModeName = "回到普通模式";
const arithmetricProblemsTitleName = "算术";
const timeName = "时间";
peek.innerHTML = `
    <li>如果想要悄咪咪地瞄一眼答案，可以在想要的文本框内右键。&#128541;按住向上键(&#11014;)或者向下键(&#11015;)可以漂亮地显示您的答案(支持<span lang="da-DK" class="en">LaTeX</span>).&#128516;</li>
    <li><span lang="en" class="en"><a href="../en/index.min.html">English version entrance</a></span>, <span lang="da-DK" class="en"><a href="../dk/index.min.html">Indgang til dansk version</a></span></li>
    <li>想<u>加入社区</u>或<u>提供反馈</u>使该网站变得更好吗?可以来<strong lang="en" class="en"><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/discussions">GitHub Discussions</a></strong>转转。在<strong lang="en" class="en"><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/issues">GitHub Issues</a></strong>上可以报告你遇到的问题。</li>
    <li>如果您想捐赠一小笔金额，可以使用<strong lang="en" class="en"><a href="https://github.com/sponsors/ivan-fan-dk?o=esb">GitHub Sponsor</a></strong>或者<strong lang="en" class="en"><a href="https://www.paypal.com/donate/?hosted_button_id=AQ84UJJGKMNFW">Paypal</a></strong>. 谢谢!&#128522;</li>
`;
github.innerHTML = `代码资源可以在<a class="link-external en" href="https://github.com/ivan-fan-dk/Arithmetic_Problems" target="_blank" lang="en">GitHub</a>上找到.`;

function changeName(cname,cvalue){
    let it = document.querySelector(cname);
    it.textContent = cvalue;
}
function changeButtonName(cname,cvalue){
    let it = document.querySelector(cname);
    it.value = cvalue;
}

document.documentElement.setAttribute('lang', "zh-Hans");
changeName("#customize h2","私人定制");
changeName("#NOQName","题目数量");
changeName("#difficultyName","难度");
changeName("#right_afterName","即时评估");
changeName("#calculationTypeName","计算类型:");
changeName("#close","关闭")
changeButtonName("#setCookies","记录喜好在cookies");
changeButtonName("#clearCookies","清除cookies");
changeButtonName("#submit", "开始");
changeButtonName("#reset", "重置");
changeButtonName("#timeTrial", timeTrialModeName);
changeButtonName("#stop", "停止计时");
changeButtonName("#checkAnswer", "评估答案");
changeButtonName("#score", "成绩");
changeButtonName("#time", "计时");