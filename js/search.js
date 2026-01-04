function searchDonors() {
  const blood = document.getElementById("searchBlood").value;
  const city = document.getElementById("searchCity").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

// Dummy donor data
const donors = [
  {
    name: "Nikhil Goswami",
    bloodGroup: "AB+",
    city: "jhalawar",
    phone: "8619317677"
  },
  {
    name: "Ritesh Meena",
    bloodGroup: "AB+",
    city: "jhalawar",
    phone: "9521367055"
  },
  {
    name: "Aman Verma",
    bloodGroup: "O-",
    city: "Kolkata",
    phone: "9988776655"
  },
  {
    name: "Neha Patel",
    bloodGroup: "AB+",
    city: "Bangalore",
    phone: "9871122334"
  },
  {
    name: "Aditya Kapoor",
    bloodGroup: "A-",
    city: "Chennai",
    phone: "9900112233"
  },
  {
    name: "Sneha Reddy",
    bloodGroup: "B-",
    city: "Hyderabad",
    phone: "9812345678"
  }
];






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






