import { Request, Response } from "express";
import "../database/index";
import "../model/Users";
import Users from "../model/Users";

class User {
  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    //create new
    const user = await Users.create({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export default User;
