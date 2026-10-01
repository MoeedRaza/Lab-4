var fullName = "Abdul Moeed Raza Kazmi";
var age = 21;
var isStudent = true;
var university = "Air University";

var biography = {
    fullName: fullName,
    age: age,
    isStudent: isStudent,
    university: university,

    address: {
        city: "Islamabad",
        country: "Pakistan"
    },

    degreeProgram: {
        degree: "BS Computer Science",
        semester: 5
    }
};

console.log("Name: " + biography.fullName);
console.log("Age: " + biography.age);
console.log("Student: " + biography.isStudent);
console.log("University: " + biography.university);

console.log("City: " + biography.address.city);
console.log("Country: " + biography.address.country);

console.log("Degree: " + biography.degreeProgram.degree);
console.log("Semester: " + biography.degreeProgram.semester);