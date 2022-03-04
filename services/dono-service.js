import donoRepository from "../repository/dono-repository.js"

/*
 * Intermediação entre o controller Dono (Manipuladores de rotas) e seu Repository    
*/

async function cadastrarDono(dono){
    return await donoRepository.cadastrarDono(dono)
}

async function atualizarDono(id, dono){
    return await donoRepository.atualizarDono(id, dono)
}

async function buscarDonos(){
    return await donoRepository.buscarDonos()
}

async function buscarDonoPorId(id){
    let lista =  await donoRepository.buscarDonoPorId(id)
    //lista contem todos os animais que tem relação com o dono filtrado pelo id
        
    
    let dono = lista[0]


    let animais = lista.map(dono => dono.animal_nome)
    //criando um array somente com os nomes dos aniamais no array lista

    return { dono, animais}
}



export default {
    cadastrarDono,
    atualizarDono,
    buscarDonos,
    buscarDonoPorId,


}