import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { fetchMe } from "../lib/api";
import { clearToken, getToken } from "../lib/session";

type MeUser = { [key: string]: unknown };

export function AuthGuard() {
  const [user, setUser] = useState<MeUser | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let alive = true;

    const check = async () => {
      const token = getToken();
      if (!token) {
        if (!alive) return;
        setUser(null);
        setIsChecking(false);
        return;
      }

      const res = await fetchMe();
      if (!alive) return;

      if (res.success) {
        setUser(res.data);
      } else {
        clearToken();
        setUser(null);
      }

      setIsChecking(false);
    };

    check();
    return () => {
      alive = false;
    };
  }, []);

  if (isChecking) return <div style={{ padding: 24 }}>Checking session...</div>;

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}