const btnResolverEl = document.querySelector("#btn-resolver");

btnResolverEl.addEventListener("click", () => {
  const a = document.querySelector("#coeficiente-a").value;
  const b = document.querySelector("#coeficiente-b").value;
  const c = document.querySelector("#coeficiente-c").value;

  if (a == 0) {
    alert("A equação não é de 2º grau, coloque um valor diferente de 0");
    return;
  }

  const delta = Math.pow(b, 2) - 4 * a * c;

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
  document.querySelector("#resultado-numero-de-raizes").value = delta === 0 ? 1 : 2;
  document.querySelector("#resultado-virada-para").value = a > 0 ? "cima" : "baixo";

  const xv = -(b / 2 * a);
  const yv = -(delta / 4 * a);

  document.querySelector("#resultado-vertice").value = `(${xv}, ${yv})`;
  
  if (delta >= 0) {
    document.querySelector("#resultado-x1").value = x1;
    document.querySelector("#resultado-x2").value = x2;
  } else if (delta < 0) {
    document.querySelector("#resultado-x1").value = "";
    document.querySelector("#resultado-x2").value = "";
  }

  document.querySelector("#resultado-delta").value = delta;
});