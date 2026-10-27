/* ---------- Site config: edit brand/contact details here ---------- */
const SITE = {
  phone: '+20 100 000 0000',
  whatsapp: '201093962597',
  email: 'info@example.com',
};

/* ---------- Translations ---------- */
const I18N = {
  en: {
    'brand': 'Nile Harvest',
    'nav.home': 'Home', 'nav.about': 'About', 'nav.products': 'Products', 'nav.contact': 'Contact',
    'lang.switch': 'العربية',
    'hero.eyebrow': 'Egyptian fresh & frozen produce',
    'hero.title': 'The finest crops, <em>straight from Egypt</em> to your market',
    'hero.text': 'We export fresh fruits, vegetables and IQF frozen produce, carefully selected, graded and packed to meet international buyers’ standards.',
    'hero.cta1': 'Browse products', 'hero.cta2': 'Request a quote',
    'stat.1': 'Product categories', 'stat.2': 'Product photos', 'stat.3': 'Months of supply a year',
    'slider.badge': 'Fresh from the farm',
    'about.eyebrow': 'About us',
    'about.title': 'From the field to the container, with care',
    'about.text': 'We work directly with growers across Egypt and manage sorting, quality checks, packing and shipping, so what you see in the field is what arrives at your port.',
    'about.l1': 'Carefully graded and packed fruits & vegetables',
    'about.l2': 'IQF frozen products with consistent quality',
    'about.l3': 'Lab-checked sugar levels (Brix) and quality inspection',
    'about.l4': 'Flexible packaging and labelling for each market',
    'cat.eyebrow': 'Our produce', 'cat.title': 'Product categories',
    'cat.text': 'Three main ranges, each available in the packing that suits your market.',
    'cat.fruits': 'Fruits', 'cat.vegetables': 'Vegetables', 'cat.frozen': 'Frozen',
    'cat.fruits.d': 'Citrus, mango, grapes, strawberries and more.',
    'cat.vegetables.d': 'Peppers, tomatoes, garlic, potatoes, cabbage and more.',
    'cat.frozen.d': 'IQF fruits and vegetables, ready for processing.',
    'cat.view': 'View products', 'cat.items': 'photos', 'cat.all': 'All',
    'why.eyebrow': 'Why choose us', 'why.title': 'What you can count on',
    'why.1': 'Superior quality', 'why.1d': 'Strict grading and inspection before every shipment.',
    'why.2': 'Integrated logistics', 'why.2d': 'Packing, documentation and shipping handled for you.',
    'why.3': 'Consistent supply', 'why.3d': 'Reliable volumes across seasons.',
    'why.4': 'International standards', 'why.4d': 'Compliant with the requirements of export markets.',
    'cta.title': 'Looking for a reliable supplier?',
    'cta.text': 'Tell us what you need and we will reply with availability and pricing.',
    'contact.eyebrow': 'Contact', 'contact.title': 'Send us your inquiry',
    'contact.text': 'Share the product, quantity and destination port and we will get back to you quickly.',
    'contact.phone': 'Phone', 'contact.email': 'Email', 'contact.location': 'Location', 'contact.loc.v': 'Cairo, Egypt',
    'form.name': 'Your name', 'form.email': 'Email', 'form.company': 'Company', 'form.phone': 'Phone / WhatsApp',
    'form.msg': 'Products, quantities and destination', 'form.send': 'Send via WhatsApp',
    'form.note': 'Opening WhatsApp…',
    'footer.about': 'Exporter of fresh and frozen Egyptian fruits and vegetables.',
    'footer.links': 'Quick links', 'footer.cats': 'Categories',
    'footer.rights': 'All rights reserved.',
    'p.title': 'Our products', 'p.text': 'Browse our range by category. Click any photo to enlarge it.',
    'p.loadmore': 'Show more', 'lb.of': 'of',
  },
  ar: {
    'brand': 'حصاد النيل',
    'nav.home': 'الرئيسية', 'nav.about': 'من نحن', 'nav.products': 'المنتجات', 'nav.contact': 'تواصل معنا',
    'lang.switch': 'English',
    'hero.eyebrow': 'محاصيل مصرية طازجة ومجمدة',
    'hero.title': 'أجود المحاصيل، <em>من مصر مباشرة</em> إلى سوقك',
    'hero.text': 'نصدّر الفاكهة والخضروات الطازجة والمنتجات المجمدة IQF، يتم اختيارها وفرزها وتعبئتها بعناية لتلبية معايير المستوردين حول العالم.',
    'hero.cta1': 'تصفح المنتجات', 'hero.cta2': 'اطلب عرض سعر',
    'stat.1': 'أقسام المنتجات', 'stat.2': 'صورة للمنتجات', 'stat.3': 'شهرًا توريد في السنة',
    'slider.badge': 'طازج من المزرعة',
    'about.eyebrow': 'من نحن',
    'about.title': 'من الحقل إلى الحاوية، باهتمام كامل',
    'about.text': 'نتعاون مباشرة مع المزارعين في مختلف أنحاء مصر ونتولى الفرز وفحص الجودة والتعبئة والشحن، فما تراه في الحقل هو ما يصل إلى ميناءك.',
    'about.l1': 'فاكهة وخضروات مفرزة ومعبأة بعناية',
    'about.l2': 'منتجات مجمدة IQF بجودة ثابتة',
    'about.l3': 'فحص معملي لنسبة السكر (Brix) ومراقبة الجودة',
    'about.l4': 'تعبئة وتغليف مرنة تناسب كل سوق',
    'cat.eyebrow': 'منتجاتنا', 'cat.title': 'أقسام المنتجات',
    'cat.text': 'ثلاثة أقسام رئيسية، وكل منها متاح بالتعبئة المناسبة لسوقك.',
    'cat.fruits': 'الفاكهة', 'cat.vegetables': 'الخضروات', 'cat.frozen': 'المجمدات',
    'cat.fruits.d': 'الحمضيات والمانجو والعنب والفراولة وغيرها.',
    'cat.vegetables.d': 'الفلفل والطماطم والثوم والبطاطس والكرنب وغيرها.',
    'cat.frozen.d': 'فاكهة وخضروات IQF جاهزة للتصنيع.',
    'cat.view': 'عرض المنتجات', 'cat.items': 'صورة', 'cat.all': 'الكل',
    'why.eyebrow': 'لماذا نحن', 'why.title': 'ما يمكنك الاعتماد عليه',
    'why.1': 'جودة عالية', 'why.1d': 'فرز وفحص دقيق قبل كل شحنة.',
    'why.2': 'خدمات لوجستية متكاملة', 'why.2d': 'نتولى التعبئة والمستندات والشحن.',
    'why.3': 'توريد مستمر', 'why.3d': 'كميات موثوقة على مدار المواسم.',
    'why.4': 'معايير دولية', 'why.4d': 'متوافقون مع اشتراطات أسواق التصدير.',
    'cta.title': 'تبحث عن مورّد موثوق؟',
    'cta.text': 'أخبرنا بما تحتاجه وسنرد عليك بالتوافر والأسعار.',
    'contact.eyebrow': 'تواصل معنا', 'contact.title': 'أرسل لنا استفسارك',
    'contact.text': 'اكتب المنتج والكمية وميناء الوصول وسنرد عليك سريعًا.',
    'contact.phone': 'الهاتف', 'contact.email': 'البريد الإلكتروني', 'contact.location': 'الموقع', 'contact.loc.v': 'القاهرة، مصر',
    'form.name': 'الاسم', 'form.email': 'البريد الإلكتروني', 'form.company': 'الشركة', 'form.phone': 'الهاتف / واتساب',
    'form.msg': 'المنتجات والكميات ووجهة الشحن', 'form.send': 'إرسال عبر واتساب',
    'form.note': 'جاري فتح واتساب…',
    'footer.about': 'مصدّر للفاكهة والخضروات المصرية الطازجة والمجمدة.',
    'footer.links': 'روابط سريعة', 'footer.cats': 'الأقسام',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'p.title': 'منتجاتنا', 'p.text': 'تصفح منتجاتنا حسب القسم. اضغط على أي صورة لتكبيرها.',
    'p.loadmore': 'عرض المزيد', 'lb.of': 'من',
  },
};

let lang = 'ar';
try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
const qLang = new URLSearchParams(location.search).get('lang');
if (qLang === 'en' || qLang === 'ar') lang = qLang;

const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.title = t('brand') + ' — ' + t(document.body.dataset.title || 'nav.home');
  document.querySelectorAll('[data-phone]').forEach((el) => { el.textContent = SITE.phone; el.href = 'tel:' + SITE.phone.replace(/\s/g, ''); });
  document.querySelectorAll('[data-email]').forEach((el) => { el.textContent = SITE.email; el.href = 'mailto:' + SITE.email; });
  document.dispatchEvent(new CustomEvent('langchange'));
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  document.querySelector('.lang-btn').addEventListener('click', () => {
    lang = lang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyLang();
  });
  const menu = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  menu.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', () => links.classList.remove('open'));
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  initHero();
  initCategories();
  initContactForm();
  initProducts();
});

/* ---------- Hero: random slideshow ---------- */
function initHero() {
  const frame = document.querySelector('.slider-frame');
  if (!frame) return;
  const bg = document.querySelector('.hero-bg');
  const bar = document.querySelector('.slider-progress i');
  const DUR = 4500;
  const imgs = window.HERO_IMAGES.slice();
  const slides = [];
  let current = -1;
  let bag = [];
  let timer;

  // Random order without repeats until every photo has been shown
  const nextRandom = () => {
    if (!bag.length) {
      bag = imgs.map((_, i) => i).filter((i) => i !== current);
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }
    return bag.pop();
  };

  const show = (i) => {
    if (!slides[i]) {
      const s = document.createElement('div');
      s.className = 'slide';
      const im = new Image();
      im.alt = '';
      im.src = imgs[i];
      s.appendChild(im);
      frame.appendChild(s);
      slides[i] = s;
    }
    slides.forEach((s) => s && s.classList.remove('on'));
    // restart zoom animation by forcing reflow
    void slides[i].offsetWidth;
    slides[i].classList.add('on');
    bg.style.backgroundImage = `url(${imgs[i]})`;
    current = i;
    bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
    // preload the next one
    const n = bag.length ? bag[bag.length - 1] : null;
    if (n !== null) new Image().src = imgs[n];
  };

  const play = () => { clearInterval(timer); timer = setInterval(() => show(nextRandom()), DUR); };
  const go = () => { show(nextRandom()); play(); };

  bar.style.setProperty('--dur', DUR + 'ms');
  show(nextRandom());
  play();
  document.querySelector('.slider-next').addEventListener('click', go);
  document.querySelector('.slider-prev').addEventListener('click', go);
  document.addEventListener('visibilitychange', () => (document.hidden ? clearInterval(timer) : play()));

  // About photos: pick random images too
  const about = document.querySelectorAll('.about-photos img');
  const pool = imgs.slice().sort(() => Math.random() - .5);
  about.forEach((el, i) => { el.src = pool[i]; });
}

/* ---------- Home: category cards ---------- */
function initCategories() {
  const wrap = document.querySelector('.cat-grid');
  if (!wrap) return;
  Object.entries(window.PRODUCTS).forEach(([key, items]) => {
    const cover = items[Math.floor(Math.random() * items.length)];
    const a = document.createElement('a');
    a.className = 'cat-card';
    a.href = `products.html#${key}`;
    a.innerHTML = `<img src="${cover.t}" alt="" loading="lazy">
      <div class="cat-info"><h3 data-i18n="cat.${key}"></h3>
      <span><span data-i18n="cat.${key}.d"></span></span><br>
      <span class="arrow"><span data-i18n="cat.view"></span> <span class="flip">→</span></span></div>`;
    wrap.appendChild(a);
  });
  const total = Object.values(window.PRODUCTS).reduce((n, a) => n + a.length, 0);
  const s2 = document.getElementById('stat-photos');
  if (s2) s2.textContent = total + '+';
  applyLang();
}

/* ---------- Contact form -> WhatsApp ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const text = [d.get('name'), d.get('company'), d.get('email'), d.get('phone'), '', d.get('msg')].filter((x) => x !== null).join('\n');
    form.querySelector('.form-note').textContent = t('form.note');
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}

/* ---------- Products page ---------- */
function initProducts() {
  const root = document.getElementById('products-root');
  if (!root) return;
  const PAGE = 24;
  const state = {};
  const order = ['fruits', 'vegetables', 'frozen'];
  let active = 'all';
  let lbList = [];
  let lbIndex = 0;

  const chips = document.querySelector('.filters-inner');
  chips.innerHTML = '';
  const mkChip = (key, count) => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.dataset.key = key;
    b.innerHTML = `<span data-i18n="cat.${key}"></span><small>${count}</small>`;
    b.addEventListener('click', () => setActive(key));
    chips.appendChild(b);
  };
  mkChip('all', order.reduce((n, k) => n + window.PRODUCTS[k].length, 0));
  order.forEach((k) => mkChip(k, window.PRODUCTS[k].length));

  order.forEach((key) => {
    state[key] = 0;
    const sec = document.createElement('section');
    sec.className = 'cat-section container';
    sec.id = key;
    sec.innerHTML = `<div class="cat-section-head"><h2 data-i18n="cat.${key}"></h2><p data-i18n="cat.${key}.d"></p></div>
      <div class="p-grid"></div><div class="more-wrap"><button class="btn btn-dark" data-i18n="p.loadmore"></button></div>`;
    root.appendChild(sec);
    sec.querySelector('.more-wrap button').addEventListener('click', () => renderMore(key));
    renderMore(key);
  });

  function renderMore(key) {
    const sec = document.getElementById(key);
    const grid = sec.querySelector('.p-grid');
    const items = window.PRODUCTS[key];
    const end = Math.min(state[key] + PAGE, items.length);
    for (let i = state[key]; i < end; i++) {
      const it = items[i];
      const d = document.createElement('div');
      d.className = 'p-item';
      d.innerHTML = `<img src="${it.t}" width="${it.w}" height="${it.h}" alt="" loading="lazy">`;
      d.addEventListener('click', () => openLb(key, i));
      grid.appendChild(d);
    }
    state[key] = end;
    sec.querySelector('.more-wrap').style.display = end >= items.length ? 'none' : '';
    applyLang();
  }

  function setActive(key, scroll = true) {
    active = key;
    chips.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c.dataset.key === key));
    order.forEach((k) => { document.getElementById(k).style.display = key === 'all' || key === k ? '' : 'none'; });
    if (history.replaceState) history.replaceState(null, '', key === 'all' ? location.pathname + location.search : '#' + key);
    if (scroll) window.scrollTo({ top: root.offsetTop - 120, behavior: 'smooth' });
  }

  // Lightbox
  const lb = document.querySelector('.lightbox');
  const lbImg = lb.querySelector('img');
  const lbCount = lb.querySelector('.lb-count');
  function openLb(key, i) { lbList = window.PRODUCTS[key]; lbIndex = i; showLb(); lb.classList.add('open'); }
  function showLb() {
    lbImg.src = lbList[lbIndex].l;
    lbCount.textContent = `${lbIndex + 1} ${t('lb.of')} ${lbList.length}`;
  }
  const step = (d) => { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); };
  const closeLb = () => lb.classList.remove('open');
  lb.querySelector('.lb-close').addEventListener('click', closeLb);
  lb.querySelector('.lb-next').addEventListener('click', (e) => { e.stopPropagation(); step(1); });
  lb.querySelector('.lb-prev').addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    const rtl = document.documentElement.dir === 'rtl';
    if (e.key === 'ArrowRight') step(rtl ? -1 : 1);
    if (e.key === 'ArrowLeft') step(rtl ? 1 : -1);
  });

  const hash = location.hash.slice(1);
  setActive(order.includes(hash) ? hash : 'all', false);
  if (order.includes(hash)) window.scrollTo({ top: 0 });
}
