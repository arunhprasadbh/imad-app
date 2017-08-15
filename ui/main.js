console.log('Loaded!');


// Counter Button Logig

var counterButton = document.getElementById('counter');
counterButton.onclick = function() {
    
    // Make a request to the end point counter
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter    = request.responseText;
                var span       = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'arunabhamidipati.imad.hasura-app.io/count', true);
    request.send(null);
    
    
    // Capture the response and store the result in a variable
    
    // Render the variable in the 
    
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
