const base =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? ""
    : "/setsuna-site";

fetch(base + "/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    document.querySelectorAll("#header a[href^='/']").forEach(a => {
      a.href = base + a.getAttribute("href");
    });
  });