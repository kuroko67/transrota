// Centraliza o conteúdo textual da página. Manter os dados aqui facilita
// futuras edições de copy sem precisar mexer nos componentes visuais.

// Identidade da marca - Mudanças e Fretes CID
export const brandName = "Mudanças e Fretes CID";
export const brandTagline = "Transporte com qualidade, segurança e pontualidade";
export const brandPillars = ["Segurança", "Pontualidade", "Compromisso"];

export const navLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Nosso Caminhão", href: "#frota" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export type Differential = {
  icon: "zap" | "radar" | "shield" | "headset";
  title: string;
  description: string;
};

export const differentials: Differential[] = [
  {
    icon: "zap",
    title: "Pontualidade",
    description:
      "Rotas planejadas e cumprimento rigoroso de prazos para sua carga chegar no tempo combinado.",
  },
  {
    icon: "shield",
    title: "Segurança",
    description:
      "Caminhões com manutenção em dia, seguro de carga incluso e equipe treinada em manuseio.",
  },
  {
    icon: "headset",
    title: "Atendimento Personalizado",
    description:
      "Contato direto sem intermediários. Negocie, tire dúvidas e resolva imprevistos na hora.",
  },
];

export type TruckPhoto = {
  src: string;
  caption: string;
};

export const truckGallery: TruckPhoto[] = [
  { src: "/images/IMG-20260713-WA0026.jpg", caption: "Cuidado e manutenção em dia" },
  { src: "/images/IMG-20260713-WA0028.jpg", caption: "Compartimento de carga (baú)" },
  { src: "/images/WhatsApp Image 2026-07-14 at 18.00.08.jpeg", caption: "Pronto para a próxima rota" },
];

export const truckSpecs = {
  model: "Mercedes-Benz 608",
  bodyType: "Baú fechado",
  capacity: "até 6 t",
  volume: "35 m³",
  idealFor:
    "Mudanças residenciais e comerciais, cargas fracionadas e entregas regionais",
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jonatas Navarro",
    role: "Cliente",
    company: "Mudança Residencial",
    quote: "Excelente trabalho! Pessoa de confiança, realiza o trabalho com segurança e com os devidos cuidados.",
    rating: 5,
    image: "/images/IMG-20260713-WA0026.jpg",
  },
  {
    name: "Pedro Carvalho",
    role: "Cliente",
    company: "Frete e Mudanças",
    quote: "Honesto, eficiente e oferece um serviço de qualidade com preço justo. Recomendo!",
    rating: 5,
    image: "/images/WhatsApp Image 2026-07-17 at 10.31.43.jpeg",
  },
  {
    name: "Aldo Cunha",
    role: "Cliente",
    company: "Mudança Residencial",
    quote: "Muito obrigado esse eu recomendo fez a mudança com capricho valeu 😃😃😃👏🏻👏🏻",
    rating: 5,
    image: "/images/IMG-20260713-WA0028.jpg",
  },
  {
    name: "Tatiana Taty",
    role: "Cliente",
    company: "Mudança Residencial",
    quote: "Super, mega, hiper, recomendo. Educado, atencioso, responsável, o melhor do brasil.",
    rating: 5,
    image: "/images/WhatsApp Image 2026-07-14 at 18.00.08.jpeg",
  },
  {
    name: "Roberto Silva",
    role: "Cliente",
    company: "Mudança Comercial",
    quote: "Fiz a mudança do meu escritório e foi tudo perfeito. Chegou no prazo, nada quebrado, equipe muito profissional. Já indiquei para outros amigos empresários.",
    rating: 5,
    image: "/images/IMG-20260713-WA0026.jpg",
  },
  {
    name: "Mariana Costa",
    role: "Cliente",
    company: "Frete Interestadual",
    quote: "Transportei minha mudança de Campo Grande MS para Coxim MS e fiquei tranquila o tempo todo. O motorista me mandava fotos da carga, chegou tudo certinho e antes do prazo. Nota 10!",
    rating: 5,
    image: "/images/IMG-20260713-WA0028.jpg",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona o seguro da carga?",
    answer:
      "Todo frete contratado com a Mudanças e Fretes CID inclui seguro proporcional ao valor declarado da mercadoria, sem custo adicional na maioria das modalidades. Em caso de sinistro, abro o processo de indenização em até 48h após o registro da ocorrência.",
  },
  {
    question: "Quais documentos preciso apresentar para o embarque?",
    answer:
      "É necessário nota fiscal da mercadoria e, quando aplicável, romaneio de carga. Para mudanças residenciais, um inventário simples dos itens já facilita a organização do transporte. Qualquer dúvida sobre carga especial, eu oriento antes da coleta.",
  },
  {
    question: "Em quanto tempo recebo uma cotação?",
    answer:
      "Cotações simples eu respondo em até 2 horas úteis. Para mudanças ou cargas fracionadas mais complexas, monto uma proposta personalizada em até 1 dia útil.",
  },
  {
    question: "É possível acompanhar a carga durante o trajeto?",
    answer:
      "Sim. Assim que o frete é despachado, você tem meu contato direto para acompanhar o status da entrega e a previsão de chegada — sem central de atendimento no meio do caminho.",
  },
  {
    question: "Vocês atendem todo o território nacional?",
    answer:
      "Atendo minha região com prioridade e também rotas maiores sob consulta. Me chame informando origem e destino para confirmar prazo e valor da sua rota.",
  },
  {
    question: "O frete é feito por uma transportadora ou direto com vocês?",
    answer:
      "O serviço é feito por mim, com meu próprio caminhão, sem repassar sua carga para terceiros. Isso significa mais controle sobre prazo, cuidado com a mercadoria e um contato direto do início ao fim da entrega.",
  },
];