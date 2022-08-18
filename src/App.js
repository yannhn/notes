import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllNotes from "./pages/AllNotes";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="all" element={<AllNotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
