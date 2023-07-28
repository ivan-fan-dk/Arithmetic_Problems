const exDays = 30;
const peek = document.getElementById("peek");
const github = document.getElementById("github");
const inAFolder = ".";    //used when this script is in a folder.
// Chinese version
const defaultDifficulty = "let";
const defaultCalculationTypes = ["Addition", "Subtraktion", "Multiplikation", "Division"];
const difficulties = ["extra let", "let", "middel", "svær", "extra svær", "asien"];
const calculationTypes = ["Addition", "Subtraktion", "Multiplikation", "Division", "brøk(+-)", "brøk(*/)"];
const versionName = "version";
const AsianName = "asien";
const alertPreferencesStored = `Dine præferencer er blevet gemt for ${exDays} dage.\n\nPræferencer i json:`;
const preferencesCheck = "Præferencer i json:";
const spareMe = "spare me";
const alertCookiesCleared = "Alle cookies er blevet ryddet!";
const alertMostCookiesCleared = "De fleste cookies er blevet slettet！\n\nResterende cookies:\n\nRemaining cookies in json:";
const scoreName = "pointer";
const timeTrialModeName = "Tidskørseltilstand";
const returnToNormalModeName = "Tilbage til normal tilstand ";
const arithmetricProblemsTitleName = "Regneopgaver";
const timeName = "Tid";
peek.innerHTML = `
    <li>Hvis du vil tage et kig på svaret, kan du højreklikke i den ønskede tekstboks. &#128541;</li>
    <li><span lang="en" class="en"><a href="../">English version entrance</a></span>, <span lang="zh-Hans"><a href="../zh/index.html">简体中文版本入口</a></span></li>
    <li>Vil du <u>blive en del af fællesskabet</u> eller <u>give feedback</u> for at gøre denne hjemmeside bedre? Du kan deltage i <strong lang="en" class="en"><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/discussions">GitHub Discussions</a></strong>. Fejl kan rapporteres på <strong lang="en" class="en"><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/issues">GitHub Issues</a></strong>.</li>
    <li>Hvis du gerne vil donere et lille beløb, kan du bruge <strong lang="en" class="en"><a href="https://github.com/sponsors/ivan-fan-dk?o=esb">GitHub Sponsor</a></strong> eller <strong lang="en" class="en"><a href="https://www.paypal.com/donate/?hosted_button_id=AQ84UJJGKMNFW">Paypal</a></strong>. Tak! &#128522;</li>
`;
github.innerHTML = `Koderessourcerne kan findes på <a class="link-external en" href="https://github.com/ivan-fan-dk/Arithmetic_Problems" target="_blank" lang="en">GitHub</a>.`;

function dk(cname,cvalue){
    let it = document.querySelector(cname);
    it.textContent = cvalue;
}
function dkButton(cname,cvalue){
    let it = document.querySelector(cname);
    it.value = cvalue;
}

document.documentElement.setAttribute('lang', "da-DK");
dk("#h13 h1", arithmetricProblemsTitleName);
dk("#h13 h3", versionName + "：1.1.4");
dk("#customize h2", "Personlig tilpasning");
dk("#NOQName", "Antal spørgsmål");
dk("#difficultyName", "Sværhedsgrad");
dk("#right_afterName", "Øjeblikkelig vurdering");
dk("#calculationTypeName", "Beregningstype:");
dk("#close", "Luk")
dkButton("#setCookies", "Gem præferencer i cookies");
dkButton("#clearCookies", "Ryd cookies");
dkButton("#submit", "Start");
dkButton("#reset", "Nulstil");
dkButton("#timeTrial", timeTrialModeName);
dkButton("#stop", "Stop tidtagning");
dkButton("#checkAnswer", "Vurder svar");
dkButton("#score", "Resultat");
dkButton("#time", "Tid");