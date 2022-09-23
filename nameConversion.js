document.getElementById("convert-btn").addEventListener("click", function () {
  const fullName = document.getElementById("text").value;

  //Camel Case
  const [firstName, lastName] = fullName.toLowerCase().split(" ");

  const camelCase = `${firstName}${lastName.replace(
    lastName[0],
    lastName[0].toUpperCase()
  )}`;

  document.getElementById("camel-case").innerText = camelCase;

  //Pascal case
  const pascalCase = fullName
    .toLowerCase()
    .split(" ")
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join("");

  document.getElementById("pascal-case").innerText = pascalCase;

  //Snake Case
  const snakeCase = fullName.toLowerCase().split(" ").join("_");

  document.getElementById("snake-case").innerText = snakeCase;

  //Screaming Snake Case
  const ScreamingSnakeCase = fullName.toUpperCase().split(" ").join("_");

  document.getElementById("screaming-snake-case").innerText =
    ScreamingSnakeCase;

  //Kebab Case
  const kebabCase = fullName.toLowerCase().split(" ").join("-");

  document.getElementById("kebab-case").innerText = kebabCase;

  //Kebab Case
  const screamingKebabCase = fullName.toUpperCase().split(" ").join("-");

  document.getElementById("screaming-kebab-case").innerText =
    screamingKebabCase;
});
