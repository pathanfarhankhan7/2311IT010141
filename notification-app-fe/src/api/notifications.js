const API_URL = "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications(page = 1, limit = 10, type = "All") {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzExaXQwMTAxNDFAbWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3ODI4OTI3ODMsImlhdCI6MTc4Mjg5MTg4MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImVmMzA5ZjQ5LTc1ZTItNDIxZi04YTE1LWIxZWVmOGM3MGZlZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InBhdGhhbiBmYXJoYW4ga2hhbiIsInN1YiI6ImEyMjRjODA0LWRmNmMtNDU3Zi05MWMxLTQxMTg3NDAwNTFjZCJ9LCJlbWFpbCI6IjIzMTFpdDAxMDE0MUBtYWxsYXJlZGR5dW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJwYXRoYW4gZmFyaGFuIGtoYW4iLCJyb2xsTm8iOiIyMzExaXQwMTAxNDEiLCJhY2Nlc3NDb2RlIjoieHBRZGRkIiwiY2xpZW50SUQiOiJhMjI0YzgwNC1kZjZjLTQ1N2YtOTFjMS00MTE4NzQwMDUxY2QiLCJjbGllbnRTZWNyZXQiOiJ6VFRXdXNSTmpyQ1FHQVpkIn0.jXn7zaaWGerT1dDdumrTti9Avoe6LqG2zl2TlJEFkLk";

  let url = `${API_URL}?page=${page}&limit=${limit}`;

  if (type !== "All") {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return await response.json();
}