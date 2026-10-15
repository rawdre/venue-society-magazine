"use client";

import type { Locale } from "./config";
import type { Venue } from "@/data/venues";

type VenueLocaleCopy = {
  kicker: string;
  blurb: string;
  story: string[];
  capacity: string;
  tags: string[];
};

// PT / ES translations of the localizable venue fields.
// English lives in src/data/venues.ts and is used as-is.
export const venueCopy: Record<
  string,
  { pt: VenueLocaleCopy; es: VenueLocaleCopy }
> = {
  "mechanics-hall": {
    pt: {
      kicker: "A Grande Dama",
      blurb:
        "Um salão de concertos de 1857, de colunas imponentes e luz dourada — o grande salão da Nova Inglaterra para galas, casamentos e noites inesquecíveis.",
      story: [
        "Poucos salões na Nova Inglaterra anunciam uma ocasião como o Mechanics Hall. Concluído em 1857 e tido como um dos mais belos salões de concerto pré-Guerra Civil do país, seu Grande Salão se ergue por dois andares de detalhes esculpidos, balcões dourados e janelas altíssimas que derramam luz da tarde pelo piso.",
        "Para uma gala ou um casamento, o efeito é imediato — os convidados chegam e simplesmente olham para o alto. A acústica que atraiu os grandes nomes do mundo agora embala uma primeira dança; os balcões emoldurados por retratos viram os melhores lugares da casa. É um local que pede pouca decoração e devolve muita grandeza.",
      ],
      capacity: "Até 500 convidados",
      tags: ["Histórico", "Gala", "Grande Salão"],
    },
    es: {
      kicker: "La Gran Dama",
      blurb:
        "Un salón de conciertos de 1857, de columnas imponentes y luz dorada — el gran salón de Nueva Inglaterra para galas, bodas y veladas inolvidables.",
      story: [
        "Pocos salones en Nueva Inglaterra anuncian una ocasión como el Mechanics Hall. Terminado en 1857 y considerado uno de los mejores salones de concierto anteriores a la Guerra Civil del país, su Gran Salón se eleva por dos pisos de detalles tallados, balcones dorados y ventanales que derraman la luz de la tarde sobre el suelo.",
        "Para una gala o una boda, el efecto es inmediato — los invitados llegan y simplemente miran hacia arriba. La acústica que atrajo a los grandes del mundo ahora acompaña un primer baile; los balcones enmarcados por retratos se vuelven los mejores asientos de la casa. Es un lugar que pide poca decoración y devuelve mucha grandeza.",
      ],
      capacity: "Hasta 500 invitados",
      tags: ["Histórico", "Gala", "Gran Salón"],
    },
  },
  "hammond-castle": {
    pt: {
      kicker: "À Beira-Mar",
      blurb:
        "Um verdadeiro castelo medieval sobre o Atlântico. Terraços de pedra, ar do mar e cerimônias emolduradas pelo oceano — único, inesquecível.",
      story: [
        "Construído no fim dos anos 1920 pelo inventor John Hays Hammond Jr., o Hammond Castle reúne pedra medieval, um grande salão imponente e pátios internos em um dos cenários mais singulares da costa da Nova Inglaterra.",
        "Os votos são trocados com o Atlântico ao fundo; o jantar acontece entre paredes de pedra que parecem de outro século. Para casais que querem um dia que nenhuma foto prepara os convidados, o castelo entrega drama sem um único adereço alugado.",
      ],
      capacity: "Até 180 convidados",
      tags: ["À Beira-Mar", "Castelo", "Impactante"],
    },
    es: {
      kicker: "Junto al Mar",
      blurb:
        "Un auténtico castillo medieval sobre el Atlántico. Terrazas de piedra, aire de mar y ceremonias enmarcadas por el océano — único, inolvidable.",
      story: [
        "Construido a finales de los años 1920 por el inventor John Hays Hammond Jr., el Hammond Castle reúne piedra medieval, un gran salón imponente y patios interiores en uno de los escenarios más singulares de la costa de Nueva Inglaterra.",
        "Los votos se intercambian con el Atlántico de fondo; la cena transcurre entre paredes de piedra que parecen de otro siglo. Para parejas que quieren un día que ninguna foto anticipa a sus invitados, el castillo entrega dramatismo sin un solo adorno alquilado.",
      ],
      capacity: "Hasta 180 invitados",
      tags: ["Frente al Mar", "Castillo", "Imponente"],
    },
  },
  "asa-waters-mansion": {
    pt: {
      kicker: "Elegância Federal",
      blurb:
        "Uma mansão de estilo Federal de 1826, com escadarias imponentes e jardins cuidados — uma casa cheia de história que celebra com elegância.",
      story: [
        "Encomendada em 1826 pelo fabricante de armamentos Asa Waters II, esta mansão de estilo Federal ancora Millbury há dois séculos. Uma escadaria ampla, salões de época e belos jardins dão aos eventos uma intimidade que salões maiores não alcançam.",
        "É uma casa que valoriza uma lista de convidados menor e mais pessoal — aquele tipo de dia em que cada cômodo parece aberto só para você. Uma das parcerias mais queridas da Comeketo, com celebrações que voltam temporada após temporada.",
      ],
      capacity: "Até 150 convidados",
      tags: ["Histórico", "Mansão", "Jardim"],
    },
    es: {
      kicker: "Elegancia Federal",
      blurb:
        "Una mansión de estilo Federal de 1826, con escalinatas imponentes y jardines cuidados — una casa con historia que celebra con elegancia.",
      story: [
        "Encargada en 1826 por el fabricante de armamento Asa Waters II, esta mansión de estilo Federal ancla Millbury desde hace dos siglos. Una escalinata amplia, salones de época y hermosos jardines dan a los eventos una intimidad que los salones más grandes no logran.",
        "Es una casa que premia una lista de invitados más pequeña y personal — ese tipo de día en que cada habitación parece abierta solo para usted. Una de las alianzas más queridas de Comeketo, con celebraciones que regresan temporada tras temporada.",
      ],
      capacity: "Hasta 150 invitados",
      tags: ["Histórico", "Mansión", "Jardín"],
    },
  },
  "harding-allen-estate": {
    pt: {
      kicker: "A Propriedade",
      blurb:
        "Gramados amplos, um Mercedes antigo à porta e um jardim de cerimônia feito para fotos — uma das propriedades mais pedidas do nosso calendário.",
      story: [
        "A Harding Allen Estate é a imagem que a maioria dos casais já tem na cabeça — uma casa senhorial, gramados amplos e cuidados, um jardim de cerimônia e um Mercedes antigo à entrada para as fotos que todos lembram.",
        "Espaço para circular e espaço para celebrar: os jardins acomodam uma grande lista sem nunca parecer lotados, e o paisagismo faz metade da decoração por você. Segue sendo uma das propriedades mais pedidas do nosso calendário, e com razão.",
      ],
      capacity: "Até 200 convidados",
      tags: ["Propriedade", "Cerimônia no Jardim", "Luxo"],
    },
    es: {
      kicker: "La Finca",
      blurb:
        "Amplios jardines, un Mercedes antiguo en la puerta y un jardín de ceremonia hecho para fotos — una de las fincas más solicitadas de nuestro calendario.",
      story: [
        "Harding Allen Estate es la imagen que la mayoría de las parejas ya tiene en mente — una casa señorial, amplios jardines cuidados, un jardín de ceremonia y un Mercedes antiguo en la entrada para las fotos que todos recuerdan.",
        "Espacio para moverse y espacio para celebrar: los jardines acogen una gran lista sin sentirse abarrotados, y el paisajismo hace la mitad del montaje por usted. Sigue siendo una de las fincas más solicitadas de nuestro calendario, y con razón.",
      ],
      capacity: "Hasta 200 invitados",
      tags: ["Finca", "Ceremonia en Jardín", "Lujo"],
    },
  },
  "commanders-mansion": {
    pt: {
      kicker: "Esplendor Vitoriano",
      blurb:
        "Um marco vitoriano restaurado, de madeira entalhada e vitrais, em jardins elegantes junto à cidade — atemporal e impecável.",
      story: [
        "Um marco vitoriano restaurado a minutos da cidade, a Commanders Mansion combina marcenaria entalhada, vitrais e grandes lareiras com gramados elegantes para uma cerimônia ao ar livre.",
        "É uma casa impecável — lindamente conservada e conduzida com real cuidado — e é exatamente por isso que fotografa tão bem e recebe com tanta graça. Uma escolha clássica para casais que querem história pertinho de casa.",
      ],
      capacity: "Até 200 convidados",
      tags: ["Histórico", "Mansão", "Jardins"],
    },
    es: {
      kicker: "Esplendor Victoriano",
      blurb:
        "Un hito victoriano restaurado, de madera tallada y vitrales, en jardines elegantes junto a la ciudad — atemporal e impecable.",
      story: [
        "Un hito victoriano restaurado a minutos de la ciudad, la Commanders Mansion combina carpintería tallada, vitrales y grandes chimeneas con jardines elegantes para una ceremonia al aire libre.",
        "Es una casa impecable — bellamente conservada y gestionada con verdadero esmero — y por eso mismo fotografía tan bien y recibe con tanta gracia. Una elección clásica para parejas que quieren historia cerca de casa.",
      ],
      capacity: "Hasta 200 invitados",
      tags: ["Histórico", "Mansión", "Jardines"],
    },
  },
  "greylock-works": {
    pt: {
      kicker: "Romance Industrial",
      blurb:
        "Uma antiga fábrica dos Berkshires reinventada — tijolo aparente, janelas em dente de serra e luz da montanha. A queridinha de quem quer algo moderno.",
      story: [
        "Uma fiação do século XIX reinventada para um novo século, o Greylock WORKS é tijolo aparente, janelas em dente de serra e luz dos Berkshires — uma catedral industrial que virou favorita dos casais com olhar de design.",
        "A escala é generosa o bastante para um longo banquete e uma pista de dança, e a arquitetura quase não precisa de nada para parecer pronta. Moderno, cheio de textura e inconfundivelmente dos Berkshires.",
      ],
      capacity: "Até 300 convidados",
      tags: ["Industrial", "Berkshires", "Moderno"],
    },
    es: {
      kicker: "Romance Industrial",
      blurb:
        "Una antigua fábrica de los Berkshires reinventada — ladrillo visto, ventanas en diente de sierra y luz de montaña. La favorita de quien busca algo moderno.",
      story: [
        "Una hilandería del siglo XIX reinventada para un nuevo siglo, Greylock WORKS es ladrillo visto, ventanas en diente de sierra y luz de los Berkshires — una catedral industrial que se volvió favorita de las parejas con mirada de diseño.",
        "La escala es lo bastante generosa para un largo banquete y una pista de baile, y la arquitectura casi no necesita nada para verse terminada. Moderno, lleno de textura e inconfundiblemente de los Berkshires.",
      ],
      capacity: "Hasta 300 invitados",
      tags: ["Industrial", "Berkshires", "Moderno"],
    },
  },
  "christalight-event-hall": {
    pt: {
      kicker: "Tudo Sob o Mesmo Teto",
      blurb:
        "Um salão completo e refinado onde decoração, iluminação e clima já chegam prontos — uma tela perfeita para casamentos e grandes celebrações.",
      story: [
        "O Christalight é o salão para casais que querem a parte bonita sem a logística. Completo e refinado, ele reúne decoração, iluminação e clima para que o espaço já chegue pronto para celebrar.",
        "Essa praticidade faz dele um palco confiável para casamentos, quinzes e grandes festas — uma tela perfeita onde o buffet e o momento ficam no centro das atenções.",
      ],
      capacity: "Até 250 convidados",
      tags: ["Tudo Incluído", "Moderno", "Salão de Festas"],
    },
    es: {
      kicker: "Todo Bajo un Mismo Techo",
      blurb:
        "Un salón completo y refinado donde decoración, iluminación y ambiente llegan listos — un lienzo perfecto para bodas y grandes celebraciones.",
      story: [
        "Christalight es el salón para parejas que quieren la parte hermosa sin la logística. Completo y refinado, reúne decoración, iluminación y ambiente para que el espacio llegue listo para celebrar.",
        "Esa comodidad lo convierte en un escenario confiable para bodas, quinceañeras y grandes fiestas — un lienzo perfecto donde el catering y el momento toman el protagonismo.",
      ],
      capacity: "Hasta 250 invitados",
      tags: ["Todo Incluido", "Moderno", "Salón de Baile"],
    },
  },
  "charles-river-museum": {
    pt: {
      kicker: "Indústria e Arte",
      blurb:
        "O berço da indústria americana, hoje uma catedral de ferro e história às margens do rio — um cenário marcante e moderno.",
      story: [
        "Instalado no próprio complexo fabril onde a Revolução Industrial americana se firmou, o Charles River Museum emoldura o evento em maquinário de ferro, vigas aparentes e janelas altas sobre a água.",
        "É um salão marcante — metade museu, metade espaço moderno — para casais que querem um cenário com história própria. A Moody Street de Waltham, com seus restaurantes e energia, fica logo ali fora.",
      ],
      capacity: "Até 200 convidados",
      tags: ["Museu", "Histórico", "À Beira-Rio"],
    },
    es: {
      kicker: "Industria y Arte",
      blurb:
        "La cuna de la industria estadounidense, hoy una catedral de hierro e historia a orillas del río — un escenario marcante y moderno.",
      story: [
        "Instalado en el mismo complejo fabril donde se afianzó la Revolución Industrial estadounidense, el Charles River Museum enmarca el evento en maquinaria de hierro, vigas a la vista y ventanales sobre el agua.",
        "Es un salón marcante — mitad museo, mitad espacio moderno — para parejas que quieren un fondo con historia propia. La Moody Street de Waltham, con sus restaurantes y energía, queda justo afuera.",
      ],
      capacity: "Hasta 200 invitados",
      tags: ["Museo", "Histórico", "Junto al Río"],
    },
  },
  "cathedral-of-the-pines": {
    pt: {
      kicker: "Sob o Céu Aberto",
      blurb:
        "Uma catedral ao ar livre emoldurada pelo Monte Monadnock — votos sob os pinheiros, com as montanhas como altar. Romance puro da Nova Inglaterra.",
      story: [
        "Um santuário ao ar livre entre pinheiros altos, a Cathedral of the Pines oferece votos emoldurados pelo Monte Monadnock — um altar natural de pedra com as montanhas se estendendo ao fundo.",
        "Há aqui uma quietude que nenhum salão consegue fabricar. Para uma cerimônia de setembro, com a luz ficando dourada e o ar ganhando frescor, é o romance da Nova Inglaterra na sua forma mais pura.",
      ],
      capacity: "Até 300 convidados",
      tags: ["Ao Ar Livre", "Vista da Montanha", "Cerimônia"],
    },
    es: {
      kicker: "Bajo el Cielo Abierto",
      blurb:
        "Una catedral al aire libre enmarcada por el Monte Monadnock — votos bajo los pinos, con las montañas como altar. Romance puro de Nueva Inglaterra.",
      story: [
        "Un santuario al aire libre entre pinos altos, Cathedral of the Pines ofrece votos enmarcados por el Monte Monadnock — un altar natural de piedra con las montañas extendiéndose al fondo.",
        "Hay aquí una quietud que ningún salón puede fabricar. Para una ceremonia de septiembre, con la luz tornándose dorada y el aire volviéndose fresco, es el romance de Nueva Inglaterra en su forma más pura.",
      ],
      capacity: "Hasta 300 invitados",
      tags: ["Al Aire Libre", "Vista a la Montaña", "Ceremonia"],
    },
  },
  "five-bridge-inn": {
    pt: {
      kicker: "Casa de Campo",
      blurb:
        "Uma elegante pousada de campo com dois salões, jardins amplos e cerimônia ao ar livre — intimista e grandiosa na mesma tarde.",
      story: [
        "Uma elegante propriedade de campo em terreno ondulado, o Five Bridge Inn dá espaço para a celebração respirar — jardins para a cerimônia, dois salões para a recepção e belas paisagens em todas as direções.",
        "Pode ser intimista e grandioso na mesma tarde: votos tranquilos no jardim e, depois, uma recepção calorosa enquanto a luz de outubro se apaga. Um casamento de campo clássico da Nova Inglaterra, feito como manda a tradição.",
      ],
      capacity: "Até 300 convidados",
      tags: ["Pousada", "Jardins", "Clássico"],
    },
    es: {
      kicker: "Casa de Campo",
      blurb:
        "Una elegante posada de campo con dos salones, amplios jardines y ceremonia al aire libre — íntima y grandiosa en la misma tarde.",
      story: [
        "Una elegante finca de campo sobre terreno ondulado, Five Bridge Inn da espacio para que la celebración respire — jardines para la ceremonia, dos salones para la recepción y bellos paisajes en todas direcciones.",
        "Puede ser íntima y grandiosa en la misma tarde: votos tranquilos en el jardín y, luego, una recepción cálida mientras cae la luz de octubre. Una boda de campo clásica de Nueva Inglaterra, hecha como corresponde.",
      ],
      capacity: "Hasta 300 invitados",
      tags: ["Posada", "Jardines", "Clásico"],
    },
  },
  "the-hacienda-venue": {
    pt: {
      kicker: "Espaço para Celebrar",
      blurb:
        "Uma hacienda ampla com espaço interno e externo, hospedagem no local e um calor que não deixa ninguém sair da pista — um dos nossos salões mais queridos.",
      story: [
        "Ampla, acolhedora e feita para a festa, a The Hacienda une generoso espaço interno e externo com hospedagem no local, para que a celebração não precise acabar à meia-noite.",
        "É um dos locais a que a Comeketo mais retorna — um salão que comporta uma grande lista, mantém todo mundo dançando e transforma tudo num fim de semana. Igualmente à vontade com um casamento, uma gala de negócios ou uma grande comemoração.",
      ],
      capacity: "Até 200 convidados",
      tags: ["Interno/Externo", "Com Hospedagem", "Versátil"],
    },
    es: {
      kicker: "Espacio para Celebrar",
      blurb:
        "Una hacienda amplia con espacio interior y exterior, alojamiento en el lugar y una calidez que mantiene a todos en la pista — uno de nuestros salones más queridos.",
      story: [
        "Amplia, cálida y hecha para la fiesta, The Hacienda une un generoso espacio interior y exterior con alojamiento en el lugar, para que la celebración no tenga que terminar a medianoche.",
        "Es uno de los lugares a los que Comeketo más regresa — un salón que acoge una gran lista, mantiene a todos bailando y lo convierte en un fin de semana. Igual de cómodo con una boda, una gala de negocios o una gran celebración.",
      ],
      capacity: "Hasta 200 invitados",
      tags: ["Interior/Exterior", "Con Alojamiento", "Versátil"],
    },
  },
  "monoosnock-country-club": {
    pt: {
      kicker: "O Clássico",
      blurb:
        "Vista para o campo, um salão acolhedor e uma equipe com quem celebramos mais que qualquer outra — o encerramento confiável e lindo do ano.",
      story: [
        "Vista para o campo de golfe, um salão acolhedor e uma equipe que parece família — o Monoosnock Country Club é o local com o qual a Comeketo mais celebrou, e isso se vê na tranquilidade com que cada evento acontece.",
        "Confiável sem nunca parecer comum, é o lugar perfeito para encerrar o ano: grandes janelas sobre o gramado, um salão caloroso e a confiança serena de quem já fez isso lindamente, muitas vezes.",
      ],
      capacity: "200+ convidados",
      tags: ["Country Club", "Salão de Festas", "Vistas"],
    },
    es: {
      kicker: "El Clásico",
      blurb:
        "Vista al campo, un salón acogedor y un equipo con el que celebramos más que con ningún otro — el cierre confiable y hermoso del año.",
      story: [
        "Vista al campo de golf, un salón acogedor y un equipo que se siente como familia — el Monoosnock Country Club es el lugar con el que Comeketo más ha celebrado, y se nota en la calma con que transcurre cada evento.",
        "Confiable sin parecer nunca común, es el lugar perfecto para cerrar el año: grandes ventanales sobre el césped, un salón cálido y la serena confianza de quien ya lo ha hecho bellamente, muchas veces.",
      ],
      capacity: "200+ invitados",
      tags: ["Club de Campo", "Salón de Baile", "Vistas"],
    },
  },
};

export function localizeVenue(v: Venue, locale: Locale): Venue {
  if (locale === "en") return v;
  const c = venueCopy[v.slug]?.[locale];
  return c ? { ...v, ...c } : v;
}
