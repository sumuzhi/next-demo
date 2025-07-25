export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch("http://localhost:3001/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  
  return new Response(JSON.stringify({ data }), {
    headers: {
      "set-cookie": `token=${data.token}; Path=/; HttpOnly;  Max-Age=3600`,
    },
  });
}
