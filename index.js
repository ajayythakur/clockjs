
function timer(){
    let hour=document.getElementById("hr");
    let minute=document.getElementById("min");
    let second=document.getElementById("sec");

    let tym=new Date();
    let hr= tym.getHours();
    // hr = (hr % 12) || 12;
    let min=tym.getMinutes();
    let sec=tym.getSeconds();
   //  console.log(hr,min,sec);
    hour.innerText= `${hr} \n hour`;
    minute.innerText= `${min} \n mins`;
    second.innerText= `${sec} \n secs`;

    let ampm=document.getElementById("AM_PM");

if(hr>=12 && min>=0 && sec>=0){
    ampm.innerText="PM";

}
else{
    // let ampm=document.getElementById("AM_PM");
    ampm.innerText="AM";

}
// let image=document.getElementById("image")
let message=document.getElementById("sidebox");
if(hr<=08 && hr<12 && min>=00 && sec>=0){
    message.innerText="GRAB SOME HEALTHY BREAKFAST";
    document.getElementById("image").src = "./Component 30 – 1.svg";
    wishtext.style.fontSize="33px"
    wishtext.innerText="GOOD MORNING !! WAKE UP !!"

  
}
else if(hr>=12 && hr<16 && min>=00 && sec>=0){
    message.innerText="LET'S HAVE SOME LUNCH";
    document.getElementById("image").src = "./Group 5183.png";
    wishtext.style.fontSize="22px"
    wishtext.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";


}
else if(hr>=16 && hr<20 && min>=00 && sec>=0){
    message.innerText="STOP YAWING, GET SOME TEA..ITS JUST EVENING";
    document.getElementById("image").src = "./lunch_image.png";
    wishtext.innerText="GOOD EVENING !!";


}
else if(hr>=20 && min>=00 && sec>=0){
    message.innerText="close your eyes and to go sleep";
    document.getElementById("image").src = "./Group 5194.png";
    wishtext.innerText="GOOD NIGHT !!";
}

}
setInterval(function(){
    timer()
},1000);

// Alarm Button

let sa=document.getElementById("sa");
sa.addEventListener("click",function(){
    let d=document.getElementById("dropdown").value;
    let d1=document.getElementById("d1").value;
    let d2=document.getElementById("d2").value;
    let d3=document.getElementById("d3").value; 
   
    let wake=document.getElementById("wktxt");
    wake.innerText= d;
    let lunch=document.getElementById("ltxt");
    lunch.innerText=d1;
    let nap=document.getElementById("ntxt");
    nap.innerText=d2;
    let night=document.getElementById("nightxt");
    night.innerText=d3;
})

