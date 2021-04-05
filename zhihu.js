// ==UserScript==
// @name         知乎免登陆 - 新版
// @description  知乎免登陆
// @namespace    https://www.zhihu.com/
// @match        *://www.zhihu.com/*
// @version 0.0.1.20201201064337
// ==/UserScript==

'use strict';
(function () {
    let removeLoginModal = e => {
        if (e.target.getElementsByClassName('Modal-wrapper').length > 0) {
            e.target.getElementsByClassName('Modal-wrapper')[0].remove();
            setTimeout(() => {document.documentElement.style.overflowY = 'scroll';}, 0);
        }
    }
    document.addEventListener('DOMNodeInserted', removeLoginModal);
})();