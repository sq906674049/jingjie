// 移动端切换导航栏
var navEl = document.querySelector('.nav');
var navToggle = document.querySelector('.nav-toggle');

navToggle.onclick = function () {
    if (navEl.className.includes('show')) {
        this.classList.remove('close');
        navEl.classList.remove('show')
    } else {
        this.classList.add('close');
        navEl.classList.add('show')
    }

}

// 生成作品展示列表
function initWorks(num) {
    var worksEl = document.querySelector(".works-list");
    var str = ``;
    for (var i = 0; i < num; i++) {
        str += `<li class="works-item">
                    <img src="static/imgs/prod-${i+1}.png" alt="">
                    <div class="mask">
                        <div class="frame">
                            <p class="en">Xiao Ru & Grady</p>
                            <p class="date">2018.6.25</ p>
                        </div>
                    </div>
                </li>`;
    }
    worksEl.innerHTML = str;
}

// active类名切换
/* 列表中的项目要有item类名
    list:列表的css选择器
*/
function toggleAct(list) {
    var listEl = document.querySelector(list);
    listEl.addEventListener('click', function (e) {
        if (e.target.className.includes('item')) {
            document.querySelector(`${list} .active`).classList.remove('active');
            e.target.classList.add('active');
        }
    })
}