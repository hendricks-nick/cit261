function changeState (className) {

    console.log(document.getElementById(className).style.animationPlayState);
    
    if (document.getElementById(className).style.animationPlayState == 'paused'){
        console.log("Switching " + className + " from paused to play.");
        document.getElementById(className).style.animationPlayState = 'running';
        document.getElementById(className + "btn").innerHTML = "Pause";

    }
    else {
        console.log("Switching " + className + " from play to paused.");
        document.getElementById(className).style.animationPlayState = 'paused';
        document.getElementById(className + "btn").innerHTML = "Play";
        
    }
}
