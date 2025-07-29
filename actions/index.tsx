"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const data = ["吃饭", "睡觉", "打豆豆"];
export const addTodos = async (formData: FormData) => {
  const todo = formData.get("todos");

  data.push(todo as string);
  console.log("添加的待办事项:", todo);
  (await cookies()).set("todos", JSON.stringify(data)); // 将数据存储在 cookies 中
  // revalidatePath("/"); // 重新验证当前路径，触发页面重新渲染
};

export const getTodos = async () => {
  return data;
};
