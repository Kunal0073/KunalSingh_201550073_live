var arr=document.querySelectorAll("footer h1");
var li=document.querySelector("nav .navi li a");
li.style.color="red";
window.addEventListener("load",()=>{
    arr[0].innerHTML="Kunal Singh";
    arr[1].innerHTML="2015500073";
    arr[2].innerHTML="GLA University,Mathura";
    var date=new Date().toISOString().slice(0,10);
    var strA=date.split("-");
    var arrA=strA.reverse();
    var str=arrA.join("-");
    arr[3].innerHTML=str;
});