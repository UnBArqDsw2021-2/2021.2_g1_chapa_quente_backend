
<p align='center'>
    <img src='https://i.imgur.com/rqirN5m.png' width="300" height="auto">
</p>

# Chapa Quente - Back End 🍔
Repositório voltado para o desenvolvimento da aplicação front end da disciplina "Arquitetura e Desenho de Software" da UnB no Semestre 2022/1 do Grupo 01. Para mais detalhes consultar a documentação do projeto <a href="https://unbarqdsw2021-2.github.io/2021.2_G1_chapa_quente/#/" target="_blank">AQUI!</a> 

## Alunos 👩‍💻

| Matrícula  | Aluno                               |
| ---------- | ----------------------------------- |
| 19/0026243 | Dafne Moretti Moreira               |
| 18/0017870 | Giulia Lobo Barros                  |
| 18/0018019 | Guilherme Daniel Fernandes da Silva |
| 18/0123203 | João Pedro Alves da Silva Chaves    |
| 18/0022237 | Liverson Paulo Furtado Severo       |
| 18/0105256 | Lucas da Cunha Andrade              |
| 18/0025601 | Murilo Gomes de Souza               |
| 17/0020525 | Pedro Henrique de Lima Malaquias    |
| 16/0141842 | Philipe Rosa Serafim                |
| 18/0037242 | Rodrigo Tiago Costa Lima            |

## Sobre 🍟

O Chapa Quente se trata de uma aplicação web vontada para o gerenciamento e controle de vendas da lanchonete que leva o mesmo nome. Após o cadastro o usuario pode solictar comida e acompanhar o pedido.

## Executar o projeto 💻

Para executar o projeto locamente sera necessario ter instalado o Docker e Docker Compose. Para se ter uma maior praticidade foi elaborado um Makefile.
Primeiramente é necessario clonar o projeto e entrar na pasta raiz.

```
git clone https://github.com/UnBArqDsw2021-2/2021.2_g1_chapa_quente_backend.git
cd 2021.2_g1_chapa_quente_backend
```

Para rodar o projeto na primeira vez é necessario o comando abaixo.
```
make build
```
Para rodar outras vezes basta rodar o comando abaixo
```
make run
```

### Caso não seja possivel rodar o comando do makefile basta rodar os comandos abaixo.

Para  rodar a primeira vez
```
npm install && docker-compose up --build
```
Para rodar outras vezes
```
docker-compose up
```

Após rodar os comandos o projeto estara disponivel ao acesso pelo navegador na porta 3000
```
http://localhost:3333
```

Ocorrendo tudo certo deve ser possivel visível a seguinte tela.
<p align='center'>
    <img src='https://imgur.com/WqSmIdQ.png' width="90%" height="auto">
</p>
