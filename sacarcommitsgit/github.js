let contenedor = document.getElementById("contenedor");
function rellenarcontenedor() {
  const repoOwner = "mouredev";
  const repoName = "retos-programacion-2023";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(commits => {
    // Obtener los últimos 5 commits
    const ultimosCommits = commits.slice(0, 2);
    
    // Iterar sobre cada commit y obtener el nombre del usuario y el mensaje
    ultimosCommits.forEach(commit => {
      const autor = commit.commit.author.name;
      const mensaje = commit.commit.message;
      let div_commit = document.createElement('p');
      div_commit.textContent =  "Usuario: " + autor +  "Mensaje del commit: " + mensaje ; 
      contenedor.appendChild(div_commit);
    });
  })
  .catch(error => {
    console.error('Error al obtener los commits:', error);
  });
}
rellenarcontenedor();
