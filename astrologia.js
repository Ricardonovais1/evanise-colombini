const app = Vue.createApp({
  data() {
    return {
      ano: '',
      mes: '',
      dia: '',
      hora: '',
      minuto: '',
      usuarioLua: '',
      resultadoVisivel: false,
      meses: {
        1: 'JANEIRO',
        2: 'FEVEREIRO',
        3: 'MARÇO',
        4: 'ABRIL',
        5: 'MAIO',
        6: 'JUNHO',
        7: 'JULHO',
        8: 'AGOSTO',
        9: 'SETEMBRO',
        10: 'OUTUBRO',
        11: 'NOVEMBRO',
        12: 'DEZEMBRO'
      }
    }
  },
  methods: {
    async lerArquivoExcel() {
      try {
        this.resultadoVisivel = !this.resultadoVisivel
        const response = await fetch('ENTRADA_LUA_NOS_SIGNOS.xlsx');
        const data = await response.arrayBuffer();

        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];

        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        const linhasPorAno = sheetData.filter(linha => linha['ANO '] == this.ano)
        const linhaPorMes = linhasPorAno.filter(linha => linha['MÊS'] == this.pegaMes(this.mes))
        const linhaPorDia = linhaPorMes.filter(linha => linha['DIA'] == this.dia)

        if (this.hora == '') this.hora = '12'
        if (this.minuto == '') this.minuto = '00'

        const signoLua = this.pegaSignoDaLua(linhaPorDia[0]['SIGNO DA LUA'], parseInt(this.hora), parseInt(this.minuto))
        this.usuarioLua = signoLua
      } catch (error) {
        console.error('Erro ao ler o arquivo Excel:', error);
      }
    },
    pegaSignoDaLua(string, hora, minuto) {
      const strToArray = string.split(' ')

      if (strToArray.length == 1) {
        return strToArray[0]
      } else {
        const horaTabela = parseInt(strToArray[2].split(':')[0])
        const minutoTabela = parseInt(strToArray[2].split(':')[1])
        if (horaTabela <= hora && minutoTabela <= minuto) {
          return strToArray[3]
        } else if (horaTabela < hora && minutoTabela > minuto) {
          return strToArray[0]
        } else if (horaTabela > hora) {
          return strToArray[0]
        }
      }
    },
    pegaMes(numero) {
      return this.meses[numero]
    }
  }
})

app.mount("#app")

