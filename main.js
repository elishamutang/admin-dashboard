// To copy small profile pic over to bottom left side of header.

const profilePic = document.getElementById("profile-pic");
const bottomHeaderLeft = document.getElementById("bottom-header-left");
const greetings = document.getElementById("greetings");

const profilePicCopy = profilePic.cloneNode(true);

profilePicCopy.id = "big-profile-pic";

bottomHeaderLeft.insertBefore(profilePicCopy, greetings);

