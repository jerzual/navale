import m from "mithril";

interface Attrs {
  name: string;
  initialValue: number;
}

export function WorldView(): m.Component<Attrs> {
  let count = 0;
  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }
  return {
    oninit({ attrs }) {
      count = attrs.initialValue;
    },
    view({ attrs }) {
      return m(
        ".counter",
        m("span", `name: ${attrs.name}, count: ${count}`),
        m("button", { onclick: increment }, "+"),
        m("button", { onclick: decrement }, "-"),
      );
    },
  };
}
