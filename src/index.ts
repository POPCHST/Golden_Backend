import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sql from "mssql";
import productRoutes from "./routes/productController"; // นำเข้า productRoutes
import loginUserRoutes  from "./routes/user-manage/loginUser";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

const corsOptions = {
  origin: "*", // หรือโดเมนเฉพาะที่ต้องการอนุญาต
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json()); // ใช้ JSON parser

const config: sql.config = {
  user: process.env.DATABASE_USER || "",
  password: process.env.DATABASE_PASSWORD || "",
  server: process.env.DATABASE_HOST || "localhost",
  database: process.env.DATABASE_NAME || "",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

if (!config.user || !config.password || !config.server || !config.database) {
  console.error(
    "Error: One or more database configuration variables are missing"
  );
  console.log("Configuration:", config);
  process.exit(1);
}

sql
  .connect(config)
  .then(() => {
    console.log("Connected to SQL Server");
  })
  .catch((err) => {
    console.error("Error connecting to SQL Server:", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("555!");
});

app.use('/api', productRoutes);
app.use('/api/login', loginUserRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
