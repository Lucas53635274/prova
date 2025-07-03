function times() {

    let mostraHTML = document.getElementById("mostraHTML")

    let times = prompt("Digite o nome do time que você está: ")

    let aluno1 = prompt("Escreva o nome do aluno 1: ")
    let aluno2 = prompt("Escreva o nome do aluno 2: ")
    let aluno3 = prompt("Escreva o nome do aluno 3: ")

    let idade1 = Number(window.prompt(`Escreva a idade do ${aluno1}`))
    let idade2 = Number(window.prompt(`Escreva a idade do ${aluno2}`))
    let idade3 = Number(window.prompt(`Escreva a idade do ${aluno3}`))

    let media;

    mostraHTML.innerHTML = `<p> <b>Nome do Time:${times} </b> </p>
    <p> Primeiro aluno a jogar: ${aluno1}, Idade: ${idade1} </p>
    <p> Segundo aluno a jogar: ${aluno2}, Idade: ${idade2} </p>
    <p> Terceiro aluno a jogar: ${aluno3}, Idade: ${idade3}</p>`;
    
    media = (idade1 + idade2 + idade3) / 3;

    if (media > 15) {
        alert ("O seu time não poderá participar do interclasse pela média de idade!!")
    }

}