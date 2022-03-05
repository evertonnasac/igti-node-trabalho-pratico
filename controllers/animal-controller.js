import animalService  from "../services/animal-service.js";

/**
 * Trata as requisições vindas do roteador 
 * Se comunica com a camada de serviços 
 * Renderiza as Views 
 */

async function cadastrarAnimal (req, res){
   try{
       let animal = req.body
       await animalService.cadastrarAnimal(animal)
       res.redirect(`/dono/buscar/${animal.proprietario_id}`)
   }
   catch(err){
       res.send(`Não foi possivel realizar o cadastro ${err.message}`)
   }

}

async function atualizarAnimal(req, res){
    try{
        let animal = req.body
        let id = req.params.id
        animal = await animalService.atualizarAnimal(id, animal)
        res.send(`Atualizado com succeso -- ${animal}`)  
    }
    catch(err){
        res.send(`Não foi possivel realizar a operação ${err.message}`)
    }
}

async function buscarAnimais(req,res){
    try{
        let animais = await animalService.buscarAnimais()
        res.render("animais", {animais}) 
    }
    catch(err){
        res.send(err.message)
    }
}

async function buscarAnimalPorId(req,res){
    try{
        let id = req.params.id
        let animal = await animalService.buscarAnimalPorId(id)
        res.render("animal-id", {animal})
    }
    catch(err){
        res.send(err.message)
    }
}

async function deletarAnimal(req, res,){
    try{
        let id = req.params.id
        await animalService.deletarAnimal(id)
        res.redirect("/animal")
    }
    catch(err){
        res.send(err.message)
    }
}

export default {
    cadastrarAnimal,
    atualizarAnimal,
    buscarAnimais,
    buscarAnimalPorId,
    deletarAnimal

}