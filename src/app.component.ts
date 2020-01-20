// import logo from './ships.svg';
import m from "mithril";
import "./App.scss";

interface Attrs {
  name: string;
  logo: string;
  count: number;
  initialValue: number;
}

export class App implements m.ClassComponent<Attrs> {
  public count = 0;
  // The constructor can be used in place of oninit
  constructor({ attrs }: m.CVnode<Attrs>) {
    this.count = attrs.initialValue;
  }
  public increment = () => {
    this.count++;
  }
  public decrement = () => {
    this.count--;
  }
  // Note that class methods cannot infer parameter types
  public view({ attrs }: m.CVnode<Attrs>) {
    return m(
      ".app-header",
      m(
        "img.app-logo",
        { src: attrs.logo, alt: attrs.logo },
        m("h2.title", "Navale"),
      ),
      m("p.app-intro", ["Welcome to navale game"]),
      m("canvas", { id: "game" }),
      m(
        ".counter",
        m("span", `name: ${attrs.name}, count: ${this.count}`),
        m("button", { onclick: this.increment }, "+"),
        m("button", { onclick: this.decrement }, "-"),
      ),
    );
  }
}

export default App;
