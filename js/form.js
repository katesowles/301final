$(document).ready(function(){
  $('button').click(function(){
    var userName = $('input:text').val();
    useName(userName);
    message(userName);
    localStorage.setItem('currentUser', userName);
    return userName;
  });
});

function useName(currentUser, goodDayOrBadDay) { //params of currentUser and what kind of day it is
  var makeGoodorBad = function(goodOrBad) {  //makeGoodorBad - to display correct kind of day later
    var node = document.createElement('p'); //creating proper elements and appending to DOM
    var textnode = document.createTextNode('Hey ' + currentUser + ', ' + goodOrBad);
    node.appendChild(textnode);
    document.getElementById('output2').appendChild(node);
  };
  return makeGoodorBad;
}

  //here cometh the Closure
function message (currentUser){

  var goodDay = useName(currentUser, 'itsgood');
  goodDay('what a great day for biking!');

  var badDay = useName(currentUser, 'itsbad');
  badDay('maybe leave the bike at home today....');
};
