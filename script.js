function main (arr) {
    let min;
    let col;
    
        minId = findMin(document);
        console.log("min " + minId)
        col = document.getElementById(minId);
        let img = document.createElement("img");
        img.src = arr.url;
        img.title = arr.title;
        // img.height = arr.height;
        col.append(img);
}

async function getData () {
    let response3 = await fetch('https://api.jsonbin.io/v3/b/6303bf5ea1610e63860a5cf7?meta=false');
    let jsoned = await response3.json();
    let i = -1;
    console.log(jsoned[0]);
    
    while (jsoned[++i]) {
        main(jsoned[i]);
    }
}

getData();

//Смотреть текущую длинну столбца и пушить элементы по одному в самый короткий
function findMin (document) {
    let col1 = document.getElementById("col1").clientHeight;
    let col2 = document.getElementById("col2").clientHeight;
    let col3 = document.getElementById("col3").clientHeight;
    let col4 = document.getElementById("col4").clientHeight;
    let min = Math.min(col1, col2, col3, col4);
    console.log(col1 + " " + col2 + " " + col3 + " " + col4);
    switch(min) {
        case col1:
            return ("col1");
        case col2:
            return ("col2");
        case col3:
            return ("col3");
        default:
            return ("col4");
    }
}
