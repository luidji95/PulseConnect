import React from "react";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../lib/session";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Home / Dashboard</h1>
      <p>Ulogovan si. Ovo je zaštićena ruta.</p>

      <button onClick={handleLogout} style={{ padding: "10px 14px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};