// To copy small profile pic over to bottom left side of header.

const profilePic = document.getElementById("profile-pic");
const bottomHeaderLeft = document.getElementById("bottom-header-left");
const greetings = document.getElementById("greetings");

const profilePicCopy = profilePic.cloneNode(true);

profilePicCopy.id = "big-profile-pic";

bottomHeaderLeft.insertBefore(profilePicCopy, greetings);

// Copy icons for each main-content div

const mainContentIcons = document.getElementById("icons");
const mainContentDiv = Array.from(document.querySelectorAll(".main-content"));


for (let i = 1; i < 6; i++) {
    let iconCopy = mainContentIcons.cloneNode(true);
    mainContentDiv[i].append(iconCopy);
}
