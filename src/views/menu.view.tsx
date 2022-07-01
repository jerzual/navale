import { customAlphabet } from 'nanoid';
import React from 'react';

export interface MenuProps {
  path?: string;
}

export const MenuView: React.FC<MenuProps> = () => {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789');
  const newId = nanoid(8);
  return (
    <>
      <nav>
        <a href="#" className="brand">
          <span>Navale 64</span>
        </a>
        <div className="menu">
          <a href={`/game/${newId}`} className="menu-link">
            New game
          </a>
          <a href="/about" className="menu-link">
            About
          </a>
          <a href="/options" className="menu-link">
            Options
          </a>
        </div>
      </nav>
    </>
  );
};
