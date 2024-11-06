// Get the scholarship name from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const scholarshipName = urlParams.get('name'); 

// Find the scholarship in the scholarships array (global now)
const scholarship = scholarships.find(s => s.name === scholarshipName);

if (scholarship) {
  const scholarshipDetails = document.getElementById("scholarship-details");

  scholarshipDetails.innerHTML = `
    <h2>${scholarship.name}</h2>
    <p>Status: ${scholarship.status}</p>
    <p>Gender: ${scholarship.gender}</p>
    <p>Amount: ${scholarship.amount}</p>
    <p>Application Period: ${scholarship.applicationPeriod}</p>
    <p>Details: ${scholarship.details}</p>
    <a href="${scholarship.link}" target="_blank">Apply Now</a>
  `;
} else {
  scholarshipDetails.innerHTML = "<p>Scholarship not found.</p>";
}