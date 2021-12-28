window.onload = function() {
    // スクロールを禁止にする関数
    function disableScroll(event) {
      event.preventDefault();
    }
    // スクロール禁止
    function no_scroll() {
        // PCでのスクロール禁止
        document.addEventListener("mousewheel", scroll_control, { passive: false });
        // スマホでのタッチ操作でのスクロール禁止
        document.addEventListener("touchmove", scroll_control, { passive: false });
    }
}