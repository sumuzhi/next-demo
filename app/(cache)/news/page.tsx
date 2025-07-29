import { sleep } from "@/utils";
import React from "react";

export default async function Page() {
  // 模拟延迟加载
  await sleep(3000);
  return <div>news: {new Date().toLocaleString()}</div>;
}
