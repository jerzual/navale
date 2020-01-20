import m from "mithril";

interface GameViewAttrs {
  name: string;
  width: number;
  height: number;
}

export function GameView(): m.Component<GameViewAttrs> {
  return {
    view({ attrs }) {
      return m("canvas", { width: attrs.width, height: attrs.height });
    },
  };
}
