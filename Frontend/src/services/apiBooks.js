const BASE_URL = "http://localhost:8080/api/v1/book";
//localhost:8080/api/v1/book?author=Name&
// title=Name&genre=genre1,genre2,genre3&
// limit=10&page=3&sortBy=publication_year,-rating

export async function getAllBooks() {
  try {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) console.log("Error Connection");
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getBookById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) console.log("Error Connection");
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function bookPagination(limit, page) {
  try {
    const res = await fetch(`${BASE_URL}?limit=${limit}&page=${page}`);
    if (!res.ok) console.log("Error Connection");
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// try {
//   await fetch("/api/createUser", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// } catch (err) {
//   console.error("Error:", err);
// }
