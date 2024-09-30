import ExampleEntity from "@/domain/entities/example.entity";
import CreateExample from "../../models/request/example/create-example.model";

interface IExampleService {
  getExample(args: { id: number }): Promise<ExampleEntity["props"] | null>;
  createExample(args: { body: CreateExample }): Promise<ExampleEntity["props"]>;
  editExample(args: { body: CreateExample }): Promise<ExampleEntity["props"]>;
}

export default IExampleService;
