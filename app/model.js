export function getPage() {
  let hashID = window.location.hash;
  let pageID = hashID.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#inject").html(data);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      $("#inject").html(data);
    });
  }
}
