import { Request, Response } from "express";
import "../database/index";
import "../model/Users";
import Comments from "../model/Users";

class CreateComments {
  async store(request: Request, response: Response) {
    const { id_class } = request.params;
    const { comment } = request.body;

    let quantityComment = await Comments.findById({ id_class: id_class });

    //create new comment
    const createComent = await Comments.create({
      comment,
    });

    return response.json(createComent);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteComment = await Comments.deleteOne({ _id: id });

    return response.status(200).json(deleteComment);
  }
}

export default CreateComments;
