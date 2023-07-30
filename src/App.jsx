import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CommonRoute } from "./routes/Route";

const App = () => {
  return (
    <BrowserRouter>
      <CommonRoute />
    </BrowserRouter>
  );
};

export default App;
