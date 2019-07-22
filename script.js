// let nomeDeBoneca = "boneca";
// let contador = 0;

// while(contador <68){
// console.log(nomeDeBoneca);
// contador  ++;
// }

// let listaDeChamada = ["abelha","baleia","tubarao","borboleta","mosca","celular","natyele",""];

// // for(let contador=0; contador<listaDeChamada.length; contador ++){
// //     console.log(listaDeChamada[contador]);
// // }

// // for(let jujuba in listaDeChamada){
// //     console.log(jujuba)
// // }

// for (let chocolate of  listaDeChamada){
//     console.log(chocolate)
// }




let filmes=[
   {nome: "Moana", classificaçao:10, estilo: "animaçao"},
   {nome:"frozen", classificaçao:5, estilo:"animaçao"},
   {nome:"anabelle", classificaçao:15, estilo:"terror"},
   {nome:"velozes e furiosos", classificaçao:16, estilo:"açao"}
]

let nome =prompt("digite seu nome ");
let idade =prompt("digite sua idade ");

for(let filme of filmes){
     if (idade >= filme.classificaçao){
        alert(`Ola, ${nome} pode assistir ${filme.nome}.`)
    }

     else {
        alert(`Ola, ${nome} nao pode assistir ${filme.nome}.`)
    }
}