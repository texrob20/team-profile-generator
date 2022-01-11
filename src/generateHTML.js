var employeeCards = [];  //data set to hold employee cards as they are created
// creates manager card
const managerCard = manager => {
    return `
    <div class="col-4 mt-4">
        <div class="card shadow rounded-2">
            <div class="card-header bg-success">
                <h3>${manager.name}</h3>
                <h4><i class="fas fa-coffee"></i> Manager</h4>
            </div>
            <div class="card-body bg-light">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}
//creates engineer card
const engineerCard = engineer => {
    return `
    <div class="col-4 mt-4">
        <div class="card shadow rounded-2">
            <div class="card-header bg-info">
                <h3>${engineer.name}</h3>
                <h4><i class="fas fa-glasses"></i> Engineer</h4>
            </div>
            <div class="card-body bg-light">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}
//creates intern card
const internCard = intern => {
    return `
    <div class="col-4 mt-4">
        <div class="card shadow rounded-2">
            <div class="card-header bg-waring">
                <h3>${intern.name}</h3>
                <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="card-body bg-light">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="office">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}
// function used to create cards for each employee entered in the command prompt
generateHTML = (data) => {
  for (i =0; i < data.length; i++){
    const employee = data[i];
    const role = employee.role;
    if (role ==='Manager') {
        var card = managerCard(employee);
    } else if (role === 'Engineer') {
        var card = engineerCard(employee);
    } else if (role === 'Intern') {
        var card = internCard(employee);
    }
      employeeCards.push(card); 
    }
  const generatedHTML = generatePage(employeeCards);  // adds cards to page template
  return generatedHTML;
}
// page template used to create index.html
const generatePage = employeeCards => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <header class="jumbotron bg-primary">
      <h1 class="display-3">My Team</h1>      
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
</html>
`;
}

module.exports = generateHTML;