new gridjs.Grid({
    columns: ["Name", "Email", "Asal", "Favorite"],
    data: [
      ["Michael", "mike@email.com", "Indonesia", "Action"],
      ["Suparlan", "suparlan@gmail.com", "Indonesia", "Advanture"],
      ["Tobing", "tob@yahoo.com", "Indonesia", "Horror"]
    ],
    search: true
  }).render(document.getElementById("table"));