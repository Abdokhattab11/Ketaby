const fs = require("fs");

const url = "http://localhost:8080/cover.jpg";

function addNewFieldsToJSON(filePath) {
  // Read the JSON file

  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  // Add new fields to the JSON object
  for (const obj of data) {
    obj.cover = url;
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
