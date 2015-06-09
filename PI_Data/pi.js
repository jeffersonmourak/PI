function PiElementReady() {
    var piPlayer = this.shadowRoot;
    var progressBar = piPlayer.querySelector(".progress");
    var progressIndicator = piPlayer.querySelector(".indicator");

    var isDown = false;
    progressBar.addEventListener("mousedown", function(e) {
        isDown = true;
    }, true);

    progressBar.addEventListener("mouseup", function(e) {
        isDown = false;
    });

    progressBar.addEventListener("mousemove", function(e) {
        e.preventDefault();
        if (isDown) {
            var position = (e.clientX - progressBar.offsetLeft) - 20;
            if (position >= 0 && position <= progressBar.offsetWidth) {
                progressIndicator.style.left = position + "px";

                var progressPercent = Math.round((100 * position) / progressBar.offsetWidth);
                var event = new Event('pi-progress-changed');
                event.progress = progressPercent;
                piPlayer.dispatchEvent(event);
            }
        }
    }, false);

    piPlayer.addEventListener("pi-progress-changed",function(e){
        console.log(e.progress);
    });

}
