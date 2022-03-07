import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Usersliste from "./pages/Usersliste";
import Headers from "./components/Headers";
import { Layout } from "antd";
import FooterUser from "./components/FooterUser";

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
      <Footer style={{ background: "black", color: "white", height: "20vh" }}>
        <FooterUser />
      </Footer>
    </BrowserRouter>
  );
}

export default App;
