import { sleep } from "@/utils";
import React from "react";

export default async function Page() {
  await sleep(3000); // 模拟延迟加载
  return <div>sport: {new Date().toLocaleString()}</div>;
}
