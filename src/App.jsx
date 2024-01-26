import "./App.css";

import MainRouter from "./routes/MainRouter"
import { CartProvider } from "./context/CartContext";

;

const App = () => {
  return (
    <div className="App">
    <CartProvider>
      <MainRouter />
    </CartProvider>
    </div>
  );
};

export default App;
