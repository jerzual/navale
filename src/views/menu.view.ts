import m from "mithril";
import { v4 } from "uuid";

export function MenuView(): m.Component<any> {
  return {
    view({ attrs }) {
      return m(
        "nav",

        m(
          "a.brand",
          { href: "#" },
          // m("img.logo", { src: "/web/img/basket.png" }),
          m("span", "Navale 64³"),
        ),
        m(
          "div.menu",
          m(
            "a.menu-link",
            { href: `/game/${v4()}`, oncreate: m.route.link },
            "New Game",
          ),
          m("a.menu-link", { href: "/about", oncreate: m.route.link }, "About"),
          m(
            "a.menu-link",
            { href: "/options", oncreate: m.route.link },
            "Options",
          ),
          // m("a.menu-link", { href: "http://www.google.com" }, "Quit"),
        ),
      );
    },
  };
}
