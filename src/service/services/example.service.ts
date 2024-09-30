import ExampleEntity from "@/domain/entities/example.entity";
import IExampleService from "@/domain/interfaces/services/example.interface";
import CreateExample from "@/domain/models/request/example/create-example.model";
import BaseRepository from "@/infra/data/repositories/base.repository";

class ExampleService implements IExampleService {
  private exampleRepository: BaseRepository<ExampleEntity["props"]>;

  constructor() {
    this.exampleRepository = new BaseRepository();
  }

  async getExample({ id }: { id: number }): Promise<ExampleEntity["props"] | null> {
    const example = await this.exampleRepository.findById({ id, table: "example" });

    return example || null;
  }

  async createExample({ body }: { body: CreateExample }): Promise<ExampleEntity["props"]> {
    const res = await this.exampleRepository.add({
      entity: body,
      table: "example"
    });

    return res;
  }

  async editExample({ body, id }: { body: CreateExample; id: number }): Promise<ExampleEntity["props"]> {
    const res = await this.exampleRepository.update({
      entity: body,
      table: "example",
      id
    });

    return res;
  }
}

export default new ExampleService();
