import {
  Message,
  DatePicker,
  MessageBox,
  Button,
  Alert,
  Col,
  Row,
  Aside,
  Header,
  Footer,
  Main,
  Container,
  Carousel,
  CarouselItem,
  Card,
  Select,
  Option,
  Breadcrumb,
  BreadcrumbItem,
  Rate,
  Pagination,
  Form,
  FormItem,
  Input
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.component(Form.name, Form);
    Vue.component(FormItem.name, FormItem);
    Vue.component(Input.name, Input);
    Vue.component(Pagination.name, Pagination)
    Vue.component(Rate.name, Rate)
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
    Vue.component(Message.name, Message);
    Vue.component(Button.name, Button)
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(MessageBox.name, MessageBox);
    Vue.component(Alert.name, Alert);
    Vue.component(Col.name, Col);
    Vue.component(Row.name, Row);
    Vue.component(Aside.name, Aside);
    Vue.component(Header.name, Header);
    Vue.component(Footer.name, Footer);
    Vue.component(Main.name, Main);
    Vue.component(Container.name, Container);
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);
    Vue.component(Card.name, Card);
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option)
    Vue.prototype.$message = Message;
    Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$alert = Alert;
  }
}

export default element
