window.onload = () => {
  //轮播图
  var hero = document.querySelectorAll(".hero");
  var leftarrow = document.querySelector(".leftarrow");
  var rightarrow = document.querySelector(".rightarrow");

  var idArr = ["lefthero", "middlehero", "righthero"];

  initialize();

  function initialize() {
    for (let i = 0; i < hero.length; i++) {
      hero[i].id = idArr[i];
    }
  }

  leftarrow.addEventListener("click", function () {
    let reg = hero[0].id;
    for (let i = 0; i < hero.length - 1; i++) {
      hero[i].id = hero[i + 1].id;
    }
    hero[hero.length - 1].id = reg;
  });

  rightarrow.addEventListener("click", function () {
    let reg = hero[hero.length - 1].id;
    for (let i = hero.length - 1; i > 0; i--) {
      hero[i].id = hero[i - 1].id;
    }
    hero[0].id = reg;
  });

  //page4

  var obj1 = document.querySelector(".gray");
  var obj2 = document.querySelector(".yellow");
  var obj3 = document.querySelector(".blue");

  var ring1 = document.querySelector(".ring1");
  var ring2 = document.querySelector(".ring2");
  var ring3 = document.querySelector(".ring3");

  var intro1 = document.querySelector(".intro1");
  var intro2 = document.querySelector(".intro2");
  var intro3 = document.querySelector(".intro3");

  var pretext = ".intro4";
  var prering = ".ring4";

  obj1.addEventListener("mouseover", () => {
    ring1.style.borderColor = "#22bbffce";
    document.querySelector(pretext).style.display = "none";
    intro1.style.display = "flex";
    intro1.style.animation = "fadein 1s linear 1";
    pretext = ".intro1";
    document.querySelector(prering).style.borderColor = "white";
    prering = ".ring1";
    document.querySelector(".realvideo").src = "resources/shenzhou13hao.mp4";
  });

  obj2.addEventListener("mouseover", () => {
    ring2.style.borderColor = "#22bbffce";
    document.querySelector(pretext).style.display = "none";
    intro2.style.display = "flex";
    intro2.style.animation = "fadein 1s linear 1";
    pretext = ".intro2";
    document.querySelector(prering).style.borderColor = "white";
    prering = ".ring2";
    document.querySelector(".realvideo").src = "resources/mengtian.mp4";
  });

  obj3.addEventListener("mouseover", () => {
    ring3.style.borderColor = "#22bbffce";
    document.querySelector(pretext).style.display = "none";
    intro3.style.display = "flex";
    intro3.style.animation = "fadein 1s linear 1";
    pretext = ".intro3";
    document.querySelector(prering).style.borderColor = "white";
    prering = ".ring3";
    document.querySelector(".realvideo").src =
      "resources/dongfanghongyihao.mp4";
  });

  document.addEventListener("mousemove", function (e) {
    const mouseX = e.x;
    const mouseY = e.y;
    const curtext = document.querySelector(pretext);
    const coords = curtext.getBoundingClientRect();
    const elmX = coords.left + curtext.offsetWidth / 2;
    const elmY = coords.top + curtext.offsetHeight / 2;
    const angleX = (elmY - mouseY) / 50;
    const angleY = (elmX - mouseX) / -50;
    curtext.style.transform = `rotateX(${angleX}deg)rotateY(${angleY}deg)`;
  });

  var introv1 = document.querySelector(".introv1");
  var introv2 = document.querySelector(".introv2");
  var introv3 = document.querySelector(".introv3");

  introv1.addEventListener("click", function () {
    document.querySelector(".displayvideo").style.display = "block";
  });

  introv2.addEventListener("click", function () {
    document.querySelector(".displayvideo").style.display = "block";
  });

  introv3.addEventListener("click", function () {
    document.querySelector(".displayvideo").style.display = "block";
  });

  var closevideo = document.querySelector(".closevideo");
  closevideo.addEventListener("click", function () {
    document.querySelector(".displayvideo").style.display = "none";
    document.querySelector(".realvideo").src = "";
  });

  //page6

  document.addEventListener("mousemove", function (e) {
    var page6 = document.querySelector("#page6");
    var curpage = page6.getBoundingClientRect();
    var x = e.clientX - (curpage.left + Math.floor(curpage.width / 2));
    var y = e.clientY - (curpage.top + Math.floor(curpage.height / 2));

    x -= x * 2;
    y -= y * 2;

    if (y < 300 && y > -300) {
      document.documentElement.style.setProperty("--scale", 2.0);
      document.documentElement.style.setProperty("--x", x / 2 + "px");
      document.documentElement.style.setProperty("--y", y / 2 + "px");
    } else {
      document.documentElement.style.setProperty("--scale", 1.2);
      document.documentElement.style.setProperty("--x", 0 + `px`);
      document.documentElement.style.setProperty("--y", 0 + `px`);
    }
  });

  document.addEventListener("mouseleave", function (e) {
    document.documentElement.style.setProperty("--scale", 1.2);
    document.documentElement.style.setProperty("--x", 0 + `px`);
    document.documentElement.style.setProperty("--y", 0 + `px`);
  });

  //page5

  var playgamesvg = document.querySelector(".playgamesvg");
  var knowhistorysvg = document.querySelector(".knowhistorysvg");

  playgamesvg.addEventListener("mouseover", function (e) {
    document.documentElement.style.setProperty("--base1", 5.5);
    document.documentElement.style.setProperty("--base2", 4);
    document.documentElement.style.setProperty("--base3", 0.5);
    document.documentElement.style.setProperty("--linex", 200 + `px`);
    document.documentElement.style.setProperty("--opa1", 0.8);
  });
  playgamesvg.addEventListener("mouseleave", function (e) {
    document.documentElement.style.setProperty("--base1", 5);
    document.documentElement.style.setProperty("--base2", 5);
    document.documentElement.style.setProperty("--base3", 1);
    document.documentElement.style.setProperty("--linex", 0 + `px`);
    document.documentElement.style.setProperty("--opa1", 0);
  });
  knowhistorysvg.addEventListener("mouseover", function (e) {
    document.documentElement.style.setProperty("--base2", 5.5);
    document.documentElement.style.setProperty("--base1", 4);
    document.documentElement.style.setProperty("--base3", 0.5);
    document.documentElement.style.setProperty("--linex", -200 + `px`);
    document.documentElement.style.setProperty("--opa2", 0.8);
  });
  knowhistorysvg.addEventListener("mouseleave", function (e) {
    document.documentElement.style.setProperty("--base2", 5);
    document.documentElement.style.setProperty("--base1", 5);
    document.documentElement.style.setProperty("--base3", 1);
    document.documentElement.style.setProperty("--linex", 0 + `px`);
    document.documentElement.style.setProperty("--opa2", 0);
  });
  
};

    //标题的出现在这个函数里
    function titleappear(){
        document.getElementById("displayout").style.opacity=1;
        document.querySelector(".decoration").style.animation="flyin 2.5s ease-in";
        var finaltext = "太空之眼";
        //你可以加点什么别的随机字符
        const characters = "载人航天精神中国精神千年飞天梦航空航天珞珈砥砺前进武汉大学新时代";
        var iterations = finaltext.length+20;
        function randomstr() {
            n = Math.random();
            n = n * characters.length;
            n = Math.floor(n);
            out = characters[n];
            return out;
        }
        var text = [];
        var t;
        for (let i = 0; i < finaltext.length; i++) {
            t = [];
            text.push(t);
        }
        for (let i = 0; i < finaltext.length; i++) {
            t = text[i];
            //这个数字5代表变化时间，数字越小变化时间越长
            for (j = 0; j < iterations; j++) {
                t.push(randomstr());
            }
            t.push(finaltext[i]);
        }
        var counter=0;
        const elemout=document.getElementById("output");
        for(let i=0;i<finaltext.length;i++){
            const outputpart = document.createElement("span");
            outputpart.classList.add("letters");
            elemout.appendChild(outputpart);
            outputlist=document.getElementsByClassName("letters");
        }
        function change(){
            for(let i=0;i<finaltext.length;i++){
                ft=text[i];
                outputlist[i].innerHTML=ft[Math.min(counter,ft.length-1) ];
            }
            counter++;
        };
        setInterval(change, 100);
    }