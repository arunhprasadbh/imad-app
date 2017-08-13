console.log('Loaded!');


var imgelement = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    imgelement.style.marginLeft = marginLeft + 'px';
}

imgelement.onclick = function () {
    var interval = setInterval(moveRight, 50);

};
