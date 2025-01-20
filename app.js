//criando array de corres
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//selecionando btn
const btn = document.getElementById("btn");
//selecionando a const color do nosso span
const color = document.querySelector(".color");
//criando função de click para criar um numero aleatorio
btn.addEventListener("click", function () {
  // pegar numero aleatorio de 0 a 3 colors[3]
  //criamos essa função getRandomNumber usando math.floor para arredondar os numeros gerados para buscar no array pelo tamanho dele e retornar o valor da posição do array
  const randomNumber = getRandomNumber();

  //aqui estamos falando para o background do body mudar para a cor que foi selecionada
  document.body.style.backgroundColor = colors[randomNumber];
  //aqui estamos falando para nosso span mostrar na pagina qual foi a cor selecionada e colocar com textContent no html
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
