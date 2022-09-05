console.clear();

/* 모바일 탑바 시작 */
// 모바일 탑바 초기화
function MobileTopBar__init() {
  $(".mobile-top-bar__btn-show-side-bar").click(function () {
    MobileSideBar__show();
  });
}
/* 모바일 탑바 끝 */

/* 모바일 사이드바 시작 */
// 모바일 사이드바 초기화
function MobileSideBar__init() {
  $(".mobile-side-bar, .mobile-side-bar__btn-close").click(function () {
    MobileSideBar__hide();
  });

  $(".mobile-side-bar__content").click(function () {
    return false;
  });
}

// 모바일 사이드바 숨김
function MobileSideBar__hide() {
  $(".mobile-side-bar").removeClass("active");
  $("html").removeClass("mobile-side-bar-actived");
  MobileMenuBox1__hide();
}

// 모바일 사이드바 노출
function MobileSideBar__show() {
  $(".mobile-side-bar").addClass("active");
  $("html").addClass("mobile-side-bar-actived");
}
/* 모바일 사이드바 끝 */

/* 모바일 메뉴박스 시작 */
function MobileMenuBox1__init() {
  // 메뉴 아이템이 클릭되면 할일
  $(".mobile-menu-box-1 ul > li").click(function () {
    let $this = $(this);

    $this.siblings(".active").find(".active").removeClass("active");
    $this.siblings(".active").removeClass("active");

    if ($this.hasClass("active")) {
      $this.find(".active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });

  $(".mobile-menu-box-1 ul").click(function () {
    return false;
  });
}

function MobileMenuBox1__hide() {
  $(".mobile-menu-box-1 .active").removeClass("active");
}
/* 모바일 메뉴박스 끝 */

MobileTopBar__init();
MobileSideBar__init();
MobileMenuBox1__init();
