const app = Vue.createApp({
  data() {
    return {
      letras: {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
        s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
      },
      vogais: ['a', 'e', 'i', 'o', 'u', 'y'],
      nomeCompleto: '',
      dataNascimento: '',
      nAlma: 0,
      nPersonalidade: 0,
      nMissaoDeVida: 0,
      nCaminhoDeVida: 0,
      nMaturidade: 0,
      resultadoVisivel: false,
      descrAlma: '',
      descrPersonalidade: '',
      descrMissaoDeVida: '',
      descrCaminhoDeVida: '',
      descrMaturidade: '',
      dAlma: {
          1: 'Quer ter liberdade, liderança e realizar-se por si mesmo, ter sucesso. Capacidade executiva e empresarial, quer reconhecimento. Quando inseguro pode ser agressivo, inflexível e vingativo.',
          2: 'Deseja paz e equilíbrio, não quer ficar sozinho, quer ser amado e sentir-se compreendido. Aceita conselhos e opinião dos outros. Quando inseguro, pode ter dificuldade para tomar decisões, ficando muito emotivo.',
          3: 'Pessoa com múltiplos interesses, quer se comunicar com clareza, ser ouvido. Rapidamente renova suas energias. Quando inseguro pode ficar inquieto e dispersivo e falar tudo que vem à cabeça.',
          4: 'Quer ordem e disciplina, conquistas materiais. Tem mente analítica e não gosta de sentimentalismo. Sabe lidar com finanças e bens. Quando inseguro pode se tornar um acumulador, querendo controlar tudo e todos.',
          5: 'Não gosta de rotinas e detalhes, estando aberto a todas as experiências. Busca o inusitado, quer tirar o máximo da vida, quer liberdade. Quando inseguro não aguenta compromisso, corre riscos desnecessários, e pode exagerar com bebida e sexo.',
          6: 'Quer viver em família com união. É solidário e ajuda a quem precisa. Quer sentir-se amado e necessário. Quando inseguro tende ao excesso de sentimentalismo, pode ficar preso ao passado, e perder a confiança e a fé.',
          7: 'Gosta de silêncio, paz e privacidade. Quer ter conquistas intelectuais. Tem poucos amigos íntimos, tende ao celibato e quer ser ouvido por Deus. Quando inseguro fica depressivo, se isola e acha explicações para tudo, com muita crítica.',
          8: 'Líder, tem poder pessoal e sucesso material. Quer ser respeitado em seus valores, é justo, honesto e inspirado. Quando inseguro tende a controlar a vida dos outros, não se arrisca e fica extremamente crítico.',
          9: 'Quer entendimento universal, servir o mundo, entender a lei suprema da vida, melhorar as condições de todos, se doa com amor e desprendimento. Quando inseguro tende a usar os outros, se vitimizar e deixa as oportunidades passarem.'
      },
      dPersonalidade: {
          1: 'Transmite poder, auto confiança, liderança, independência. Mostra-se aberto, interessado e convincente. Quando inseguro demonstra agressividade, egoísmo, arrogância e temperamento explosivo.',
          2: 'Mostra receptividade, colaboração, tem empatia pelas pessoas, bom gosto ao vestir e é influenciável. Quando inseguro parece submisso, baixa autoestima, e vitimização.',
          3: 'Mostra otimismo, alegria. É comunicativo, conversa sobre qualquer assunto. Gosta de ser o centro das atenções. Quando inseguro pode ter atitudes infantis e vitimistas.',
          4: 'Trabalhador incansável, tem determinação e perseverança. Disciplinado, hábil, estável, com grande resistência física. Quando inseguro pode ser inflexível, não sair da rotina, autoritário e inflexível.',
          5: 'É a pessoa entusiasmada, tem senso de desbravador, desafia obstáculos. Adora multidões, surpresas e aventuras. É popular e sensual. Quando inseguro, pode ser irresponsável, promíscuo. Mania de saber tudo.',
          6: 'A pessoa transmite autoridade e lealdade. Esforça-se para harmonizar os relacionamentos. Bom ouvinte, útil e conselheiro. Quando inseguro pode se tornar um manipulador, agindo só quando pode ter algo em troca.',
          7: 'A pessoa equilibrada, calma e distante. Tem senso crítico e analítico. Pesquisador da vida, gosta de aprender pelos livros. Tem reserva e espiritualidade. Quando inseguro pode ser esquisito, agir com desdém e desprezo e ser um crítico feroz.',
          8: 'A imagem de sucesso, riqueza, poder e força. A pessoa competente, madura e vitoriosa. Sabe o que quer, é líder e tem presença marcante. Inseguro pode ser insensível, impenetrável, cruel e passar por cima dos outros.',
          9: 'A pessoa charmosa e de muitos recursos. Carismático, fraterno, tem sabedoria e visão ampla do mundo, tolerante e empático. Quando inseguro demonstra desinteresse, vitimização, insatisfação. Sujeito a vícios.'
        },
      dMissaoDeVida: {
          1: 'Enfrentar a vida com coragem e determinação. Recomeçar sempre que necessário e buscar mudança quando já domina algo. Precisa ter cuidado para não correr riscos desnecessários.',
          2: 'Seu desejo é harmonizar o mundo à sua volta. É prestativo e não quer competir, age com sutileza e afetuosidade. Inseguro, tende à indecisão e excesso de sentimentalismo. Tem medo da solidão e de rejeição.',
          3: 'Buscar a comunicação com o mundo externo, usando inteligência, criatividade, otimismo. Quando inseguro pode tornar-se superficial, irritante e fofoqueiro, além de falar demais.',
          4: 'Seguir o caminho da ordem e da rotina, usando senso comum e prático, construindo através do trabalho duro. Perseverante, insistente e resistente. O reconhecimento vem mais tarde. Inseguro pode ser rígido, inflexível e não aceitar mudanças.',
          5: 'Sua missão é aprender a ser livre com responsabilidade e equilíbrio. Senso de oportunidade, espírito livre, não teme as mudanças. Inseguro pode se tornar rebelde, provocador, não concluir o que começou, e não aceita regras.',
          6: 'Servir a família e a comunidade. Presta assistência, aconselha e conforta. É confiável, segue regulamentos e regras porque quer estabilidade. Inseguro preocupa-se demais com a opinião alheia e tende a querer controlar a família.',
          7: 'Sua missão é compreender e adquirir sabedoria. Capacidade de observar, decifrar, descobrir. Consciência espiritual numa mente racional. Discreto, não se envolve em brigas. Por outro lado pode ser distante, ante social, crítico e não aceita opiniões divergentes.',
          8: 'Equilibrar o material e o espiritual. Possibilidade de avanço, riqueza e poder. É firme, sólido e consistente. Tem visão de longo alcance e habilidade para lidar com questões materiais. Inseguro pode ser vingativo, tirânico, dono da verdade.',
          9: 'Sua missão é expressar amor incondicional, seguir o caminho do humanitarismo, assim é uma pessoa tolerante, que capta o pensamento e as intenções dos outros. É auto motivado e tem muitos talentos. Mal resolvido pode se tornar um fanático, com complexo de salvador e messias.'
        },
      dCaminhoDeVida: {
          1: 'É independente e pioneiro. Capacidade de comando e de tomada de decisões. Cuidado para não afastar as pessoas e se isolar.',
          2: 'Age com diplomacia e sente-se melhor atuando nos bastidores. Não gosta de se expor e tem uma certa timidez. Com medo de errar pode projetar nos outros e se sentir vítima.',
          3: 'Auto expressão. Precisa se expor, verbalizar, mostrar, sabe convencer os outros. Não gosta de rotina e precisa se sentir livre. Mal resolvido pode tornar-se fútil, superficial e infantil.',
          4: 'Organização prática com capacidade administrativa e gerencial. Na hora da dificuldade aparecem os talentos. Insistente, termina o que começou. Em contrapartida pode ser muito rígido com medo de mudar e insegurança para progredir.',
          5: 'Busca pela experiência e mudança. Tem espírito gregário, amigável e afetuoso, e não abre mão de sua liberdade individual. Mal resolvido pode ser rebelde, temperamental, explosivo, e não se fixa em nada – nem trabalho.',
          6: 'É responsável e realiza trabalho comunitário. Tem consciência social, responsabiliza-se pela família e comunidade, É amigo, afetivo, sociável e simpático. Gosta de trabalhar em equipe. Inseguro tem medo de ser rejeitado e tende a ser usado, valoriza mais os outros que a si mesmo.',
          7: 'Especialização e sabedoria. Busca pelo autoconhecimento. Analisa, pesquisa, avalia, compara com o objetivo de saber mais. Reservado, introspectivo, gosta de ficar só. Inseguro pode tornar-se alienado, recluso não se adaptando ao mundo externo e às pessoas.',
          8: 'Realização material. Tem senso prático e quer estabilidade. Consegue o que deseja usando determinação e meta, tendo uma visão geral realista. Tende a conquistar cargos de chefia. Mal realizado pode tornar-se rígido, abusando de sua força e de seu cargo.',
          9: 'Amar a humanidade. Busca o desapego com participação social. Doa-se sem pensar no resultado ou na recompensa. Tolerante, solidário e idealista. Mal realizado pode perder o contato com a realidade e cair em vícios. Demagogo, engana as pessoas.'
      },
      dMaturidade: {
          1: 'Êxito nos esforços empreendidos, liderança, independência e autonomia. Cuidado para não sacrificar os outros na busca por realização pessoa.',
          2: 'Tendência ao casamento. Quer trabalhar em equipe, sabe encantar e cativar as pessoas. Bom ouvinte, está sempre aberto ao outro.  Inseguro, torna-se tímido, faz muitas concessões com medo da solidão e de desagradar.',
          3: 'Consciência criativa, facilidade de expressão, despreocupação. Conhece muita gente, é procurado. Inseguro, pode dispersar os seus talentos, tornar-se agressivo e pode se sentir superior aos demais.',
          4: 'Época da consciência da construção e estruturação pessoal. Reavalia modelos, limites, padrões e responsabilidades. Não resolvido pode tornar-se intolerante, reprimido, preso à rotina.',
          5: 'Intensa exploração da vida. Tende a lançar-se em novos projetos. Gosto por viagens, mudanças e renovação. Inseguro pode ser o eterno rebelde. Exige padrões elevados como forma de não se comprometer com nada.',
          6: 'Consciente de que está a serviço da sociedade e da família. Tendência a procurar aperfeição nos relacionamentos, tem facilidade para comandar e resolver problemas. Precisa tomar cuidado para não ser teimoso em discussões e querer manipular.',
          7: 'Necessidade de recolhimento e tranquilidade para refletir. Bom senso, experiência e sensatez. Facilidade para encontrar a fé e o amor próprio. Precisa tomar cuidado para não se isolar e com o excesso de vaidade.',
          8: 'Facilidade para obter pode e reconhecimento profissional. Consciente de esforço para progredir pode chegar à fortuna. Energia mal utilizada pode levar à busca obsessiva pelo poder atropelando quem estiver no caminho.',
          9: 'Campo aberto para as artes e atividades ligadas ao bem estar coletivo. Consciente da impessoalidade. Tendências espirituais que podem levar ao sucesso na vida pessoal e profissional. Mal resolvido pode tornar-se vitimizado, irresponsável e desenvolver doenças mentais.'
      }
    }
  },
  methods: {
    somaDigitos(numero) {
      while (numero > 9) {
        let soma = 0;
        while (numero > 0) {
          soma += numero % 10;
          numero = Math.floor(numero / 10);
        }
        numero = soma;
      }
      return numero;
    },
    numeroDaAlma(nome) {
      let somaVogais = nome.replace(/\s/g, "")
                           .split('')
                           .map(char => char.toLowerCase())
                           .filter(char => this.vogais.includes(char))
                           .map(char => this.letras[char])
                           .reduce((a, b) => a + b)
      this.nAlma = this.somaDigitos(somaVogais)
      return this.nAlma
    },
    descricaoNumAlma() {
      this.descrAlma = this.dAlma[this.nAlma]
      return this.descrAlma
    },
    numeroDaPersonalidade(nome) {
      const somaConsoantes = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                                 .replace(/[\s.,:'";\/?!]/g, "")
                                 .split('')
                                 .map(char => char.toLowerCase())
                                 .filter(char => !this.vogais.includes(char))
                                 .map(char => this.letras[char])
                                 .reduce((a, b) => a + b)
      this.nPersonalidade = this.somaDigitos(somaConsoantes)
      return this.nPersonalidade
    },
    descricaoNumPersonalidade() {
      this.descrPersonalidade = this.dPersonalidade[this.nPersonalidade]
      return this.descrPersonalidade
    },
    numeroMissaoDeVida(nome) {
      this.nMissaoDeVida = this.somaDigitos(this.numeroDaAlma(nome) + this.numeroDaPersonalidade(nome))
      return this.nMissaoDeVida

    },
    descricaoNumMissaoDeVida() {
      this.descrMissaoDeVida = this.dMissaoDeVida[this.nMissaoDeVida]
      return this.descrMissaoDeVida
    },
    numeroCaminhoDeVida(dataNascimento) {
      const somaDataNascimento = dataNascimento.replace(/\//g, "")
                                               .split('')
                                               .map(num => +num)
                                               .reduce((a, b) => a + b)
      this.nCaminhoDeVida = this.somaDigitos(somaDataNascimento)
      return this.nCaminhoDeVida
    },
    descricaoNumCaminhoDeVida() {
      this.descrCaminhoDeVida = this.dCaminhoDeVida[this.nCaminhoDeVida]
      return this.descrCaminhoDeVida
    },
    numeroMaturidade(nome, dataNascimento) {
      this.nMaturidade = this.somaDigitos(this.numeroMissaoDeVida(nome) + this.numeroCaminhoDeVida(dataNascimento))
      return this.nMaturidade
    },
    descricaoNumMaturidade() {
      this.descrMaturidade = this.dMaturidade[this.nMaturidade]
      return this.descrMaturidade
    },
    fazerCalculos() {
      this.numeroDaAlma(this.nomeCompleto)
      this.descricaoNumAlma()

      this.numeroDaPersonalidade(this.nomeCompleto)
      this.descricaoNumPersonalidade()

      this.numeroMissaoDeVida(this.nomeCompleto)
      this.descricaoNumMissaoDeVida()

      this.numeroCaminhoDeVida(this.dataNascimento)
      this.descricaoNumCaminhoDeVida()

      this.numeroMaturidade(this.nomeCompleto, this.dataNascimento)
      this.descricaoNumMaturidade()

      return this.resultadoVisivel = !this.resultadoVisivel
    }
  }
})

app.mount('#app')