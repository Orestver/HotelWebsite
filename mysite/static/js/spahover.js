
const services = {
  massage: {
    img: staticUrls.massage,
    title: "Ароматерапевтичний масаж",
    text: "Зануртеся у світ спокою з нашими натуральними ефірними оліями...",
    text2: "Час роботи 9:00 - 21:00"
  },
  sauna: {
    img: staticUrls.sauna,
    title: "Фінська сауна",
    text: "Очистіть своє тіло і розум у нашій традиційній дерев’яній сауні...",
    text2: "Час роботи 10:00 - 18:00"
  },
  facecare: {
    img: staticUrls.facecare,
    title: "Догляд за обличчям",
    text: "Індивідуальні процедури для вашої шкіри...",
    text2: "Час роботи 12:00 - 18:00"
  },
  jacuzzi: {
    img: staticUrls.jacuzzi,
    title: "Гідротерапія / Джакузі",
    text: "Тепла вода, легкі хвилі та спокійна музика допоможуть повністю розслабитися...",
    text2: "Час роботи 8:00 - 16:00"
  }
};

const spaMenuItems = document.querySelectorAll('.spa-menu .menu-item');
const spaInfoBox = document.getElementById('spa-info');

spaMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    spaMenuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    spaInfoBox.classList.remove('active');
    setTimeout(() => {
      const key = item.dataset.service;
      const { img, title, text, text2 } = services[key];
      spaInfoBox.innerHTML = `
        <img src="${img}" alt="${title}" class="spafitness-info-img">
        <div class="spafitness-info-text">
          <h2>${title}</h2>
          <p>${text}</p>
          <p>${text2}</p>
          <button class="btn-try" type="button" onclick="openBookingPopup()">Спробувати зараз</button>
        </div>
      `;
      void spaInfoBox.offsetWidth;
      spaInfoBox.classList.add('active');
    }, 200);
  });
});



// Fitness section--------------------------------------------------------------------------------------------------

const fitnessServices = {
  gym: {
    img: fitnessStaticUrls.gym,
    title: "Сучасний фітнес-зал",
    text: "Наш зал обладнаний тренажерами нового покоління для силових і функціональних тренувань. Атмосфера енергії та мотивації допоможе вам досягти найкращих результатів.",
    text2: "Графік роботи 6:00 – 23:00"
  },
  cardio: {
    img: fitnessStaticUrls.cardio,
    title: "Кардіо-зона",
    text: "Підвищіть витривалість і спаліть калорії у нашій кардіо-зоні. Бігові доріжки, велосипеди, орбітреки — усе для ефективного тренування серця.",
    text2: "Графік роботи 6:00 – 23:00"
  },
  classes: {
    img: fitnessStaticUrls.classes,
    title: "Групові заняття",
    text: "Займайтеся у компанії однодумців! Йога, зумба, TRX, функціональний тренінг — усе, щоб тренування приносили задоволення та результат.",
    text2: "Групові заняття проводяться за розкладом"
  },
  trainer: {
    img: fitnessStaticUrls.trainer,
    title: "Персональний тренер",
    text: "Отримайте індивідуальну програму тренувань, розроблену професійним тренером. Підтримка, мотивація та контроль на кожному етапі.",
    text2: "Попередній запис обов’язковий"
  }
};

const fitnessMenuItems = document.querySelectorAll('.fitness-menu .menu-item');
const fitnessInfoBox = document.getElementById('gym-info');

fitnessMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    fitnessMenuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    fitnessInfoBox.classList.remove('active');
    setTimeout(() => {
      const key = item.dataset.service;
      const { img, title, text, text2 } = fitnessServices[key];
      fitnessInfoBox.innerHTML = `
        <img src="${img}" alt="${title}" class="spafitness-info-img">
        <div class="spafitness-info-text">
          <h2>${title}</h2>
          <p>${text}</p>
          <p>${text2}</p>
          <button class="btn-try" type="button" onclick="openBookingPopup()">Записатися на тренування</button>
        </div>
      `;
      void fitnessInfoBox.offsetWidth;
      fitnessInfoBox.classList.add('active');
    }, 200);
  });
});

