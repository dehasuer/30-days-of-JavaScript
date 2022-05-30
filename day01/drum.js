window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //to catch the audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //to catch the key
    if(!audio) return; //to stop the function
    audio.currentTime = 0; //to repeat the audio
    audio.play(); //to play the audio

    
});



