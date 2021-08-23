import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import './App.css';

function App() {
  return (
    <div className = "container">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
