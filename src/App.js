import React from "react";
import SearchResultContainer from "./components/SearchResults";

import './App.css';
import { Header } from './style/layout.components';

function App() {
  return (
    <div>
      <Header>
      - Employee Directory -
      </Header>
        <SearchResultContainer />
    </div>
  )
}

export default App;