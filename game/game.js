window.onload=()=>{
    var curprob=1; 
    var trueoption=document.getElementsByClassName("trueoption");
    var falseoption=document.getElementsByClassName("falseoption");

    document.querySelector(".contents").style.opacity="1";
    document.querySelector(".stars").style.animation="shake 1s linear 2";
    setTimeout(()=>{
        document.querySelector('.contents').style.opacity='0'; 
        document.querySelector(".star1").style.opacity="0";
        document.querySelector(".star2").style.opacity="0";
        document.querySelector(".star3").style.opacity="0";
        document.querySelector(".star4").style.opacity="0";
        document.querySelector(".star5").style.opacity="0";
    },5000);
    setTimeout(()=>{document.querySelector(".countdown").style.opacity=1;},6700);
    setTimeout(()=>{countdown();},8000);
 
    trueoption[0].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(`.no`+curprob).style.display="none";        
        document.querySelector(`.star`+curprob).style.opacity=1;
        curprob++;
        document.querySelector(`.no`+curprob).style.display="flex";
    })   
    trueoption[1].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(`.no`+curprob).style.display="none";
        document.querySelector(`.star`+curprob).style.opacity=1;
        curprob++;
        document.querySelector(`.no`+curprob).style.display="flex";
    })   
    trueoption[2].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(`.no`+curprob).style.display="none";
        document.querySelector(`.star`+curprob).style.opacity=1;
        curprob++;
        document.querySelector(`.no`+curprob).style.display="flex";
    })   
    trueoption[3].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(`.no`+curprob).style.display="none";
        document.querySelector(`.star`+curprob).style.opacity=1;
        curprob++;
        document.querySelector(`.no`+curprob).style.display="flex";
    })   
    trueoption[4].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(`.no`+curprob).style.display="none";
        document.querySelector(`.star`+curprob).style.opacity=1;
        document.querySelector(".conguatulate").style.display="flex";
    })   

    falseoption[0].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(".problems").style.animation="shake 1s linear 1";
        setTimeout(()=>{document.querySelector(".problems").style.animation="none"; console.log(111);},1000);
    }) 
    falseoption[1].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(".problems").style.animation="shake 1s linear 1";
        setTimeout(()=>{document.querySelector(".problems").style.animation="none"; console.log(111);},1000);
    }) 
    falseoption[2].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(".problems").style.animation="shake 1s linear 1";
        setTimeout(()=>{document.querySelector(".problems").style.animation="none"; console.log(111);},1000);
    }) 
    falseoption[3].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(".problems").style.animation="shake 1s linear 1";
        setTimeout(()=>{document.querySelector(".problems").style.animation="none"; console.log(111);},1000);
    }) 
    falseoption[4].addEventListener("click",function(){
        console.log(curprob);
        document.querySelector(".problems").style.animation="shake 1s linear 1";
        setTimeout(()=>{document.querySelector(".problems").style.animation="none"; console.log(111);},1000);
    }) 

    function countdown(){
        var circle1=document.getElementById("circle1");
        var circle2=document.getElementById("circle2");
        var number=document.querySelector(".number");
        circle1.style.transform=`rotate(`+135+`deg)`;
        number.innerHTML='3';
        setTimeout(()=>{circle1.style.transform=`rotate(`+225+`deg)`; number.innerHTML='2'; },1000);
        setTimeout(()=>{circle2.style.transform=`rotate(`+135+`deg)`; number.innerHTML='1';},2000);
        setTimeout(()=>{circle2.style.transform=`rotate(`+225+`deg)`; number.innerHTML='0';},3000);
        setTimeout(()=>{document.querySelector(".problems").style.display="flex";},4200);    
        setTimeout(()=>{document.querySelector(".countdown").style.opacity="0";},4200);    
    }

    var imgx=0;
    var imgy=0;
    var index=0;
    var imgn=0;
    var imgm=0;

    window.addEventListener("mousemove",function(e){
        let follower=document.querySelector(".follower");
        imgx=e.x-follower.offsetLeft-follower.clientWidth/2+10;
        imgy=e.y-follower.offsetTop-follower.clientHeight/2+10;
        index=0;
    })

    setInterval(()=>{
        let follower=document.querySelector(".follower");
        index++;
        if(index<50){
            imgn+=imgx/50;
            imgm+=imgy/50;
            console.log(imgn);
            console.log(imgm);
        }
        follower.style.left=imgn+`px`;
        follower.style.top=imgm+`px`;
    },10)

    document.querySelector(".answers").addEventListener("click",function(){
        var matrix=document.querySelector(".container");
        matrix.innerHTML+=` <video class='videos' src='resources/2022.mp4' autoplay muted loop style='z-index: 10; width: 100%; height: 100%; clip-path: circle(1px);'></video> `;
    })
} 
