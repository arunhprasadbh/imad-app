console.log('Loaded!');


// Counter Button Logig
var counter = 0;
var counterButton = document.getElementById('counter');
counterButton.onclick = function() {
    // Make a request to the end point counter
    
    // Capture the response and store the result in a variable
    
    // Render the variable in the 
    var span = document.getElementById('count'); 
    counter = counter + 1;
    span.innerHTML = counter.tostring;
    
};
console.log('Check 2');

var imgelement = document.getElementById('madi');
console.log('value of imageelement is' + imgelement);
var marginLeft = 0;
console.log('Check 3');

function moveRight(){
    marginLeft = marginLeft + 1;
    imgelement.style.marginLeft = marginLeft + 'px';
}
console.log('check 4');
imgelement.onclick = function () {
    var interval = setInterval(moveRight, 50);

};
