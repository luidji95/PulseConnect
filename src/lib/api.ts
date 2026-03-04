import { getToken } from "./session";

const API_URL = "https://api.hr.constel.co/api/v1";

type ApiOk<T> = { success: true; data: T };
type ApiFail = { success: false; error: string };
type ApiResult<T> = ApiOk<T> | ApiFail;

type LoginResponse = {
  token?: string;
  [key: string]: unknown;
};

type MeResponse = {
  id?: string;
  email?: string;
  username?: string;
  [key: string]: unknown;
};

// Login
export async function loginUser(email: string, password: string): Promise<ApiResult<LoginResponse>> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return { success: true, data };
    }

    return {
      success: false,
      error: data?.error?.message || "Došlo je do greške",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "Problem sa konekcijom. Proverite internet.",
    };
  }
}

// /me
export async function fetchMe(): Promise<ApiResult<MeResponse>> {
  const token = getToken();
  if (!token) return { success: false, error: "No token" };

  try {
    const response = await fetch(`${API_URL}/accounts/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return { success: false, error: `Unauthorized (${response.status})` };
    }

    return { success: true, data };
  } catch (err) {
    console.error("fetchMe failed:", err);
    return { success: false, error: "Network error" };
  }
}