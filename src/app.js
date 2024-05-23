import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// cookie parser use for perform crud operation on user (only server can access it)

const app = express();

// for configaration we use app.use() (middleware)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// static :  make a public asset all can use it ex: image , logo here public means folder.
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from './routes/user.routes.js'


//routes declaration

app.use("/api/v1/users", userRouter)

export { app };
