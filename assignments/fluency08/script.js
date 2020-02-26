var boxOne = document.getElementsByClassName('box')[0];

/* Uses getElementsByClassName to trigger on click event.
   Checks for play or paused state */
 document.getElementsByClassName('toggleButton')[0].onclick = function() {
  if (this.innerHTML === 'Play') { 
    this.innerHTML = 'Pause';

    /* Uses classList, a DOM object function made access to by creating the object above.
     This changes the class name in the HTML to trigger the transition */
    boxOne.classList.add('horizTranslate');
  } 
  else {
    this.innerHTML = 'Play';

    /* Saves the location of the margin left and saves it to the CSS inline 
       To prevent it from resetting */
    //var computedStyle = window.getComputedStyle(boxOne),
        // marginLeft = computedStyle.getPropertyValue('margin-left');
    // boxOne.style.marginLeft = marginLeft;
    boxOne.classList.remove('horizTranslate');    
  }  
}

function pauseAnimation() {

}