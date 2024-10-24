import { Request, Response } from "express";
import sql from "mssql";

export const getCourse = async (req: Request, res: Response) => {
  try {
    const result =
      await sql.query`Select course_id, course_name, course_detail, course_price, course_limit, isCheck  from M_Course; `;
    console.log("Query result:", result.recordset);

    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching Course:", error);

    res.status(500).json({ error: "Failed to fetch Course" });
  }
};
