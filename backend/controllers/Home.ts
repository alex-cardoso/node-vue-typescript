import { Request, Response } from "express";

const index = (request: Request, response: Response) => {
  return response.render("../views/main/home", {
    layout: "main/main",
    title: "Home",
  });
};

export { index };
