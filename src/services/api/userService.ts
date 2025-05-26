import { axiosInstance } from "../../configs/axios/axiosInstance";
import { AxiosResponse } from "axios";

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export const register = async (
  data: RegisterRequest
): Promise<AxiosResponse<any>> => {
  return axiosInstance.post("/register", data);
};

export const login = async (
  data: LoginRequest
): Promise<AxiosResponse<any>> => {
  return axiosInstance.post("/login", data, {
    withCredentials: true,
  });
};

export const logout = async (): Promise<AxiosResponse<any>> => {
  return axiosInstance.post("/logout");
};

export const changePassword = async (
  data: ChangePasswordRequest
): Promise<AxiosResponse<any>> => {
  return axiosInstance.post("/change-password", data, {
    withCredentials: true,
  });
};

export const profile = async () => {
  return axiosInstance.post("/me/profile", {}, { withCredentials: true });
};
