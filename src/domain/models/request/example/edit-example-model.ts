import ExampleEnum from "@/domain/enums/example.enum";

type EditExampleProps = {
  id: number;
  name: string;
  exampleId: ExampleEnum;
};

class EditExample {
  props: EditExampleProps;

  constructor(props: EditExampleProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get exampleId() {
    return this.props.exampleId;
  }
}

export default EditExample;
