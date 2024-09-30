import ExampleEnum from "@/domain/enums/example.enum";

type CreateExampleProps = {
  name: string;
  exampleId: ExampleEnum;
};

class CreateExample {
  props: CreateExampleProps;

  constructor(props: CreateExampleProps) {
    this.props = props;
  }

  get name() {
    return this.props.name;
  }

  get exampleId() {
    return this.props.exampleId;
  }
}

export default CreateExample;
