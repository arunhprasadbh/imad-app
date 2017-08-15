console.log('Loaded!');


// Counter Button Logic

var counterButton = document.getElementById('counter');
console.log('value of counterbutton is' + counterButton);

console.log('value of span is' + span);
var counter = 1;
counterButton.onclick = function() {
    // Make a request to the end point counter
    
    // Capture the response and store the result in a variable
    
    // Render the variable in the 
    var span = document.getElementById('count'); 
    counter = counter + 1;
    alert('I am in Rendering Section');
    span.innerHtml(counter.toString);
    
};
console.log('Check 2');

var imgelement = document.getElementById('madi');
console.log('value of imageelement is' + imgelement);
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    imgelement.style.marginLeft = marginLeft + 'px';
}

imgelement.onclick = function () {
    var interval = setInterval(moveRight, 50);

};
