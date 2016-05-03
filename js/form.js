// (function(module) {

$(document).ready(function(){
  $('button').click(function(e){
    e.preventDefault();
    var userName = $('input:text').val();
    useName(userName);
    localStorage.setItem('currentUser', userName);
    return userName;
  });
});

function useName(currentUser, goodDayOrBadDay) { //params of currentUser and what kind of day it is
  var makeGoodorBad = function(goodOrBad) {  //makeGoodorBad - to display correct kind of day later
    var node = document.createElement('p'); //creating proper elements and appending to DOM
    var textnode = document.createTextNode('Hey ' + currentUser + ', ' + goodOrBad);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  };
  return makeGoodorBad;
}

  //here cometh the Closure
function message (currentUser){

  var goodDay = useName(currentUser, 'itsgood');
  goodDay('what a great day for biking!');

  var badDay = useName(currentUser, 'itsbad');
  badDay('maybe leave the bike at home today....');

  var soSoDay = useName(currentUser, 'itssoso');
  soSoDay('Conditions are not ideal. Depends on you, dude...');
};

//Event Listeners for Submit Button
submitButton.addEventListener('click', validateUserName);

function validateUserName(e) {
  e.preventDefault();
  var userName = document.forms['nameInput']['fname'].value;
  if (userName == null || userName == '') {
    $('#userAlert').show();
    $('#output').hide();
  }else {
    message(userName);
    $('#userAlert').hide();
    $('#output').show();
    $('#nameForm').hide();
  }
};

//Event Listener for Submit Button2
submitButton2.addEventListener('click', validateLocation);


//Validating the input for the Location Form

function validateLocation(e){
  e.preventDefault();
  var inputLocation = {};
  var locationName = document.forms['locationData']['flocationname'].value;
  if (locationName == null || locationName == ''){
    $('#userAlert2').show();
  } else {
    inputLocation.locationName = locationName;
  };

  var streetAddress = document.forms ['locationData']['fstreetaddress'].value;
  if (streetAddress == null || streetAddress == '') {
    $('#userAlert3').show();
  } else {
    inputLocation.streetAddress = streetAddress;
  };

  var city = document.forms ['locationData']['fcity'].value;
  if (city == null || city == '') {
    $('#userAlert4').show();
  } else {
    inputLocation.city = city;
  };

  var state = document.forms ['locationData']['fstate'].value;
  if (state == null || state == '') {
    $('#userAlert5').show();
  } else {
    inputLocation.state = state;
  };

  var zipcode = document.forms ['locationData']['fzip'].value;
  if (zipcode == null || zipcode == '' || isNaN(zipcode)) {
    $('#userAlert6').show();
  } else {
    inputLocation.zipcode = zipcode;
  };
  var obj = new userLocation(inputLocation);
  obj.insertRecord(userLocation.merge);


};
