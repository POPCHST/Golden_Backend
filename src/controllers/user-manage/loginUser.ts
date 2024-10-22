import { Request, Response } from "express";
import sql from "mssql";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { user_name, user_password } = req.body; // รับข้อมูลจาก client

    console.log("Received user_name:", user_name);
    console.log("Received user_password:", user_password);

    const result = await sql.query`
          SELECT user_id, user_name, user_password, user_fullname
          FROM M_User
          WHERE user_name = ${user_name};`;

    console.log("Query result:", result.recordset);

    if (result.recordset.length === 0) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    
    const user = result.recordset[0];
    if (user.user_password !== user_password) { // ใช้ user.user_password
      return res.status(401).json({ error: "Invalid username or password" });
    }

    console.log("User logged in:", user);
    res.json({ message: "Login successful", user_id: user.user_id, user_fullname: user.user_fullname });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Failed to login" });
  }
};
