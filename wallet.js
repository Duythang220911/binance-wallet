document.addEventListener('DOMContentLoaded', function () {
  const historyBtn = document.getElementById('history-btn');
  const bottomSheet = document.getElementById('bottom-sheet');
  const overlay = document.getElementById('sheet-overlay');

  historyBtn.addEventListener('click', function () {
    bottomSheet.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  overlay.addEventListener('click', function () {
    bottomSheet.classList.remove('active');
    document.body.style.overflow = '';
  });
});
// const bottomSheet = document.getElementById("bottom-sheet");
// const overlay = document.getElementById("sheet-overlay");

// // click ra ngoài để đóng
// overlay.addEventListener("click", () => {
//   bottomSheet.classList.remove("active");
// });