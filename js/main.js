const shareContainer = document.querySelector('.share-social-icons');
const shareItem = document.querySelector('.share');
const shareBtn = document.getElementById('btn-share');
const shareBtnClose = document.getElementById('btn-share-close');
const shareBtnMobileClose = document.getElementById('btn-share-mobile-close');

shareBtn.addEventListener("click", share);
shareBtnClose.addEventListener("click", hiddenShare);
shareBtnMobileClose.addEventListener("click", hiddenShareMobile);

function share() {
    shareContainer.classList.remove("hidden");
    shareBtnClose.classList.remove("hidden");
    shareBtn.style.display = "none"
}

function hiddenShare() {
    shareContainer.classList.add("hidden");
    shareBtnClose.classList.add("hidden");
    shareBtn.style.display = "block"
}

function hiddenShareMobile() {
    shareContainer.classList.add("hidden");
    shareBtnClose.classList.add("hidden");
    shareBtn.style.display = "block"
}

