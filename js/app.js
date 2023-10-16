const fs = require('fs');

// JSON File Read
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error... JSON can not be readed:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const regexTypes = jsonData.regexTypes;

    // Build the table from JSON data
    const tableHTML = `
    <table id="regex-data">
      <tr>
        <th>Tipo de Regex</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
      </tr>
      ${regexTypes.map(type => `
        <tr>
          <td>${type.name}</td>
          <td>${type.description}</td>
          <td>${type.example}</td>
        </tr>
      `).join('')}
    </table>
    `;

    // Build a HTML
    const fullHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Tabla de Expresiones Regulares en JavaScript</title>
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
      <h1>Tabla de Expresiones Regulares en JavaScript</h1>
      ${tableHTML}
    </body>
    <footer>Made with ❤️ by <a href="github.com/jousemarquez">Jouse</a></footer>
    </html>
    `;

    // Save the HTML file
    fs.writeFileSync('../regex_table.html', fullHTML);

    console.log("Regular expressions table generated and saved in 'regex_table.html'.");
  } catch (error) {
    console.error('Error... JSON can not be read:', error);
  }
});