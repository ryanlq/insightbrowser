window.onload=function(){
    document.getElementsByClassName('OpenInAppButton')[0].hidden = true
    document.getElementsByClassName('ModalWrap')[0].hidden= true
    document.getElementsByTagName('Header')[0].hidden=true
    document.body.classList.remove('ModalWrap-body')
    document.getElementsByClassName('AnswersNavWrapper')[0].nextSibling.remove()
    document.getElementsByClassName('HotQuestions')[0].remove()
    document.getElementsByClassName('AdBelowMoreAnswers')[0].remove()
}
