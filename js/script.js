const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

const T = {
ru: {n1:'Главная',n2:'Меню',n3:'О нас',n4:'Бронь',call:'Свяжитесь с нами для бронирования',book:'Заказ столика',
 h1:'Добро пожаловать в',h2:'Наш ресторан',h3:'Дом лучшей еды',view:'View menu',
 f1:'Магическая <em>Атмосфера</em>',f1t:'В нашем заведении царит магическая атмосфера наполненная вкусными ароматами',
 f2:'Лучшее качество <em>Еды</em>',f2t:'Качество нашей Еды - отменное!',
 f3:'Недорогая <em>Еда</em>',f3t:'Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!',
 hi:'Наша <em>История</em>',hp:'Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось наверняка обустроить себе нехитрый быт, добывать и готовить себе еду.',
 s1:'Напитки',s2:'Еда',s3:'Закуски',
 bn:'Отпразднуйте в одном из самых лучших ресторанов.',bt:'Только в этом месяце бизнес-ланч от 250 ₽',
 td:'Наши <em>Блюда</em>',dn:'Гамбургер мини',tm:'Наше Меню',mn:'Гамбургер макси',md:'Максимально толстый слой мяса',ord:'Заказать',
 rv:'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествуя в Санкт-Петербург!!!',
 rn:'Посетитель',rl:'Николай',tg:'Галерея <em>Блюд</em>',tc:'Наши <em>Повара</em>',ft:'Все права защищены'},
kk: {n1:'Басты бет',n2:'Мәзір',n3:'Біз туралы',n4:'Брон',call:'Үстел брондау үшін бізге хабарласыңыз',book:'Үстел брондау',
 h1:'Қош келдіңіздер',h2:'Біздің мейрамхана',h3:'Ең дәмді тағам үйі',view:'Мәзірді көру',
 f1:'Сиқырлы <em>Атмосфера</em>',f1t:'Біздің мекемеде дәмді хош иістерге толы сиқырлы атмосфера билейді',
 f2:'Тағамның үздік <em>сапасы</em>',f2t:'Біздің тағамның сапасы – тамаша!',
 f3:'Қолжетімді <em>Тағам</em>',f3t:'Тағам құны тек оның мөлшеріне байланысты. Сапасы әрқашан жоғары!',
 hi:'Біздің <em>Тарихымыз</em>',hp:'Кез келген ерекше орын сияқты, біздің де өзіндік ерекше тарихымыз бар. Мейрамхана идеясы құрылтайшыларға күтпеген жерден келді. Орманда серуендеп жүргенде мейрамхананы құрушы ең жақын елді мекеннен жүздеген шақырым қашықта адасып қалды. Өркениет пен байланыстан алыста олар қарапайым тұрмысты өздері ұйымдастырып, тамақты өздері тауып, дайындауға мәжбүр болды.',
 s1:'Сусындар',s2:'Тағам',s3:'Тіскебасарлар',
 bn:'Ең үздік мейрамханалардың бірінде мереке жасаңыз.',bt:'Тек осы айда бизнес-ланч 250 ₽-ден',
 td:'Біздің <em>Тағамдар</em>',dn:'Мини гамбургер',tm:'Біздің мәзір',mn:'Макси гамбургер',md:'Етінің қабаты ең қалың',ord:'Тапсырыс беру',
 rv:'Туған күнімді осы мейрамханада өткіздім, ұзақ есімде қалады! Туған Арменияның бір үзігі!!! Жеміс табағы үшін ерекше рахмет. Достарымыз бен туыстарымызға, сондай-ақ Санкт-Петербургке саяхаттайтын шетелдіктерге де осы мейрамхананы ұсынамыз!!!',
 rn:'Қонақ',rl:'Николай',tg:'Тағам <em>галереясы</em>',tc:'Біздің <em>Аспазшылар</em>',ft:'Барлық құқықтар қорғалған'},
en: {n1:'Home',n2:'Menu',n3:'About',n4:'Booking',call:'Call us to book a table',book:'Book a table',
 h1:'Welcome to',h2:'Our Restaurant',h3:'House of the best food',view:'View menu',
 f1:'Magical <em>Atmosphere</em>',f1t:'Our restaurant has a magical atmosphere filled with delicious aromas',
 f2:'Best quality <em>Food</em>',f2t:'The quality of our food is excellent!',
 f3:'Affordable <em>Food</em>',f3t:'The price of our food depends only on its quantity. The quality is always top-notch!',
 hi:'Our <em>History</em>',hp:'Like any other distinctive place, we have our own special story. The idea of the restaurant came to the founders unexpectedly. While walking in the forest, the creator of our restaurant got stranded hundreds of kilometers from the nearest settlement. Far from civilization and communication, they had to set up a simple life, finding and cooking their own food.',
 s1:'Drinks',s2:'Food',s3:'Snacks',
 bn:'Celebrate at one of the best restaurants.',bt:'This month only: business lunch from 250 ₽',
 td:'Our <em>Dishes</em>',dn:'Mini Hamburger',tm:'Our Menu',mn:'Maxi Hamburger',md:'The thickest layer of meat',ord:'Order',
 rv:'I will remember my birthday party at this restaurant for a long time! A piece of native Armenia!!! Special thanks for the fruit platter compliment. We will recommend this restaurant to our friends and relatives, also abroad, for those traveling to St. Petersburg!!!',
 rn:'Guest',rl:'Nikolay',tg:'Food <em>Gallery</em>',tc:'Our <em>Chefs</em>',ft:'All rights reserved'}
};

/* repeated blocks (more items than visible -> scroll) */
$('#dl').innerHTML = Array(6).fill('<li><img src="img/dish-mini.jpg" alt=""><span data-i18n="dn"></span><i></i><b>220 ₽</b></li>').join('');
$('#mg').innerHTML = Array(3).fill('<article class="mc rv"><span class="rec">RECOMMENDED</span><div class="pic"><img src="img/burger.png" alt=""><b class="pr">420</b></div><h3 data-i18n="mn"></h3><p data-i18n="md"></p><a class="btn" href="#book" data-i18n="ord"></a></article>').join('');
$('#ck').innerHTML = ['cook1.jpg','cook2.png','cook3.jpg','cook1.jpg','cook2.png'].map(c => `<figure><img src="img/${c}" alt=""></figure>`).join('');

/* language switch */
function setLang(l) {
  document.documentElement.lang = l;
  $$('[data-i18n]').forEach(e => e.innerHTML = T[l][e.dataset.i18n]);
  $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
  try { localStorage.setItem('lang', l); } catch (e) {}
}
$$('.lang button').forEach(b => b.onclick = () => setLang(b.dataset.l));
let saved = 'ru'; try { saved = localStorage.getItem('lang') || 'ru'; } catch (e) {}
setLang(T[saved] ? saved : 'ru');

/* mobile menu */
$('#burger').onclick = () => $('#navlist').classList.toggle('open');
$$('#navlist a').forEach(a => a.onclick = () => $('#navlist').classList.remove('open'));

/* scroll-to-top button */
const up = $('#top');
addEventListener('scroll', () => up.classList.toggle('on', scrollY > 400), { passive: true });
up.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
}), { threshold: .15 });
$$('.rv').forEach(el => io.observe(el));

/* cooks scroller: arrows + drag */
const ck = $('#ck'), step = () => ck.querySelector('figure').offsetWidth + 18;
$('#nx').onclick = () => ck.scrollBy({ left: step(), behavior: 'smooth' });
$('#pv').onclick = () => ck.scrollBy({ left: -step(), behavior: 'smooth' });
let down = false, sx = 0, sl = 0;
ck.onmousedown = e => { down = true; sx = e.pageX; sl = ck.scrollLeft; ck.style.scrollSnapType = 'none'; };
addEventListener('mouseup', () => { down = false; ck.style.scrollSnapType = ''; });
ck.onmousemove = e => { if (down) { e.preventDefault(); ck.scrollLeft = sl - (e.pageX - sx); } };
ck.ondragstart = e => e.preventDefault();

/* review dots */
$$('#dots i').forEach((d, i, all) => d.onclick = () => {
  all.forEach(x => x.classList.remove('on')); d.classList.add('on');
  const s = $('#slide'); s.classList.remove('fade'); void s.offsetWidth; s.classList.add('fade');
});
