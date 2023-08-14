const meta = document.querySelector("meta");
const locale = Intl.DateTimeFormat().resolvedOptions().locale;
if (locale == 'da' || locale == 'da-DK'){
    meta.content = "0; url=./dk/index.min.html";
}
else if (locale == 'zh' || locale == 'zh-CN'){
    meta.content = "0; url=./zh/index.min.html";
}
else{
    meta.content = "0; url=./en/index.min.html";
}