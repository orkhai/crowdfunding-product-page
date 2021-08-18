const menuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const background = document.querySelector(".background");
const bookmarkBtn = document.querySelector(".bookmark");
const bookmarkSpan = document.querySelector("span");
const projectBtn = document.querySelector(".project");
const closeModalBtn = document.querySelector(".close-menu");
const modal = document.querySelector(".modal");
const modalComplete = document.querySelector(".modal-completed");
const gotItBtn = document.querySelector(".gotit");

const noReward = document.querySelector(".modal-no-reward");
const noRewardRadio = document.querySelector("#no-reward");
const noRewardPledge = document.querySelector(".modal-no-reward-pledge");
const noRewardBtn = document.querySelector(".no-reward-button");

const bamboo = document.querySelector(".modal-bamboo");
const bambooRadio = document.querySelector("#bamboo");
const bambooPledge = document.querySelector(".modal-bamboo-pledge");
const bambooPledgeInput = document.querySelector("#bamboo-pledge");
const bambooBtn = document.querySelector(".bamboo-button");

const black = document.querySelector(".modal-black");
const blackRadio = document.querySelector("#black");
const blackPledge = document.querySelector(".modal-black-pledge");
const blackPledgeInput = document.querySelector("#black-pledge");
const blackBtn = document.querySelector(".black-button");

let backers = 5007;
const backersNum = document.querySelector(".backers-num");
let backed = 89914;
const backedAmount = document.querySelector(".backed-amount");

const progressBar = document.querySelector("progress");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-open");
  mobileMenu.classList.toggle("mobile-menu-open");
  background.classList.toggle("background-active");
});

projectBtn.addEventListener("click", () => {
  modal.style.display = "block";
  background.classList.add("background-active");
  resetModal();
});

noReward.addEventListener("click", () => {
  noReward.classList.add("modal-clicked");
  noRewardRadio.checked = true;
  noRewardPledge.style.display = "block";
  bamboo.classList.remove("modal-clicked");
  bambooPledge.style.display = "none";
  black.classList.remove("modal-clicked");
  blackPledge.style.display = "none";
});

noRewardBtn.addEventListener("click", modalCompleted);

bamboo.addEventListener("click", () => {
  bamboo.classList.add("modal-clicked");
  bambooRadio.checked = true;
  bambooPledge.style.display = "block";
  noReward.classList.remove("modal-clicked");
  black.classList.remove("modal-clicked");
  blackPledge.style.display = "none";
  noRewardPledge.style.display = "none";
});

bambooBtn.addEventListener("click", () => {
  backed += parseInt(bambooPledgeInput.value);
  backedAmount.innerHTML = `$${backed.toLocaleString("en-US")}`;
  progressBar.value = backed;
  modalCompleted();
});

black.addEventListener("click", () => {
  black.classList.add("modal-clicked");
  blackRadio.checked = true;
  blackPledge.style.display = "block";
  noReward.classList.remove("modal-clicked");
  bamboo.classList.remove("modal-clicked");
  bambooPledge.style.display = "none";
  noRewardPledge.style.display = "none";
});

blackBtn.addEventListener("click", () => {
  backed += parseInt(blackPledgeInput.value);
  backedAmount.innerHTML = `$${backed.toLocaleString("en-US")}`;
  progressBar.value = backed;
  modalCompleted();
});

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("bookmarked");
  bookmarkSpan.classList.toggle("bookmark-clicked");
  if (bookmarkSpan.classList.contains("bookmark-clicked")) {
    bookmarkSpan.innerHTML = "Bookmarked";
  } else {
    bookmarkSpan.innerHTML = "Bookmark";
  }
});

closeModalBtn.addEventListener("click", closeModal);
gotItBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  modalComplete.style.display = "none";
  background.classList.remove("background-active");
}

function modalCompleted() {
  modal.style.display = "none";
  modalComplete.style.display = "block";
  background.classList.add("background-active");
  backers++;
  backersNum.innerHTML = backers.toLocaleString("en-US");
}

function resetModal() {
  noRewardRadio.checked = false;
  noReward.classList.remove("modal-clicked");
  noRewardPledge.style.display = "none";
  blackRadio.checked = false;
  black.classList.remove("modal-clicked");
  blackPledge.style.display = "none";
  blackPledgeInput.value = "";
  bambooRadio.checked = false;
  bamboo.classList.remove("modal-clicked");
  bambooPledge.style.display = "none";
  bambooPledgeInput.value = "";
}
