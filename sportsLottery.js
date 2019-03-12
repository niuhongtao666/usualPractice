var l1;
var tl1=setInterval(function(){
   l1=Math.ceil(Math.random()*35);//1-35
    console.log(l1);
},1000);
$(document).keypress(function (e) {
    if (e.keyCode == 32) {
        clearInterval(tl1);
    }
})