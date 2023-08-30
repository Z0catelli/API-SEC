import gerarToken from "./gerarToken.js";
import getJSON from "./getJSON.js";

async function start(){
    //chamando a função e armazenando o token retornado em uma constante
    const accessToken = await gerarToken(); 
    //chamando a função passando como parametro o token obtido para autenticação
    const getFoods = await getJSON(accessToken); 
}

start();
