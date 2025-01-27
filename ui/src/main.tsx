import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div>FAKE PAGE</div>} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
