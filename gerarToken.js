import credenciais from "./config.js";

//função de requisição POST para gerar o token
async function gerarToken() {
  try {
    const response = await fetch(credenciais.tokenUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "password",
        client_id: credenciais.client_id,
        client_secret: credenciais.client_secret,
        username: credenciais.username,
        password: credenciais.password,
      }),
    });

    //tratando erros
    if (!response.ok) {
      throw new Error("Failed to fetch token");
    }

    const responseBody = await response.json();
    return responseBody.access_token; //retornando apenas a propriedade do token

    //tratando erros
  } catch (err) {
    console.error(err);
  }
}

//exportando a função
export default gerarToken;
