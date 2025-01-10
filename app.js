window.onload = function () {
    document.getElementById("generateBtn").addEventListener("click", () => {
        // Esto es para capturar los valores de los inputs del HTML:
        const pronouns = document.getElementById("inputPronoun").value.split(",");
        const adjectives = document.getElementById("inputAdj").value.split(",");
        const nouns = document.getElementById("inputNoun").value.split(",");
        const tlds = document.getElementById("inputTLD").value.split(",");

        // Logica para generar la lista de dominios:
        const domains = [];
        for (let pronoun of pronouns) {
            for (let adj of adjectives) {
                for (let noun of nouns) {
                    for (let tld of tlds) {
                        domains.push(`${pronoun.trim()}${adj.trim()}${noun.trim()}${tld.trim()}`);
                    }
                }
            }
        }

        // Esto se usa para limpiar las listas antes de agregar nuevos dominios:
        document.getElementById("domainList1").innerHTML = "";
        document.getElementById("domainList2").innerHTML = "";
        document.getElementById("domainList3").innerHTML = "";

        // Con esto distribuimos los dominios en las columnas:
        const columnSize = Math.ceil(domains.length / 3);
        domains.forEach((domain, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = domain;

            if (index < columnSize) {
                document.getElementById("domainList1").appendChild(listItem);
            } else if (index < columnSize * 2) {
                document.getElementById("domainList2").appendChild(listItem);
            } else {
                document.getElementById("domainList3").appendChild(listItem);
            }
        });
    });
};