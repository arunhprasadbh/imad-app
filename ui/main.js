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
    
    request.open('GET', 'http://arunabhamidipati.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
};

//Names logic

var submit = document.getElementById('submit_btn');


console.log('submit is:' + submit);
// Render a list of names 
submit.onclick = function() {
    var nameInput= document.getElementById('name');
    
    var name2=nameInput.value;
    console.log('nameInput is:' + nameInput);
    console.log('name2 is:' + name2);
    console.log('name submitted is: ' + name2);
    
    // Make a call to server with name.
    var request2= new XMLHttpRequest();
    request2.onreadystatechange = function(){
      if(request2.readyState === XMLHttpRequest.DONE){
          if(request2.status === 200){
              //add code to get the response
              var names = JSON.parse(request2.responsetext);
              var list = '';
              for (i = 0; i < names.length; i++){
                   list +=  '<li>' + names[i] + '</li>';
              }
              var ui = document.getElementById('uilist');
              ui.innerHTML = list;
          }
      }  
      console.log('name2 is: ' + name2);
      request2.open('GET', 'http://arunabhamidipati.imad.hasura-app.io/submit_name/' + name2, true);
      request2.send(null);
    };
    
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
