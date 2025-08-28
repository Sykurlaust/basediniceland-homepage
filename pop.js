



  // open popup
  document.querySelectorAll(".open-popup").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).style.display = "flex";
    });
  });

  // close popup
  document.querySelectorAll(".popup .close").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".popup").style.display = "none";
    });
  });

  // close if clicking outside content
  document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", e => {
      if (e.target === popup) popup.style.display = "none";
    });
  });



  // open popup
document.querySelectorAll(".open-popup").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");
    document.getElementById(targetId).style.display = "flex";
    document.body.classList.add("hide-logo", "modal-open");   // <—
  });
});

// close popup (X)
document.querySelectorAll(".popup .close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".popup").style.display = "none";
    document.body.classList.remove("hide-logo", "modal-open"); // <—
  });
});

// close by clicking backdrop
document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("click", e => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.classList.remove("hide-logo", "modal-open"); // <—
    }
  });
});

// on open
document.body.classList.add('hide-logo','modal-open');
// on close
document.body.classList.remove('hide-logo','modal-open');