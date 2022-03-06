/* New Dark Mode color is 'radial-gradient(circle, rgba(65,112,60,1) 22%, rgba(180,95,55,1) 100%, rgba(18,18,1,1) 100%)') but the code is not working if I switvh them*/

function toggleDarkMode() {
    var bodyElement = document.getElementById("mainBackground")
    var darkModeBtnElement = document.getElementById("darkModeButton")
    var darkModeBackground = 'radial-gradient(circle, rgba(218,122,96,1) 22%, rgba(144,152,61,1) 100%, rgba(244,242,206,1) 100%)'
    var lightModeBackground = 'radial-gradient(circle, rgb(65, 112, 60) 22%, rgb(180, 95, 55) 100%, rgb(18, 18, 1) 100%)'
     // IF BLACK, SWITCH TO GRADIENT 
     console.log(bodyElement.style.background)
    if (bodyElement.style.background == lightModeBackground) {
        bodyElement.style.background = darkModeBackground
        darkModeBtnElement.innerHTML="Change to Dark Mode"
    // IF ITS IN LIGHT MODE, SWITCH BACK TO BLACK
    } else {
        console.log('in the else statement')
        bodyElement.style.background = lightModeBackground
        darkModeBtnElement.innerHTML="Change to Light Mode"
    }
}
