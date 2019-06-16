export async function fetchAsync() {
  const response = await fetch("http://localhost:4000/stories");
  return await response.json();
}
