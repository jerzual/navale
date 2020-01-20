import m from "mithril";
import { v4 } from "uuid";

export function Button(): m.Component<any> {
  return {
    view({ attrs }) {
      return m("button", attrs.children);
    },
  };
}
