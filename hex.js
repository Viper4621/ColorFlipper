const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //como vai ser gerado temos que usar let para sempre atualizar iniciando em # que é o padrao de cores hex
  let randomHex = "#";
  //criamos um for para let começar em 0 e incrementar + 1 até 6
  for (let i = 0; i < 6; i++) {
    //operador usado para combinar valor de variaveis somar ou concatenar strings assim quando usar a função de com concatenar ir puxar os numeros e letrar para gerar 6 numeros ou itens de nosso array
    randomHex += hex[getRandomHex()];
  }

  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});
//aqui criamos a função para retornar um numero e arredondar e fazer isso dentro do array hex pelo tamanho
function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}
