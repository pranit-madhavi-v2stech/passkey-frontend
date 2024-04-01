import "./App.css";
import AppProvider from "./context";
import SessionStorageProvider from "./context/sessionStorage/context";
import AppRouter from "./router";

function App() {
  return (
    <SessionStorageProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </SessionStorageProvider>
  );
}

export default App;
