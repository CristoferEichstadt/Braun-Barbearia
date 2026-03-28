export interface Testimonial {
  id: number;
  name: string;
  source: string;
  rating: number;
  quote: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Filippe L.',
    source: 'Google Maps · Local Guide',
    rating: 5,
    quote: 'Ótima localização, excelente atendimento, barbearia ampla e aconchegante. Infraestrutura de primeira qualidade, preço acessível e ótimos profissionais.',
    service: 'Corte Masculino',
  },
  {
    id: 2,
    name: 'Moisesvilmar V.',
    source: 'Google Maps · Local Guide',
    rating: 5,
    quote: 'Barbearia sem palavras. Pessoal muito educado e bem atencioso.',
    service: 'Barba Tradicional',
  },
  {
    id: 3,
    name: 'Fabiano Roberto T.',
    source: 'Google Maps · Local Guide',
    rating: 5,
    quote: 'Sem dúvidas a melhor barbearia da cidade. Atendimento impecável, equipe comprometida com a qualidade, local limpo e organizado.',
    service: 'Corte Masculino',
  },
  {
    id: 4,
    name: 'Ingo D.',
    source: 'Google Maps · Local Guide',
    rating: 5,
    quote: 'Excelente local, limpo, atendimento nota 10, serviço profissional. Saí satisfeito e recomendo a todos.',
    service: 'Corte Masculino',
  },
  {
    id: 5,
    name: 'Mariele D. S.',
    source: 'Google Maps · Local Guide',
    rating: 5,
    quote: 'Maravilhoso trabalho, preço justo. Meu marido só confia nessa barbearia. Profissionais escolhidos a dedo.',
    service: 'Barba Tradicional',
  },
  {
    id: 6,
    name: 'Rafael M.',
    source: 'Cliente recorrente',
    rating: 5,
    quote: 'Frequento a Braun há mais de 5 anos. A constância na qualidade é impressionante — nunca saí insatisfeito.',
    service: 'Corte + Barba',
  },
  {
    id: 7,
    name: 'Anderson P.',
    source: 'Cliente recorrente',
    rating: 5,
    quote: 'Levei meu filho pela primeira vez e ele amou. O espaço kids faz toda a diferença pra quem é pai.',
    service: 'Corte Infantil',
  },
  {
    id: 8,
    name: 'Thiago S.',
    source: 'Google Maps',
    rating: 5,
    quote: 'A higiene aqui é outro nível. Dá pra ver que levam a sério cada detalhe do protocolo.',
    service: 'Corte Masculino',
  },
  {
    id: 9,
    name: 'Eduardo L.',
    source: 'Google Maps',
    rating: 5,
    quote: 'A pigmentação ficou super natural. Ninguém percebe e minha autoestima voltou ao topo.',
    service: 'Pigmentação',
  },
];
