import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 3000

app.get("/world", (req: Request, res: Response) => {
 res.send("Hello World")
})
app.listen(port, function () {
 console.log(`App is listening on port ${port} !`)
})