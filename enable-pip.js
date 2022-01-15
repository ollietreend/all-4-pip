// Wait for the <video> element to be created
document.arrive("video.vod-player", {existing: true, fireOnAttributesModification: true}, function() {
  // Re-enable Picture-in-Picture (PiP)
  this.disablePictureInPicture = false;
});
