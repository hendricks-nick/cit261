function changeState (className) {
    var docClass = document.getElementsByClassName(className);

    if (docClass[0].style.animationPlayState === 'paused'){
        docClass[0].style.animationPlayState = 'play';
        document.getElementById(className).innerHTML = "Pause";
    }
    else {
        docClass[0].style.animationPlayState = 'paused';
        document.getElementById(className).innerHTML = "Play";
    }
}