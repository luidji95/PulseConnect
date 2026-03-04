import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "../../lib/api";
import { loginSchema } from "../../lib/validationSchema";
import { saveToken, getToken } from "../../lib/session";
import "./login.css";

type LoginFormData = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  // ✅ redirect tek posle mount-a, bez early return-a
  useEffect(() => {
    const token = getToken();
    if (token) navigate("/home", { replace: true });
  }, [navigate]);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const result = await loginUser(data.email, data.password);

      if (result.success) {
        const token = result.data?.token;
        if (!token) {
          alert("Login uspešan, ali token nije vraćen sa servera.");
          return;
        }

        saveToken(token);
        reset();
        navigate("/home", { replace: true });
        return;
      }

      alert(`Greška: ${result.error}`);
    } catch (err) {
      console.error(err);
      alert("Došlo je do neočekivane greške.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="loginHeader">
          <h1 className="loginTitle">PlusConnect</h1>
          <p className="loginSubtitle">Prijavi se na svoj nalog</p>
        </div>

        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              disabled={isLoading}
              className={`input ${errors.email ? "inputError" : ""}`}
              placeholder="vasemail@example.com"
              {...register("email")}
            />
            {errors.email && <p className="errorText">{errors.email.message}</p>}
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Lozinka</label>

            <div className="passwordRow">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                disabled={isLoading}
                className={`input ${errors.password ? "inputError" : ""}`}
                placeholder="Unesite lozinku"
                {...register("password")}
              />

              <button
                type="button"
                className="toggleBtn"
                onClick={() => setShowPassword(p => !p)}
                disabled={isLoading}
              >
                {showPassword ? "Sakrij" : "Prikaži"}
              </button>
            </div>

            {errors.password && <p className="errorText">{errors.password.message}</p>}
          </div>

          <button type="submit" disabled={isLoading} className="submitBtn">
            {isLoading ? "Prijavljivanje..." : "Prijavi se"}
          </button>
        </form>
      </div>
    </div>
  );
};