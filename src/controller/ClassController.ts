import { Request, Response } from "express";
import "../database/index";
import "../model/Users";
import Class from "../model/Class";

class CreateClass {
  async store(request: Request, response: Response) {
    const { name, description, video, data_init, total_comments } =
      request.body;

    // create a new class
    const createClass = await Class.create({
      name,
      description,
      video,
      data_init,
      total_comments,
    });

    return response.json(createClass);
  }
  async update(request: Request, response: Response) {
    const { name, descripton, video, total_comments } = request.body;

    const updateClass = await Class.findOneAndUpdate({
      name: name,
      description: descripton,
      video: video,
    });
    return response.json(updateClass);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteClass = await Class.deleteOne({ _id: id });

    return response.status(200).json(deleteClass);
  }
}

export default CreateClass;
