import gerarToken from "./gerarToken";
import getJSON from "./getJSON";

async function start(){
    const accessToken = await gerarToken(); 
    const getFoods = await getJSON(accessToken);
}

start();
