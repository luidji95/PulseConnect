import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "../../lib/api";
import { loginSchema } from "../../lib/validationSchema";
import "./login.css";

type LoginFormData = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
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

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const result = await loginUser(data.email, data.password);

      if (result.success) {
        const token = result.data?.token;
        if (token) localStorage.setItem("authToken", token);

        reset();
        alert("Login uspešan!");
      } else {
        alert(`Greška: ${result.error}`);
      }
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
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoFocus
              disabled={isLoading}
              className={`input ${errors.email ? "inputError" : ""}`}
              placeholder="vasemail@example.com"
              {...register("email")}
            />
            {errors.email && <p className="errorText">{errors.email.message}</p>}
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              Lozinka
            </label>

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
                onClick={() => setShowPassword((p) => !p)}
                disabled={isLoading}
                aria-label={showPassword ? "Sakrij lozinku" : "Prikaži lozinku"}
              >
                {showPassword ? "Sakrij" : "Prikaži"}
              </button>
            </div>

            {errors.password && (
              <p className="errorText">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="submitBtn"
          >
            {isLoading ? "Prijavljivanje..." : "Prijavi se"}
          </button>

          <p className="hint">
            Ako imaš problem sa nalogom, kontaktiraj admina ili proveri kredencijale.
          </p>
        </form>
      </div>

      <div className="footer">© {new Date().getFullYear()} PlusConnect</div>
    </div>
  );
};