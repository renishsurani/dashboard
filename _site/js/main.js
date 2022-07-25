$(document).ready(function () {
  $(".menu_btn").click(function () {
    $(".ui.sidebar")
      .sidebar({
        context: $(".segment"),
        transition: "overlay",
        mobileTransition: "overlay",
      })
      .sidebar("attach events", ".menu_btn");
  });

  $(".login_btn").click(function () {
    $(".ui.login").modal("show");
  });
  $(".signup_btn").click(function () {
    $(".ui.signup").modal("show");
  });
});
