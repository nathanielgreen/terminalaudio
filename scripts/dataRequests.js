var firstName = document.querySelector("#guestlist-firstname");
var lastName  = document.querySelector("#guestlist-lastname");
var email = document.querySelector("#guestlist-email");

$.ajax({
  url: '/data',
  type: 'POST',
  data: {
    'first_name': firstNname,
    'last_name': lastName,
    'email': email
  },
  success: function(){
    console.log("post worked");
  };
});
