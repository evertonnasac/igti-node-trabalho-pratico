import { connectPet } from "./db.js";

/**
 * Recebe dados do service Animal, realiza conexão e salva os dados no banco de dados
 */

//Função que recebe um objeto Animal como parametro e insere um novo registro no banco de dados
async function cadastrarAnimal (animal){
    const conn = await connectPet()
    try{
        const sql = "INSERT INTO animais (nome, tipo, proprietario_id) values ($1, $2, $3) RETURNING *"
        const values = [animal.nome, animal.tipo, animal.proprietario_id]
        const res = await conn.query(sql, values)
        return res
    }
    catch(err){
        throw err
    }
    finally{
        conn.release()
    }

}

//Função que recebe como parametro um objeto Animal e seu id e atualiza o registro no banco atraves do id
async function atualizarAnimal(id, animal){
    const conn = await connectPet()
    try{
        const sql = "UPDATE animais SET nome = $1, tipo = $2  WHERE animais.animal_id = $3 RETURNING* "
        const values = [animal.nome, animal.tipo, id]
        const res = await conn.query(sql, values)
        return(res.rows)
    }
    catch(err){
        throw err
    }
    finally{
        conn.release()
    }
}

//Função que retorna o resultado da consulta de todos os registros da tabela Animais do banco
async function buscarAnimais(){
    const conn = await connectPet()
    try{
        const sql = "SELECT * FROM animais"
        const data = await conn.query(sql)
        return data.rows
    }
    catch(err){
        throw err
    }
    finally{
        conn.release()
    }
}

//Função que recebe um id e retorna o resultado da consulta da tabela Animal que se tem relação com a tabela Proprietario, filtrado pelo id do animal recebido
async function buscarAnimalPorId (id){
    const conn = await connectPet()
    try{
        const sql = "SELECT a.nome as animal_nome, a.tipo, a.animal_id,  p.nome as dono_nome, p.proprietario_id FROM animais AS a INNER JOIN proprietarios AS p ON a.proprietario_id = p.proprietario_id  WHERE a.animal_id = $1"
        const data = await conn.query(sql, [id])
        return data.rows

    }
    catch (err){
        throw err
    }
    finally{
        conn.release()
    }
}

async function deletarAnimal(id){
    const conn = await connectPet()
    try{
        const sql = "DELETE FROM animais WHERE animal_id = $1"
        await conn.query(sql, [id])
        return true
    }
    catch(err){
        throw err
    }
    finally{
        conn.release()
    }
}


export default {
    cadastrarAnimal,
    atualizarAnimal,
    buscarAnimais,
    buscarAnimalPorId, 
    deletarAnimal
}