// ==UserScript==
// @name         知乎免登陆 - 新版
// @description  知乎免登陆
// @namespace    https://www.zhihu.com/
// @match        *://www.zhihu.com/*
// @version 0.0.1.20201201064337
// ==/UserScript==

'use strict';
(function () {
    document.getElementsByClassName('OpenInAppButton')[0].hidden = true
    document.getElementsByClassName('ModalWrap')[0].hidden= true
    document.getElementsByTagName('Header')[0].hidden=true
    document.body.classList.remove('ModalWrap-body')
    document.getElementsByClassName('AnswersNavWrapper')[0].nextSibling.remove()
    document.getElementsByClassName('HotQuestions')[0].remove()
    document.getElementsByClassName('AdBelowMoreAnswers')[0].remove()
})();
