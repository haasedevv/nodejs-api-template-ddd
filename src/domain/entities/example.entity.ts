import ExampleEnum from "../enums/example.enum";

type ExampleEntityProps = {
  id?: number;
  name: string;
  exampleId: ExampleEnum;
};

class ExampleEntity {
  props: ExampleEntityProps;

  constructor(props: Omit<ExampleEntityProps, "id">) {
    this.props = {
      ...props
    };
  }

  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get exampleId() {
    return this.props.exampleId;
  }

  set exampleId(exampleId: ExampleEnum) {
    this.props.exampleId = exampleId;
  }
}

export default ExampleEntity;
