
let Resume = {

  "Personal_Details": {

    "Name": "Surya",
    "Age": 27,
    "eMail": "surya@gmail.com",
    "Phone": 9876543210,

    "Address": {    //Nested JSON
      "PlotNo": 10,
      "Street": "VK nagar",
      "Town": "Madurai North",
      "District": "Madurai",
      "State": "TamilNadu"
    },

  },

  "Eduction": {

    "College": {
      "Degree": "BE",
      "Domain": "Mechanial Engineering",
      "Graduation Year": 2018,
      "CGPA": "7.0"
    },

    "School": {
      "Name": "SHSS Hr Sec School",
      "HSC": { "Mark Percentage": "80%", "Year": 2014 },
      "SSLC": { "Mark Percentage": "88%", "Year": 2012 }
    }

  },

  "Work_Experience": {
    "Company": "HCL Tech",
    "Designation": "SMTS",
    "Work Period": "2018 to Present",
    "responsibilities": ["Performing software development tasks.", "Learning and applying programming concepts.", "Participating in team meetings and projects."]
  },

  "Skills": ["HTML", "CSS", "JS", "Python", "React", "Node JS"],

  "Certification": ["IITM Certified Web Developer", "Certification on Javascript", "Certification on AWS"],

  "Languages_known": ["English", "Tamil", "Malayalam"]

}






//1. FOR IN Type
console.log("1.'For in' Loop type: Itretae through Object properties using For in Loop.\n");

let addressOfCandidate = {};

for (let key in Resume.Personal_Details.Address) {
  addressOfCandidate[key] = Resume.Personal_Details.Address[key];
}

// console.log(Resume.Personal_Details.Address);
addressOfCandidate["Code"] = 625005;  // Added "code" in deep copy of address
console.log(addressOfCandidate); //Checking Deep copy properties





//2. FOR (initialization, condition, iteration) Type:
console.log("\n2.'For Loop' (initialization, condition, iteration) type : Itretae through Object properties(nested Arrays) using general for Loop.\n");

for (let i = 0; i < Resume.Skills.length; i++) {
  console.log(Resume.Skills[i]);
}





//3. 'FOR of'Type:
console.log("\n3.'FOR of' type : Itretae through Object properties(nested Arrays) using For of Loop.\n");

for (let res of Resume.Work_Experience.responsibilities) {  // "res" directly pointing to each elements of the responsibilities array
  console.log(res);
}




//4. 'FOR-Each'Type:
console.log("\n4.'FOR-Each' type : Itretae through Object properties(nested Arrays) using For each Loop.\n");

Resume.Languages_known.forEach(function (Languages_known) {
  console.log(Languages_known);
});

