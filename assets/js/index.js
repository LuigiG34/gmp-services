/* =====================================================================
   1) TRADUCTIONS
   Chaque élément portant data-i18n="clé" (texte simple) ou
   data-i18n-html="clé" (contenu avec balises) est traduit à la volée.
   Pour ajouter une langue : dupliquer le bloc "en", ajouter une
   <option> dans le <select id="lang-select">, et c'est tout.
===================================================================== */
const I18N = {
  fr: {
    "meta.title": "GMP Services — Paysagiste Vendée",
    "meta.desc": "GMP Services, paysagiste : création de jardins, maçonnerie paysagère et entretien d'espaces verts en Vendée. Ouvert 6j/7. Devis gratuit.",
    "nav.metiers": "Nos métiers",
    "nav.chantiers": "Nos chantiers",
    "nav.demarche": "Notre démarche",
    "nav.zone": "Zone d'intervention",
    "nav.cta": "Devis gratuit",
    "hero.eyebrow": "Paysagiste — Vendée",
    "hero.title": "Votre extérieur, <em>pensé et façonné</em> pour durer.",
    "hero.lede": "GMP Services conçoit, aménage et entretient jardins, allées et terrasses. Du végétal à la maçonnerie paysagère, un seul interlocuteur pour tout votre extérieur.",
    "hero.call": "Appeler maintenant",
    "hero.discover": "Découvrir nos métiers",
    "fact1.t": "6j/7", "fact1.s": "Ouvert du lundi au samedi",
    "fact2.t": "Devis gratuit", "fact2.s": "Visite et conseil sans engagement",
    "fact3.t": "Végétal & minéral", "fact3.s": "Jardin, pierre et béton",
    "metiers.eyebrow": "Nos métiers",
    "metiers.title": "Trois savoir-faire, un seul chantier.",
    "metiers.lede": "Créer, bâtir, entretenir : GMP Services couvre l'ensemble des travaux de votre extérieur, sans multiplier les intervenants.",
    "m1.h": "Création paysagère",
    "m1.p": "Un jardin dessiné pour votre terrain et votre usage, de la conception à la plantation.",
    "m1.li1": "Conception & aménagement de jardins",
    "m1.li2": "Engazonnement — semis ou gazon en plaques",
    "m1.li3": "Pose de gazon artificiel",
    "m1.li4": "Plantation d'arbres et de haies",
    "m1.li5": "Clôture & décoration de jardin",
    "m2.h": "Maçonnerie paysagère",
    "m2.p": "La structure de votre extérieur : allées, murets et escaliers en pierre ou en béton.",
    "m2.li1": "Allées — création & pavage",
    "m2.li2": "Murs de soutènement",
    "m2.li3": "Escaliers extérieurs",
    "m2.li4": "Maçonnerie pierre & béton",
    "m2.li5": "Talutage, nivellement & aménagement minéral",
    "m2.li6": "Abords de piscine",
    "m3.h": "Entretien d'espaces verts",
    "m3.p": "Un extérieur impeccable toute l'année, ponctuellement ou en contrat régulier.",
    "m3.li1": "Tonte & entretien de pelouses",
    "m3.li2": "Entretien de jardins et terrains",
    "m3.li3": "Taille de haies & élagage",
    "m3.li4": "Gestion du paysage à l'année",
    "dem.eyebrow": "Notre démarche",
    "dem.title": "Du premier coup de fil au dernier coup de râteau.",
    "dem.lede": "Un déroulé simple et sans surprise, pour les petits travaux comme pour les chantiers complets.",
    "s1.h": "Visite sur place", "s1.p": "Nous venons voir votre terrain, écouter votre projet et prendre les mesures.",
    "s2.h": "Devis gratuit", "s2.p": "Un chiffrage clair et détaillé, poste par poste, sans engagement.",
    "s3.h": "Réalisation", "s3.p": "Nous intervenons aux dates convenues et laissons le chantier propre.",
    "s4.h": "Suivi & entretien", "s4.p": "Nous restons disponibles pour faire vivre votre jardin dans la durée.",
    "zone.eyebrow": "Zone d'intervention",
    "zone.title": "En Vendée",
    "zone.lede": "Nous intervenons chez les particuliers et les professionnels dans un large secteur en Vendée.",
    "zone.more": "Et plus",
    "zone.note": "Votre commune n'est pas dans la liste ? Appelez-nous : nous nous déplaçons partout en Vendée.",
    "testi.eyebrow": "Témoignages",
    "testi.title": "Ils nous ont confié leur extérieur.",
    "contact.eyebrow": "Contact",
    "contact.title": "Parlons de votre projet.",
    "contact.lede": "Un appel suffit pour convenir d'une visite et recevoir un devis gratuit.",
    "contact.phone": "Téléphone",
    "contact.phoneNote": "Réponse rapide, 6 jours sur 7.",
    "contact.area": "Secteur",
    "contact.areaText": "Châteaubriant, Redon et communes alentours<br>Loire-Atlantique (44) · Ille-et-Vilaine (35)",
    "contact.emailNote": "N'hésitez pas à nous contacter par email.",
    "contact.hours": "Horaires d'ouverture",
    "contact.monfri": "Lundi – Vendredi", "contact.sat": "Samedi", "contact.sun": "Dimanche",
    "contact.h1": "8h00 – 17h00", "contact.h2": "9h30 – 12h00", "contact.h3": "Fermé",
    "contact.cta": "Demander un devis gratuit",
    "footer.left": "© 2026 GMP Services — Paysagiste",
    "footer.right": "Vendée"
  },
  en: {
    "meta.title": "GMP Services — Vendée",
    "meta.desc": "GMP Services, landscaper: garden design, landscape masonry and grounds maintenance in Vendée, France. Open 6 days a week. Free quote.",
    "nav.metiers": "What we do",
    "nav.chantiers": "Our projects",
    "nav.demarche": "How we work",
    "nav.zone": "Service area",
    "nav.cta": "Free quote",
    "hero.eyebrow": "Landscaper — Vendée",
    "hero.title": "Your outdoor space, <em>designed and built</em> to last.",
    "hero.lede": "GMP Services designs, builds and maintains gardens, driveways and terraces. From planting to landscape masonry, one single contractor for your whole outdoor space.",
    "hero.call": "Call us now",
    "hero.discover": "See what we do",
    "fact1.t": "6 days a week", "fact1.s": "Open Monday to Saturday",
    "fact2.t": "Free quote", "fact2.s": "On-site visit and advice, no obligation",
    "fact3.t": "Green & stone", "fact3.s": "Gardens, stone and concrete",
    "metiers.eyebrow": "What we do",
    "metiers.title": "Three trades, one single contractor.",
    "metiers.lede": "Design, build, maintain: GMP Services covers all of your outdoor works, without juggling multiple companies.",
    "m1.h": "Garden creation",
    "m1.p": "A garden designed for your land and the way you live, from first sketch to planting.",
    "m1.li1": "Garden design & landscaping",
    "m1.li2": "Lawn seeding or turf laying",
    "m1.li3": "Artificial grass installation",
    "m1.li4": "Tree and hedge planting",
    "m1.li5": "Fencing & garden decoration",
    "m2.h": "Landscape masonry",
    "m2.p": "The backbone of your outdoor space: paths, walls and steps in stone or concrete.",
    "m2.li1": "Driveways & paths — creation & paving",
    "m2.li2": "Retaining walls",
    "m2.li3": "Outdoor steps",
    "m2.li4": "Stone & concrete masonry",
    "m2.li5": "Terracing, levelling & hard landscaping",
    "m2.li6": "Pool surrounds",
    "m3.h": "Grounds maintenance",
    "m3.p": "A spotless outdoor space all year round, as a one-off or under a regular contract.",
    "m3.li1": "Lawn mowing & care",
    "m3.li2": "Garden and grounds upkeep",
    "m3.li3": "Hedge trimming & tree pruning",
    "m3.li4": "Year-round landscape management",
    "dem.eyebrow": "How we work",
    "dem.title": "From the first phone call to the final rake stroke.",
    "dem.lede": "A simple, no-surprise process, for small jobs and full projects alike.",
    "s1.h": "On-site visit", "s1.p": "We come to see your land, listen to your project and take measurements.",
    "s2.h": "Free quote", "s2.p": "A clear, itemised estimate, with no obligation.",
    "s3.h": "The works", "s3.p": "We work on the agreed dates and leave the site clean.",
    "s4.h": "Follow-up & care", "s4.p": "We stay available to keep your garden thriving over time.",
    "zone.eyebrow": "Service area",
    "zone.title": "In Vendée",
    "zone.lede": "We work for homeowners and businesses across a wide area in Vendée.",
    "zone.more": "And more",
    "zone.note": "Your town isn't on the list? Give us a call — we travel everywhere in Vendée.",
    "testi.eyebrow": "Testimonials",
    "testi.title": "They trusted us with their outdoor space.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your project.",
    "contact.lede": "One call is all it takes to arrange a visit and get a free quote.",
    "contact.phone": "Phone",
    "contact.phoneNote": "Quick answer, 6 days a week.",
    "contact.emailNote": "Feel free to contact us by email.",
    "contact.area": "Area",
    "contact.areaText": "Châteaubriant, Redon and nearby towns<br>Loire-Atlantique (44) · Ille-et-Vilaine (35)",
    "contact.hours": "Opening hours",
    "contact.monfri": "Monday – Friday", "contact.sat": "Saturday", "contact.sun": "Sunday",
    "contact.h1": "8:00 am – 5:00 pm", "contact.h2": "9:30 am – 12:00 pm", "contact.h3": "Closed",
    "contact.cta": "Request a free quote",
    "footer.left": "© 2026 GMP Services — Landscaper",
    "footer.right": "Vendée"
  }
};
 
/* =====================================================================
   2) TÉMOIGNAGES — à remplacer par de vrais avis clients.
   Chaque témoignage a son texte en fr et en en, l'auteur et la note.
===================================================================== */
const TESTIMONIALS = [
  {
    name: "Marie L.", town: "Châteaubriant", stars: 5,
    fr: "Allée refaite en pavés et pelouse ressemée : travail soigné, délais tenus et chantier laissé impeccable. Je recommande.",
    en: "Our driveway repaved and lawn reseeded: careful work, deadlines met and a spotless site at the end. Highly recommended."
  },
  {
    name: "Jean-Pierre R.", town: "Redon", stars: 5,
    fr: "Un mur de soutènement monté en pierre dans les règles de l'art. De bons conseils dès la première visite et un devis très clair.",
    en: "A stone retaining wall built by the book. Great advice from the very first visit and a very clear quote."
  },
  {
    name: "Sophie & Marc D.", town: "Derval", stars: 5,
    fr: "GMP Services entretient notre jardin toute l'année : tonte, haies, élagage. Toujours ponctuels et disponibles, même le week-end.",
    en: "GMP Services looks after our garden all year round: mowing, hedges, pruning. Always on time and available, even at weekends."
  },
  {
    name: "Antoine B.", town: "Guémené-Penfao", stars: 5,
    fr: "Aménagement complet des abords de notre piscine. Le résultat dépasse ce qu'on imaginait, et le budget a été respecté.",
    en: "Complete landscaping around our pool. The result exceeded what we had imagined, and the budget was respected."
  }
];
 
/* ---------- Rendu des témoignages ---------- */
const track = document.getElementById('testi-track');
const dotsBox = document.getElementById('testi-dots');
let lang = 'fr';
let tIdx = 0;
 
function renderTestimonials(){
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi">
      <div class="stars" aria-label="${t.stars}/5">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <blockquote>${t[lang]}</blockquote>
      <div class="who"><strong>${t.name}</strong> — ${t.town}</div>
    </div>`).join('');
  dotsBox.innerHTML = TESTIMONIALS.map((_, i) =>
    `<button aria-label="Témoignage ${i+1}" class="${i === tIdx ? 'active' : ''}"></button>`).join('');
  [...dotsBox.children].forEach((d, i) => d.addEventListener('click', () => goTesti(i)));
  // repositionne sans animation après un re-rendu (changement de langue)
  track.scrollLeft = tIdx * track.clientWidth;
}
 
function goTesti(k){
  tIdx = (k + TESTIMONIALS.length) % TESTIMONIALS.length;
  track.scrollTo({ left: tIdx * track.clientWidth, behavior: 'smooth' });
}
document.getElementById('testi-prev').addEventListener('click', () => { goTesti(tIdx - 1); pauseAuto(); });
document.getElementById('testi-next').addEventListener('click', () => { goTesti(tIdx + 1); pauseAuto(); });
 
track.addEventListener('scroll', () => {
  const k = Math.round(track.scrollLeft / track.clientWidth);
  if (k !== tIdx) tIdx = k;
  [...dotsBox.children].forEach((d, i) => d.classList.toggle('active', i === tIdx));
}, { passive: true });
 
/* défilement automatique — désactivé si l'utilisateur préfère moins d'animations */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let auto = null;
function startAuto(){
  if (reduceMotion) return;
  auto = setInterval(() => goTesti(tIdx + 1), 6000);
}
function pauseAuto(){
  clearInterval(auto);
  auto = null;
  setTimeout(() => { if (!auto) startAuto(); }, 15000); // reprend après 15 s d'inactivité
}
document.querySelector('.testi-carousel').addEventListener('mouseenter', () => clearInterval(auto));
document.querySelector('.testi-carousel').addEventListener('mouseleave', () => { clearInterval(auto); startAuto(); });
track.addEventListener('touchstart', pauseAuto, { passive: true });
 
/* =====================================================================
   3) MOTEUR DE TRADUCTION
===================================================================== */
function setLang(l){
  if (!I18N[l]) return;
  lang = l;
  try { localStorage.setItem('gmp-lang', l); } catch (e) {} // ← ajout
  const dict = I18N[l];
  document.documentElement.lang = l;
  document.title = dict['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content', dict['meta.desc']);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  renderTestimonials();
}
 
document.getElementById('lang-select').addEventListener('change', (e) => setLang(e.target.value));
 
/* ---------- Apparition au scroll ---------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 
/* ---------- Init ----------
   setLang('fr') applique le dictionnaire dès le chargement : le texte
   écrit dans le HTML n'est qu'un fallback sans JavaScript. Pour modifier
   un texte, éditez UNIQUEMENT le dictionnaire I18N ci-dessus (fr + en). */
let savedLang = 'fr';
try { savedLang = localStorage.getItem('gmp-lang') || 'fr'; } catch (e) {}
document.getElementById('lang-select').value = savedLang; // le select affiche la bonne langue
setLang(savedLang);
startAuto();