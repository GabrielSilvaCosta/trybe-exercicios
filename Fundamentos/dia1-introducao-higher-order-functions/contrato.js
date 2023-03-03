

   

  const hiredPerson = [
    { name: 'Pedro Guerra', Email: '@trybe.com' },
    { name: 'Luiza', Email: '@trybe.com' },
    { name: 'Carla', Email: '@trybe.com' },
    
  ]


  const firstPerson = hiredPerson.find((item) => item.name === 'Pedro Guerra');
  const secondPerson = hiredPerson.find((item) => item.name === 'Luiza');
  const thirdPerson = hiredPerson.find((item) => item.name === 'Carla');

  console.log(firstPerson);
  console.log(secondPerson);
  console.log(thirdPerson)

//-------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));


