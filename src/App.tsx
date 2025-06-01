import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Layout from "./context/Layout";
import { Suspense } from "react";

// Language Translation
import './i18n';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Suspense fallback="loading">
      <Router basename="/portfolio">
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
