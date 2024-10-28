document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play-button");
  const audio = document.getElementById("background-music");

  playButton.addEventListener("click", () => {
    audio
      .play()
      .then(() => {
        playButton.style.display = "none"; // Hide the button once the music starts
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  });
});
