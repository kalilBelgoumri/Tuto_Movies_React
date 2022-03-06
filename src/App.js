import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Usersliste from "./pages/Usersliste";
import Headers from "./components/Headers";
import { Layout } from "antd";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <BrowserRouter>
      <Header className="flex items-center">
        <Headers />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coup-de-coeur" element={<Usersliste />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
