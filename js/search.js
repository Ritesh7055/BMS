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
    resultsDiv.innerHTML = "<p>No donors found 😔</p>";
    return;
  }

  filtered.forEach(donor => {
    resultsDiv.innerHTML += `
      <div class="card">
        <h3>${donor.name}</h3>
        <p>Blood: ${donor.bloodGroup}</p>
        <p>City: ${donor.city}</p>
        <p>Phone: ${donor.phone}</p>
      </div>
    `;
  });
}