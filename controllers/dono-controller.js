import donoService from "../services/dono-service.js"


async function cadastrarDono (req, res){
    try{
        let dono = req.body
        console.log(dono)
        await donoService.cadastrarDono(dono) 
        res.redirect("/dono")
    }
    catch(err){
        res.send(err.message)
    }
}

async function atualizarDono(req, res){
    try{
        let dono = req.body
        let id = req.params.id
        await donoService.atualizarDono(id, dono)
        res.send("Atualização realizada com sucesso")
    }
    catch(err){
        res.send("Não foi possivel concluir a operação")
    }
}

 async function buscarDonos(req, res){
    try{
        let donos =  await donoService.buscarDonos()
        res.render("donos", {donos})
    }
    catch(err){
        res.send(err.message)
    }
}

async function buscarDonoPorId(req, res){
    try{
        let id = req.params.id
        let {dono, animais} = await donoService.buscarDonoPorId(id)
        res.render("dono-id", {dono, animais})
    }
    catch(err){
        res.send(err.message)
    }
}

export default {
    cadastrarDono,
    buscarDonos,
    atualizarDono,
    buscarDonoPorId
}