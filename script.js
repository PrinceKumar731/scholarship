const scholarshipList = document.querySelector('.scholarship-list');
const statusSelect = document.getElementById('status');
const genderSelect = document.getElementById('gender');


const scholarships = [
  {
    name: 'Prime Minister Scholarship Scheme',
    status: 'retired',
    gender: 'boy',
   
  },
  {
    name: 'Education Scholarship Scheme',
    status: 'serving',
    gender: 'girl',
    
   
  },
  {
    name: 'DIAV Scholarship',
    status: 'serving',
    gender: 'boy',
    amount: '50,000/- and one time computer grant',
    applicationPeriod: 'Wards of soldiers who died in harness',
    details: '',
    link: 'https://example.com/scholarship3'
  },
  {
    name: 'PRAGATI',
    status: 'serving',
    gender: 'girl',
    amount: 'Tuition fee - Rs 30,000/- and Rs 2,000/- pm for 10 months as incidental charges',
    applicationPeriod: 'Admitted to 1st year degree program, Family income less than Rs.8 Lakh, Max two girls child per family are eligible, The gap period between the year of passing the qualifying exam and the year of admission shall not be more than two years.',
    details: '',
    link: 'https://example.com/scholarship4'
  },
  {
    name: 'SAKSHAM',
    status: 'serving',
    gender: 'boy',
    amount: 'Tuition fee - Rs 30,000/- and 2,000/- pm for 10 months as incidental charges',
    applicationPeriod: 'Specially abled student, having disability not less than 40%, Admitted to 1st year degree program, Family income <8 Lakh',
    details: '',
    link: 'https://example.com/scholarship5'
  },
  {
    name: 'UDCHALO',
    status: 'retired',
    gender: 'boy',
    amount: '1st Shortlist - Rs 15,000/- and Shortlist - Rs 10,000/-',    applicationPeriod: 'udChalo Scholarship Assessment 50% to Academics: Marks secured in theory papers only 35% Enterprising Aptitude: No. of tech and cultural events participated (won) outside the college 15% Additional Responsibilities: Important positions / activities anchored during the applicable period Only regular students enrolled in the mentioned discipline of engineering at Army Institute of Technology, Pune',
    details: 'Students participating in this scheme must not have a year down (a) Scholarship will be granted to students of second year onwards. (b) Should have no backlogs. (c) Should have no scored min 7.0 GPA in previous year University examination. (d) Minimum attendance to be 75% in the preceding academic year. (e)No involvement in any disciplinary case in AIT or outside. (f) Economic criteria will have overbearing weightage. Precedence for award of this scholarship will be:- i) Wards of martyrs ii) Wards of widows/divorcees iii) Wards of retired ORs iv) Wards of retired JCOs v) Wards of serving ORs vi) Wards of serving JCOs',
    link: 'https://example.com/scholarship6'
  },
  {
    name: 'HASHMAP TECH INDIA PVT LTD',
    status: 'serving',
    gender: 'boy',
    amount: 'Rs 15,000/-',
    applicationPeriod: 'Students participating in this scheme must not have a year down (a) Scholarship will be granted to students of second year onwards. (b) Should have no backlogs. (c) Should have no scored min 7.0 GPA in previous year University examination. (d) Minimum attendance to be 75% in the preceding academic year. (e)No involvement in any disciplinary case in AIT or outside. (f) Economic criteria will have overbearing weightage. Precedence for award of this scholarship will be:- i) Wards of martyrs ii) Wards of widows/divorcees iii) Wards of retired ORs iv) Wards of retired JCOs v) Wards of serving ORs vi) Wards of serving JCOs',
    details: '',
    link: 'https://example.com/scholarship7'
  },
  {
    name: 'PERSISTENT SYSTEMS',
    status: 'retired',
    gender: 'girl',
    amount: '40,000/-',
    applicationPeriod: 'FE Comp/IT girl, Min 85% in PCM (HSC), Family income - max Rs 3 LPA, continuation of scholarship subject to scoring min 60% marks without any backlog in the previous year.',
    details: '',
    link: 'https://example.com/scholarship8'
  },
  {
    name: 'BADVE SCHOLARSHIP',
    status: 'serving',
    gender: 'girl',
    amount: '15,000/-',
    applicationPeriod: 'Category 1 -BE topper in final year exam Category 2 - Best technical skill sets in Final Year, priority Mech, then E&TC Category 3 - Needy Girl Students. Annual income of the parent should not be more than 3.0 to 3.5 LPA. Students should score min 55% marks without any backlog every year',
    details: '',
    link: 'https://example.com/scholarship9'
  },
  {
    name: 'ZS ASSOCIATES',
    status: 'serving',
    gender: 'boy',
    amount: '50% of total fees',
    applicationPeriod: 'Annual family income < 4 lakh First class in Std XII (For First Year)',
    details: '',
    link: 'https://example.com/scholarship10'
  },
  {
    name: 'TATA MERIT',
    status: 'serving',
    gender: 'boy',
    amount: 'First - 20,000/- Second - 15,000/-',
    applicationPeriod: 'Topper students of Second Year / Third Year and Final Year of Computer and IT branches',
    details: '',
    link: 'https://example.com/scholarship11'
  },
  {
    name: 'NEW INDIAN EXPRESS READERS',
    status: 'serving',
    gender: 'boy',
    amount: 'First - 20,000/- Second - 15,000/-',
    applicationPeriod: 'Topper students of Second Year / Third Year and Final Year of E&TC and Mechanical branches',
    details: '',
    link: 'https://example.com/scholarship12'
  },
  {
    name: 'HORIZON SCHOLARSHIP',
    status: 'retired',
    gender: 'boy',
    amount: '15,000/-',
    applicationPeriod: 'Needy wards of Retired ORs of SE to BE',
    details: '',
    link: 'https://example.com/scholarship13'
  },
  {
    name: 'MERIT CUM MEANSSCHOLARSHIP',
    status: 'retired',
    gender: 'girl',
    amount: '25,000/-',
    applicationPeriod: 'Needy Girl children of Retired ORs of SE to BE',
    details: '',
    link: 'https://example.com/scholarship14'
  },
  {
    name: 'OPEN MERIT Scholarship',
    status: 'serving',
    gender: 'boy',
    amount: 'ORS - 10,000/- JCOs - 5,000/-',
    applicationPeriod: 'Wards of JCOs and ORs of SE to BE',
    details: '',
    link: 'https://example.com/scholarship15'
  },
  {
    name: 'OPEN MERIT Scholarship',
    status: 'serving',
    gender: 'boy',
    amount: '10,000/-',
    applicationPeriod: 'One topper student of each division of SE to BE',
    details: '',
    link: 'https://example.com/scholarship16'
  }
];

function filterScholarships() {
  const selectedStatus = statusSelect.value;
  const selectedGender = genderSelect.value;

  scholarshipList.innerHTML = ''; 

  scholarships.forEach(scholarship => {
    if (
      (selectedStatus === '' || scholarship.status === selectedStatus) &&
      (selectedGender === '' || scholarship.gender === selectedGender)
    ) {
      const scholarshipItem = document.createElement('div');
      scholarshipItem.classList.add('scholarship-item');
      scholarshipItem.innerHTML = `
        <h3>${scholarship.name}</h3>
        <a href="scholarship${scholarships.indexOf(scholarship) + 1}.html" target="_blank">Learn More</a>
      `;
      scholarshipList.appendChild(scholarshipItem);
    }
  });
}


statusSelect.addEventListener('change', filterScholarships);
genderSelect.addEventListener('change', filterScholarships);


filterScholarships();