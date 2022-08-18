import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {Route, Link, Routes} from 'react-router-dom';
import { Coursework } from './Coursework';
import { Experiences } from './Experiences';

export function Navigation() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/coursework">Coursework</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/coursework" element={<Coursework />} />
        </Routes>
      </div>
    </div>
  );
}