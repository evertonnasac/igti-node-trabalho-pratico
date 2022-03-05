
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
   
    let animais = lista.map(function(dono) {return {nome: dono.animal_nome, id: dono.animal_id}})
 
    //criando um array somente com os nomes dos aniamais no array lista

    return { dono, animais}
}

async function deleteDono(id){
    let rows = await buscarDonoPorId(id)
    if (rows.animais[0] !== null){
        return(false)   
    }
    return await donoRepository.deleteDono(id)
}



export default {
    cadastrarDono,
    atualizarDono,
    buscarDonos,
    buscarDonoPorId,
    deleteDono


}