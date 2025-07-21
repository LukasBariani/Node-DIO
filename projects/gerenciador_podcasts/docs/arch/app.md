### nome do app

# Podcast Manager

### Descrição

Um app ao estilo netfilho para organizar eps de podcasts

### Domínio

podcasts feitos em video

### Freatures

- Listar eps podcasts em sessões de categorias
  -saude, fitness, mentalidade, humor
- Filtrar eps por nome de podcast

## Como

#### Freature:

Listar eps podcasts em sessões de categorias

### Como vou implementar

GET: retorna lista de eps

response:
```js
[
  {
    podcastName: "flow",
    episode: "ELE ERA DO CRIME E DA PM AO MESMO TEMPO - Angelo Canuto",
    idVideo: "w0S7nMD1J-I",
    cover:
      "https://i.ytimg.com/vi/w0S7nMD1J-I/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=w0S7nMD1J-I",
    categories: ["criminal", "policial"],
  },
  {
    podcastName: "flow",
    episode: "TONY KANAAN, FELIPE MASSA e RUBINHO BARRICHELLO - Flow #192",
    idVideo: "w0S7nMD1J-I",
    cover:
      "https://i.ytimg.com/vi/P2Wkiq6ZEIs/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=P2Wkiq6ZEIs",
    categories: ["corrida", "esporte"],
  },
];
```
