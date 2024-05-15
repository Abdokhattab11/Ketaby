const fs = require("fs");

const Ratings = [
  3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8,
  4.9, 5.0,
];

function addNewFieldsToJSON(filePath) {
  // Read the JSON file

  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  // Add new fields to the JSON object
  for (const obj of data) {
    const newFields = {
      rating: Ratings[Math.floor(Math.random() * Ratings.length)],
      number_of_pages: Math.floor(Math.random() * 500) + 100,
      number_of_ratings: Math.floor(Math.random() * 1000) + 100,
    };
    for (const key in newFields) {
      obj[key] = newFields[key];
    }
  }

  // Convert the updated JSON object back to a string
  const updatedJsonData = JSON.stringify(data, null, 2);

  // Write the updated JSON back to the file
  fs.writeFileSync(filePath, updatedJsonData, "utf8");

  // Return the updated JSON
  return data;
}

// Usage example
const filePath = "./data/books.json";

const updatedJson = addNewFieldsToJSON(filePath);
console.log(updatedJson);
