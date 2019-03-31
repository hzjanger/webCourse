function account(obj) {
    let ul = obj.getElementsByTagName('ul')[0];
    //var li = obj.parentNode; // 父节点
    //var chils = li.childNodes; // 全部子节点
    if(ul.className == 'dropdown-links'){
        ul.classList.add('active');
    }else{
        ul.classList.remove('active');
    }
}

    let c1 = document.querySelector('.main-menu>ul>li:nth-child(1)');
    let c2 = document.querySelector('.main-menu>ul>li:nth-child(2)');
    let c3 = document.querySelector('.main-menu>ul>li:nth-child(3)');
    c1.addEventListener("mouseover",function () {
        c1.querySelector('.main-page-sub').style.transform='scaleY(1)';
    });
    c1.addEventListener("mouseout",function () {
        c1.querySelector('.main-page-sub').style.transform='scaleY(0)';
    });

    c2.addEventListener("mouseover",function () {
        c2.querySelector('.store-sub').style.transform='scaleY(1)';
    });
    c2.addEventListener("mouseout",function () {
        c2.querySelector('.store-sub').style.transform='scaleY(0)';
    });

    c3.addEventListener("mouseover",function () {
        c3.querySelector('.store-sub').style.transform='scaleY(1)';
    });
    c3.addEventListener("mouseout",function () {
        c3.querySelector('.store-sub').style.transform='scaleY(0)';
    });


