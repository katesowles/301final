$(document).ready(function(){
  $('button').click(function(){
    var userName = $('input:text').val();
    useName(userName);
    message(userName);
    localStorage.setItem('currentUser', userName);
    return userName;
  });
});

function useName (currentUser){
  console.log(currentUser);
  $('#output').text('Hey ' + currentUser + ', what a great day for biking!');
};
