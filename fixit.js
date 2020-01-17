const badWords = ["women", "diversity", "gender"]
Array.from(document.getElementsByClassName("athing")).forEach(function(item) {
    title = item.getElementsByClassName("title")[1].innerText;
    url = item.getElementsByClassName("title")[1].firstChild.href;
    console.log(url)
    if (badWords.some(el => title.includes(el) || url.includes(el))) {
        item.setAttribute("style", "display: none;");
        item.nextSibling.setAttribute("style", "display: none;");
        item.nextSibling.nextElementSibling.setAttribute("style", "display: none;");
    }
})
