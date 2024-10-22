import { Request, Response } from "express";
import sql from "mssql";

export const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await sql.query`SELECT p.product_id, p.product_name, p.price, p.product_desc, pi.image_url FROM M_Products as p INNER JOIN M_ProductImages as pi ON p.product_id=pi.product_id;`; // ปรับตามโครงสร้างของตาราง
    console.log("Query result:", result.recordset);
    res.json(result.recordset);

  } catch (error) {

    console.error("Error fetching products:", error);
    
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
