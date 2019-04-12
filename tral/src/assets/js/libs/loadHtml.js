import $ from 'jquery';

/**
 * 加载头部信息
 */
function loadHeader(i) {
    $.ajax({
        url: './src/app/header.html',
        type: 'get',
        success: (data) => {
            $("#header").html(data);
            $('.link ul li.active').removeClass('active');
            $($('.link ul li')[i]).addClass('active');
        }
    });
}

/**
 * 加载底部信息
 */
function loadFooter() {
    $.ajax({
        url: './src/app/footer.html',
        type: 'get',
        success: (data) => {
            $("#footer").html(data);
        }
    });
}

/**
 * 加载景点推荐信息
 */
function loadRecommend() {
    $.ajax({
        url: './src/app/recommend.html',
        type: 'get',
        success: (data) => {
            $('.recommend').html(data);
        }
    })
}

/**
 * 加载热卖旅游信息
 */
function loadHot() {
    $.ajax({
        url: './src/app/hot.html',
        type: 'get',
        success: (data) => {
            $('.hot').html(data);
        }
    });
}

/**
 * 加载旅游百宝箱信息
 */
function loadTreasure() {
    $.ajax({
        url: './src/app/treasure.html',
        type: 'get',
        success: (data) => {
            $('.treasure').html(data);
        }
    });
}

export {loadFooter, loadHeader, loadRecommend, loadHot, loadTreasure}
