const avatarPreview = document.getElementById("avatar-preview");
const styleButtons = document.querySelectorAll(".style-btn");
const downloadBtn = document.getElementById("download-btn");

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedStyle = button.getAttribute("data-style");

    styleButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const classes = avatarPreview.className
      .split(" ")
      .filter((c) => !c.startsWith("style-"));
    avatarPreview.className = classes.join(" ").trim();

    avatarPreview.classList.add(selectedStyle);

    if (selectedStyle !== "style-noir") {
      avatarPreview.style.filter = "none";
    }
  });
});

//Download the new avatar
downloadBtn.addEventListener("click", () => {
  const avatarContainer = document.getElementById("avatar-preview");

  html2canvas(avatarContainer, {
    backgroundColor: null,
    useCORS: true,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-iconic-avatar.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

//Reset button

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  avatarPreview.classList.remove(
    "style-professional",
    "style-funny",
    "style-cyber",
    "style-sunset",
    "style-noir",
    "style-mint",
    "style-royal"
  );

  avatarPreview.style.transform = "scale(0.95)";
  setTimeout(() => {
    avatarPreview.style.transform = "scale(1)";
  }, 150);
});
