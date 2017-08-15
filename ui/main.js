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

// Counter Button Logic

var counterButton = document.getElementById('counter');
var span = document.getElementById('count');
var counter = 1;
counterButton.onclick = function() {
    // Make a request to the end point counter
    
    // Capture the response and store the result in a variable
    
    // Render the variable in the 
    span.innerHtml(counter.toString);
    
};