// Create a Node.js application to manage patient records using a Map to store patient details. Implement the following functionalities using the readline module for input:

// a. Add a patient with a unique ID, name, age, and diagnosis. If the ID already exists, print an error message.
// b. Remove a patient using their ID. If the patient is not found, print an error message.
// c. Search for patients by name or ID and print the matching results.
// d. Update the name, age, and/or diagnosis of a patient using their ID. If the patient is not found, print an error message.
// e. Print a summary report of all patients in the database.


const patientdetails = new Map([
    [1, { name: 'anju', age: '30' ,diagnosis:'abc'}],
    [2, { name: 'ammu', age: '31',diagnosis :'abd'}],
    [3, { name: 'anu', age: '32' ,diagnosis:'abf'}]
  ]);
  



  const addPatientdetails = (id, name, age,diagnosis) => {
    if (patientdetails.has(id)) {
      console.log(`A patient details with ID ${id} already exists.`);
    } else {
      books.set(id, { name, age,diagnosis });
      console.log(`A patient  "${name}" ,  ${age}   and ${diagnosis} added successfully.`);
    }
  };




  const generateReport = () => {
    if (patientdetails.size === 0) {
      console.log('No patient details in the record.');
    } else {
      console.log('summary   Report:');
      for (let [id, patient] of patientdetails) {
        console.log(`ID: ${id}, name: ${patient.name}, age: ${patient.age}, diagnosis: ${patient.diagnosis} `);
      }
    }
  };

   addPatientdetails(2, 'anju', '30','abc');
  generateReport();

  const removepatientdetails = (id) => {
    if (patientdetails.delete(id)) {
      console.log(`patient details with ID ${id} removed successfully.`);
    } else {
      console.log(`No patient details found with ID: ${id}`);
    }
  };
  removepatientdetails(4, 'ammu', '30','abc');
  generateReport();
    
  const searchpatientdetails = (query) => {
    const results = [];
    for (let [id, patient] of patientdetails) {
      if (patient.name.includes(query) || patient.age.includes(query) || patient.diagnosis.includes(query) ||id.toString().includes(query)) {
        results.push({ id, ... patient});
      }
    }
  
    if (results.length > 0) {
      console.log('Search results:');
      results.forEach(patient => console.log(`ID: ${patient.id}, name: ${patient.name}, age: ${patient.age},diagnosis: ${patient.diagnosis}`));
    } else {
      console.log('No patient details found matching the query.');
    }
  };
  console.log("Search for 'anu':");
  searchpatientdetails('anu');
  
  generateReport();

  const updatepatientdetails = (id, newname, newage,newdiagnosis) => {
    if (patientdetails.has(id)) {
      const patient = patientdetails.get(id);
      patient.name = newname || patient.name;
      patient.age = newage || patient.age;
      patient.diagnosis = newdiagnosis || patient.diagnosis;
      patient.set(id, patient)
      console.log(`Patient details with ID: ${id} updated successfully.`);
    } else {
      console.log(`No Patient details found with ID: ${id}`);
    }
  };
   updatepatientdetails(6, 'anjujv', '40','bdce');
  generateReport();
  
  