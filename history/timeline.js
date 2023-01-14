window.onload=()=>{
    firstDisplay();
    var login=document.querySelector(".login");
    login.addEventListener("click",function(){
        mainDisplay();
    });
}

function firstDisplay(){
    itrains();
    var index=0;
    var word=document.getElementById("bbb").innerHTML;
    function type(){
        document.getElementById("aaa").innerText = word.substring(0,index++);
    }
    setInterval(type, 300);
    setTimeout(" document.querySelector('.login').style.opacity=1; ",7000);
}

function mainDisplay(){
    document.querySelector(".first").style.display="none";
    document.querySelector(".coderain").style.display="none";
    document.querySelector(".content").style.display="flex";
    document.querySelector(".timeline").style.display="block";
    document.querySelector(".picture").style.display="block";
    document.querySelector(".rotate").style.display="block";
    var degree=30;
    var st=-1920;
    var i=0;
    var rotate=document.querySelector(".rotate");
    var timeline=document.querySelector(".timeline");
    var contents=document.querySelectorAll(".contents");
    var pictures=document.querySelectorAll(".pictures");
    function print(){
        if(i<8){
            contents[i].style.opacity="1";
            pictures[i].style.opacity="1";
            i+=1; 
        }
        degree+=45;
        st+=230;
        rotate.style.transform=`rotate(`+degree+`deg)`;
        if(st<0){
            timeline.style.left=st+`px`;
        }
    }
    rotate.addEventListener("click",function(){
        print();
    })
    document.addEventListener("wheel",function(){
        print();
    })
}

function itrains(){
    var rain=document.querySelector(".rain");
    var ctx=rain.getContext("2d");
    rain.height=window.innerHeight;
    rain.width=window.innerWidth;
    var code="0110001010";
    code=code.split("");
    var font_size=10;
    var columns=rain.width/font_size;
    var drops=[];
    for(let i=0;i<columns;i++){
        drops[i]=1;
    }
    function coderain(){
        ctx.fillStyle="rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,rain.width,rain.height);
        ctx.fillStyle="#0F0";
        ctx.font=font_size+"px arial";
        for(var i=0;i<drops.length;i++){
            var text=code[Math.floor(Math.random()*code.length)];
            ctx.fillText(text,i*font_size,drops[i]*font_size);
            if(Math.random()>0.975)
            drops[i]=0;
            drops[i]++;
        }
    }
    setInterval(coderain,100);        
}