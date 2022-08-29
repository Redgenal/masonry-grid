(async function getData () {
    let response3 = await fetch('https://api.jsonbin.io/v3/b/6303bf5ea1610e63860a5cf7?meta=false');
    let jsoned = await response3.json();
    console.log(jsoned[0]);
    
    main_work(jsoned, resizeMasonryItem);
})();

function main_work (arr, func) {
  const container = document.querySelector('.masonry');

  for (let i = 0; i < arr.length; i++) {
    let promise = new Promise (function (resolve, reject) {
      let img = document.createElement("img");
      img.classList.add("myImg");
      img.src = arr[i].url;
      img.title = arr[i].title;
      img.onload = () => resolve(img);
      container.appendChild(img); 
    });
    promise.then(func);
  }
}

function resizeMasonryItem(item){
  let grid = document.querySelector('.masonry');
  let rowGap = parseInt(getComputedStyle(grid)['grid-row-gap']);
  let rowHeight = parseInt(getComputedStyle(grid)['grid-auto-rows']);
  let rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  
  item.style.gridRowEnd = 'span ' + rowSpan;
}
  
function resizeImages() {
  let allItems = document.getElementsByClassName('myImg');
  
  for(var i=0;i<allItems.length;i++){
    resizeMasonryItem(allItems[i]);
  }
}

let masonryEvents = ['load', 'resize'];
masonryEvents.forEach( function(event) {
  window.addEventListener(event, resizeImages);
} );