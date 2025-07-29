import { addTodos, getTodos } from "@/actions";
import React from "react";


// const fetchImg = async () => {
//   //   const controller = new AbortController();
//   //   const { signal } = controller;
//   const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

//   const data = await res.json();
//   console.log("😄");
//   console.log("Cache-Control:", res.headers.get("Cache-Control"));
//   console.log("Age:", res.headers.get("Age")); // 如果使用 CDN 缓存，Age 表示缓存时间
//   return data;
// };

export default async function Page() {
  // const res1 = await fetchImg();
  // const res2 = await fetchImg();
  // console.log("Fetched Dog Image URL:", res1.message, res2.message);

  // return (
  //   <div>
  //     <h1>Random Dog Image</h1>
  //     <img src={res1.message} alt='A Random Dog' /> <h1>Random Dog Image</h1>
  //     <img src={res2.message} alt='A Random Dog' />
  //   </div>
  // );
  // return { children };
  const todos = await getTodos();
  return (
    <div>
      <form action={addTodos}>
        <input name='todos' type='text' />
        <button type='submit'>添加</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>当前时间：{new Date().toLocaleString()}</div>
    </div>
  );
}
