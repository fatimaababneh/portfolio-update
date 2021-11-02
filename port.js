var icon= document.getElementById("icon");
let user;
let showname=document.querySelector("#welcome");
let userem;
let showem=document.querySelector("#valid-email");

icon.onclick= function(){
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme"))
{icon.src="sun.jpg";}
else{
icon.src="moon.png";
}
}

function contact(){
user=document.getElementById("user").value;
userem=document.getElementById("email").value;
localStorage.setItem("username",user);
showname.innerHTML="Welcome "+localStorage.getItem("username");
localStorage.setItem("useremail",userem);
showem.textContent=localStorage.getItem("useremail");

// showem.forEach(function(element,index) {
//     if(element=='@')
//     {
//         showem.textContent=localStorage.getItem("useremail");
//     }
// });

}
