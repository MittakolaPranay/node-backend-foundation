import express from "express";
import router from "./routes/index.js";
import connectToDB from "./config/mongodb.config.js";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use((req, res) => {
    res.send("Page not found");
});

const initApp = async () => {
    try {
        await connectToDB();
        console.log("✅ Database initialized successfully")
    } catch (error) {
        console.log("Failed to initialize DB")
    }
}

export {
    app,
    initApp
}