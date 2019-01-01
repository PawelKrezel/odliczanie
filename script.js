var countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dni").innerHTML = "&nbsp;<br>"+days+"<br>&nbsp;";
  document.getElementById("godz").innerHTML = "&nbsp;<br>"+hours+"<br>&nbsp;";
  document.getElementById("min").innerHTML = "&nbsp;<br>"+minutes+"<br>&nbsp;";
  document.getElementById("sek").innerHTML = "&nbsp;<br>"+seconds+"<br>&nbsp;";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
