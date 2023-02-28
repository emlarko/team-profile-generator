function addManager(manager) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>    
`;
};

function addEngineer(engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>    
`;
};

function addIntern(intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>    
`;
};

addHTML = (data) => {
    page = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = addManager(employee);
            page.push(managerInfo);
        }
        if (role === 'Engineer') {
            const engineerInfo = addEngineer(employee);
            page.push(engineerInfo);
        }
        if (role === 'Intern') {
            const internInfo = addIntern(employee);
            page.push(internInfo);
        }
    }

    const employeeInfo = page.join('');
    const generateTeam = generateProfile(employeeInfo);
    return generateTeam;
};

function generateProfile(employeeInfo) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto+Slab:wght@200;400&display=swap" 
      rel="stylesheet"
    />
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        <header>
            <nav class="navbar bg-dark" data-bs-theme="dark">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">    
                <div class="row justify-content-center" id="team-cards">
                ${employeeInfo}
                </div>
            </div>
        </main>
    </body>
    </html>
    `
};

module.exports = addHTML;