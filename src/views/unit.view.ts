import m from "mithril";

export function UnitView(): m.Component<any> {
  return {
    view({ attrs }) {
      return m("div.unit");
    },
  };
}
