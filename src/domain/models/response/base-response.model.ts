type BaseResponseModelProps<T> = {
  message: string;
  status: number;
  data: T;
};

class BaseResponseModel<T> {
  props: BaseResponseModelProps<T>;

  constructor(props: BaseResponseModelProps<T>) {
    this.props = props;
  }

  get message() {
    return this.props.message;
  }

  get status() {
    return this.props.status;
  }

  get data() {
    return this.props.data;
  }

  set message(message: string) {
    this.props.message = message;
  }

  set status(status: number) {
    this.props.status = status;
  }

  set data(data: any) {
    this.props.data = data;
  }
}

export default BaseResponseModel;
