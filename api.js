let accessToken = ''; //criando variavel vazia para armazenar o token

async function gerarToken() { //função de requisição POST para gerar o token
    try {
        const response = await fetch('https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/auth/oauth/v2/token', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'password',
                client_id: '7f522efb-d91e-4c6d-88ba-d8d545a4d379',
                client_secret: '80f65353-3565-4c5e-ab92-497376a3ba02',
                username: 'gabriela',
                password: 'pcVZ!8Uh'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch token');
        }
        
        const responseBody = await response.json();
        accessToken = responseBody.access_token;
        console.log(accessToken);
    } catch (err) {
        console.error(err);
    }
}

gerarToken(); // chamando a função

function getAccessToken() {
    return accessToken;
}

getAccessToken(); // chamando a função

async function getJSON() {
    try {
        await gerarToken(); //Comando para definir que a requisição espere o token ser obtido
        const response = await fetch('https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/comidas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAccessToken()}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data');
        }

        const responseBody = await response.json();
        console.log(responseBody);

    } catch (err) {
        console.log(err);
    }
}

getJSON();
