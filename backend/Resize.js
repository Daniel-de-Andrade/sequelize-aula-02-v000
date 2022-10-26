//Importando o pacote sharp
const sharp = require('sharp')
// Importando o pacote path
const path = require('path')
// Importando o pacote uuid-v4
const uuidv4 = require('uuid-v4')
// Definindo a classe Resize (que definirá os objetos instanciados a partir dela)
class Resize {
  // Método construtor - executado assim que o objeto é instanciado a partir de usa classe (Resize)
  // Perceba que o médoto construtor (logo, a instância) deve receber um argumento chamado folder
  constructor(folder) {
    // this refere-se ao ambiente instanciado. this.folder atribui uma propriedade à essa instância
    this.folder = folder
  }
  // Função assíncrona que definirá mais algumas propriedades
  async save(buffer) {
    // Capturando o nome do arquivo
    const filename = Resize.filename()
    // Definindo o caminho do arquivo
    const filepath = this.filepath(filename)
    // Função a ser executada uma vez que as tarefas anteriores sejam executadas e finalizadas
    await sharp(buffer)
      // Definindo o tamanho final da imagem (300 x 300 px)
      .resize(300, 300, {
        // Garantindo o 'fit' da imagem dentro do tamanho desejado/definido
        fit: sharp.fit.inside,
        // Opção para não aumentar a imagem
        withoutEnlargement: true
      })
      // Salvando a imagem de acordo com o caminho
      .toFile(filepath)
    // Retorna imagem
    return filename;
  }
  // Definindo arquivo estático
  static filename() {
    // Retornando nome único
    return `${uuidv4()}.png`
  }
  // Método que define e salva - efetivamente - a imagem na pasta definida (folder)
  filepath(filename) {
    // Definindo o caminho final da imagem
    return path.resolve(`${this.folder}/${filename}`)
  }
}
// Exportando o Resize
module.exports = Resize