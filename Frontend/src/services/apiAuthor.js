const BASE_URL = "http://localhost:8080/api/v1/author";

export async function getAuthorById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) console.log("Error Connection");
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
