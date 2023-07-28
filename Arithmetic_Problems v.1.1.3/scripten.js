const exDays = 30;
const peek = document.getElementById("peek");
const github = document.getElementById("github");
// English version
const defaultDifficulty = "Easy";
const defaultCalculationTypes = ["Addition", "Subtraction", "Multiplication", "Division"];
const difficulties = ["Beginner", "Easy", "Intermediate", "Hard", "Hell", "Asian"];
const calculationTypes = ["Addition", "Subtraction", "Multiplication", "Division", "Fraction(+-)", "Fraction(*/)"];
const versionName = "version";
const AsianName = "Asian";
const alertPreferencesStored = `Your preferences has been set successfully and remembered for ${exDays} days.\n\nPreferences in json:`;
const preferencesCheck = "Preferences in json:";
const spareMe = "spare me";
const alertCookiesCleared = "All cookies within this tab are cleared successfully!";
const alertMostCookiesCleared = "Most of the cookies are cleared successfully!\n\nRemaining cookies in json:";
const scoreName = "score";
const timeTrialModeName = "Time Trial Mode";
const returnToNormalModeName = "Return to normal mode";
const arithmetricProblemsTitleName = "Arithmetic problems";
const timeName = "time";
peek.innerHTML = `
    <li>Right click on a text field if you want to peek at the answer. &#128541;</li>
    <li><span lang="zh-Hans"><a href="../zh/index.html">简体中文版本入口</a></span></li>
    <li>Wanna <u>join the community</u> or <u>give feedbacks</u> to make this website better? Please check out <strong><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/discussions">GitHub Discussions</a></strong>. Issues can be reported on <strong><a href="https://github.com/ivan-fan-dk/Arithmetic_Problems/issues">GitHub Issues</a></strong>.</li>
    <li>If you would like to donate a small amount, you can use either <strong><a href="https://github.com/sponsors/ivan-fan-dk?o=esb">GitHub Sponsor</a></strong> or <strong><a href="https://www.paypal.com/donate/?hosted_button_id=AQ84UJJGKMNFW">Paypal</a></strong>. Thanks! &#128522;</li>
`;
github.innerHTML = `Code resources are available on <a class="link-external" href="https://github.com/ivan-fan-dk/Arithmetic_Problems" target="_blank">GitHub</a>.`;