function checkans(){

    j = document.getElementById("in1").value;
    s = document.getElementById("nm2").innerHTML;

    f= j.toLowerCase();
    n= s.toLowerCase();


    console.log(f);
    console.log(n);
    
    if (f == n){
      
      document.getElementById("result").innerHTML = "Correct";
      document.getElementById("in1").style.backgroundColor = "green";
      document.getElementById("in1").value ='';
        getfocus()
        addimage()
    }

    else{
        document.getElementById("result").innerHTML = "Wrong";
        document.getElementById("in1").style.backgroundColor = "red";
        a = a-1;
        getfocus()
        addimagewrong()
}

}


function getfocus() {
  document.getElementById("in1").focus();
}


var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}

function addimage(){
  var img = document.createElement("img");
  img.src = "images/Jump.png";
  document.getElementById("correctans").appendChild(img);
}

function addimagewrong(){
  var img = document.createElement("img");
  img.src = "images/wrong.png";
  document.getElementById("correctans").appendChild(img);
}
