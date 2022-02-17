// ==UserScript==
// @name         Remove Douban Tracker
// @name:zh-CN   移除豆瓣个人信息跟踪
// @namespace    https://github.com/Ryauou/Tampermonkey-scripts
// @version      0.1
// @description  移除豆瓣页面内隐藏的个人信息跟踪标识，防止发豆瓣截图被精准溯源水表。
// @author       Konnyaku
// @match        https://*.douban.com/*
// @match        http://*.douban.com/*
// @icon         https://www.douban.com/favicon.ico
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://ossweb-img.qq.com/images/js/jquery/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    $("div[class=track]").remove();
})();
