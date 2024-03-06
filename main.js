const items = document.querySelectorAll('.video-container');

items.forEach(item => {
  // see change below
  const video = item.querySelector('video');
  const hoverText = item.querySelector('.hover-text');

  video.addEventListener("click", () => {
    if(video.paused){
      video.play()
      console.log('okok');
      hoverText.classList.remove("active");
    } else{
      video.pause()
      hoverText.classList.add("active");
    }
  });
});