var audio_w = new Audio('./sounds/crash.mp3');
var audio_a = new Audio('./sounds/kick-bass.mp3');
var audio_s = new Audio('./sounds/snare.mp3');
var audio_d = new Audio('./sounds/tom-1.mp3');
var audio_j = new Audio('./sounds/tom-2.mp3');
var audio_k = new Audio('./sounds/tom-3.mp3');
var audio_l = new Audio('./sounds/tom-4.mp3');

for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        switch(buttonInnerHTML) {
            case "w":
                audio_w.play();
                break;
            case "a":
                audio_a.play();
                break;
            case "s":
                audio_s.play();
                break;
            case "d":
                audio_d.play();
                break;
            case "j":
                audio_j.play();
                break;
            case "k":
                audio_k.play();
                break;
            case "l":
                audio_l.play();
                break;
            
            default: console.log(buttonInnerHTML);

        }
    });

}
all_audio[i].play();