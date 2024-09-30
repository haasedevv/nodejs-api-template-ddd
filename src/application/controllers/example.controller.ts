import ExampleEntity from "@/domain/entities/example.entity";
import BaseResponseModel from "@/domain/models/response/base-response.model";
import exampleService from "@/service/services/example.service";
import express from "express";

const exampleRouter = express.Router();

exampleRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const entity = await exampleService.getExample({ id: Number(id) });

  if (entity) {
    const response = new BaseResponseModel<ExampleEntity["props"]>({ data: entity, message: "Success", status: 200 });
    res.status(200).send(response.props);
    return;
  }

  const response = new BaseResponseModel<null>({ data: null, message: "Not Found", status: 404 });
  res.status(404).send(response.props);
});

exampleRouter.post("/", async (req, res) => {
  const { body } = req;
  const entity = await exampleService.createExample({ body });

  if (entity) {
    const response = new BaseResponseModel<null>({ data: null, message: "Success", status: 200 });
    res.status(201).send(response.props);
    return;
  }

  const response = new BaseResponseModel<null>({ data: null, message: "Not Found", status: 404 });
  res.status(400).send(response.props);
});

exampleRouter.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const entity = await exampleService.editExample({ body, id: Number(id) });

  if (entity) {
    const response = new BaseResponseModel<null>({ data: null, message: "Success", status: 200 });
    res.status(200).send(response.props);
    return;
  }

  const response = new BaseResponseModel<null>({ data: null, message: "Not Found", status: 404 });
  res.status(400).send(response.props);
});

export default exampleRouter;
