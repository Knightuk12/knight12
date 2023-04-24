let counter = 0;

function increment(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark");
    counter++;
    document.getElementById("countText").innerHTML = counter;
    
    if (counter >= 10) {
        alert("Досягнення за цікавість отримано");
    }
}

function pasteHTML(){
    document.getElementById("buttonSection").innerHTML = '<button onclick="increment()">Клац!</button> Кількість кліків : <font id="countText">0</font>';
}

pasteHTML();
