import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors({
    // Specify which domains are allowed to make requests to this server.
    // The allowed origin is set in an environment variable (process.env.CORS_ORIGIN).
    // This makes it easy to change which domains can access your server without changing the code.
    origin: process.env.CORS_ORIGIN,
    
    // Allow requests that include credentials, such as cookies, authorization headers, or TLS client certificates.
    // This is necessary for handling sessions, authentication, or other features that require sending credentials.
    credentials: true
}));

//express configuration
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"

//route declaration
app.use("/api/v1/users",userRouter)

export default app;