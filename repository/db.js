import pg from "pg"
import "dotenv/config"

/*
 * Abre conexão com banco de dados Elephant SQL e retorna um pool de conexões 
 */


export async function connectPet(){

    //Verificando se existe conexoes abertas para retorna-las 
    if(global.connection){
        return global.connection.connect()
    }

    //Criando um novo pool de conexoes caso nao existam nenhuma aberta
    const pool = new pg.Pool({
        connectionString: process.env.DBCONNECT
    })

    global.connection = pool
    return pool.connect()
}