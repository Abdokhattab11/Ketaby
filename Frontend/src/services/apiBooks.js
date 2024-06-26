const BASE_URL = "http://localhost:8080/api/v1/book";

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

// export async function bookPagination(limit, page) {
//   try {
//     const res = await fetch(`${BASE_URL}?limit=${limit}&page=${page}`);
//     if (!res.ok) console.log("Error Connection");
//     const data = res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function filterBooksByGenre(genre) {
//   try {
//     const res = await fetch(`${BASE_URL}?genre=${genre}`);
//     if (!res.ok) console.log("Error Connection");
//     const data = res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function sortByApi(sortBy, desc) {
//   try {
//     const res = await fetch(`${BASE_URL}?sortBy=${desc ? "-" : ""}${sortBy}`);
//     if (!res.ok) console.log("Error Connection");
//     const data = res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function sortAndFilterWithPagination({
  sortBy,
  desc,
  genre,
  limit,
  page,
}) {
  try {
    const res = await fetch(
      `${BASE_URL}?sortBy=${
        desc ? "-" : ""
      }${sortBy}&genre=${genre}&limit=${limit}&page=${page}`
    );
    if (!res.ok) console.log("Error Connection");
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function addNewBook(newBook) {
  try {
    await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
  } catch (err) {
    console.error("Error:", err);
  }
}
