const navLink = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLink.forEach((navLink) => {
  const navLinkPathname = new URL(navLink.href).pathname;
  if (windowPathname === navLinkPathname) {
    navLink.classList.add('actives');
  }
});
