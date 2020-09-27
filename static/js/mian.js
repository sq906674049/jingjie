// 初始化banner
var mySwiper = new Swiper('.banner', {
    autoplay: true,
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// 初始化作品展示列表
initWorks(8);
