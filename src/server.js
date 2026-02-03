import { app, initApp} from "./app.js"
import { env } from "./config/env.js";

const port = env.PORT;

const startServer = async () => {
    try {
        await initApp();

        app.listen(port, () => {
            console.log(`Server running at port: ${port}`)
        })
    } catch (error) {
        console.log("Failed to start server")
    }
}

startServer();