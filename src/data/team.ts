export interface TeamMember {
  id: number;
  nickname: string;
  realName: string | null;
  role: string;
  photo: string;
  specialty: string;
  experience: string | null;
  bio: string;
  isFounder: boolean;
  ctaLabel: string;
  ctaLink: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    nickname: 'Braun',
    realName: null,
    role: 'Fundador & Barbeiro-Chefe',
    photo: '/images/equipe/braun.jpg',
    specialty: 'Corte clássico, barba',
    experience: null,
    bio: 'O cara que começou tudo em 2011. Careca, barbudo, coberto de tatuagens da cabeça aos pés — é o CEO, mas não larga a tesoura. Ainda atende clientes pessoalmente porque a paixão pela barbearia é mais forte que qualquer mesa de escritório. Casado com a Nick, juntos são a alma da Braun.',
    isFounder: true,
    ctaLabel: 'Agendar com Braun',
    ctaLink: 'https://wa.me/554784334380?text=Olá! Gostaria de agendar com o Braun.',
  },
  {
    id: 2,
    nickname: 'Nick',
    realName: null,
    role: 'Sócia & Gestão',
    photo: '/images/equipe/nick.jpg',
    specialty: 'Platinado, administração, café famoso',
    experience: null,
    bio: 'Dá pra chamar de Primeira Dama? Esposa e sócia do Braun, chamada de "mãe" pelos barbeiros — e é mãezona mesmo dessa galera. Essa mulher é multifunções: faz todo o trabalho administrativo nos bastidores e já foi barbeira também. Quando aparece um platinado, ela dá um jeitinho de estar junto porque no final das contas ela ama mesmo. E o café que ela faz? É lendário.',
    isFounder: true,
    ctaLabel: 'Fale com Nick',
    ctaLink: 'https://wa.me/5547999002770?text=Olá Nick! Gostaria de mais informações.',
  },
  {
    id: 4,
    nickname: 'Andrade',
    realName: 'Hayslan',
    role: 'Barbeiro',
    photo: '/images/equipe/andrade.jpg',
    specialty: 'Low fade, corte clássico',
    experience: '6+ anos',
    bio: 'O nome dele é Hayslan, mas a gente gosta de facilitar e chama pelo sobrenome. É o cara que finge ser o mais sério da família — principalmente quando inventam de tirar foto e ele foge — mas é só sentar na cadeira dele que a resenha é garantida em qualquer assunto. Veio do Sergipe direto pra somar na equipe. Curte um corte clássico, mas manda muito mesmo é no low fade.',
    isFounder: false,
    ctaLabel: 'Agendar com Andrade',
    ctaLink: 'https://wa.me/554784334380?text=Olá! Gostaria de agendar com o Andrade.',
  },
  {
    id: 5,
    nickname: 'Kemerson',
    realName: 'Cláudio',
    role: 'Barbeiro',
    photo: '/images/equipe/kemerson.jpg',
    specialty: 'Pigmentação, platinado, degradê',
    experience: '7 anos',
    bio: 'O nome dele é Cláudio, mas ninguém chama assim! Sergipano que a gente acompanhava o trabalho de longe até que deu forró e trouxemos o homi. 7 anos de barbeiro mas a experiência é de milhões: pigmenta, platina e lança o degradê. Chegou há 1 ano e já dominou. E com a criançada então? Queridinho garantido.',
    isFounder: false,
    ctaLabel: 'Agendar com Kemerson',
    ctaLink: 'https://wa.me/554784334380?text=Olá! Gostaria de agendar com o Kemerson.',
  },
  {
    id: 6,
    nickname: 'Sebold',
    realName: 'Matheus',
    role: 'Barbeiro',
    photo: '/images/equipe/sebold.jpg',
    specialty: 'Corte geral, versatilidade',
    experience: '5 anos (4 na Braun)',
    bio: 'Dessa vez o sobrenome pegou mais que o nome, porque "Matheus" tava muito fácil. Era cliente que virou amigo e, quando começou na profissão há 5 anos, vinha na barbearia pra acompanhar o Braun trabalhar e aprender. Uma pandemia depois, tá completando 4 anos que integra a família. E depois de tanto tempo e tantas tatuagens, todo mundo pergunta se ele é filho do velho.',
    isFounder: false,
    ctaLabel: 'Agendar com Sebold',
    ctaLink: 'https://wa.me/554784334380?text=Olá! Gostaria de agendar com o Sebold.',
  },
  {
    id: 7,
    nickname: 'Suzano',
    realName: null,
    role: 'Barbeiro',
    photo: '/images/equipe/suzano.jpg',
    specialty: 'Degradê, sobrancelha',
    experience: '10 anos',
    bio: 'Esse é o cara do sorriso fácil! É o mais novo fazendo parte da família, mas não é novinho na profissão — tem pelo menos 10 anos de experiência e já passou por alguns estados desse Brasilzão até chegar aqui. Agenda com ele e sai com um degradê na régua e a sobrancelha mais top. Tem sotaque carioca mas na certidão diz que é baiano.',
    isFounder: false,
    ctaLabel: 'Agendar com Suzano',
    ctaLink: 'https://wa.me/554784334380?text=Olá! Gostaria de agendar com o Suzano.',
  },
  {
    id: 8,
    nickname: 'Coqueirinho',
    realName: 'Gilvan',
    role: 'Barbeiro',
    photo: '/images/equipe/coqueirinho.jpg',
    specialty: 'Versatilidade total — qualquer tipo de cabelo e barba',
    experience: 'Desde 2015 (10+ anos)',
    bio: 'Ganhou esse apelido logo que chegou, quase 5 anos atrás. Poucos sabem mas o nome dele é Gilvan. Importado de Salinas das Margaridas, na Bahia — barbeiro desde 2015, aprendeu a profissão raiz com o tio. Esse cara é tão craque que pode dar qualquer máquina na mão dele e qualquer tipo de cabelo e barba: ele desenrola e fica perfeito. Contrato renovado pra mais uma década pelo menos!',
    isFounder: false,
    ctaLabel: 'Agendar com Coqueirinho',
    ctaLink: 'https://wa.me/554784334380?text=Olá! Gostaria de agendar com o Coqueirinho.',
  },
];
