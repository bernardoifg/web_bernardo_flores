/* =========================================================
   i18n.js — Traducciones ES / EN — Bernardo Flores Portfolio
   ========================================================= */

const T = {
  es: {
    /* ── Nav ── */
    'nav.about':      'SOBRE MÍ',
    'nav.work':       'TRABAJO',
    'nav.experience': 'EXPERIENCIA',
    'nav.studies':    'ESTUDIOS',
    'nav.contact':    'CONTACTO',

    /* ── Page titles ── */
    'title.about':      'Bernardo Flores – SOBRE MÍ',
    'title.work':       'Bernardo Flores – TRABAJO',
    'title.experience': 'Bernardo Flores – EXPERIENCIA',
    'title.studies':    'Bernardo Flores – ESTUDIOS',
    'title.contact':    'Bernardo Flores – CONTACTO',

    /* ── index.html ── */
    'about.heading': 'Sobre Mí',
    'about.bio': 'Creative Lead y Senior Product Designer con más de 12 años de experiencia impulsando la estrategia visual para marcas globales. Actualmente me especializo en el diseño de ecosistemas digitales complejos dentro del espacio Fintech, con enfoque en Banca Web, aplicaciones móviles y soluciones POS. Con una sólida trayectoria en Dirección de Arte y Branding, aprovecho la IA Generativa para optimizar flujos de trabajo creativos y producir contenido visual de alto impacto. Mi enfoque fusiona la creatividad orientada a la publicidad con el rigor técnico para entregar productos digitales que sean tan funcionales como memorables.',

    /* ── trabajo.html ── */
    'work.heading':       'Trabajo',
    'work.filter.all':    'Todos',
    'work.filter.fintech': 'Fintech / UX',
    'work.filter.samsung': 'Samsung',
    'work.filter.branding': 'Branding & Publicidad',
    'work.filter.decor':   'Eventos & Decoración',
    'btn.behance':        'Ver en Behance',
    'btn.casestudy':      'Ver Case Study',
    'caption.req':        '* Indica campo requerido',

    /* Gallery captions — formato "Título|Descripción" */
    'cap.fullcarga':         'Fullcarga / Social Media Shorts|Dirección de Arte, diseño y animación.',
    'cap.fullcarga.case':    'Fullcarga / UX/UI Case Study|App de Venta de Recargas, Pago de Servicios y Pines. Diseño de 0 a fin de App y sitio web.',
    'cap.ya.spots':          'YA Payments / Spots|Concepto, dirección de Arte, diseño y animación.',
    'cap.ya.case':           'YA Payments / Case Study|UX/UI Design, investigación y prototipado.',
    'cap.pagatodo.case':     'Banco PagaTodo / UX/UI Case Study|Plataforma bancaria multiperfilada para México. Rediseño y unificación de la experiencia para Web y App móvil.',
    'cap.iconx.mercury':     'Samsung / IconX Tangle – Mercury|Concepto, dirección de Arte, diseño y layout.',
    'cap.iconx.kimister':    'Samsung / IconX Tangle – Kimister|Concepto, dirección de Arte, diseño y layout.',
    'cap.iconx.bowie':       'Samsung / IconX Tangle – Bowie|Concepto, dirección de Arte, diseño y layout.',
    'cap.switch.a':          'Samsung / Smart Switch A|Concepto, dirección de Arte, diseño y layout.',
    'cap.switch.b':          'Samsung / Smart Switch B|Concepto, dirección de Arte.',
    'cap.focus':             'Samsung / Focus|Concepto, dirección de Arte, diseño y layout.',
    'cap.galaxy':            'Samsung / Galaxy|Concepto, dirección de arte, diseño y layout.',
    'cap.glamrebel':         'Samsung / Glamrebel|Concepto, dirección de arte, retoque, diseño y layout.',
    'cap.strongsweet':       'Samsung / Strongsweet|Concepto, dirección de arte, retoque, diseño y layout.',
    'cap.vr.alpinista':      'Samsung / Gear VR – Alpinista|Concepto, dirección de arte, diseño y layout.',
    'cap.vr.ciclista':       'Samsung / Gear VR – Ciclista|Concepto, dirección de arte, diseño y layout.',
    'cap.vr.gamer':          'Samsung / Gear VR – Gamer|Concepto, dirección de arte, diseño y layout.',
    'cap.galaxy.a8.tia':     'Samsung / Galaxy A8 – Divertida|Dirección de arte, diseño y layout.',
    'cap.galaxy.a8.rockero': 'Samsung / Galaxy A8 – Rockero|Dirección de arte, diseño y layout.',
    'cap.qled.5':            'Samsung / QLED Active Voice Woof|Dirección de arte, diseño y layout.',
    'cap.qled.1':            'Samsung / QLED Active Voice Crash|Dirección de arte, diseño y layout.',
    'cap.qled.6':            'Samsung / QLED Active Voice Crunch|Dirección de arte, diseño y layout.',
    'cap.s8pink.taxco':      'Samsung / S8 PINK – Taxco|Dirección de arte, retoque fotográfico, diseño y layout.',
    'cap.s8pink.cabos':      'Samsung / S8 PINK – Los Cabos|Dirección de arte, retoque fotográfico, diseño y layout.',
    'cap.sos.city':          'Samsung / SOS City|Dirección de arte, diseño y layout.',
    'cap.sos.forest':        'Samsung / SOS Forest|Dirección de arte, diseño y layout.',
    'cap.colibri':           'Samsung / Colibrí|Dirección de arte, retoque fotográfico, diseño y layout.',
    'cap.lagartija':         'Samsung / Lagartija|Dirección de arte, retoque fotográfico, diseño y layout.',
    'cap.vuelve':            'Samsung / Vuelve a Mirar|Concepto, dirección de arte, copy, diseño y layout.',
    'cap.buds':              'Samsung / Galaxy Buds Live|Dirección de Arte, diseño y layout.',
    'cap.kids':              'Samsung / Kids Mode|Dirección de Arte, diseño y layout.',
    'cap.cancer.poster':     'Samsung ESR / Cáncer de mama – Tócalas sin miedo|Concepto, dirección de arte, layout.',
    'cap.cancer.fb5':        'Samsung ESR / Cáncer de mama – No me ha dolido nada|Concepto, dirección de arte, layout.',
    'cap.cancer.fb1':        'Samsung ESR / Cáncer de mama – A mí no me pasa|Concepto, dirección de arte, layout.',
    'cap.cancer.fb3':        'Samsung ESR / Cáncer de mama – Solo es una bolita|Concepto, dirección de arte, layout.',
    'cap.interaccion':       'Samsung ESR / Cáncer de mama – Desliza 2 dedos|Material interactivo que te invita a utilizar 2 dedos y explorar.',
    'cap.svoice.1':          'Samsung / S Voice – Accidente|Concepto, dirección de arte, retoque, diseño y layout.',
    'cap.svoice.2':          'Samsung / S Voice – Cicatriz|Concepto, dirección de arte, retoque, diseño y layout.',
    'cap.comparte.1':        'Samsung / Comparte al instante – Caballo|Concepto, dirección de arte, copy, retoque, diseño y layout.',
    'cap.comparte.2':        'Samsung / Comparte al instante – Skater|Concepto, dirección de arte, copy, retoque, diseño y layout.',
    'cap.gmusic.1':          'Samsung / Google Play Music – Washawashear|Concepto, dirección de arte, diseño y layout.',
    'cap.gmusic.2':          'Samsung / Google Play Music – Gustos Culposos|Concepto, dirección de arte, diseño y layout.',
    'cap.corbatas':          'Samsung / Corbatas|Concepto, dirección de arte y layout.',
    'cap.regalos':           'Samsung / Mejores Regalos|Concepto, dirección de arte, retoque, diseño y layout.',
    'cap.note10':            'Samsung / Note 10.1|Concepto, dirección de arte y layout.',
    'cap.under.buen1':       'Under Armour / Rompe tu récord|Concepto, dirección de Arte, diseño y layout.',
    'cap.under.buen2':       'Under Armour / Convierte tus sueños en logros|Concepto, dirección de Arte, diseño y layout.',
    'cap.under.buen3':       'Under Armour / Termina el año con una nueva meta|Concepto, dirección de Arte, diseño y layout.',
    'cap.under.g':           'Under Armour / Corre otro maratón|Concepto, dirección de Arte, diseño y layout.',
    'cap.under.oferta':      'Under Armour / Ve por todo|Concepto, dirección de Arte, diseño y layout.',
    'cap.greenpeace':        'Greenpeace / Árbol de la vida / Eagle Award (Plata)|Dirección de arte, dirección de fotografía.',
    'cap.garra.003':         'Logo Garra Negra|Dirección de arte, diseño y layout.',
    'cap.garra.006':         'Label Garra Negra|Dirección de arte, diseño y layout.',
    'cap.garra.botella':     'Garra Negra / Botella|Dirección de arte, diseño y layout.',
    'cap.alpen':             'Alpen / Lo mejor de lo mejor|Dirección de arte, diseño y layout.',
    'cap.docker.spring1':    'Dockers / Spring 2010|Conceptualización y diseño.',
    'cap.docker.spring2':    'Dockers / Spring 2010|Conceptualización y diseño.',
    'cap.docker.spring3':    'Dockers / Spring 2010|Conceptualización y diseño.',
    'cap.levis.free1':       "Levi's / Free to Move|Conceptualización y diseño.",
    'cap.levis.free2':       "Levi's / Free to Move|Conceptualización y diseño.",
    'cap.levis.free3':       "Levi's / Free to Move|Conceptualización y diseño.",
    'cap.levis.free4':       "Levi's / Free to Move|Conceptualización y diseño.",
    'cap.docker.pants1':     'Dockers / Wear the Pants|Conceptualización y diseño.',
    'cap.docker.pants2':     'Dockers / Wear the Pants|Conceptualización y diseño.',
    'cap.docker.pants3':     'Dockers / Wear the Pants|Conceptualización y diseño.',
    'work.decor':            'Decoración y Display',
    'cap.coca.vuelo1':       'Coca-Cola Zero / Vuelo Zero|Conceptualización y diseño.',
    'cap.coca.vuelo2':       'Coca-Cola Zero / Vuelo Zero|Conceptualización y diseño.',
    'cap.coca.vuelo3':       'Coca-Cola Zero / Vuelo Zero|Conceptualización y diseño.',
    'cap.jockey.evolucion1': 'Jockey / Evolución de la ropa|Conceptualización y diseño.',
    'cap.jockey.evolucion2': 'Jockey / Evolución de la ropa|Conceptualización y diseño.',
    'cap.jockey.evolucion3': 'Jockey / Evolución de la ropa|Conceptualización y diseño.',
    'cap.jockey.evolucion4': 'Jockey / Evolución de la ropa|Conceptualización y diseño.',
    'cap.decor.navidad1':    'Incosmetika / Navidad|Conceptualización y diseño.',
    'cap.decor.navidad2':    'Incosmetika / Navidad|Conceptualización y diseño.',
    'cap.decor.lacoste1':    'Lacoste / Sienne|Conceptualización y diseño.',
    'cap.decor.lacoste2':    'Lacoste / Sienne|Conceptualización y diseño.',
    'cap.decor.lacoste3':    'Lacoste / Annual Sale|Conceptualización y diseño.',

    /* ── experiencia.html ── */
    'exp.heading':    'Experiencia',
    'exp.ya.dates':   'Marzo 2023 – Presente',
    'exp.cheil.dates':'Abril 2011 – Marzo 2023',
    'exp.sopa.dates': 'Mayo 2007 – Abril 2011',
    'exp.ya.li1':     '<strong>Líder de Estrategia Fintech:</strong> Dirigió el diseño UX/UI integral para Banca Web y aplicaciones móviles, optimizando los flujos estratégicos de incorporación digital y apertura de cuentas.',
    'exp.ya.li2':     '<strong>Diseño de Producto Integral:</strong> Gestionó el desarrollo de ciclo completo de la nueva App Fullcarga y el sitio web para el mercado mexicano, incluyendo la arquitectura de sistemas Backoffice complejos.',
    'exp.ya.li3':     '<strong>Innovación con IA:</strong> Implementó flujos de trabajo avanzados utilizando Gemini, Google AI Studio y ChatGPT para agilizar la optimización de interfaces y la producción creativa.',
    'exp.ya.li4':     '<strong>Diseño de Ecosistema Phygital:</strong> Definió estándares UX/UI para dispositivos POS del sector salud y encabezó el diseño industrial de tarjetas bancarias y empaque.',
    'exp.ya.li5':     '<strong>Creación de Contenido de Alto Impacto:</strong> Produjo activos visuales dinámicos y contenido de video para redes sociales usando Google Veo, incrementando significativamente el engagement de marca.',
    'exp.cheil.li1':  '<strong>Crecimiento Profesional:</strong> Pasó de ser socio externo a miembro central de Cheil México como Art Director Manager, impulsado por la entrega constante y el pensamiento creativo estratégico para la división IM de Samsung.',
    'exp.cheil.li2':  '<strong>Liderazgo Creativo:</strong> Gestionó y asesoró equipos creativos, supervisando el ciclo de vida completo de campañas y asegurando resultados de alta calidad para lanzamientos globales de productos.',
    'exp.cheil.li3':  '<strong>Impacto Estratégico:</strong> Expandió exitosamente los servicios creativos a múltiples unidades de negocio de Samsung, incluyendo Electrodomésticos, Tablets y Corporativo.',
    'exp.sopa.text':  "Desarrollo de conceptos para eventos, campañas de comunicación interna e identidad visual (logos), junto con diseño de Press Kits y packaging para cuentas globales como Levi's, Dockers, Coca-Cola, Lacoste, Ciel, Sprite y Jockey.",
    'skills.heading': 'Skills',
    'skills.li1':     '<strong>UX/UI &amp; Diseño de Producto:</strong> Figma, Prototipado, User Journeys, Wireframing, Sistemas de Diseño.',
    'skills.li2':     '<strong>Herramientas de IA:</strong> Gemini, Google AI Studio, Google Veo (Generación de Video), ChatGPT, Midjourney.',
    'skills.li3':     '<strong>Suite Creativa:</strong> Photoshop, Illustrator, InDesign, After Effects y Cinema 4D (Nivel básico).',
    'skills.li4':     '<strong>Soft Skills:</strong> Liderazgo de equipos, Pensamiento estratégico, Negociación y Enfoque centrado en el cliente.',

    /* ── estudios.html ── */
    'edu.heading':   'Educación',
    'edu.degree':    'Licenciatura en Diseño Publicitario',
    'edu.obtained':  '2003 – 2007 | Título Obtenido',
    'edu.city':      'Ciudad de México.',
    'edu.other.li1': 'Seminario de Publicidad.',
    'edu.other.li2': 'Introducción a Cinema 4D | ESCENA, Escuela de Animación',
    'edu.other':     'Otros Estudios',

    /* ── contacto.html ── */
    'contact.heading':  'Contacto',
    'contact.intro':    'Siéntete libre de compartir tu información y me pondré en contacto contigo.',
    'contact.name':     'Nombre',
    'contact.first':    'Primero',
    'contact.last':     'Apellido',
    'contact.comment':  'Comentario',
    'contact.submit':   'Enviar',
    'contact.required': 'Indica campo requerido',

    /* ── footer ── */
    'footer': '© 2025 Bernardo Flores — Head of Art &amp; UX/UI Designer',
  },

  en: {
    /* ── Nav ── */
    'nav.about':      'ABOUT ME',
    'nav.work':       'WORK',
    'nav.experience': 'EXPERIENCE',
    'nav.studies':    'EDUCATION',
    'nav.contact':    'CONTACT',

    /* ── Page titles ── */
    'title.about':      'Bernardo Flores – ABOUT ME',
    'title.work':       'Bernardo Flores – WORK',
    'title.experience': 'Bernardo Flores – EXPERIENCE',
    'title.studies':    'Bernardo Flores – EDUCATION',
    'title.contact':    'Bernardo Flores – CONTACT',

    /* ── index.html ── */
    'about.heading': 'About Me',
    'about.bio': 'Creative Lead &amp; Senior Product Designer with 12+ years of expertise driving visual strategy for global brands. I am currently specializing in design complex digital ecosystems within the Fintech space, focusing on Web Banking, mobile apps, and POS solutions. With a robust background in Art Direction and Branding, I leverage Generative AI to optimize creative workflows and produce high-impact visual content. My approach merges advertising-led creativity with technical rigor to deliver digital products that are as functional as they are memorable.',

    /* ── trabajo.html ── */
    'work.heading':   'Work',
    'work.filter.all':    'All',
    'work.filter.fintech': 'Fintech / UX',
    'work.filter.samsung': 'Samsung',
    'work.filter.branding': 'Branding & Advertising',
    'work.filter.decor':   'Events & Decoration',
    'btn.behance':    'View on Behance',
    'btn.casestudy':  'View Case Study',

    /* Gallery captions EN */
    'cap.fullcarga':         'Fullcarga / Social Media Shorts|Art Direction, design and animation.',
    'cap.fullcarga.case':    'Fullcarga / UX/UI Case Study|Mobile App for airtime sales, bill payments, and gift cards. End-to-end design of App and website.',
    'cap.ya.spots':          'YA Payments / Spots|Concept, Art Direction, design and animation.',
    'cap.ya.case':           'YA Payments / Case Study|UX/UI Design, research and prototyping.',
    'cap.pagatodo.case':     'Banco PagaTodo / UX/UI Case Study|Multi-profile banking platform for Mexico. Redesign and unification of Web and Mobile app experiences.',
    'cap.iconx.mercury':     'Samsung / IconX Tangle – Mercury|Concept, Art Direction, design and layout.',
    'cap.iconx.kimister':    'Samsung / IconX Tangle – Kimister|Concept, Art Direction, design and layout.',
    'cap.iconx.bowie':       'Samsung / IconX Tangle – Bowie|Concept, Art Direction, design and layout.',
    'cap.switch.a':          'Samsung / Smart Switch A|Concept, Art Direction, design and layout.',
    'cap.switch.b':          'Samsung / Smart Switch B|Concept, Art Direction.',
    'cap.focus':             'Samsung / Focus|Concept, Art Direction, design and layout.',
    'cap.galaxy':            'Samsung / Galaxy|Concept, Art Direction, design and layout.',
    'cap.glamrebel':         'Samsung / Glamrebel|Concept, Art Direction, retouch, design and layout.',
    'cap.strongsweet':       'Samsung / Strongsweet|Concept, Art Direction, retouch, design and layout.',
    'cap.vr.alpinista':      'Samsung / Gear VR – Mountaineer|Concept, Art Direction, design and layout.',
    'cap.vr.ciclista':       'Samsung / Gear VR – Cyclist|Concept, Art Direction, design and layout.',
    'cap.vr.gamer':          'Samsung / Gear VR – Gamer|Concept, Art Direction, design and layout.',
    'cap.galaxy.a8.tia':     'Samsung / Galaxy A8 – Fun|Art Direction, design and layout.',
    'cap.galaxy.a8.rockero': 'Samsung / Galaxy A8 – Rocker|Art Direction, design and layout.',
    'cap.qled.5':            'Samsung / QLED Active Voice Woof|Art Direction, design and layout.',
    'cap.qled.1':            'Samsung / QLED Active Voice Crash|Art Direction, design and layout.',
    'cap.qled.6':            'Samsung / QLED Active Voice Crunch|Art Direction, design and layout.',
    'cap.s8pink.taxco':      'Samsung / S8 PINK – Taxco|Art Direction, photo retouching, design and layout.',
    'cap.s8pink.cabos':      'Samsung / S8 PINK – Los Cabos|Art Direction, photo retouching, design and layout.',
    'cap.sos.city':          'Samsung / SOS City|Art Direction, design and layout.',
    'cap.sos.forest':        'Samsung / SOS Forest|Art Direction, design and layout.',
    'cap.colibri':           'Samsung / Hummingbird|Art Direction, photo retouching, design and layout.',
    'cap.lagartija':         'Samsung / Lizard|Art Direction, photo retouching, design and layout.',
    'cap.vuelve':            'Samsung / Look Again|Concept, Art Direction, copy, design and layout.',
    'cap.buds':              'Samsung / Galaxy Buds Live|Art Direction, design and layout.',
    'cap.kids':              'Samsung / Kids Mode|Art Direction, design and layout.',
    'cap.cancer.poster':     'Samsung ESR / Breast Cancer – Touch Them Without Fear|Concept, Art Direction, layout.',
    'cap.cancer.fb5':        'Samsung ESR / Breast Cancer – It Didn\'t Hurt at All|Concept, Art Direction, layout.',
    'cap.cancer.fb1':        'Samsung ESR / Breast Cancer – It Doesn\'t Happen to Me|Concept, Art Direction, layout.',
    'cap.cancer.fb3':        'Samsung ESR / Breast Cancer – It\'s Just a Little Lump|Concept, Art Direction, layout.',
    'cap.interaccion':       'Samsung ESR / Breast Cancer – Swipe 2 Fingers|Interactive material inviting users to explore with 2 fingers.',
    'cap.svoice.1':          'Samsung / S Voice – Accident|Concept, Art Direction, retouch, design and layout.',
    'cap.svoice.2':          'Samsung / S Voice – Scar|Concept, Art Direction, retouch, design and layout.',
    'cap.comparte.1':        'Samsung / Share Instantly – Horse|Concept, Art Direction, copy, retouch, design and layout.',
    'cap.comparte.2':        'Samsung / Share Instantly – Skater|Concept, Art Direction, copy, retouch, design and layout.',
    'cap.gmusic.1':          'Samsung / Google Play Music – Washawashear|Concept, Art Direction, design and layout.',
    'cap.gmusic.2':          'Samsung / Google Play Music – Guilty Pleasures|Concept, Art Direction, design and layout.',
    'cap.corbatas':          'Samsung / Ties|Concept, Art Direction and layout.',
    'cap.regalos':           'Samsung / Best Gifts|Concept, Art Direction, retouch, design and layout.',
    'cap.note10':            'Samsung / Note 10.1|Concept, Art Direction and layout.',
    'cap.under.buen1':       'Under Armour / Break Your Record|Concept, Art Direction, design and layout.',
    'cap.under.buen2':       'Under Armour / Turn Your Dreams into Achievements|Concept, Art Direction, design and layout.',
    'cap.under.buen3':       'Under Armour / End the Year with a New Goal|Concept, Art Direction, design and layout.',
    'cap.under.g':           'Under Armour / Run Another Marathon|Concept, Art Direction, design and layout.',
    'cap.under.oferta':      'Under Armour / Go for It All|Concept, Art Direction, design and layout.',
    'cap.greenpeace':        'Greenpeace / Tree of Life / Eagle Award (Silver)|Art Direction, photography direction.',
    'cap.garra.003':         'Logo Garra Negra|Art Direction, design and layout.',
    'cap.garra.006':         'Label Garra Negra|Art Direction, design and layout.',
    'cap.garra.botella':     'Garra Negra / Bottle|Art Direction, design and layout.',
    'cap.alpen':             'Alpen / The Best of the Best|Art Direction, design and layout.',
    'cap.docker.spring1':    'Dockers / Spring 2010|Conceptualization and design.',
    'cap.docker.spring2':    'Dockers / Spring 2010|Conceptualization and design.',
    'cap.docker.spring3':    'Dockers / Spring 2010|Conceptualization and design.',
    'cap.levis.free1':       "Levi's / Free to Move|Conceptualization and design.",
    'cap.levis.free2':       "Levi's / Free to Move|Conceptualization and design.",
    'cap.levis.free3':       "Levi's / Free to Move|Conceptualization and design.",
    'cap.levis.free4':       "Levi's / Free to Move|Conceptualization and design.",
    'cap.docker.pants1':     'Dockers / Wear the Pants|Conceptualization and design.',
    'cap.docker.pants2':     'Dockers / Wear the Pants|Conceptualization and design.',
    'cap.docker.pants3':     'Dockers / Wear the Pants|Conceptualization and design.',
    'work.decor':            'Decoration & Display',
    'cap.coca.vuelo1':       'Coca-Cola Zero / Zero Flight|Conceptualization and design.',
    'cap.coca.vuelo2':       'Coca-Cola Zero / Zero Flight|Conceptualization and design.',
    'cap.coca.vuelo3':       'Coca-Cola Zero / Zero Flight|Conceptualization and design.',
    'cap.jockey.evolucion1': 'Jockey / Clothing Evolution|Conceptualization and design.',
    'cap.jockey.evolucion2': 'Jockey / Clothing Evolution|Conceptualization and design.',
    'cap.jockey.evolucion3': 'Jockey / Clothing Evolution|Conceptualization and design.',
    'cap.jockey.evolucion4': 'Jockey / Clothing Evolution|Conceptualization and design.',
    'cap.decor.navidad1':    'Incosmetika / Christmas|Conceptualization and design.',
    'cap.decor.navidad2':    'Incosmetika / Christmas|Conceptualization and design.',
    'cap.decor.lacoste1':    'Lacoste / Sienne|Conceptualization and design.',
    'cap.decor.lacoste2':    'Lacoste / Sienne|Conceptualization and design.',
    'cap.decor.lacoste3':    'Lacoste / Annual Sale|Conceptualization and design.',

    /* ── experiencia.html ── */
    'exp.heading':    'Experience',
    'exp.ya.dates':   'March 2023 – Present',
    'exp.cheil.dates':'April 2011 – March 2023',
    'exp.sopa.dates': 'May 2007 – April 2011',
    'exp.ya.li1':     '<strong>Fintech Strategy Lead:</strong> Led the comprehensive UX/UI design for Web Banking and mobile apps, optimizing the strategic digital onboarding and account opening flows.',
    'exp.ya.li2':     '<strong>End-to-End Product Design:</strong> Managed the full-cycle development of the new Fullcarga App and website for the Mexican market, including complex Backoffice system architecture.',
    'exp.ya.li3':     '<strong>AI-Driven Innovation:</strong> Implemented advanced workflows using Gemini, Google AI Studio, and ChatGPT to streamline interface optimization and creative production.',
    'exp.ya.li4':     '<strong>Phygital Ecosystem Design:</strong> Defined UX/UI standards for health-sector POS devices and spearheaded the industrial design for banking cards and packaging.',
    'exp.ya.li5':     '<strong>High-Impact Content Creation:</strong> Produced dynamic visual assets and social media video content using Google Veo, significantly boosting brand engagement.',
    'exp.cheil.li1':  '<strong>Career Growth:</strong> Transitioned from an outsourcing partner to a core member of Cheil Mexico as Art Director Manager, driven by consistent delivery and strategic creative thinking for Samsung\'s IM division.',
    'exp.cheil.li2':  '<strong>Creative Leadership:</strong> Managed and mentored creative teams, overseeing end-to-end campaign lifecycles and ensuring high-quality output for global product launches.',
    'exp.cheil.li3':  '<strong>Strategic Impact:</strong> Successfully expanded creative services across multiple Samsung business units, including Home Appliances, Tablets, and Corporate.',
    'exp.sopa.text':  "Development of event concepts, internal communication campaigns, and visual identity (logos), along with Press Kit and packaging design for global accounts such as Levi's, Dockers, Coca-Cola, Lacoste, Ciel, Sprite, and Jockey.",
    'skills.heading': 'Skills',
    'skills.li1':     '<strong>UX/UI &amp; Product Design:</strong> Figma, Prototyping, User Journeys, Wireframing, Design Systems.',
    'skills.li2':     '<strong>AI Tools:</strong> Gemini, Google AI Studio, Google Veo (Video Generation), ChatGPT, Midjourney.',
    'skills.li3':     '<strong>Creative Suite:</strong> Photoshop, Illustrator, InDesign, After Effects, and Cinema 4D (Foundational).',
    'skills.li4':     '<strong>Soft Skills:</strong> Team Leadership, Strategic Thinking, Negotiation, and Client-Centric Approach.',

    /* ── estudios.html ── */
    'edu.heading':   'Education',
    'edu.degree':    'Bachelor of Arts (BA) in Advertising Design',
    'edu.obtained':  '2003 – 2007 | Degree Obtained',
    'edu.city':      'Mexico City.',
    'edu.other.li1': 'Advertising Seminar.',
    'edu.other.li2': 'Introduction to Cinema 4D | ESCENA, Animation School',
    'edu.other':     'Other Education',

    /* ── contacto.html ── */
    'contact.heading':  'Contact',
    'contact.intro':    'Feel free to share your information and I will get in touch with you.',
    'contact.name':     'Name',
    'contact.first':    'First',
    'contact.last':     'Last',
    'contact.comment':  'Comment',
    'contact.submit':   'Send',
    'contact.required': 'Indicates required field',

    /* ── footer ── */
    'footer': '© 2025 Bernardo Flores — Head of Art &amp; UX/UI Designer',
  }
};

/* ── Engine ── */
function setLang(lang) {
  if (!T[lang]) return;
  localStorage.setItem('bf_lang', lang);
  document.documentElement.lang = lang;

  /* Update <title> */
  const pageKey = document.body.dataset.page;
  if (pageKey && T[lang]['title.' + pageKey]) {
    document.title = T[lang]['title.' + pageKey];
  }

  /* Update all [data-i18n] elements (innerHTML) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) {
      let val = T[lang][key];
      if (val.includes('|')) {
        val = val.split('|')[1];
      }
      el.innerHTML = val;
    }
  });

  /* Update all [data-i18n-ph] placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
  });

  /* Update gallery captions (data-caption-key → data-caption used by lightbox) */
  document.querySelectorAll('[data-caption-key]').forEach(el => {
    const key = el.dataset.captionKey;
    if (T[lang][key] !== undefined) el.dataset.caption = T[lang][key];
  });

  /* Highlight active lang button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });

  /* Notify other components of language change */
  window.dispatchEvent(new Event('lang-changed'));
}

/* ── Init: apply saved lang on page load ── */
(function() {
  const saved = localStorage.getItem('bf_lang') || 'es';
  setLang(saved);
})();
