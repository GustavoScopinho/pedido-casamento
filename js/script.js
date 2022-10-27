let escolha = document.getElementById('escolha')
setTimeout(esp => {
  document.getElementById('pergunta').innerText = 'Quer se casar comigo??'
}, 1500)

let esperando = setTimeout(esp => {
  document.getElementById('aguardando').innerText = 'Esperando a resposta'
}, 2500)

function funcionarSelect() {
  var pedido = escolha.options[escolha.selectedIndex].value

  let promessa = new Promise((resolve, reject) => {
    if (pedido == 'true') {
      return resolve(
        (document.getElementById('pedido-aceito').innerHTML =
          'Ihulll estou muito feliz !! <figure> <img src="./gif/feliz.gif" alt="" /></figure>')
      )
    } else pedido == 'false'
    {
      return reject(
        (document.getElementById('pedido-recusado').innerHTML =
          ' Tudo bem, acho q vou ficar bem <br> <img src="./gif/triste.gif" alt="">')
      )
    }
  })

  async function resposta() {
    const resultado = await promessa
  }
  resposta()
}
