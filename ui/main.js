console.log('Loaded!');


var imgelement = document.getElementById('madi');

imgelement.onclick = function () {
    var interval = setInterval(moveRight, 100);
    //imgelement.style.marginLeft = '100px';
};
