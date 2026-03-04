import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Auth/Login/Login";
import { Home } from "./pages/Home";
import { AuthGuard } from "./routing/AuthGuard";

export function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* login */}
        <Route path="/login" element={<Login />} />

        {/* protected routes */}
        <Route element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* default redirect */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* unknown route */}
        <Route path="*" element={<Navigate to="/home" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;