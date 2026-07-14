/* =====================================================================
   1) TRADUCTIONS DES TEXTES FIXES
   Même principe que sur l'accueil : le HTML n'est qu'un fallback,
   setLang() applique ce dictionnaire au chargement.
   ==> Pour modifier un texte fixe, éditez UNIQUEMENT ce bloc (fr + en).
===================================================================== */
const I18N = {
  fr: {
    "meta.title": "Nos chantiers — GMP Services, paysagiste",
    "meta.desc": "Découvrez les réalisations de GMP Services : allées, murs de soutènement, engazonnement, clôtures et entretien de jardins entre Châteaubriant et Redon.",
    "nav.accueil": "Accueil",
    "nav.metiers": "Nos métiers",
    "nav.chantiers": "Nos chantiers",
    "nav.cta": "Devis gratuit",
    "head.eyebrow": "Nos chantiers",
    "head.title": "Nos réalisations parlent pour nous.",
    "head.lede": "Allées, murs, pelouses, clôtures : un aperçu de chantiers menés entre Châteaubriant et Redon, chez des particuliers comme des professionnels.",
    "filter.all": "Tous",
    "filter.creation": "Création paysagère",
    "filter.maconnerie": "Maçonnerie paysagère",
    "filter.entretien": "Entretien",
    "cta.title": "Un projet similaire en tête ?",
    "cta.lede": "Visite sur place et devis gratuit, 6 jours sur 7.",
    "cta.btn": "Appeler GMP Services",
    "footer.left": "© 2026 GMP Services — Paysagiste",
    "footer.right": "Vendée",
    "media.videoSoon": "Vidéo à venir",
    "media.photo": "Photo"
  },
  en: {
    "meta.title": "Our projects — GMP Services, landscaper",
    "meta.desc": "Browse GMP Services' completed projects: driveways, retaining walls, lawns, fencing and garden maintenance between Châteaubriant and Redon, France.",
    "nav.accueil": "Home",
    "nav.metiers": "What we do",
    "nav.chantiers": "Our projects",
    "nav.cta": "Free quote",
    "head.eyebrow": "Our projects",
    "head.title": "Our work speaks for us.",
    "head.lede": "Driveways, walls, lawns, fences: a look at projects completed between Châteaubriant and Redon, for homeowners and businesses alike.",
    "filter.all": "All",
    "filter.creation": "Garden creation",
    "filter.maconnerie": "Landscape masonry",
    "filter.entretien": "Maintenance",
    "cta.title": "Have a similar project in mind?",
    "cta.lede": "On-site visit and free quote, 6 days a week.",
    "cta.btn": "Call GMP Services",
    "footer.left": "© 2026 GMP Services — Landscaper",
    "footer.right": "Vendée",
    "media.videoSoon": "Video coming soon",
    "media.photo": "Photo"
  }
};

/* =====================================================================
   2) DONNÉES DES CHANTIERS — c'est ici que tout se modifie.

   Chaque champ texte est bilingue : { fr: "...", en: "..." }.
   Structure d'un chantier :
   {
     titre: { fr, en },
     lieu:  "Commune (44/35)",                    // non traduit
     cat:   "creation" | "maconnerie" | "entretien",
     tags:  [ { fr, en }, ... ],
     desc:  { fr, en },
     medias: [
       { type: "image", src: "photos/x.jpg", alt: { fr, en } },
       { type: "video", src: "videos/x.mp4", poster: "optionnel.jpg" }
     ]
   }

   - 1 seul média => affichage simple, sans flèches ni points.
   - src: "" => un visuel de remplacement est généré automatiquement.
===================================================================== */
const CHANTIERS = [
  {
    titre: { 
      fr: "Création de parterres et aménagement paysager style Hawaï", 
      en: "Decorative planting beds and tropical-style landscaping" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Création de parterres", en: "Planting bed creation" },
      { fr: "Style Hawaï", en: "Tropical style" }
    ],
    desc: {
      fr: "Création de parterres surélevés avec graviers décoratifs et aménagement paysager de style Hawaï. Les plantations définitives seront réalisées à l'automne pour les compositions végétales et éléments décoratifs. Un projet travaillé avec des horaires adaptés aux conditions de canicule.",
      en: "Custom raised planting beds with decorative gravel and tropical-style landscaping. Final plantings planned for autumn to establish vegetation. Project completed with flexible scheduling for heat conditions."
    },
    medias: [
      { type: "image", src: "./assets/media/600.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/601.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/602.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/603.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/604.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/605.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/606.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/607.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/608.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/609.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/610.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/611.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
      { type: "image", src: "./assets/media/612.jpg", alt: { fr: "Création des bordures et graviers", en: "Planting bed borders and gravel being laid" } },
    ]
  },
  {
    titre: { 
      fr: "Remise en état pour vente — transformation complète", 
      en: "Pre-sale property refresh — complete transformation" 
    },
    lieu: "La Ferrière (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Préparation vente", en: "Pre-sale preparation" },
      { fr: "Valorisation immobilière", en: "Property enhancement" }
    ],
    desc: {
      fr: "Remise en état complète d'une propriété en vue de sa vente. Nettoyage en profondeur, dégagement des allées, tonte et aménagement pour valoriser le bien et sédaire les futurs acheteurs. Un extérieur impeccable fait toute la différence.",
      en: "Complete property refresh for sale. Deep cleaning, pathway clearing, lawn care and landscaping to enhance curb appeal and attract buyers. A pristine outdoor space makes all the difference."
    },
    medias: [
      { type: "image", src: "./assets/media/500.jpg", alt: { fr: "Avant : jardin négligé avec herbes", en: "Before: neglected garden with overgrowth" } },
      { type: "image", src: "./assets/media/501.jpg", alt: { fr: "Avant : jardin négligé avec herbes", en: "Before: neglected garden with overgrowth" } },
      { type: "image", src: "./assets/media/502.jpg", alt: { fr: "Avant : jardin négligé avec herbes", en: "Before: neglected garden with overgrowth" } },
      { type: "image", src: "./assets/media/503.jpg", alt: { fr: "Avant : jardin négligé avec herbes", en: "Before: neglected garden with overgrowth" } },
      { type: "image", src: "./assets/media/504.jpg", alt: { fr: "Avant : jardin négligé avec herbes", en: "Before: neglected garden with overgrowth" } },
      { type: "image", src: "./assets/media/505.jpg", alt: { fr: "Avant : jardin négligé avec herbes", en: "Before: neglected garden with overgrowth" } },
    ]
  },
  {
    titre: { 
      fr: "Création d'allée en travertin, parterres gravillonnés et engazonnement", 
      en: "Travertine pathway, gravel beds and lawn installation" 
    },
    lieu: "La Génétouze (85)",
    cat: "maconnerie",
    tags: [ 
      { fr: "Allée travertin", en: "Travertine pathway" },
      { fr: "Aménagement complet", en: "Full landscaping" }
    ],
    desc: {
      fr: "Projet complet d'aménagement paysager : création d'une allée en travertin, mise en place de parterres gravillonnés structurés, travail en profondeur du sol et engazonnement final. Un extérieur entièrement transformé et revalorisé.",
      en: "Complete landscaping project: travertine pathway, structured gravel planting beds, soil preparation and lawn seeding. A fully transformed and enhanced outdoor space."
    },
    medias: [
      { type: "image", src: "./assets/media/400.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/401.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/402.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/403.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/404.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/405.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/406.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/407.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/408.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
      { type: "image", src: "./assets/media/409.jpg", alt: { fr: "Avant : terrain brut à aménager", en: "Before: raw land to landscape" } },
    ]
  },
  {
    titre: { 
      fr: "Défrichage complet d'un terrain laissé à l'abandon", 
      en: "Complete restoration of abandoned overgrown land" 
    },
    lieu: "Belleville-Sur-Vie (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Défrichage extrême", en: "Complete clearing" },
      { fr: "Terrain à l'abandon", en: "Abandoned site" },
      { fr: "Nettoyage complet", en: "Full cleanup" },
      { fr: "Avant/Après", en: "Before/After" }
    ],
    desc: {
      fr: "Défrichage et nettoyage complet d'un terrain totalement à l'abandon, envahi de mauvaises herbes et d'accumulation de végétation. Un travail en profondeur pour rendre le terrain à nouveau utilisable et accueillant.",
      en: "Complete clearing and cleanup of a severely neglected site overrun with weeds and wild vegetation. Deep-level restoration to reclaim the land and make it usable again."
    },
    medias: [
      { type: "image", src: "./assets/media/300.jpg", alt: { fr: "Avant : terrain complètement envahi et négligé", en: "Before: completely overgrown abandoned land" } },
      { type: "image", src: "./assets/media/301.jpg", alt: { fr: "Avant : terrain complètement envahi et négligé", en: "Before: completely overgrown abandoned land" } },
      { type: "image", src: "./assets/media/302.jpg", alt: { fr: "Avant : terrain complètement envahi et négligé", en: "Before: completely overgrown abandoned land" } },
      { type: "image", src: "./assets/media/303.jpg", alt: { fr: "Avant : terrain complètement envahi et négligé", en: "Before: completely overgrown abandoned land" } },
    ]
  },
  {
    titre: { 
      fr: "Arrachage de bananiers et rhizomes — préparation de nouvelles plantations", 
      en: "Banana plant and rhizome removal — site prep for new plantings" 
    },
    lieu: "La Roche-sur-Yon (85)",
    cat: "creation",
    tags: [ 
      { fr: "Arrachage", en: "Plant removal" },
      { fr: "Bananiers & rhizomes", en: "Banana plants & rhizomes" }
    ],
    desc: {
      fr: "Arrachage complet de bananiers et extraction de leurs rhizomes — un travail spécialisé qui demande de la précision. Nettoyage en profondeur du terrain pour préparer l'installation de nouvelles plantations plus adaptées.",
      en: "Complete removal of banana plants and rhizome extraction — specialized work requiring precision and strength. Deep site clearing to prepare for new, better-suited plantings."
    },
    medias: [
      { type: "image", src: "./assets/media/200.jpg", alt: { fr: "Avant : bananiers et végétation dense", en: "Before: banana plants and dense vegetation" } },
      { type: "image", src: "./assets/media/201.jpg", alt: { fr: "Détail : arrachage des rhizomes massifs", en: "Detail: massive rhizome removal" } },
      { type: "image", src: "./assets/media/202.jpg", alt: { fr: "Nettoyage : terrain débarrassé", en: "Clearing: site cleared" } }
    ]
  },
  {
    titre: { 
      fr: "Défrichage et préparation de terrain avant travaux", 
      en: "Site clearing and preparation for construction" 
    },
    lieu: "Vendée (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Défrichage", en: "Site clearing" },
      { fr: "Préparation terrain", en: "Site preparation" }
    ],
    desc: {
      fr: "Défrichage complet d'un terrain en friche avant les travaux à venir. Nettoyage, débroussaillage et aplanissement pour préparer le terrain à recevoir de nouveaux aménagements. Un travail préalable essentiel et bien maîtrisé.",
      en: "Complete site clearing and debris removal before upcoming construction. Vegetation management and grading to prepare the ground for new landscaping. Essential preparation work done professionally."
    },
    medias: [
      { type: "image", src: "./assets/media/100.jpg", alt: { fr: "Avant : terrain envahi et inculte", en: "Before: overgrown untended site" } },
      { type: "image", src: "./assets/media/101.jpg", alt: { fr: "Détail : fondations visibles après nettoyage", en: "Detail: site cleared revealing foundations" } },
      { type: "image", src: "./assets/media/102.jpg", alt: { fr: "Après : terrain préparé et nettoyé", en: "After: cleared and prepared ground" } },
      { type: "image", src: "./assets/media/103.jpg", alt: { fr: "Vue générale : prêt pour les travaux à venir", en: "Overview: ready for upcoming works" } }
    ]
  },
  {
    titre: { 
      fr: "Retour sur chantier : engazonnement de novembre bien établi en avril", 
      en: "Follow-up: November seeding thriving in spring" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Engazonnement", en: "Lawn seeding" },
      { fr: "Suivi client", en: "Client follow-up" }
    ],
    desc: {
      fr: "Retour sur un chantier d'engazonnement réalisé en novembre. Six mois après, le gazon est bien établi et verdoyant, prêt pour l'été. Une preuve du succès de nos semis, même en fin de saison, et du suivi que nous apportons à nos clients.",
      en: "Follow-up visit to a November seeding project. Six months later, the lawn is fully established and lush, ready for summer. Proof of our expertise in late-season work and our commitment to client care."
    },
    medias: [
      { type: "image", src: "./assets/media/90.jpg", alt: { fr: "Novembre : terrain semé en préparation", en: "November: freshly seeded terrain" } },
      { type: "image", src: "./assets/media/91.jpg", alt: { fr: "Novembre : terrain semé en préparation", en: "November: freshly seeded terrain" } },
      { type: "image", src: "./assets/media/92.jpg", alt: { fr: "Novembre : terrain semé en préparation", en: "November: freshly seeded terrain" } },
      { type: "image", src: "./assets/media/93.jpg", alt: { fr: "Novembre : terrain semé en préparation", en: "November: freshly seeded terrain" } },
      { type: "image", src: "./assets/media/94.jpg", alt: { fr: "Novembre : terrain semé en préparation", en: "November: freshly seeded terrain" } },
      { type: "image", src: "./assets/media/95.jpg", alt: { fr: "Novembre : terrain semé en préparation", en: "November: freshly seeded terrain" } },
    ]
  },
  {
    titre: { 
      fr: "Taille et tonte — entretien régulier de propriété", 
      en: "Hedge trimming and mowing — regular property maintenance" 
    },
    lieu: "Aizenay (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Tonte pelouse", en: "Lawn mowing" },
      { fr: "Entretien régulier", en: "Regular maintenance" }
    ],
    desc: {
      fr: "Entretien régulier d'une propriété : taille complète des haies, tonte de la pelouse et nettoyage global. Un travail de routine qui maintient l'extérieur impeccable toute l'année.",
      en: "Regular property upkeep: complete hedge trimming, lawn mowing and general cleanup. Routine maintenance that keeps your garden spotless year-round."
    },
    medias: [
      { type: "image", src: "./assets/media/80.jpg", alt: { fr: "Avant : haies à tailler et pelouse à tondre", en: "Before: overgrown hedges and long grass" } },
      { type: "image", src: "./assets/media/81.jpg", alt: { fr: "Avant : haies à tailler et pelouse à tondre", en: "Before: overgrown hedges and long grass" } },
      { type: "image", src: "./assets/media/82.jpg", alt: { fr: "Avant : haies à tailler et pelouse à tondre", en: "Before: overgrown hedges and long grass" } },
      { type: "image", src: "./assets/media/83.jpg", alt: { fr: "Avant : haies à tailler et pelouse à tondre", en: "Before: overgrown hedges and long grass" } },
      { type: "image", src: "./assets/media/84.jpg", alt: { fr: "Avant : haies à tailler et pelouse à tondre", en: "Before: overgrown hedges and long grass" } },
      { type: "image", src: "./assets/media/85.jpg", alt: { fr: "Avant : haies à tailler et pelouse à tondre", en: "Before: overgrown hedges and long grass" } },
    ]
  },
  {
    titre: { 
      fr: "Nettoyage de fin d'hiver et aménagement paysager", 
      en: "Late winter garden cleanup and landscaping" 
    },
    lieu: "La Ferrière (85)",
    cat: "maconnerie",
    tags: [ 
      { fr: "Nettoyage d'hiver", en: "Winter cleanup" },
      { fr: "Aménagement minéral", en: "Hard landscaping" }
    ],
    desc: {
      fr: "Nettoyage complet en fin d'hiver suivi d'un aménagement paysager : dallage en pierre, création de massifs et d'espaces verts structurés. Un terrain transformé pour aborder le printemps avec un jardin frais et impeccable.",
      en: "Comprehensive late-winter cleanup followed by garden design: stone paving, planting beds and structured green spaces. A refreshed garden ready for spring."
    },
    medias: [
      { type: "image", src: "./assets/media/70.jpg", alt: { fr: "Avant : terrain à nettoyer avec accumulations hivernales", en: "Before: garden needing winter cleanup" } },
      { type: "image", src: "./assets/media/71.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
      { type: "image", src: "./assets/media/72.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
      { type: "image", src: "./assets/media/73.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
      { type: "image", src: "./assets/media/74.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
      { type: "image", src: "./assets/media/75.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
      { type: "image", src: "./assets/media/76.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
      { type: "image", src: "./assets/media/77.jpg", alt: { fr: "Pendant : terrasse dallée en cours de création", en: "During: paved terrace being laid" } },
    ]
  },
  {
    titre: { 
      fr: "Remise en état complète d'un jardin en friche", 
      en: "Complete overgrown garden restoration" 
    },
    lieu: "Vendée (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Remise en état", en: "Garden restoration" },
      { fr: "Débroussaillage", en: "Clearing" }
    ],
    desc: {
      fr: "Remise en état totale d'un jardin envahi : débroussaillage, nettoyage complet, élagage des arbres, aplanissement du terrain. Un travail consciencieux et méthodique pour retrouver un extérieur impeccable et utilisable.",
      en: "Complete restoration of a neglected garden: clearing, full cleanup, tree pruning and grading. Meticulous, methodical work to reclaim a beautiful outdoor space."
    },
    medias: [
      { type: "image", src: "./assets/media/60.jpg", alt: { fr: "Avant : jardin envahi et négligé", en: "Before: overgrown neglected garden" } },
      { type: "image", src: "./assets/media/61.jpg", alt: { fr: "Après : jardin impeccable et spacieux", en: "After: spotless, spacious garden" } }
    ]
  },
  {
    titre: { 
      fr: "Transformation complète : élagage, clôture et engazonnement", 
      en: "Complete garden transformation: pruning, fencing and lawn" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Élagage d'arbres", en: "Tree pruning" },
      { fr: "Clôture & portillon", en: "Fencing & gate" }
    ],
    desc: {
      fr: "Projet global de transformation d'un terrain : élagage complet des arbres, mise en place d'une clôture avec portillon sur mesure, terrassement et aplanissement du sol, engazonnement final. Un terrain totalement refondu en une seule intervention.",
      en: "Complete garden overhaul: tree pruning, custom fence and gate installation, site levelling and grading, lawn seeding. A fully transformed outdoor space in one comprehensive project."
    },
    medias: [
      { type: "image", src: "./assets/media/50.jpg", alt: { fr: "Avant : terrain à aplanir avec arbres à élaguer", en: "Before: uneven terrain with trees needing pruning" } },
      { type: "image", src: "./assets/media/51.jpg", alt: { fr: "Après : clôture, portillon et gazon impeccables", en: "After: perfect fencing, custom gate and finished lawn" } }
    ]
  },
  {
    titre: { 
      fr: "Engazonnement par semis — belle levée en novembre", 
      en: "Lawn seeding — excellent germination in November" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Engazonnement", en: "Lawn seeding" },
      { fr: "Semis gazon", en: "Grass seed" }
    ],
    desc: {
      fr: "Semis d'un gazon réalisé le 30 octobre avec une belle levée un mois plus tard. Un engazonnement parfaitement réussi, même en fin de saison, grâce à une bonne préparation du terrain et un suivi approprié.",
      en: "Grass seeding completed October 30th with excellent germination one month later. A successful lawn establishment, even late in the season, thanks to proper soil preparation and care."
    },
    medias: [
      { type: "image", src: "./assets/media/40.jpg", alt: { fr: "Avant : terrain préparé en attente de semis", en: "Before: prepared soil ready for seeding" } },
      { type: "image", src: "./assets/media/41.jpg", alt: { fr: "Après : belle levée du gazon semé", en: "After: healthy lawn germination" } }
    ]
  },
  {
    titre: { 
      fr: "Clôture ranch avec bandes de propreté en travertin et engazonnement", 
      en: "Ranch fencing with travertine edging and lawn completion" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Clôture ranch", en: "Ranch fencing" },
      { fr: "Bandes de propreté", en: "Gravel edging" }
    ],
    desc: {
      fr: "Projet complet de clôture : pose d'une clôture ranch, réalisation de bandes de propreté en travertin et gravier ivoire, suivi d'un engazonnement complet. Un terrain totalement aménagé et finalisé.",
      en: "Complete fencing and landscaping project: ranch-style fencing, travertine edging with ivory gravel, and full lawn seeding. A fully finished outdoor space."
    },
    medias: [
      { type: "video", src: "./assets/media/30.mp4", poster: "" }
    ]
  },
  {
    titre: { 
      fr: "Pose de clôture souple, paillage et plantation de haie", 
      en: "Soft fencing, mulching and hedge planting" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Clôture souple", en: "Soft fencing" },
      { fr: "Plantation de haie", en: "Hedge planting" }
    ],
    desc: {
      fr: "Projet complet combinant pose de clôture souple avec toile de paillage, plantation d'une nouvelle haie, et rénovation du gazon avant l'automne. Une solution clé en main pour faciliter l'entretien futur.",
      en: "Complete project combining soft fencing with mulch cloth, new hedge planting, and lawn renovation ahead of winter. A turnkey solution for easier maintenance going forward."
    },
    medias: [
      { type: "image", src: "./assets/media/20.jpg", alt: { fr: "Vue d'ensemble du terrain avec plantations", en: "Overview of garden with new plantings" } },
      { type: "image", src: "./assets/media/21.jpg", alt: { fr: "Vue d'ensemble du terrain avec plantations", en: "Overview of garden with new plantings" } },
      { type: "image", src: "./assets/media/22.jpg", alt: { fr: "Vue d'ensemble du terrain avec plantations", en: "Overview of garden with new plantings" } },
      { type: "image", src: "./assets/media/23.jpg", alt: { fr: "Vue d'ensemble du terrain avec plantations", en: "Overview of garden with new plantings" } },
      { type: "image", src: "./assets/media/24.jpg", alt: { fr: "Vue d'ensemble du terrain avec plantations", en: "Overview of garden with new plantings" } },
    ]
  },
  {
    titre: { 
      fr: "Réalisation d'une allée en dallage Travertin multi-format", 
      en: "Travertine multi-format paving driveway" 
    },
    lieu: "Vendée (85)",
    cat: "maconnerie",
    tags: [ 
      { fr: "Allée", en: "Driveway" },
      { fr: "Travertin", en: "Travertine" }
    ],
    desc: {
      fr: "Création d'une allée en dallage Travertin multi-format. Une pierre naturelle élégante qui crée une allée à la fois durable et esthétique, avec motifs variés.",
      en: "Driveway paved with multi-format travertine tiles. Elegant natural stone creating a durable, sophisticated path with varied patterns and textures."
    },
    medias: [
      { type: "video", src: "./assets/media/10.mp4", poster: "" }
    ]
  },
  {
    titre: { 
      fr: "Transformation complète de piscine : pergola bioclimatique et carrelage", 
      en: "Complete pool transformation: bioclimatic pergola and paving" 
    },
    lieu: "Vendée (85)",
    cat: "maconnerie",
    tags: [ 
      { fr: "Pergola bioclimatique", en: "Bioclimatic pergola" },
      { fr: "Abords de piscine", en: "Pool surround" }
    ],
    desc: {
      fr: "Démontage d'une ancienne pergola, installation d'une nouvelle pergola bioclimatique haut de gamme et carrelage complet autour de la piscine pour créer un véritable espace salon de détente.",
      en: "Removal of old pergola, installation of a premium bioclimatic pergola and complete paving around the pool to create a sophisticated relaxation space."
    },
    medias: [
      { type: "video", src: "./assets/media/09.mp4", poster: "" }
    ]
  },
  {
    titre: { 
      fr: "Journée d'entretien multi-sites", 
      en: "Multi-site maintenance day" 
    },
    lieu: "Poiré-sur-Vie & Saligny (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Entretien régulier", en: "Regular maintenance" },
      { fr: "Jardinage global", en: "Full garden care" }
    ],
    desc: {
      fr: "Une journée type d'entretien chez plusieurs clients : taille de haies, tonte de pelouses, nettoyage et aménagement. GMP Services assure le suivi régulier de nombreuses propriétés.",
      en: "A typical maintenance day across multiple clients: hedge trimming, lawn mowing, garden upkeep and landscaping. GMP Services maintains regular care for many properties."
    },
    medias: [
      { type: "image", src: "./assets/media/08.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/081.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/082.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/083.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/084.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/085.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/086.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/087.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/088.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/089.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
      { type: "image", src: "./assets/media/0810.jpg", alt: { fr: "Taille de haies avec échelles", en: "Hedge trimming with ladders" } },
    ]
  },
  {
    titre: { 
      fr: "Remplacement de grillage souple par panneaux brises-vue", 
      en: "Fence upgrade: grillage replaced with privacy panels" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Clôture", en: "Fencing" },
      { fr: "Panneaux brises-vue", en: "Privacy panels" }
    ],
    desc: {
      fr: "Remplacement d'une vieille clôture en grillage souple par des panneaux modernes brises-vue. Une transformation complète pour plus d'intimité, d'esthétique et de durabilité.",
      en: "Old chain-link fence replaced with modern privacy panels. A complete transformation for better privacy, aesthetics and long-term durability."
    },
    medias: [
      { type: "image", src: "./assets/media/07.jpg", alt: { fr: "Avant : ancien grillage souple", en: "Before: old chain-link fence" } },
      { type: "image", src: "./assets/media/071.jpg", alt: { fr: "Après : panneaux brises-vue installés", en: "After: new privacy panels installed" } }
    ]
  },
  {
    titre: { 
      fr: "Création d'un bac à compost en bois recyclé", 
      en: "Recycled wood compost bin creation" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Bac à compost", en: "Compost bin" },
      { fr: "Création sur mesure", en: "Custom build" },
    ],
    desc: {
      fr: "Création d'un bac à compost sur mesure en bois recyclé. Une solution élégante et écologique pour valoriser vos déchets verts et enrichir votre jardin naturellement.",
      en: "Custom-built compost bin made from recycled wood. An elegant, eco-friendly solution to manage garden waste and naturally enrich your soil."
    },
    medias: [
      { type: "video", src: "./assets/media/06.mp4", poster: "" }
    ]
  },
  {
    titre: { 
      fr: "Remise en état de jardin pour vente", 
      en: "Garden preparation for sale" 
    },
    lieu: "Poiré-sur-Vie (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Remise en état", en: "Garden refresh" },
      { fr: "Préparation vente", en: "Pre-sale preparation" }
    ],
    desc: {
      fr: "Remise en état complète d'un jardin pour la vente d'une propriété. Nettoyage, désherbage, taille et aménagement pour valoriser le bien et séduire les acheteurs.",
      en: "Complete garden refresh for a property sale. Clearing, weeding, pruning and landscaping to enhance the property and attract buyers."
    },
    medias: [
      { type: "video", src: "./assets/media/05.mp4", poster: "" }
    ]
  },
  {
    titre: { 
      fr: "Taille d'éclaircissage d'un grand arbre", 
      en: "Tree crown thinning and pruning" 
    },
    lieu: "Saint-Georges-de-Pointindoux (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Élagage", en: "Tree pruning" },
      { fr: "Taille d'arbre", en: "Tree trimming" }
    ],
    desc: {
      fr: "Taille d'éclaircissage complète d'un grand arbre pour améliorer sa structure, laisser passer la lumière et favoriser sa santé. Un travail en hauteur sécurisé et professionnel.",
      en: "Professional crown thinning of a mature tree to improve structure, allow light penetration, and promote tree health. Safe, skilled work at height."
    },
    medias: [
      { type: "image", src: "./assets/media/04.jpg", alt: { fr: "Élagage en cours — vue de l'arbre en travaux", en: "Pruning in progress — tree being worked on" } },
      { type: "image", src: "./assets/media/041.jpg", alt: { fr: "Élagage en cours — vue de l'arbre en travaux", en: "Pruning in progress — tree being worked on" } },
      { type: "image", src: "./assets/media/042.jpg", alt: { fr: "Élagage en cours — vue de l'arbre en travaux", en: "Pruning in progress — tree being worked on" } },
      { type: "image", src: "./assets/media/043.jpg", alt: { fr: "Élagage en cours — vue de l'arbre en travaux", en: "Pruning in progress — tree being worked on" } },
      { type: "image", src: "./assets/media/044.jpg", alt: { fr: "Élagage en cours — vue de l'arbre en travaux", en: "Pruning in progress — tree being worked on" } },
      { type: "image", src: "./assets/media/045.jpg", alt: { fr: "Élagage en cours — vue de l'arbre en travaux", en: "Pruning in progress — tree being worked on" } }
    ]
  },
  {
    titre: { 
      fr: "Installation pergola bioclimatique", 
      en: "Bioclimatic pergola installation" 
    },
    lieu: "Mouillerdon-le-Captif (85)",
    cat: "creation",
    tags: [ 
      { fr: "Pergola bioclimatique", en: "Bioclimatic pergola" },
      { fr: "Aménagement extérieur", en: "Outdoor design" },
    ],
    desc: {
      fr: "Installation d'une belle pergola bioclimatique pour créer un espace extérieur ombragé, confortable et protégé. Idéal pour prolonger l'usage de votre terrasse toute l'année.",
      en: "Installation of a premium bioclimatic pergola to create a shaded, comfortable outdoor living space. Perfect for extending your patio use year-round."
    },
    medias: [
      { type: "image", src: "./assets/media/03.jpg", alt: { fr: "Avant : terrain sans aménagement", en: "Before: bare outdoor space" } },
      { type: "image", src: "./assets/media/031.jpg", alt: { fr: "Installation en cours de la pergola", en: "Pergola installation in progress" } },
      { type: "image", src: "./assets/media/032.jpg", alt: { fr: "Pergola bioclimatique terminée — vue globale", en: "Finished bioclimatic pergola — overview" } },
      { type: "image", src: "./assets/media/034.jpg", alt: { fr: "Détail de la pergola et de l'aménagement", en: "Pergola detail and landscaping" } },
      { type: "image", src: "./assets/media/035.jpg", alt: { fr: "Détail de la pergola et de l'aménagement", en: "Pergola detail and landscaping" } },
      { type: "image", src: "./assets/media/036.jpg", alt: { fr: "Détail de la pergola et de l'aménagement", en: "Pergola detail and landscaping" } }
    ]
  },
  {
    titre: { 
      fr: "Transformation d'un terrain en friche", 
      en: "Overgrown garden transformation" 
    },
    lieu: "La Roche-sur-Yon (85)",
    cat: "entretien",
    tags: [ 
      { fr: "Nettoyage terrain", en: "Site clearing" },
      { fr: "Avant/Après", en: "Before/After" }
    ],
    desc: {
      fr: "Transformation complète d'un terrain envahi par les herbes et les mauvaises herbes. Tonte, nettoyage, dégagement et aménagement paysager pour retrouver un jardin utilisable et accueillant.",
      en: "Complete transformation of an overgrown, neglected garden. Mowing, clearing, and landscaping to restore a usable, welcoming outdoor space."
    },
    medias: [
      { type: "image", src: "./assets/media/02.jpg", alt: { fr: "Avant : terrain en friche envahi de mauvaises herbes", en: "Before: overgrown garden choked with weeds" } },
      { type: "image", src: "./assets/media/021.jpg", alt: { fr: "Après : jardin nettoyé et tondu", en: "After: cleared and mowed garden" } }
    ]
  },
  {
    titre: { 
      fr: "Aménagement paysager méditerranéen avec massifs surélevés", 
      en: "Mediterranean landscape design with raised planters" 
    },
    lieu: "Vendée (85)",
    cat: "creation",
    tags: [ 
      { fr: "Création paysagère", en: "Garden creation" },
      { fr: "Style méditerranéen", en: "Mediterranean style" },
    ],
    desc: {
      fr: "Création complète d'un jardin méditerranéen avec massifs surélevés en bois, composition minérale en gravier blanc et blanc, végétation structurée. Un mélange de style zen et méditerranéen pour un extérieur calme et élégant.",
      en: "Full creation of a Mediterranean garden with wooden raised planters, white gravel hard landscaping, and structured vegetation. A blend of zen and Mediterranean styles for a calm, elegant outdoor space."
    },
    medias: [
      { type: "image", src: "./assets/media/01.jpg", alt: { fr: "Vue d'ensemble du jardin aménagé", en: "Overview of the designed garden" } },
      { type: "image", src: "./assets/media/012.jpg", alt: { fr: "Détail massif avec arbustes et orangers", en: "Planter detail with shrubs and citrus trees" } },
      { type: "image", src: "./assets/media/013.jpg", alt: { fr: "Jardin paysager avec piscine en arrière-plan", en: "Landscaped garden with pool in background" } },
      { type: "image", src: "./assets/media/014.jpg", alt: { fr: "Élément décoratif du jardin", en: "Garden decorative element" } }
    ]
  }
];

/* =====================================================================
   3) RENDU + CARROUSELS + FILTRES + TRADUCTION
===================================================================== */
let lang = 'fr';
let activeFilter = 'all';
const root = document.getElementById('chantiers');

/* Visuel de remplacement (si src vide) */
function placeholder(label, isVideo){
  const safe = label.replace(/&/g,'&amp;').replace(/</g,'&lt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <rect width="800" height="600" fill="#e9eadd"/>
    <path d="M0 430 Q200 370 400 415 T800 405 V600 H0 Z" fill="#9db86e"/>
    <path d="M0 480 Q250 430 500 470 T800 465 V600 H0 Z" fill="#7fa356"/>
    <circle cx="650" cy="130" r="55" fill="#f0e8b8"/>
    ${isVideo ? '<circle cx="400" cy="280" r="52" fill="rgba(34,56,42,.8)"/><path d="M385 255 L430 280 L385 305 Z" fill="#fff"/>' : ''}
    <text x="400" y="560" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#22382a">${safe}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function renderChantiers(){
  const t = I18N[lang];
  root.innerHTML = '';

  CHANTIERS.forEach((c) => {
    const art = document.createElement('article');
    art.className = 'chantier reveal in'; // "in" direct : pas de fondu au re-rendu
    art.dataset.cat = c.cat;
    if (activeFilter !== 'all' && c.cat !== activeFilter) art.classList.add('hidden');

    const slides = c.medias.map((m, j) => {
      if (m.type === 'video') {
        const poster = m.poster || placeholder(`${t['media.videoSoon']} — ${c.titre[lang]}`, true);
        return `<div class="slide">${
          m.src
            ? `<video controls preload="metadata" ${m.poster ? `poster="${m.poster}"` : ''}><source src="${m.src}"></video>`
            : `<img src="${poster}" alt="${t['media.videoSoon']} — ${c.titre[lang]}">`
        }</div>`;
      }
      const altText = m.alt ? m.alt[lang] : `${t['media.photo']} ${j+1} — ${c.titre[lang]}`;
      const src = m.src || placeholder(altText, false);
      return `<div class="slide"><img src="${src}" alt="${altText}" loading="lazy"></div>`;
    }).join('');

    const multi = c.medias.length > 1;

    art.innerHTML = `
      <div class="carousel" aria-label="${c.titre[lang]}">
        ${multi ? `<span class="media-count">1 / ${c.medias.length}</span>` : ''}
        <div class="track">${slides}</div>
        ${multi ? `
          <button class="car-btn prev" aria-label="←">‹</button>
          <button class="car-btn next" aria-label="→">›</button>
          <div class="car-dots" role="tablist">
            ${c.medias.map((_, j) => `<button role="tab" aria-label="${j+1}" class="${j===0?'active':''}"></button>`).join('')}
          </div>` : ''}
      </div>
      <div class="chantier-body">
        <div class="chantier-tags">${c.tags.map(tag => `<span class="tag">${tag[lang]}</span>`).join('')}</div>
        <h2>${c.titre[lang]}</h2>
        <span class="lieu">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1a4.4 4.4 0 0 0-4.4 4.4C2.6 8.7 7 13 7 13s4.4-4.3 4.4-7.6A4.4 4.4 0 0 0 7 1Z" stroke="#4f7345" stroke-width="1.4"/><circle cx="7" cy="5.4" r="1.6" fill="#4f7345"/></svg>
          ${c.lieu}
        </span>
        <p class="desc">${c.desc[lang]}</p>
      </div>`;

    root.appendChild(art);

    /* --- comportement du carrousel --- */
    if (multi) {
      const track = art.querySelector('.track');
      const dots = [...art.querySelectorAll('.car-dots button')];
      const count = art.querySelector('.media-count');
      const n = c.medias.length;
      let idx = 0;

      const goTo = (k) => {
        idx = (k + n) % n;
        track.scrollTo({ left: idx * track.clientWidth, behavior: 'smooth' });
      };
      art.querySelector('.prev').addEventListener('click', () => goTo(idx - 1));
      art.querySelector('.next').addEventListener('click', () => goTo(idx + 1));
      dots.forEach((d, k) => d.addEventListener('click', () => goTo(k)));

      track.addEventListener('scroll', () => {
        const k = Math.round(track.scrollLeft / track.clientWidth);
        if (k !== idx) {
          idx = k;
          art.querySelectorAll('video').forEach(v => v.pause());
        }
        dots.forEach((d, j) => d.classList.toggle('active', j === idx));
        if (count) count.textContent = `${idx + 1} / ${n}`;
      }, { passive: true });
    }
  });
}

/* ---------- Filtres ---------- */
document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  document.querySelectorAll('#filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  document.querySelectorAll('.chantier').forEach(ch => {
    ch.classList.toggle('hidden', activeFilter !== 'all' && ch.dataset.cat !== activeFilter);
  });
});

/* ---------- Moteur de traduction ---------- */
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
  renderChantiers();
}
document.getElementById('lang-select').addEventListener('change', (e) => setLang(e.target.value));

/* ---------- Apparition au scroll (premier chargement) ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .1 });

/* ---------- Init ----------
   setLang('fr') applique le dictionnaire dès le chargement : le texte du
   HTML n'est qu'un fallback. Modifiez UNIQUEMENT I18N et CHANTIERS. */
/* ---------- Init ---------- */
let savedLang = 'fr';
try { savedLang = localStorage.getItem('gmp-lang') || 'fr'; } catch (e) {}
document.getElementById('lang-select').value = savedLang; // le select affiche la bonne langue
setLang(savedLang);

// active le fondu au scroll uniquement pour le premier rendu
document.querySelectorAll('.chantier').forEach(el => { el.classList.remove('in'); io.observe(el); });
document.querySelectorAll('.page-head .eyebrow, .page-head h1, .page-head p').forEach(()=>{});