const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");
const localidade = document.getElementById("localidade");
const logradouro = document.getElementById("logradouro");
const uf = document.getElementById("uf");
const cep = document.getElementById("input");

function procurarCep() {
  let valorInput = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${valorInput}/json/`, options)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      bairro.innerHTML = data.bairro;
      logradouro.innerHTML = data.logradouro;
      localidade.innerHTML = data.localidade;
      estado.innerHTML = data.estado;
      uf.innerHTML = data.uf;
    });
};
