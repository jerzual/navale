import * as BABYLON from "babylonjs";
import m from "mithril";
import "picnic/src/picnic.scss";

import App from "./app.component";
import "./index.scss";
import { AboutView, GameView, MenuView } from "./views";

m.route(document.body, "/", {
  "/": MenuView,
  "/about": AboutView,
  "/game/:seed": GameView,
});
