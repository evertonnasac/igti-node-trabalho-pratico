import animalRepository from "../repository/animal-repository.js"
/*
 * Intermediação entre o controller  Animal (Manipuladores de rotas) e seu Repository    
*/

async function cadastrarAnimal (animal){
    return await animalRepository.cadastrarAnimal(animal)
}

async function atualizarAnimal(id, animal){
    return await animalRepository.atualizarAnimal(id, animal)
}

async function buscarAnimais(){
    return await animalRepository.buscarAnimais()
}

async function buscarAnimalPorId(id){
    return await animalRepository.buscarAnimalPorId(id)
}

async function deletarAnimal(id){
    return await animalRepository.deletarAnimal(id)
}



export default {
    cadastrarAnimal,
    atualizarAnimal,
    buscarAnimais,
    buscarAnimalPorId,
    deletarAnimal,
}