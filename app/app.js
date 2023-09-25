import { getPage } from "./model.js";

function windowRoute() {
  getPage();
}

function initListeners() {
  $(window).on("hashchange", windowRoute);
  windowRoute();
}

$(document).ready(function () {
  initListeners();
});
