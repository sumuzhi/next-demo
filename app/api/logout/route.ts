import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  return new NextResponse(
    JSON.stringify({
      message: "Logout successful",
      success: true,
    }),
    {
      status: 200,
      headers: {
        "Set-Cookie": "token=; Path=/; HttpOnly; Max-Age=0",
        "Content-Type": "application/json",
      },
    }
  );
}
