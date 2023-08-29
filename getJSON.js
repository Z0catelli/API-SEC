async function getJSON(token) {
    try {
        const response = await fetch('https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/comidas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok){ //lança um erro se a requisição "response" falhar
            throw new Error('Failed to fetch data');
        }

        const responseBody = await response.json(); //obtendo dados JSON
        console.log(responseBody); //lista os dados dentro do JSON
        return responseBody;

    } catch (err) {
        console.log(err);
    }
}

export default getJSON;