import pg from "pg"
import "dotenv/config"

/*
 * Abre conexão com banco de dados Elephant SQL e retorna um pool de conexões 
 */


export async function connectPet(){

    //Verifica se existe conexoes abertas para retorná-la 
    if(global.connection){
        return global.connection.connect()
    }

    //Cria um novo pool de conexoes caso não exista nenhum e o retorna
    const pool = new pg.Pool({
        connectionString: process.env.DBCONNECT
    })

    global.connection = pool
    return pool.connect()
}