let token = "5064780422:AAHBP0TaYtcLoJk7LsGQtqTPY_zr2dbl4CI";
let url = "https://api.telegram.org/bot" + token + "/sendMessage"; //API Test "/getUpdates"

function scheduleMessage(){
    var text = document.getElementById("textMessage").value;
    var chatId = 899713811;
    const fullUrl = url + "?chat_Id=" + chatId + "?text=" + text;
    fetch(fullUrl, {method: "POST" });
    // fetch lädt normalerweise herunter --> aber durch methode wird 
    // an die fullURL
}