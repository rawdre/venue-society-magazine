"use client";

import { useLocale } from "./LanguageProvider";
import type { Locale } from "./config";

// Comeketo contact — the magazine funnels to Comeketo Catering.
export const COMEKETO = {
  person: "André",
  phoneDisplay: "(978) 381-1212",
  phoneHref: "tel:+19783811212",
  email: "team@comeketocatering.com",
  site: "https://www.comeketocatering.com",
  siteLabel: "comeketocatering.com",
};

const en = {
  nav: {
    magazine: "The Magazine",
    venues: "Featured Venues",
    advertise: "Advertise",
    launch: "The Launch",
    getFeatured: "Get Featured",
    chooseLanguage: "Choose language",
  },
  hero: {
    vol: "Vol. I",
    issueNo: "No. 01 · 2026",
    coverLinesLeft: [
      { kicker: "The Grand Dame", title: "Mechanics Hall, Worcester" },
      { kicker: "The Calendar", title: "Twelve rooms to remember" },
    ],
    coverLinesRight: [
      { kicker: "You're Invited", title: "The launch of Issue No. 01" },
      { kicker: "For Vendors", title: "Where the bookings happen" },
    ],
    eyebrow: "The Annual · New England Edition",
    coverLine:
      "One celebrated venue, every month — placed in the hands of real buyers.",
    lead:
      "A collectible annual that celebrates one extraordinary venue every month — placed, by hand, with the people actually planning their next celebration. Not mass-mailed. Not online noise. ",
    leadEmphasis: "Held by real buyers.",
    ctaFeature: "Feature Your Venue",
    ctaAdvertise: "Advertise in the Issue",
    stats: [
      { n: "12", label: "Venues featured" },
      { n: "12", label: "Months, one each" },
      { n: "1", label: "Copy in every buyer's hands" },
    ],
    coverAnnual: "The Annual",
  },
  concept: {
    pullQuote: "It lives on the table, not lost in a feed.",
    eyebrow: "The Idea",
    title: "A magazine that ends up in the hands that matter.",
    lead:
      "Most marketing shouts at strangers. Venue Society does the opposite — a beautiful object, placed with people already celebrating, so they discover their next venue and the vendors who bring it to life.",
    pillars: [
      {
        no: "01",
        chapter: "Chapter One",
        title: "Placed, not posted",
        body: "Each issue is handed, in person, to couples and hosts in the middle of planning — and left out at events for every guest to leaf through. It lives on the table, not lost in a feed.",
      },
      {
        no: "02",
        chapter: "Chapter Two",
        title: "One venue, every month",
        body: "Twelve celebrated venues each earn a four-to-five page feature — their story, their history, and photography that makes a buyer stop and picture their own day there.",
      },
      {
        no: "03",
        chapter: "Chapter Three",
        title: "The vendors who make it",
        body: "Planners, DJs, florists and photographers advertise beside the venues that already trust them — in front of the exact people booking their next event.",
      },
    ],
  },
  venuesSection: {
    photoPending: "Photography forthcoming",
    eyebrow: "The 2026 Calendar",
    title1: "Twelve venues.",
    title2: "Twelve covers.",
    sub: "A year of New England's most memorable rooms — each given the feature it deserves.",
    readFeature: "Read the feature →",
  },
  forVenues: {
    eyebrow: "For Venues",
    titlePre: "Be the cover your clients ",
    titleEmph: "remember",
    titlePost: ".",
    lead:
      "When a couple tours your venue, they leave with something beautiful — your venue, in print, telling its own story. It sits on their counter long after the brochure is gone.",
    cta: "Request Your Feature",
    includes: [
      "A four-to-five page editorial feature",
      "Your story and history, written and designed",
      "A cover month on the annual calendar",
      "A stack of copies for every tour and event",
      "Placement beside the vendors you already trust",
    ],
  },
  vendors: {
    eyebrow: "For Vendors",
    titlePre: "Advertise where the ",
    titleEmph: "bookings happen",
    titlePost: ".",
    sub: "A handful of pages per issue, reserved for the planners, DJs, florists, photographers and makers our venues recommend — in front of people actively planning.",
    perIssue: "/ issue",
    mostVisible: "Most Visible",
    half: {
      name: "Half Page",
      perks: [
        "A half-page, full-colour placement",
        "Positioned beside a featured venue",
        "Your logo, contact & QR code",
        "Seen by every guest who opens the issue",
      ],
      cta: "Reserve a Half Page",
    },
    full: {
      name: "Full Page",
      perks: [
        "A full page, entirely your own",
        "Premium placement in the issue",
        "Full-colour imagery + your story",
        "Logo, contact, QR & a standout spread",
        "Strictly limited each issue",
      ],
      cta: "Reserve a Full Page",
    },
  },
  launch: {
    eyebrow: "The Launch",
    invited: "You are invited",
    title: "An evening to unveil the first issue.",
    lead:
      "Join the venues and vendors of Venue Society for the launch of the inaugural edition — an evening of introductions, celebration, and the first printed copies, placed in your hands.",
    prizeLabel: "On the night — every guest is entered to win",
    prizePre: "A complimentary tasting, and ",
    prizeEmph: "50% off",
    prizePost: " a complete wedding.",
    prizeFine:
      "Any day but Saturday · up to 50 guests · courtesy of Comeketo Catering",
    cta: "Request an Invitation",
  },
  podcast: {
    eyebrow: "In Conversation",
    title: "The Venue Society Podcast",
    body: "Candid conversations on events, design, and the art of bringing people together — with the planners, owners and makers behind New England's best celebrations. Never a sales pitch.",
    coming: "Coming with the first issue",
  },
  contact: {
    eyebrow: "Get in Touch",
    titlePre: "Let's make the ",
    titleEmph: "first issue",
    titlePost: ".",
    intents: {
      feature: {
        label: "Feature a Venue",
        blurb: "Put your venue on a cover and in your clients' hands.",
      },
      advertise: {
        label: "Advertise",
        blurb: "Reserve a half or full page beside the venues you serve.",
      },
      rsvp: {
        label: "Launch RSVP",
        blurb: "Request an invitation to the launch — and the raffle.",
      },
    },
    fields: {
      name: "Your name",
      email: "Email",
      phone: "Phone (optional)",
      venueName: "Venue name",
      company: "Company / service",
      adSize: "Ad size",
      half: "Half page — $150",
      full: "Full page — $1,000",
      guests: "Guests in your party",
      moreFeature: "Tell us a little more (optional)",
      moreRsvp: "Anything we should know? (optional)",
    },
    submit: {
      feature: "Request a Feature",
      advertise: "Reserve a Page",
      rsvp: "Request an Invitation",
      sending: "Sending…",
    },
    success: {
      title: "Thank you.",
      body: "Your note is in — we'll be in touch shortly about the first issue of Venue Society.",
      again: "Send another →",
    },
    errors: {
      required: "Please enter your name and a valid email.",
      failed: "Something went wrong — please try again or email us directly.",
    },
  },
  footer: {
    eyebrow: "Join the first issue",
    titlePre: "Feature your venue. Reserve a page. ",
    titleEmph: "Request a launch invitation.",
    cta: "Start a Conversation",
    enquiriesLabel: "Enquiries",
    regionLabel: "Region",
    regionValue: "Massachusetts · New Hampshire · New England",
    comeketo: {
      kicker: "Catering by",
      line: "Comeketo Catering brings every featured venue to life — VIP across the calendar. Talk to André about your event.",
      cta: "Visit Comeketo",
    },
    rights: "Venue Society · The Annual",
  },
  feature: {
    theFeature: "The Feature",
    draftNote: "Draft feature — final history & photography to come",
    pastCelebrations: "From Past Celebrations",
    factIssue: "Issue",
    factLocation: "Location",
    factCapacity: "Capacity",
    factStyle: "Style",
    factCatering: "Catering",
    cateringValue: "Comeketo Catering — VIP venue partner",
    enquire: "Enquire About This Venue",
    allVenues: "← All Venues",
    previous: "Previous",
    next: "Next",
  },
};

export type UI = typeof en;

const pt: UI = {
  nav: {
    magazine: "A Revista",
    venues: "Locais em Destaque",
    advertise: "Anuncie",
    launch: "O Lançamento",
    getFeatured: "Seja Destaque",
    chooseLanguage: "Escolher idioma",
  },
  hero: {
    vol: "Vol. I",
    issueNo: "Nº 01 · 2026",
    coverLinesLeft: [
      { kicker: "A Grande Dama", title: "Mechanics Hall, Worcester" },
      { kicker: "O Calendário", title: "Doze salões inesquecíveis" },
    ],
    coverLinesRight: [
      { kicker: "Você está convidado", title: "O lançamento da Edição Nº 01" },
      { kicker: "Para Fornecedores", title: "Onde as reservas acontecem" },
    ],
    eyebrow: "A Edição Anual · Nova Inglaterra",
    coverLine:
      "Um local celebrado a cada mês — nas mãos de quem realmente decide.",
    lead:
      "Uma edição anual de colecionador que celebra um local extraordinário a cada mês — entregue, em mãos, para quem está realmente planejando a próxima celebração. Sem mala direta. Sem ruído online. ",
    leadEmphasis: "Nas mãos de quem decide.",
    ctaFeature: "Destaque o Seu Local",
    ctaAdvertise: "Anuncie na Edição",
    stats: [
      { n: "12", label: "Locais em destaque" },
      { n: "12", label: "Meses, um por vez" },
      { n: "1", label: "Exemplar nas mãos de cada cliente" },
    ],
    coverAnnual: "A Anual",
  },
  concept: {
    pullQuote: "Fica na mesa, não se perde num feed.",
    eyebrow: "A Ideia",
    title: "Uma revista que chega às mãos certas.",
    lead:
      "A maioria do marketing grita para estranhos. A Venue Society faz o contrário — um objeto bonito, colocado nas mãos de quem já está celebrando, para que descubram o próximo local e os fornecedores que o tornam real.",
    pillars: [
      {
        no: "01",
        chapter: "Capítulo Um",
        title: "Entregue, não postado",
        body: "Cada edição é entregue, pessoalmente, a casais e anfitriões em pleno planejamento — e fica à disposição nos eventos para cada convidado folhear. Vive sobre a mesa, não perdida num feed.",
      },
      {
        no: "02",
        chapter: "Capítulo Dois",
        title: "Um local, todo mês",
        body: "Doze locais celebrados ganham uma matéria de quatro a cinco páginas — sua história, seu passado e fotos que fazem o cliente parar e se imaginar ali.",
      },
      {
        no: "03",
        chapter: "Capítulo Três",
        title: "Os fornecedores que realizam",
        body: "Cerimonialistas, DJs, floristas e fotógrafos anunciam ao lado dos locais que já confiam neles — diante exatamente de quem vai reservar o próximo evento.",
      },
    ],
  },
  venuesSection: {
    photoPending: "Fotografia em breve",
    eyebrow: "O Calendário 2026",
    title1: "Doze locais.",
    title2: "Doze capas.",
    sub: "Um ano com os salões mais memoráveis da Nova Inglaterra — cada um com a matéria que merece.",
    readFeature: "Ver a matéria →",
  },
  forVenues: {
    eyebrow: "Para Locais",
    titlePre: "Seja a capa que seus clientes ",
    titleEmph: "vão lembrar",
    titlePost: ".",
    lead:
      "Quando um casal visita o seu local, ele sai com algo lindo — o seu espaço, impresso, contando a própria história. Fica sobre a mesa muito depois de o folheto sumir.",
    cta: "Solicitar Minha Matéria",
    includes: [
      "Uma matéria editorial de quatro a cinco páginas",
      "Sua história e seu passado, escritos e diagramados",
      "Um mês de capa no calendário anual",
      "Uma pilha de exemplares para cada visita e evento",
      "Posição ao lado dos fornecedores em quem você já confia",
    ],
  },
  vendors: {
    eyebrow: "Para Fornecedores",
    titlePre: "Anuncie onde as ",
    titleEmph: "reservas acontecem",
    titlePost: ".",
    sub: "Poucas páginas por edição, reservadas aos cerimonialistas, DJs, floristas, fotógrafos e criadores que nossos locais recomendam — diante de quem está planejando agora.",
    perIssue: "/ edição",
    mostVisible: "Mais Visível",
    half: {
      name: "Meia Página",
      perks: [
        "Uma inserção de meia página, em cores",
        "Posicionada ao lado de um local em destaque",
        "Seu logo, contato e QR code",
        "Vista por cada convidado que abre a edição",
      ],
      cta: "Reservar Meia Página",
    },
    full: {
      name: "Página Inteira",
      perks: [
        "Uma página inteira, só sua",
        "Posição premium na edição",
        "Imagens em cores + sua história",
        "Logo, contato, QR e um destaque e tanto",
        "Vagas estritamente limitadas por edição",
      ],
      cta: "Reservar Página Inteira",
    },
  },
  launch: {
    eyebrow: "O Lançamento",
    invited: "Você está convidado",
    title: "Uma noite para revelar a primeira edição.",
    lead:
      "Junte-se aos locais e fornecedores da Venue Society no lançamento da edição inaugural — uma noite de apresentações, celebração e os primeiros exemplares impressos, colocados em suas mãos.",
    prizeLabel: "Na noite — cada convidado concorre a",
    prizePre: "Uma degustação de cortesia e ",
    prizeEmph: "50% de desconto",
    prizePost: " em um casamento completo.",
    prizeFine:
      "Qualquer dia, exceto sábado · até 50 convidados · cortesia da Comeketo Catering",
    cta: "Solicitar um Convite",
  },
  podcast: {
    eyebrow: "Em Conversa",
    title: "O Podcast da Venue Society",
    body: "Conversas sinceras sobre eventos, design e a arte de reunir as pessoas — com os profissionais, donos e criadores por trás das melhores celebrações da Nova Inglaterra. Nunca um discurso de venda.",
    coming: "Chega com a primeira edição",
  },
  contact: {
    eyebrow: "Fale Conosco",
    titlePre: "Vamos fazer a ",
    titleEmph: "primeira edição",
    titlePost: ".",
    intents: {
      feature: {
        label: "Destacar um Local",
        blurb: "Coloque o seu local numa capa e nas mãos dos seus clientes.",
      },
      advertise: {
        label: "Anunciar",
        blurb: "Reserve meia página ou página inteira ao lado dos locais que você atende.",
      },
      rsvp: {
        label: "Confirmar Presença",
        blurb: "Peça um convite para o lançamento — e para o sorteio.",
      },
    },
    fields: {
      name: "Seu nome",
      email: "E-mail",
      phone: "Telefone (opcional)",
      venueName: "Nome do local",
      company: "Empresa / serviço",
      adSize: "Tamanho do anúncio",
      half: "Meia página — $150",
      full: "Página inteira — $1.000",
      guests: "Convidados no seu grupo",
      moreFeature: "Conte um pouco mais (opcional)",
      moreRsvp: "Algo que devemos saber? (opcional)",
    },
    submit: {
      feature: "Solicitar Matéria",
      advertise: "Reservar Página",
      rsvp: "Solicitar Convite",
      sending: "Enviando…",
    },
    success: {
      title: "Obrigado.",
      body: "Sua mensagem chegou — entraremos em contato em breve sobre a primeira edição da Venue Society.",
      again: "Enviar outra →",
    },
    errors: {
      required: "Informe seu nome e um e-mail válido.",
      failed: "Algo deu errado — tente novamente ou escreva direto para nós.",
    },
  },
  footer: {
    eyebrow: "Participe da primeira edição",
    titlePre: "Destaque seu local. Reserve uma página. ",
    titleEmph: "Peça um convite para o lançamento.",
    cta: "Iniciar uma Conversa",
    enquiriesLabel: "Contato",
    regionLabel: "Região",
    regionValue: "Massachusetts · New Hampshire · Nova Inglaterra",
    comeketo: {
      kicker: "Buffet por",
      line: "A Comeketo Catering dá vida a cada local em destaque — VIP em todo o calendário. Fale com o André sobre o seu evento.",
      cta: "Conheça a Comeketo",
    },
    rights: "Venue Society · A Anual",
  },
  feature: {
    theFeature: "A Matéria",
    draftNote: "Matéria preliminar — história e fotos finais em breve",
    pastCelebrations: "De Celebrações Anteriores",
    factIssue: "Edição",
    factLocation: "Local",
    factCapacity: "Capacidade",
    factStyle: "Estilo",
    factCatering: "Buffet",
    cateringValue: "Comeketo Catering — parceiro VIP do local",
    enquire: "Consultar Este Local",
    allVenues: "← Todos os Locais",
    previous: "Anterior",
    next: "Próximo",
  },
};

const es: UI = {
  nav: {
    magazine: "La Revista",
    venues: "Lugares Destacados",
    advertise: "Anuncie",
    launch: "El Lanzamiento",
    getFeatured: "Sea Destacado",
    chooseLanguage: "Elegir idioma",
  },
  hero: {
    vol: "Vol. I",
    issueNo: "N.º 01 · 2026",
    coverLinesLeft: [
      { kicker: "La Gran Dama", title: "Mechanics Hall, Worcester" },
      { kicker: "El Calendario", title: "Doce salones inolvidables" },
    ],
    coverLinesRight: [
      { kicker: "Está invitado", title: "El lanzamiento de la Edición N.º 01" },
      { kicker: "Para Proveedores", title: "Donde se hacen las reservas" },
    ],
    eyebrow: "La Edición Anual · Nueva Inglaterra",
    coverLine:
      "Un lugar celebrado cada mes — en manos de quien de verdad decide.",
    lead:
      "Un anuario de colección que celebra un lugar extraordinario cada mes — entregado, en mano, a quienes de verdad están planeando su próxima celebración. Sin correo masivo. Sin ruido en línea. ",
    leadEmphasis: "En manos de quien decide.",
    ctaFeature: "Destaque Su Lugar",
    ctaAdvertise: "Anuncie en la Edición",
    stats: [
      { n: "12", label: "Lugares destacados" },
      { n: "12", label: "Meses, uno cada vez" },
      { n: "1", label: "Ejemplar en manos de cada cliente" },
    ],
    coverAnnual: "La Anual",
  },
  concept: {
    pullQuote: "Vive sobre la mesa, no perdida en un feed.",
    eyebrow: "La Idea",
    title: "Una revista que llega a las manos correctas.",
    lead:
      "La mayoría del marketing le grita a extraños. Venue Society hace lo contrario — un objeto hermoso, puesto en manos de quienes ya están celebrando, para que descubran su próximo lugar y los proveedores que lo hacen realidad.",
    pillars: [
      {
        no: "01",
        chapter: "Capítulo Uno",
        title: "Entregada, no publicada",
        body: "Cada edición se entrega, en persona, a parejas y anfitriones en plena planificación — y queda disponible en los eventos para que cada invitado la hojee. Vive sobre la mesa, no perdida en un feed.",
      },
      {
        no: "02",
        chapter: "Capítulo Dos",
        title: "Un lugar, cada mes",
        body: "Doce lugares celebrados reciben un reportaje de cuatro a cinco páginas — su historia, su pasado y fotografías que hacen que el cliente se detenga y se imagine allí.",
      },
      {
        no: "03",
        chapter: "Capítulo Tres",
        title: "Los proveedores que lo logran",
        body: "Organizadores, DJs, floristas y fotógrafos se anuncian junto a los lugares que ya confían en ellos — frente justo a quienes reservarán su próximo evento.",
      },
    ],
  },
  venuesSection: {
    photoPending: "Fotografía próximamente",
    eyebrow: "El Calendario 2026",
    title1: "Doce lugares.",
    title2: "Doce portadas.",
    sub: "Un año con los salones más memorables de Nueva Inglaterra — cada uno con el reportaje que merece.",
    readFeature: "Ver el reportaje →",
  },
  forVenues: {
    eyebrow: "Para Lugares",
    titlePre: "Sea la portada que sus clientes ",
    titleEmph: "recordarán",
    titlePost: ".",
    lead:
      "Cuando una pareja visita su lugar, se va con algo hermoso — su espacio, impreso, contando su propia historia. Queda sobre la mesa mucho después de que el folleto desaparece.",
    cta: "Solicitar Mi Reportaje",
    includes: [
      "Un reportaje editorial de cuatro a cinco páginas",
      "Su historia y su pasado, redactados y diseñados",
      "Un mes de portada en el calendario anual",
      "Un lote de ejemplares para cada visita y evento",
      "Ubicación junto a los proveedores en los que ya confía",
    ],
  },
  vendors: {
    eyebrow: "Para Proveedores",
    titlePre: "Anuncie donde ocurren las ",
    titleEmph: "reservas",
    titlePost: ".",
    sub: "Pocas páginas por edición, reservadas a los organizadores, DJs, floristas, fotógrafos y creadores que nuestros lugares recomiendan — frente a quienes están planeando ahora.",
    perIssue: "/ edición",
    mostVisible: "Más Visible",
    half: {
      name: "Media Página",
      perks: [
        "Un espacio de media página, a todo color",
        "Ubicado junto a un lugar destacado",
        "Su logo, contacto y código QR",
        "Visto por cada invitado que abre la edición",
      ],
      cta: "Reservar Media Página",
    },
    full: {
      name: "Página Completa",
      perks: [
        "Una página completa, solo suya",
        "Ubicación premium en la edición",
        "Imágenes a todo color + su historia",
        "Logo, contacto, QR y un despliegue que destaca",
        "Cupos estrictamente limitados por edición",
      ],
      cta: "Reservar Página Completa",
    },
  },
  launch: {
    eyebrow: "El Lanzamiento",
    invited: "Está invitado",
    title: "Una velada para presentar la primera edición.",
    lead:
      "Acompañe a los lugares y proveedores de Venue Society en el lanzamiento de la edición inaugural — una velada de presentaciones, celebración y los primeros ejemplares impresos, puestos en sus manos.",
    prizeLabel: "Esa noche — cada invitado participa por",
    prizePre: "Una degustación de cortesía y ",
    prizeEmph: "50% de descuento",
    prizePost: " en una boda completa.",
    prizeFine:
      "Cualquier día excepto sábado · hasta 50 invitados · cortesía de Comeketo Catering",
    cta: "Solicitar una Invitación",
  },
  podcast: {
    eyebrow: "En Conversación",
    title: "El Podcast de Venue Society",
    body: "Conversaciones sinceras sobre eventos, diseño y el arte de reunir a las personas — con los organizadores, dueños y creadores detrás de las mejores celebraciones de Nueva Inglaterra. Nunca un discurso de venta.",
    coming: "Llega con la primera edición",
  },
  contact: {
    eyebrow: "Contáctenos",
    titlePre: "Hagamos la ",
    titleEmph: "primera edición",
    titlePost: ".",
    intents: {
      feature: {
        label: "Destacar un Lugar",
        blurb: "Ponga su lugar en una portada y en manos de sus clientes.",
      },
      advertise: {
        label: "Anunciar",
        blurb: "Reserve media página o página completa junto a los lugares que atiende.",
      },
      rsvp: {
        label: "Confirmar Asistencia",
        blurb: "Pida una invitación al lanzamiento — y al sorteo.",
      },
    },
    fields: {
      name: "Su nombre",
      email: "Correo electrónico",
      phone: "Teléfono (opcional)",
      venueName: "Nombre del lugar",
      company: "Empresa / servicio",
      adSize: "Tamaño del anuncio",
      half: "Media página — $150",
      full: "Página completa — $1,000",
      guests: "Invitados en su grupo",
      moreFeature: "Cuéntenos un poco más (opcional)",
      moreRsvp: "¿Algo que debamos saber? (opcional)",
    },
    submit: {
      feature: "Solicitar Reportaje",
      advertise: "Reservar Página",
      rsvp: "Solicitar Invitación",
      sending: "Enviando…",
    },
    success: {
      title: "Gracias.",
      body: "Su mensaje llegó — nos pondremos en contacto pronto sobre la primera edición de Venue Society.",
      again: "Enviar otra →",
    },
    errors: {
      required: "Ingrese su nombre y un correo válido.",
      failed: "Algo salió mal — inténtelo de nuevo o escríbanos directamente.",
    },
  },
  footer: {
    eyebrow: "Sea parte de la primera edición",
    titlePre: "Destaque su lugar. Reserve una página. ",
    titleEmph: "Pida una invitación al lanzamiento.",
    cta: "Iniciar una Conversación",
    enquiriesLabel: "Contacto",
    regionLabel: "Región",
    regionValue: "Massachusetts · New Hampshire · Nueva Inglaterra",
    comeketo: {
      kicker: "Catering por",
      line: "Comeketo Catering da vida a cada lugar destacado — VIP en todo el calendario. Hable con André sobre su evento.",
      cta: "Conozca Comeketo",
    },
    rights: "Venue Society · La Anual",
  },
  feature: {
    theFeature: "El Reportaje",
    draftNote: "Reportaje preliminar — historia y fotografía finales en camino",
    pastCelebrations: "De Celebraciones Pasadas",
    factIssue: "Edición",
    factLocation: "Ubicación",
    factCapacity: "Capacidad",
    factStyle: "Estilo",
    factCatering: "Catering",
    cateringValue: "Comeketo Catering — socio VIP del lugar",
    enquire: "Consultar Este Lugar",
    allVenues: "← Todos los Lugares",
    previous: "Anterior",
    next: "Siguiente",
  },
};

export const UI_DICT: Record<Locale, UI> = { en, pt, es };

export function useUI(): UI {
  const { locale } = useLocale();
  return UI_DICT[locale];
}
