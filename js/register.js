const form = document.getElementById("donorForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const donor = {
    name: document.getElementById("name").value,
    bloodGroup: document.getElementById("bloodGroup").value,
    city: document.getElementById("city").value,
    phone: document.getElementById("phone").value,
  };

  let donors = JSON.parse(localStorage.getItem("donors")) || [];
  donors.push(donor);
  localStorage.setItem("donors", JSON.stringify(donors));

  alert("Donor Registered Successfully 🩸");
  form.reset();
});
