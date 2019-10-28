const header = document.getElementsByTagName('header')[0];

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add('header-thin');
  } else header.classList.remove('header-thin');
});
