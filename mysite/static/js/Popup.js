
  function openPopup() {
    document.getElementById("AboutPopup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("AboutPopup").style.display = "none";
  }

  // Закриття при кліку поза вікном
  window.onclick = function(event) {
    const popup = document.getElementById("AboutPopup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  }
