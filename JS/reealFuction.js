var currentVideoIndex = 0;
var videos = document.getElementsByClassName("video-container");
var carouselContainer = document.querySelector(".carousel-container");
var autoplayInterval;

function showVideos(startIndex) {
  if (startIndex >= 0 && startIndex < videos.length) {
    var endIndex = startIndex + 3;
    if (endIndex > videos.length) {
      endIndex = videos.length;
    }

    for (var i = 0; i < videos.length; i++) {
      videos[i].style.display = "none";
    }

    for (var j = startIndex; j < endIndex; j++) {
      videos[j].style.display = "inline-block";
    }

    currentVideoIndex = startIndex;
    playCurrentVideo();
  }
}

function playCurrentVideo() {
  var videoElement = videos[currentVideoIndex].getElementsByTagName("video")[0];
  videoElement.play();

  videoElement.addEventListener("ended", function () {
    videoElement.pause();
    nextVideo();
  });
}

function previousVideos() {
  var previousIndex = currentVideoIndex - 3;
  if (previousIndex < 0) {
    previousIndex = videos.length - 3;
  }

  showVideos(previousIndex);
}

function nextVideos() {
  var nextIndex = currentVideoIndex + 3;
  if (nextIndex >= videos.length) {
    nextIndex = 0;
  }

  showVideos(nextIndex);
}

function playVideosInOrder() {
  autoplayInterval = setInterval(function () {
    nextVideo();
  }, 180000);
}

function nextVideo() {
  var nextIndex = currentVideoIndex + 1;
  if (nextIndex >= videos.length) {
    nextIndex = 0;
  }

  showVideos(nextIndex);
}

showVideos(0);
playVideosInOrder();
