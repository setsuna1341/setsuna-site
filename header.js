const base =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? ""
    : "/setsuna-site";

fetch(base + "/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  });