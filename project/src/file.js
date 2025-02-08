import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";   // used to parse excel sheets into JSON format

const File = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(""); // User's input for food name
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const response = await fetch("/Anuvaad_INDB_2024.11.xlsx");
        const blob = await response.blob();   //converted to binary large object to read binary files

        const reader = new FileReader();
        reader.onload = (event) => {
          const workbook = XLSX.read(event.target.result, { type: "binary" });  //converts the blob into workbook
          const sheetName = workbook.SheetNames[0];  //first sheet
          const worksheet = workbook.Sheets[sheetName];

          // Trim keys to remove extra spaces and converted to JSON
          const jsonData = XLSX.utils.sheet_to_json(worksheet).map((row) => {
            const trimmedRow = {};
            Object.keys(row).forEach((key) => {
              trimmedRow[key.trim()] = row[key];
            });
            return trimmedRow;
          });

          setData(jsonData);
        };
        reader.readAsArrayBuffer(blob);
      } catch (error) {
        console.error("Error fetching or parsing the Excel file:", error);
      }
    };

    fetchExcel();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = data
        .filter((row) => row.food_name?.toLowerCase() === search.toLowerCase())
        .map((row) => ({
          energy_kcal: row.energy_kcal,
          carb_g: row.carb_g,
          protein_g: row.protein_g,
          fat_g: row.fat_g,
          fibre_g: row.fibre_g, // Ensure this matches the Excel column name
        }));

      setFilteredData(filtered);
    }
  }, [search, data]);

  return (
    <div>
      <div className="" style={{ padding: "20px", textAlign: "center" }}>
        <h1>Search Nutritional Data</h1>
        <input
          type="text"
          placeholder="Enter food name (e.g., Iced tea)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {filteredData.length > 0 ? (
          <table border="1" style={{ margin: "20px auto", width: "80%" }}>
            <thead>
              <tr>
                <th>Energy (kcal)</th>
                <th>Carbs (g)</th>
                <th>Protein (g)</th>
                <th>Fat (g)</th>
                <th>Fibre (g)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.energy_kcal}</td>
                  <td>{row.carb_g}</td>
                  <td>{row.protein_g}</td>
                  <td>{row.fat_g}</td>
                  <td>{row.fibre_g !== undefined ? row.fibre_g : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{search ? `No data found for "${search}".` : "Enter a food name to see results."}</p>
        )}
      </div>
      </div>
  );
};

export default File;
