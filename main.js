let form = document.querySelector("form");
let input = document.querySelector("input");
let wrapper = document.querySelector(".wrapper");

async function getName(ism) {
  try {
    let response = await fetch(`https://api.nationalize.io/?name=${ism}`);
    let data = await response.json();
    wrapper.innerHTML = null;
    data.country.map((item) => {
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      h1.textContent = item.country_id;
      h2.textContent = String(item.probability).slice(0, 4);
      wrapper.append(h1, h2);
    });
  } catch (error) {
    console.log(error);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getName(input.value.toLowerCase());
  input.value = null;
});
