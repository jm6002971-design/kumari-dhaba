// Kumari Dhaba - Interactive Logic
(function () {
  'use strict';

  // 1. Dismiss intro splash screen after 1.85 seconds
  const intro = document.getElementById('intro-screen');
  if (intro) {
    setTimeout(() => {
      intro.style.display = 'none';
    }, 1850);
    intro.addEventListener('click', () => {
      intro.style.display = 'none';
    });
  }

  // 2. Mobile navigation toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mainNav = document.getElementById('main-nav');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (mobileToggleBtn && mainNav) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', isOpen);
        iconClose.classList.toggle('hidden', !isOpen);
      }
    });

    // Close menu when clicking any nav link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    });
  }

  // 3. Dishes Data for modal details
  const dishesData = {
    "Chicken Dum Biryani": {
      name: "Chicken Dum Biryani",
      price: "₹220",
      image: "./assets/biryani-ByOredF4.jpg",
      detail: "Slow-cooked dum-style chicken and aromatic rice, finished with herbs and fried onions."
    },
    "Mutton Biryani": {
      name: "Mutton Biryani",
      price: "₹280",
      image: "./assets/mutton-biryani-BLqOaAgT.jpg",
      detail: "Aromatic rice layered with tender mutton and whole spices."
    },
    "Veg Biryani": {
      name: "Veg Biryani",
      price: "₹160",
      image: "./assets/veg-biryani-KoMNAcFl.jpg",
      detail: "Fragrant rice with seasonal vegetables, herbs and spices."
    },
    "Andhra Chicken Curry": {
      name: "Andhra Chicken Curry",
      price: "₹200",
      image: "./assets/chicken-curry-BAIpEHrh.jpg",
      detail: "Andhra-style chicken curry with red chillies and fragrant curry leaves. Pair with rice or parotta."
    },
    "Butter Naan": {
      name: "Butter Naan",
      price: "₹40",
      image: "./assets/butter-naan-KkhCfK6C.jpg",
      detail: "Tandoor-baked flatbread finished with butter. Contains wheat and dairy."
    },
    "Chicken Seekh Kabab": {
      name: "Chicken Seekh Kabab",
      price: "₹230",
      image: "./assets/seekh-kebab-B4RxIClX.jpg",
      detail: "Minced chicken seasoned with herbs and spices, shaped onto skewers and grilled. Served with chutney."
    },
    "Paneer Butter Masala": {
      name: "Paneer Butter Masala",
      price: "₹190",
      image: "./assets/paneer-masala-Eo2PxO_7.jpg",
      detail: "Paneer cubes in a smooth tomato-butter sauce with cream and aromatic spices. Contains dairy."
    },
    "Garlic Naan": {
      name: "Garlic Naan",
      price: "₹60",
      image: "./assets/garlic-naan-j-Bcgtii.jpg",
      detail: "Tandoor-baked naan with garlic, butter and coriander."
    },
    "Tandoori Roti": {
      name: "Tandoori Roti",
      price: "₹25",
      image: "./assets/tandoori-roti-Cyuy0fCd.jpg",
      detail: "Whole-wheat roti baked in the tandoor."
    },
    "Lachha Paratha": {
      name: "Lachha Paratha",
      price: "₹45",
      image: "./assets/lachha-paratha-BLx1-hCX.jpg",
      detail: "Layered flatbread with a crisp outside and soft centre."
    },
    "Plain Naan": {
      name: "Plain Naan",
      price: "₹30",
      image: "./assets/plain-naan-DE35t5C6.jpg",
      detail: "Soft, lightly charred flatbread for scooping up curry."
    },
    "Chicken Tikka": {
      name: "Chicken Tikka",
      price: "₹240",
      image: "./assets/chicken-tikka-Dr6zbfnd.jpg",
      detail: "Yogurt-marinated chicken pieces grilled with warming spices."
    },
    "Paneer Tikka": {
      name: "Paneer Tikka",
      price: "₹200",
      image: "./assets/paneer-tikka-CbMS4gmO.jpg",
      detail: "Marinated paneer, peppers and onions grilled together."
    },
    "Chicken 65": {
      name: "Chicken 65",
      price: "₹220",
      image: "./assets/chicken-65-D6IOCAle.jpg",
      detail: "Crisp chicken bites tossed with chillies and curry leaves."
    },
    "Veg Pakora": {
      name: "Veg Pakora",
      price: "₹110",
      image: "./assets/veg-pakora-D8KJ-cJx.jpg",
      detail: "Crispy vegetable fritters with chutney on the side."
    },
    "Butter Chicken": {
      name: "Butter Chicken",
      price: "₹240",
      image: "./assets/butter-chicken-DYx_4WdZ.jpg",
      detail: "Tender chicken in a creamy tomato-butter gravy."
    },
    "Mutton Curry": {
      name: "Mutton Curry",
      price: "₹280",
      image: "./assets/mutton-curry-CxYsIX1Y.jpg",
      detail: "Slow-cooked mutton in a hearty spiced gravy."
    },
    "Dal Tadka": {
      name: "Dal Tadka",
      price: "₹130",
      image: "./assets/dal-tadka-C8yKZWF6.jpg",
      detail: "Comforting yellow lentils with a sizzling spice tempering."
    },
    "Dal Makhani": {
      name: "Dal Makhani",
      price: "₹160",
      image: "./assets/dal-makhani-B1O1S2ny.jpg",
      detail: "Slow-simmered black lentils in a rich, creamy sauce."
    },
    "Kadai Paneer": {
      name: "Kadai Paneer",
      price: "₹190",
      image: "./assets/kadai-paneer-CNkcmg0v.jpg",
      detail: "Paneer and peppers in a bold, freshly spiced tomato gravy."
    },
    "Egg Curry": {
      name: "Egg Curry",
      price: "₹120",
      image: "./assets/egg-curry-3PaYZqmo.jpg",
      detail: "Boiled eggs in an aromatic onion and tomato gravy."
    },
    "Sweet Lassi": {
      name: "Sweet Lassi",
      price: "₹70",
      image: "./assets/sweet-lassi-BOxWFtJO.jpg",
      detail: "A chilled, creamy yogurt drink with a touch of sweetness."
    },
    "Masala Chaas": {
      name: "Masala Chaas",
      price: "₹40",
      image: "./assets/masala-chaas-D3EmT2uh.jpg",
      detail: "Refreshing spiced buttermilk with herbs."
    },
    "Fresh Lime Soda": {
      name: "Fresh Lime Soda",
      price: "₹50",
      image: "./assets/fresh-lime-soda--nnzcAGy.jpg",
      detail: "Fresh lime and sparkling soda, sweet or salted."
    }
  };

  // 4. Menu Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const dishCards = document.querySelectorAll('.dish-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update button active states
      filterButtons.forEach(b => {
        b.setAttribute('data-active', 'false');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.setAttribute('data-active', 'true');
      btn.setAttribute('aria-pressed', 'true');

      // Filter cards
      dishCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const isVeg = card.getAttribute('data-veg') === 'true';

        let show = false;
        if (category === 'All favourites') {
          show = true;
        } else if (category === 'Veg') {
          show = isVeg;
        } else if (category === 'Non-veg') {
          show = !isVeg;
        } else if (category === cardCategory) {
          show = true;
        }

        if (show) {
          card.classList.remove('dish-hidden');
        } else {
          card.classList.add('dish-hidden');
        }
      });
    });
  });

  // 5. Dish Modal Dialog
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackBtn = document.getElementById('modal-back-btn');
  const modalImg = document.getElementById('modal-dish-img');
  const modalTitle = document.getElementById('modal-dish-title');
  const modalPrice = document.getElementById('modal-dish-price');
  const modalDetail = document.getElementById('modal-dish-detail');

  function openDishModal(dishName) {
    const data = dishesData[dishName];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.name;
    modalTitle.textContent = data.name;
    modalPrice.textContent = data.price;
    modalDetail.textContent = data.detail;

    modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDishModal() {
    modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Click card or details button to open
  dishCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const dishName = card.getAttribute('data-name');
      openDishModal(dishName);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDishModal();
    });
  }

  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDishModal();
    });
  }

  // Close when clicking outside dialog content
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeDishModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
      closeDishModal();
    }
  });

})();
