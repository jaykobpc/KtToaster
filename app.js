var btnapp = document.getElementById("btnapp");

btnapp.addEventListener("click", (e) => {
  new KtToaster({
    duration: 4000,
    text: "This is a notification message",
    textFontSize: 15,
    textFontWeight: 400,
    allowTextCopy: false,
  });
});
