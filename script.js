const d = document,
  $table = d.querySelector(".table"),
  $template = d.getElementById("template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.name;
      $template.querySelector(".email").textContent = el.email;
      $template.querySelector(".dir").textContent = $el.address.city;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

getAll();
