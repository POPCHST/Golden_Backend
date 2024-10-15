import { Request, Response } from 'express';

// ฟังก์ชันที่จะจัดการกับเส้นทาง '/'
export const getHelloWorld = (req: Request, res: Response) => {
  res.send('Hello World!');
};
