function contactform()
{
  var customeremail = document.getElementById("eaddress").value;
  var customerfullname = document.getElementById("fname").value + " " +document.getElementById("lname").value;
  var country = document.getElementById("country").value;
  var message = document.getElementById("subject").value;

  let information = "name="+customerfullname+"&kmail="+customeremail+"&country="+country+"&message="+message + "&subject=Your message is arrived to us.";


  let url = "http://besttraveladvice.co.uk/mailsend/email.php?";

//check value is empty or not
  if (customeremail=="" || message=="")
  {
    alert("You have to enter your email and message. Please enter them.")
  }
else{
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {    
         if(req.responseText=="ok")
          { 
              document.getElementById("success").style.display="block";
          }
      
         else
         {
              document.getElementById("alert").style.display="block";
          } 
      }
    } 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  req.open("GET", url+information, true);
  req.send();

}

//close message
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}