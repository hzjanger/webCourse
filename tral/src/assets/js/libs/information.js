import {loadFooter, loadHeader, loadHot, loadRecommend, loadTreasure} from "./loadHtml";
import $ from 'jquery';

loadHeader(1);
loadRecommend();
loadHot();
loadTreasure();
loadFooter();
$(function () {

});
