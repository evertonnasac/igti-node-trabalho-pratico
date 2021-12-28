import express from "express"
import {donoRoute} from "./routes/dono-route.js"
import {animalRoute} from "./routes/animal-route.js"
import exphbr from "express-handlebars"


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Definindo roteadores
app.use("/dono", donoRoute)
app.use("/animal", animalRoute)

//Definindo a view engine como Handlebars
app.engine("handlebars", exphbr.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))


app.listen(3000, () => console.log("Server Started") )
export {app}