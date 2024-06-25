function GetResult() {
    let RECode = document.getElementById("code").value;
    let text = document.getElementById("text").value;
    
   
    let regex = new RegExp(RECode, 'g');
    let matches = text.match(regex);
    
    let result = "";
    if (matches) {
        for (let r of matches) {
            result += "<li>" + r + "</li>";
        }
    } else {
        result = "<li>No matches found</li>";
    }

    document.getElementById("result").innerHTML = "<ul>" + result + "</ul>";
}
