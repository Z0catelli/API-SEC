import readline from "readline-sync"; //importando pacote
import credenciais from "./config.js";

//função que realiza o get, se autenticando com o token gerado pelo getToken, e obtem um JSON
async function getJSON(token) {
  try {
    const response = await fetch(credenciais.apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    //lança um erro se a requisição "response" falhar
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    //obtendo dados JSON e armazenando na 'responseBody'
    const responseBody = await response.json();

    //mostra uma pergunta no terminal e armazena a resposta na var 'answer'
    const answer = readline.question(
      "Digite o nome da comida que deseja consultar: "
    );

    //Filtro dos dados com base na resposta
    if (Array.isArray(responseBody.comidas)) {
      if (answer.trim() === "") {
        //verficando se a resposta foi vazia
        console.log(responseBody.comidas); // se sim, retorna todos objetos do array
        return responseBody.comidas;
      } else {
        //se nao, vai filtrar o array de acordo com a resposta inserida
        const selectedFood = responseBody.comidas.find(
          (item) => item.nome === answer
        );

        //se a comida selecionada foi encontrada no array
        if (selectedFood) {
          const { preco, tipo } = selectedFood; //desestruturação para extrair propriedades
          const filteredData = { preco, tipo }; // criando novo obj com as props extraidas
          console.log(filteredData);
          return filteredData;

          //caso o valor inserido nao seja encontrado no array
        } else {
          console.log("Comida não encontrada.");
        }
      }

      //caso os dados enviado pelo servidor nao estejam no formato esperado
    } else {
      console.log("Dados inválidos no formato do JSON.");
    }

    //tratando erros
  } catch (err) {
    console.log(err);
  }
}

export default getJSON;
