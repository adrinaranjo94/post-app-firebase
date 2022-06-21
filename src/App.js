import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import "./core/firebase";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
