function searchDonors() {
  const blood = document.getElementById("searchBlood").value;
  const city = document.getElementById("searchCity").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  const donors = JSON.parse(localStorage.getItem("donors")) || [];

  const filtered = donors.filter(d =>
    d.bloodGroup === blood &&
    d.city.toLowerCase() === city
  );

  resultsDiv.innerHTML = "";

  if (filtered.length === 0) {
    resultsDiv.innerHTML = `
        <div class="card">
            <h3>No donors found 😔</h3>
            <p>Try another city or blood group</p>
        </div>
        `;

    return;
  }

  filtered.forEach(donor => {
    resultsDiv.innerHTML += `
        <div class="card">
            <h3>${donor.name}</h3>
            <span class="badge">${donor.bloodGroup}</span>
            <p>📍 ${donor.city}</p>
            <p>📞 ${donor.phone}</p>
        </div>
        `;

  });
}
