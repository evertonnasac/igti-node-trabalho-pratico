import {connectPet} from "./db.js"

/**
 * Recebe dados do service Dono, realiza conexão  e salva os dados no banco de dados 
 */

//Função que recebe um objeto Dono como parametro e insere um novo registro no banco de dados
async function cadastrarDono (dono){
    const conn = await connectPet()
    try{  
        const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2)"
        const values = [dono.nome, dono.telefone]
        await conn.query(sql, values)
        
    }
    catch(err){
        throw err
    }
    finally{
        conn.release()
    }
    
}

//Função que retorna o resultado da consulta de todos os registros da tabela Proprietario do banco
async function buscarDonos(){
    const conn = await connectPet()
    try{
        const sql = "SELECT * FROM proprietarios"
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

//Função que recebe um id do Dono e retorna o resultado da consulta da tabela Proprietarios que se tem relação com a tabela Animais, filtrado pelo id do dono recebido
async function buscarDonoPorId(id){
    const conn = await connectPet()
    try{
        const sql = "SELECT a.nome as animal_nome, a.animal_id,  p.nome as dono_nome, p.proprietario_id, p.telefone FROM animais AS a RIGHT JOIN proprietarios AS p  ON a.proprietario_id = p.proprietario_id WHERE p.proprietario_id = $1"
        const data = await conn.query(sql, [id])
        return data.rows
    }
    catch(err){
        throw err
    }
    finally{
        conn.release()
    }
}

//Função que recebe como parametro um objeto Dono e seu id e atualiza o registro no banco atraves do id
async function atualizarDono(id, dono){
    const conn = await connectPet()
    try{
        const sql = "UPDATE proprietarios SET nome = $1, telefone = $2  where proprietario_id = $3 RETURNING *"
        const values = [dono.nome, dono.telefone, id]
        const res = await conn.query(sql, values)
        return res.rows
    }
    catch(err){
        throw(err)
    }
    finally{
        conn.release()
    }
}

async function deleteDono(id){
    const conn = await connectPet()
    try{
        const sql = "DELETE FROM proprietarios WHERE proprietario_id = $1"
        await conn.query(sql, [id])
        return true
    }
    catch(err){
        throw err
    }
}




export default {
    cadastrarDono,
    buscarDonos,
    buscarDonoPorId,
    atualizarDono,
    deleteDono
}