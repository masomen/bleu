// JavaScript to Ensure Video Plays and Debug Issues
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");

    // Attempt to play the video
    video.play().then(() => {
        console.log("Video is playing successfully.");
    }).catch(err => {
        console.error("Video playback failed:", err);
    });
});
