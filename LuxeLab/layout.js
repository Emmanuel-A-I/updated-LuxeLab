function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data));
}

loadComponent("header-placeholder", "../components/header.html");
loadComponent("footer-placeholder", "../components/footer.html");
