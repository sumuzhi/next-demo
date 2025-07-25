"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.success) {
      router.push("/login");
    }
  };

  return (
    <div>
      Dashboard
      <Button type='primary' onClick={handleLogout}>
        log out
      </Button>
    </div>
  );
}
