<h1 align="center"> API JavaScript com autenticação OAuth 2.0 </h1>

<div align="center">
<img alt="In Progress Status Orange Badge" src="https://img.shields.io/badge/Status-In%20Progress-orange">
<img alt="JavaScript Yellow Badge" src="https://img.shields.io/badge/JavaScript-FFFF00">
<img alt="NodeJS Green Badge" src="https://img.shields.io/badge/NodeJS-A1C935">
<img alt="OAuth 2.0 Purple Badge" src="https://img.shields.io/badge/OAuth%202.0-0041C2">
</div> <br>

<div align="center">
:construction: Projeto em construção :construction:
</div>

<div>
  <h2> Descrição </h2>
  <p> Aplicação em JavaScript para consumir API com autenticação OAuth 2.0. Após a autencicação, a aplicação obtém acesso aos dados da API, sendo possível digitar no terminal o nome de um dos objetos para retornar suas informações ou não digitar nada para listar todos objetos e suas informações. </p>
</div>

<h2> 📁 Acesso ao Projeto </h2>
<p> <a href="https://github.com/Z0catelli/API/blob/main/index.js">Acesse o código fonte do projeto</a> ou <a href="https://github.com/Z0catelli/API/archive/refs/heads/main.zip">baixe aqui</a>.</p>

<h2>Preparando o ambiente</h2>
<h3>Requisitos</h3>
<div>
  <img alt="NodeJS version badge" src="https://img.shields.io/badge/NodeJS-v18.17.1-A1C935">
  <img alt="npm version badge" src="https://img.shields.io/badge/npm-v9.6.7-A1C935">
</div>
<br>

<h3>Instalando NodeJS no Linux(Ubuntu)</h3>
<p> Para saber como instalar o NodeJS em outros sistemas operacionais você pode <a href="">clicar aqui</a>. Para instalar a versão LTS no Linux Ubuntu, devemos digitar no terminal os seguintes comandos:</p>
<div>
  <ol>
    <li><code>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -</code></li>
    <li><code>sudo apt-get install -y nodejs</code></li>
  </ol>
</div>
<p>Para verificar se o NodeJS foi realmente instalado você pode executar o comando <code>node -v</code> no terminal, se retornar o número da versão significa que foi instalado com sucesso.</p>

<h2> 🛠️ Abrir e rodar o projeto </h2>
<div>
  <ol>
    <li> Baixe o arquivo do projeto.</li>
    <li> Abra o terminal (<code>ctrl+shift+T</code>), e acesse o diretório do projeto. Utilize o comando <code>cd [caminho-do-diretorio]</code>. </li>
    <li> Dentro do diretório do projeto, execute o comando <code>export NODE_TLS_REJECT_UNAUTHORIZED='0'</code> para evitar erros causados pela verificação SSL.</li>
    <li> Para rodar o projeto, execute o comando <code>node index.js</code>. </li>
  </ol>  
</div>
