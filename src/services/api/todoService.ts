import { instance } from "../../configs/axios/todoAxiosInstance.js";
import { AxiosResponse } from "axios";

interface FetchAllTodos {
  userId: string;
}
interface CreateTodoRequest {
  todoContent: string;
}
interface DeleteTodoRequest {
  todoId: string;
}
interface ToggleTodoRequest {
  todoId: string;
}

interface UpdateTodoRequest {
  todoId: string;
  updatedTodoContent: string;
}

export const fetchTodos = async (
  data: FetchAllTodos
): Promise<AxiosResponse<any>> => {
  return instance.get("/todos", {
    params: data,
  });
};

export const createTodo = async (
  data: CreateTodoRequest
): Promise<AxiosResponse<any>> => {
  return instance.post("/create-todo", data);
};

export const deleteTodo = async (
  data: DeleteTodoRequest
): Promise<AxiosResponse<any>> => {
  return instance.delete("/delete-todo", {
    params: data,
  });
};

export const toggleTodo = async (
  data: ToggleTodoRequest
): Promise<AxiosResponse<any>> => {
  return instance.put("/toggle-todo", data);
};

export const updateTodo = async (
  data: UpdateTodoRequest
): Promise<AxiosResponse<any>> => {
  return instance.put("/update-todo", data);
};
