const pagestring = [
  {
    str: "/01",
  },
  {
    str: "//02",
  },
  {
    str: "///03",
  },
  {
    str: "////04",
  },
  {
    str: "/////05",
  },
  {
    str: "//////06",
  },
];

var mouse_x, mouse_y;
var pages = "";
var listens = {
  _pageNumber: 1,
};

//滚动监听
window.addEventListener("scroll", scrollfun, true);
function scrollfun() {
  var y = $(".container").scrollTop();
  var h = $(window).height();
  listens.pageNumber = Math.ceil(y / h) + 1;
  // for (i = 1; i <= listens._pageNumber; i++) {
  //   pages += "/";
  // }
  // document.getElementById("changePage").innerHTML =
  //   pages + "0" + listens._pageNumber;
  // pages = "";
}

//鼠标位置监听
window.addEventListener("mousemove", movefun, true);
function movefun(e) {
  mouse_x = e.clientX;
  mouse_y = e.clientY;
  //改变鼠标圈位置
  document.getElementById("pointRound").style.cssText =
    "top: " +
    mouse_y +
    "px;left: " +
    mouse_x +
    "px;transform: translate3d(-50%, -50%, 0px);";
}

Object.defineProperty(listens, "pageNumber", {
  configurable: true,
  set: function (value) {
    if (listens._pageNumber != value) {
      console.log(listens._pageNumber + "to" + value);
      pageChange(value, listens._pageNumber);
      listens._pageNumber = value;
    }
  },
});

function pageChange(a, b) {
  if (a < b) {
    document.getElementById("changePage").innerHTML = `<div class='nowPage'>${
      pagestring[b - 1].str
    }</div>
    <div class='nextPage'>${pagestring[a - 1].str}</div>`;
    func(".nowPage", ".nextPage", "+=20px");
  } else {
    document.getElementById("changePage").innerHTML = `<div class='nowPage'>${
      pagestring[b - 1].str
    }</div>
    <div class='prevPage'>${pagestring[a - 1].str}</div>`;
    func(".nowPage", ".prevPage", "-=20px");
  }

  var sidemenu = document.querySelector(".sidebar").childNodes;
  $(sidemenu[2 * a - 1].childNodes).addClass("sideactive");
  $(sidemenu[2 * b - 1].childNodes).removeClass("sideactive");

  if (a == 2 && b != 2) {
    put_img("./resources/huojian.png");
  }else if (b == 2 && a != 2) {

    point_data_now = [];
    point_data_new = [];
    point_data = [];
  }
}
