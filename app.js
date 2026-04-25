const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-active");
    nav.classList.remove("is-open");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));
const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const overlay = document.querySelector(".modal__overlay");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

const closeModalFunc = () => {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
};

closeModal.addEventListener("click", closeModalFunc);
overlay.addEventListener("click", closeModalFunc);

const carouselTrack = document.querySelector(".carousel-track");
const carouselPrev = document.querySelector(".carousel-btn-prev");
const carouselNext = document.querySelector(".carousel-btn-next");

if (carouselTrack && carouselPrev && carouselNext) {
  carouselNext.addEventListener("click", () => {
    carouselTrack.scrollBy({
      left: carouselTrack.clientWidth / 1.2,
      behavior: "smooth",
    });
  });

  carouselPrev.addEventListener("click", () => {
    carouselTrack.scrollBy({
      left: -carouselTrack.clientWidth / 1.2,
      behavior: "smooth",
    });
  });
}
const methodModal = document.querySelector(".method-modal");
const methodModalContent = document.getElementById("methodModalContent");
const methodButtons = document.querySelectorAll(".open-method-modal");
const methodClose = methodModal.querySelector(".modal__close");
const methodOverlay = methodModal.querySelector(".modal__overlay");

const modalData = {
  1: `
    <h3>Нейромеханика как методика</h3>

    <p>Нейромеханика — это современный функциональный подход к работе с телом, который рассматривает организм как единую систему.</p>

    <p>Это значит, что боль, ограничение движения, напряжение, нарушение осанки или снижение функции рассматриваются не отдельно, а как часть общей работы всего организма.</p>

    <p><strong>Мы оцениваем:</strong></p>
    <ul class="simple-list">
      <li>как человек двигается</li>
      <li>как распределяется нагрузка</li>
      <li>какие зоны перегружены</li>
      <li>где есть компенсации</li>
      <li>как нервная система управляет движением</li>
      <li>почему тело удерживает проблему</li>
    </ul>

    <p>Нейромеханика помогает понять не только где болит, но и почему это произошло, как это сформировалось и за счёт чего организм удерживает эту дисфункцию.</p>
  `,

  2: `
    <h3>Суть подхода</h3>

    <p>Задача специалиста — не просто убрать симптом, а понять, почему система была вынуждена его создать.</p>

    <p>Часто боль, спазм, ограничение движения, перекос или нарушение паттерна — это способ организма временно приспособиться, удержать устойчивость или сохранить функцию в изменённых условиях.</p>

    <p>Любое изменение в организме имеет смысл.</p>

    <p><strong>Важно понять:</strong></p>
    <ul class="simple-list">
      <li>как возник симптом</li>
      <li>для чего он появился</li>
      <li>какую функцию он помогает временно реализовать</li>
      <li>какую перегрузку или нестабильность он компенсирует</li>
    </ul>

    <p>Только тогда можно перестроить систему так, чтобы необходимость в этом симптоме или в этой дисфункции постепенно отпала.</p>
  `,

  3: `
    <h3>Как проходит работа</h3>

    <p>Работа в нейромеханике строится по понятной последовательной логике:</p>

    <ul class="simple-list">
      <li>Функциональное тестирование</li>
      <li>Анализ движения, постуры и компенсаций</li>
      <li>Поиск первичной причины и ключевых зон перегрузки</li>
      <li>Выбор стратегии воздействия и нужных техник</li>
      <li>Проверка изменений после коррекции</li>
      <li>Повторная интеграция и закрепление результата через движение</li>
    </ul>

    <p>Мы не заставляем тело меняться силой.</p>
    <p>Мы создаём условия, при которых система сама переходит к более выгодному и более функциональному способу работы.</p>
  `,

  4: `
    <h3>Где применяется</h3>

    <p>Метод применяется не только при боли или локальной дисфункции.</p>

    <p>Он полезен везде, где нужно улучшить функцию, движение, устойчивость, адаптацию и качество жизни.</p>

    <p><strong>Нейромеханика применяется при:</strong></p>
    <ul class="simple-list">
      <li>боли в спине, шее, пояснице</li>
      <li>проблемах с суставами</li>
      <li>ограничении подвижности</li>
      <li>мышечном напряжении и спазмах</li>
      <li>головных болях</li>
      <li>нарушении осанки</li>
      <li>последствиях травм</li>
      <li>хронической боли</li>
      <li>нарушении двигательных паттернов</li>
      <li>спортивных перегрузках</li>
      <li>восстановлении после нагрузок</li>
      <li>ситуациях, когда структурно всё выглядит относительно нормально, но функция уже нарушена</li>
    </ul>
  `,

  5: `
    <h3>Практическое значение метода</h3>

    <p>Нейромеханика помогает специалисту работать:</p>

    <ul class="simple-list">
      <li>безопасно</li>
      <li>логично</li>
      <li>физиологично</li>
      <li>более точно</li>
      <li>с более устойчивым результатом</li>
    </ul>

    <p>Это возможность соединить диагностику, мануальную работу, упражнения и движение в одну понятную систему.</p>
  `,

  6: `
    <h3>Вывод</h3>

    <p>Нейромеханика — это подход, в котором специалист понимает, как формируется проблема и как помочь организму восстановить более правильную функцию.</p>

    <p>Мы не меняем тело силой.</p>
    <p>Мы создаём условия, при которых система сама перестраивается.</p>
  `,
};

methodButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const id = btn.dataset.modal;
    methodModalContent.innerHTML = modalData[id];

    methodModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

const closeMethodModal = () => {
  methodModal.classList.remove("is-open");
  document.body.style.overflow = "";
};

methodClose.addEventListener("click", closeMethodModal);
methodOverlay.addEventListener("click", closeMethodModal);

const programModal = document.querySelector(".program-modal");
const programModalContent = document.getElementById("programModalContent");
const programButtons = document.querySelectorAll(".open-program-modal");

const programData = {
  1: `
    <h3>СЕМИНАР 1</h3>
    <p><strong>«Нейромеханика в постурологии: основы функционального тестирования и мануальных коррекций»</strong></p>
    <p><strong>В чём суть модуля</strong></p>
    <p>Это базовый модуль, который формирует фундамент всей системы.</p>
    <p>Здесь специалист начинает понимать, что такое нейромеханика, как формируется движение, как нервная система управляет функцией, как проводить функциональное тестирование и как через постурологию, диалог с телом и мягкие мануальные коррекции находить первичную причину нарушения.</p>
    <p><strong>Что будет изучаться</strong></p>
    <ul class="simple-list">
      <li>основы нейромеханики и нейрофизиологии движения</li>
      <li>понимание того, что такое функция, дисфункция и функциональность движения</li>
      <li>роль нервной системы в формировании движения</li>
      <li>сенсорно-проприоцептивная система и её значение</li>
      <li>прикладная функциональная анатомия</li>
      <li>фасция как система передачи напряжения и основа диалога с телом</li>
      <li>основы пальпации и восприятия тканей</li>
      <li>основы постурологии</li>
      <li>tensegrity, мышечные цепи, баланс структуры</li>
      <li>функциональное тестирование как основа диагностики</li>
      <li>анализ движения в статике и динамике</li>
      <li>роль дыхания в формировании движения и стабильности</li>
      <li>работа с поперечными структурами и диафрагмами</li>
      <li>принципы постуральной коррекции</li>
      <li>базовые мануальные коррекции через нервную систему</li>
    </ul>
    <p><strong>Что даст модуль</strong></p>
    <p>После семинара специалист начинает лучше понимать, как устроено движение, как проводить функциональную диагностику, как видеть компенсации и как строить первичную логику коррекции.</p>
  `,

  2: `
    <h3>СЕМИНАР 2</h3>
    <p><strong>«Фасциальные мануальные коррекции в реабилитационной нейромеханике. Основы биодинамики»</strong></p>
    <p><strong>В чём суть модуля</strong></p>
    <p>Этот модуль посвящён фасциальной системе и мягкой глубокой работе с тканями.</p>
    <p>Здесь специалист начинает понимать, как фасции участвуют в формировании напряжения, боли, ограничений движения и хронических компенсаций, и как через фасциальную работу и биодинамические подходы можно влиять на систему более тонко и эффективно.</p>
    <p><strong>Что будет изучаться</strong></p>
    <ul class="simple-list">
      <li>фасция как интегративная и сенсорно-регуляторная система</li>
      <li>фасциальные напряжения и их влияние на движение</li>
      <li>фасциальный барьер и тканевой отклик</li>
      <li>сенсорная навигация и углубление пальпации</li>
      <li>модель 3T: tension, traction, torsion</li>
      <li>нейрофизиология боли в контексте фасциальной системы</li>
      <li>BLT</li>
      <li>BFT</li>
      <li>BFT-fluid</li>
      <li>основы биодинамики</li>
      <li>мягкие фасциальные коррекции без агрессивного воздействия</li>
      <li>работа с ключевыми мышечными зонами</li>
      <li>работа с узлами и фасциальными плоскостями</li>
      <li>работа с диафрагмами</li>
      <li>работа с висцеральной системой</li>
      <li>работа с грудной клеткой, тазом, конечностями</li>
      <li>работа с рубцами, фиброзом и хроническими изменениями</li>
      <li>влияние на твёрдую мозговую оболочку через фасциальную систему</li>
    </ul>
    <p><strong>Что даст модуль</strong></p>
    <p>После семинара специалист получает инструменты мягкой и глубокой работы с тканями, лучше понимает хронические состояния, напряжения и ограничения, а также учится работать с фасциальной системой как с частью общей регуляции организма.</p>
  `,

  3: `
    <h3>СЕМИНАР 3</h3>
    <p><strong>«Функциональные мануальные коррекции в реабилитационной нейромеханике: прямой и непрямой подход»</strong></p>
    <p><strong>В чём суть модуля</strong></p>
    <p>Этот модуль посвящён уже непосредственно коррекции функциональных нарушений.</p>
    <p>Здесь специалист учится понимать, когда работать напрямую, а когда использовать непрямой подход, как выбирать тактику в зависимости от функции, компенсации и состояния системы, и как восстанавливать движение более точно и осознанно.</p>
    <p><strong>Что будет изучаться</strong></p>
    <ul class="simple-list">
      <li>понятие функции, дисфункции и нефункционального движения</li>
      <li>компенсации и их роль в развитии нарушения</li>
      <li>переход функционального нарушения в структурные изменения</li>
      <li>роль нервной системы в удержании патологических паттернов</li>
      <li>принципы диагностики регионов тела</li>
      <li>логика: тест → анализ → коррекция → интеграция</li>
      <li>прямой подход</li>
      <li>непрямой подход</li>
      <li>работа через барьер и работа от барьера</li>
      <li>выбор тактики в зависимости от клинической ситуации</li>
      <li>мышечно-энергетические техники</li>
      <li>постизометрическая релаксация</li>
      <li>работа с шейным регионом</li>
      <li>работа с тазовым регионом</li>
      <li>работа с крупными суставами</li>
      <li>работа с мышечными массивами</li>
      <li>коррекция функциональных паттернов движения</li>
    </ul>
    <p><strong>Что даст модуль</strong></p>
    <p>После семинара специалист начинает лучше выбирать стратегию коррекции, увереннее работать с функциональными нарушениями и точнее подбирать подход в зависимости от конкретной задачи.</p>
  `,

  4: `
    <h3>СЕМИНАР 4</h3>
    <p><strong>«Нейромеханика позвоночника и черепа: диагностика и функциональные мануальные коррекции»</strong></p>
    <p><strong>В чём суть модуля</strong></p>
    <p>Это финальный интеграционный модуль.</p>
    <p>Здесь все ранее полученные знания объединяются в единую систему, и специалист начинает работать уже непосредственно с позвоночником, тазом, крестцом, краниальными структурами и их связью со всей функцией организма.</p>
    <p><strong>Что будет изучаться</strong></p>
    <ul class="simple-list">
      <li>функциональная анатомия и биомеханика позвоночника</li>
      <li>шейный, грудной и поясничный отделы</li>
      <li>законы Фрайетта</li>
      <li>взаимосвязь: позвоночник → таз → череп → постура</li>
      <li>роль твёрдой мозговой оболочки</li>
      <li>влияние краниальных структур на механику позвоночника</li>
      <li>краниальные дисфункции и их влияние на движение и постуру</li>
      <li>работа с позвоночником как с функциональной системой</li>
      <li>работа с тазом и крестцом</li>
      <li>работа с зоной C0–C2</li>
      <li>декомпрессия крестца</li>
      <li>декомпрессия затылка</li>
      <li>намет мозжечка</li>
      <li>скуловые кости</li>
      <li>диафрагма малого таза</li>
      <li>прямой и непрямой подход в работе с позвоночником и краниальными структурами</li>
      <li>интеграция позвоночника, таза, черепа и постуры в единую систему</li>
    </ul>
    <p><strong>Что даст модуль</strong></p>
    <p>После семинара специалист получает целостную модель работы с позвоночником и краниальными структурами, учится видеть глубокие взаимосвязи в организме и выстраивать системную коррекцию уже на более сложном уровне.</p>
  `,
};

programButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    programModalContent.innerHTML = programData[btn.dataset.program];
    programModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

programModal.querySelector(".modal__close").addEventListener("click", () => {
  programModal.classList.remove("is-open");
  document.body.style.overflow = "";
});

programModal.querySelector(".modal__overlay").addEventListener("click", () => {
  programModal.classList.remove("is-open");
  document.body.style.overflow = "";
});
const benefitsModal = document.querySelector(".benefits-modal");
const openBenefitsModal = document.querySelector(".open-benefits-modal");

if (benefitsModal && openBenefitsModal) {
  const closeBenefitsModal = () => {
    benefitsModal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  openBenefitsModal.addEventListener("click", (e) => {
    e.preventDefault();
    benefitsModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });

  benefitsModal
    .querySelector(".modal__close")
    .addEventListener("click", closeBenefitsModal);

  benefitsModal
    .querySelector(".modal__overlay")
    .addEventListener("click", closeBenefitsModal);
}
