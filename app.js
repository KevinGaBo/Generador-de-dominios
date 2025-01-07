window.onload = function() {
  let pronoun = ["the", "our", "my", "his", "their"];
  let adj = ["great", "big", "small", "beautiful", "wonderful"];
  let noun = ["jogger", "racoon", "teacher", "series", "glasses"];
  let domains = []; // Aqui se almacenan todos los dominios generados.

  // Esto es para generar la lista de dominios.
  for (let index = 0; index < pronoun.length; index++) {
    const element = pronoun[index];
    for (let index2 = 0; index2 < adj.length; index2++) {
      const element2 = adj[index2];
      for (let index3 = 0; index3 < noun.length; index3++) {
        const element3 = noun[index3];
        let domainName;
        if (element3.endsWith("es")) {
          domainName = element + element2 + element3.slice(0, -2) + ".es";
        } else {
          domainName = element + element2 + element3 + ".com";
        }
        domains.push(domainName); //
      }
    }
  }

  // Selecciona los tres contenedores de listas
  let domainList1 = document.getElementById("domainList1");
  let domainList2 = document.getElementById("domainList2");
  let domainList3 = document.getElementById("domainList3");

  // Calcular el tamaño de cada columna
  let columnSize = Math.ceil(domains.length / 3);

  // Agregar dominios a cada columna
  domains.forEach((domain, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = domain;

    if (index < columnSize) {
      domainList1.appendChild(listItem);
    } else if (index < columnSize * 2) {
      domainList2.appendChild(listItem);
    } else {
      domainList3.appendChild(listItem);
    }
  });
};