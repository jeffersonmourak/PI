function PiData() {

    function piPlayerSingle(element) {
        var playButton = element.$.play;
        var pauseButton = element.$.pause;
        var controls = element.$.controls;
        var player = element.$.player;
        this.layout = {};
        this.layout.play = function(html) {
            if (html !== undefined) {
                playButton.innerHTML = html;
            } else {
                return playButton.innerHTML;
            }
        }
        this.layout.pause = function(html) {
            if (html !== undefined) {
                pauseButton.innerHTML = html;
            } else {
                return pauseButton.innerHTML;
            }
        }
        this.layout.controlOut = function(e) {
            setTimeout(function() {
                controls.style.display = "none";
            }, 500);
        }
        this.layout.controlIn = function(e) {
            controls.style.display = "Block";
        }

        this.play = function() {
            player.play();
            play.style.display = "none";
            pause.style.display = "block";
        }
        this.pause = function() {
            player.pause();
            play.style.display = "block";
            pause.style.display = "none";
        }

    }

    var piPlayer = this.$,
        element = this,
        youtube = element.youtube,
        player = piPlayer.player,
        play = piPlayer.play,
        pause = piPlayer.pause,
        controls = piPlayer.controls,
        buffer = piPlayer.buffer,
        watched = piPlayer.watched,
        progressBar = piPlayer.progressBar,
        progressIndicator = piPlayer.progressBarIndicator;

    if (youtube === undefined || youtube == "") {
        console.error("Error 1, Please insert the video Code to use the element")
        controls.style.display = "none";
    } else {
        var ironAjax = document.createElement("iron-ajax");
        ironAjax.setAttribute("auto", "");
        ironAjax.setAttribute("url", "http://jeffersonmourak.com/yt.php?v=" + youtube);
        ironAjax.setAttribute("handle-as", "json");

        element.appendChild(ironAjax);

        ironAjax.addEventListener("response", loadVideo, false);

    }

    play.addEventListener("click", playVideo, false);
    pause.addEventListener("click", pauseVideo, false);

    function playVideo() {
        player.play();
        play.style.display = "none";
        pause.style.display = "block";
    }

    function pauseVideo() {
        player.pause();
        play.style.display = "block";
        pause.style.display = "none";
    }


    function generateQualityData(list) {
        var mediumQ = [];
        var HD = [];
        for (var i in list) {
            var item = list[i];
            var type = item.type.split("; ")[0];
            if (type.indexOf("mp4") != -1 || type.indexOf("webm") != -1) {
                var quality = item.quality;
                var source = item.url;
                if (quality == "medium") {
                    mediumQ.push({
                        source: source,
                        quality: quality,
                        type: type
                    });
                } else if (quality.indexOf('hd') != -1) {
                    HD.push({
                        source: source,
                        quality: quality,
                        type: type
                    });
                }

            }
        }
        return {
            hd: HD,
            medium: mediumQ
        };
    }

    function loadVideo(e) {
        var streams = generateQualityData(e.detail.__data__.response);
        for (i in streams.medium) {
            var source = streams.medium[i];
            var element = document.createElement("source");
            element.type = source.type;
            element.src = source.source;
            player.appendChild(element);
        }
    }

    player.addEventListener("timeupdate", function(e) {
        var currentTime = player.currentTime;
        var duration = player.duration;
        var percentage = (currentTime * 100) / duration;
        changePercentage(percentage);
        var buffered = (player.buffered.end(0) * 100) / duration;
        changeBuffer(buffered);
    });

    function changeBuffer(percent) {
        buffer.style.width = percent + "%";
    }

    function changePercentage(percent) {
        if (!isDown) {
            watched.style.width = percent + "%";
            var position = (percent * progressBar.offsetWidth) / 100;
            progressIndicator.style.left = position - 10 + "px";
            var percentage = (100 * position) / progressBar.offsetWidth;
            var progressPercent = Math.round(percentage);
            var event = new Event('pi-progress-changed');
            event.progress = progressPercent;
            element.dispatchEvent(event);
        }
    }

    function getVideoTime(percentage) {
        var duration = player.duration;
        var time = duration * percentage / 100;
        return time;
    }

    function mouseMove(e) {
        e.preventDefault();
        if (isDown) {
            var position = (e.clientX - progressBar.offsetLeft);
            if (position >= 0 && position <= progressBar.offsetWidth) {
                progressIndicator.style.left = position + "px";

                var percentage = (100 * position) / progressBar.offsetWidth;
                var progressPercent = Math.round(percentage);
                var event = new Event('pi-progress-changed');
                event.progress = progressPercent;
                element.dispatchEvent(event);
            }
        }
    }

    var isDown = false;
    progressBar.addEventListener("mousedown", function(e) {
        isDown = true;
    }, true);

    progressBar.addEventListener("mouseup", function(e) {
        isDown = false;
        var position = (e.clientX - progressBar.offsetLeft);
        if (position >= 0 && position <= progressBar.offsetWidth) {
            var percentage = (100 * position) / progressBar.offsetWidth;
            player.currentTime = getVideoTime(percentage);
        }

    });

    progressBar.addEventListener("mousemove", mouseMove, false);

    this.control = new piPlayerSingle(this);

    element.addEventListener("mouseout", this.control.layout.controlOut, true);

    element.addEventListener("mousemove", this.control.layout.controlIn, true);


}
