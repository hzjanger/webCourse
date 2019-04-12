import {loadHeader, loadFooter} from "./loadHtml";
import $ from 'jquery';
//加载头部信息
loadHeader(0);
console.log('hello world xxx');

//加载脚步信息
loadFooter();

$(function () {
    console.log('hello world');
});
console.log('hello world');
