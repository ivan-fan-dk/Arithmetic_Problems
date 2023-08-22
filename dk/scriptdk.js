const lang = "dk";
const exDays = 30;
const peek = document.getElementById("peek");
const github = document.getElementById("github");
const inAFolder = ".";    //used when this script is in a folder.
// Danish version
const defaultDifficulty = "let";
const defaultCalculationTypes = ["Addition", "Subtraktion", "Multiplikation", "Division"];
const difficulties = ["begynder", "let", "middel", "svær", "extra svær", "asien"];
const calculationTypes = ["Addition", "Subtraktion", "Multiplikation", "Division", "Brøk(+-)", "Brøk(*/)", "Lineær ligning", "Andengradsligning"];
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
const arithmetricProblemsTitleName = "Regnestykker";
const timeName = "Tid";
const alertIPhoneMessage = "Til ærede iPhone-brugere:\n\nI kan indtaste '00' for at få et minus-tegn hvis nødvendigt.\n\nMed venlig hilsen,\nUdvikler";
peek.innerHTML = `
    <li>Hvis du vil tage et kig på svaret, kan du højreklikke i den ønskede tekstboks.&#128541; Tryk og hold kanppen for pil op (&#11014;) eller pil ned (&#11015;) for at vise dit svar smukt (med LaTeX understøttelse).&#128516;</li>
    <li><span lang="en" class="en"><a href="../en/index.min.html">English version entrance</a></span>, <span lang="zh-Hans"><a href="../zh/index.min.html">简体中文版本入口</a></span></li>
    <li>Vil du <u>blive en del af fællesskabet</u> eller <u>give feedback</u> for at gøre denne hjemmeside bedre? Du kan deltage i <strong lang="en" class="en"><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/discussions">GitHub Discussions</a></strong>. Fejl kan rapporteres på <strong lang="en" class="en"><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/issues">GitHub Issues</a></strong>.</li>
    <li>Hvis du gerne vil donere et lille beløb, kan du bruge <strong lang="en" class="en"><a href="https://github.com/sponsors/ivan-fan-dk?o=esb">GitHub Sponsor</a></strong> eller <strong lang="en" class="en"><a href="https://www.paypal.com/donate/?hosted_button_id=AQ84UJJGKMNFW">Paypal</a></strong>. Tak! &#128522;</li>
`;
github.innerHTML = `Koderessourcerne kan findes på <a class="link-external en" href="https://github.com/ivan-fan-dk/Arithmetic_Problems" target="_blank" lang="en">GitHub</a>.`;

function changeName(cname,cvalue){
    let it = document.querySelector(cname);
    it.textContent = cvalue;
}
function changeButtonName(cname,cvalue){
    let it = document.querySelector(cname);
    it.value = cvalue;
}

document.documentElement.setAttribute('lang', "da-DK");
changeName("title", arithmetricProblemsTitleName);
changeName("#customize h2", "Personlig tilpasning");
changeName("#NOQName", "Antal spørgsmål");
changeName("#difficultyName", "Sværhedsgrad");
changeName("#right_afterName", "Øjeblikkelig vurdering");
changeName("#calculationTypeName", "Beregningstype:");
changeName("#close", "Luk")
changeButtonName("#setCookies", "Gem præferencer i cookies");
changeButtonName("#clearCookies", "Ryd cookies");
changeButtonName("#submit", "Start");
changeButtonName("#reset", "Nulstil");
changeButtonName("#timeTrial", timeTrialModeName);
changeButtonName("#stop", "Stop tidtagning");
changeButtonName("#checkAnswer", "Vurder svar");
changeButtonName("#score", "Resultat");
changeButtonName("#time", "Tid");