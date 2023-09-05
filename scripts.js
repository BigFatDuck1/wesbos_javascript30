

window.addEventListener("keydown", function(event) {
    
    let key_selected = event.code;
    
    
    //a[x] is an attribute selector
    let audio = document.querySelector(`audio[data-key=${key_selected}]`); //`This is a template string ${}`
    if (audio == null) {
        return 1; //Just returning something so the function quits right here without doing anything else (such as console.log)
    }
    
    //Restart audio if it has already played/in the process of playing
    audio.currentTime = 0;

    audio.play();

    //Pressed animation
    let letter = document.querySelector(`div[data-key=${key_selected}]`);
    letter.classList.add("playing"); //Add .playing to the class list of the key so it plays this custom animation

    //Terminate the animation
    function terminateAnimation(event) {
        //console.log(event);
        if (event.propertyName != "transform") {
            return 2; //Quits the function if the event is not "transform" property
            //Which is the longest running function, we want the animation to terminate
            //once that is over
        }
        this.classList.remove("playing");
    };

    let all_keys = document.querySelectorAll(".key");
    all_keys.forEach((item) => {

        item.addEventListener("transitionend", terminateAnimation);
        //Callback a function that terminates the animation
    });

})