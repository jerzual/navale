import React from 'react'
import { BrowserRouter as Router }from 'react-router-dom';

import { AboutView } from './views/about.view';
import { GameView } from './views/game.view';
import { HomeView } from './views/home.view';
import { MenuView } from './views/menu.view';
import { SceneView } from './views/scene.view';

export const Main: React.FC = () => (<>
  <MenuView />
  <Router>
    <HomeView path="/" />
    <AboutView path="/about" />
    <GameView path="/game/:seed" />
  </Router>
  <SceneView />
  </>
);
