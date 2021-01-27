// get current year for the footer
document.getElementById('footer_year').innerText = new Date().getFullYear();

// header setup
const header = document.getElementsByTagName('header')[0];

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add('header-thin');
  } else header.classList.remove('header-thin');
});

// testimonials setup
const testimonials = [
  {
    id: 'stylist',
    title: 'Lánczos Benkő Tímea Stylist:',
    text: '„Kedves jelenlétével mindig olyan irányba terel, ami a leginkább kihozza belőled az előnyeidet. rávilágít a kreatív lehetőségeidre és szuper ötletekkel támogat.”'
  },
  {
    id: 'little-pillow',
    title: 'My Little Pillow – Varga Zsuzsanna:',
    text: '„Nikivel való közös munka során lenyűgöző volt Niki rendelkezésre állása, segítőkészsége és szakmai tudása. Maximálisan ajánlom őt.” '
  },
  {
    id: 'pont',
    title: 'A Pont csapata:',
    text: '„Mindig naprakész és figyelmes! Nem csak precízen és hozzáértéssel teszi a munkáját, de igazán ráérez arra, mire van szüksége a megrendelőnek. Friss és lendületes magatartását a legnagyobb szívvel ajánljuk Mindenkinek!”'
  },
  {
    id: 'twistshake',
    title: 'Twistshake Hungary – Sándor Adrienn:',
    text: '„Ha facebook vagy instagram, akkor Nikit válaszd! Nagyon kreatív, szuper ötletekkel, emellett végtelenül kedves és türelmes. Folyamatosan képezi magát és szereti az újdonságot. Munkája gyors és eredményes! Vele együtt fél év alatt elértük azt, amit egyedül évekig tartott volna. Ezúton is köszönjük neki!”'
  },
  {
    id: 'pte',
    title: 'PTE ÁOK – Dr. Duga Zsófia:',
    text: '„Karunk Instagram és Facebook oldalának áttervezésére, újragondolására kerestünk szakembert, s bemutatkozó munkái alapján Nikit választottuk, s nem csalódtunk! Kreatív, lendületes és dinamikus. Érződik, hogy szereti, amivel foglalkozik.”'
  }
];
const testimonialsContainer = document.querySelector('.testimonials');
const tesTitle = testimonialsContainer.querySelector('h2');
const tesText = testimonialsContainer.querySelector('p');
const allImages = document.querySelectorAll('.img-wrapper img');
let tesIndex = 0;

const showTestimonials = () => {
  const currentImage = document.getElementById(testimonials[tesIndex].id);

  allImages.forEach(img => img.style.opacity = 0.5);
  currentImage.style.opacity = 1;

  tesTitle.innerText = testimonials[tesIndex].title;
  tesText.innerText = testimonials[tesIndex].text;

  tesIndex = tesIndex === testimonials.length - 1 ? 0 : tesIndex + 1;
};

showTestimonials();

let testimonialInterval = setInterval(showTestimonials, 5000);

allImages.forEach(img => {
  img.addEventListener('click', e => {
    clearInterval(testimonialInterval);
    testimonials.forEach((t, i) => {
      if (t.id === e.target.id) {
        tesIndex = i;
        showTestimonials();
      }
    });
  });
});