const base =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? ""
    : "/setsuna-site";

fetch(base + "/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    document.querySelectorAll("#header a[href^='/']").forEach(a => {
      const href = a.getAttribute("href");
      a.setAttribute("href", base + href);
    });
  });