import { Request, Response } from "express";
import { ApiResponse } from "utils/apiResponse";

function getUser(req: Request, res: Response) {
  console.log(req.body);
  res.status(200).json(new ApiResponse<string>("ok", 200));
  return;
}

export const userControllers = { getUser };
