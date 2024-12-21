/* Lightbox Luminous 初期化 */
new LuminousGallery(
  document.querySelectorAll(".grid-gallery"),
  {},
  {
    caption: function (trigger) {
      return trigger.querySelector("img").getAttribute("alt");
    },
  }
);

/* Fadeup Animation AOS 初期化 */
AOS.init({
  duration: 1000 /* スクロールアニメーションの遅延時間 */,
});
