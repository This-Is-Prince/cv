import "./style.css";

const contactMediums = document.querySelectorAll(".contact-medium__value");

contactMediums.forEach((value) => {
  value.addEventListener("click", () => {
    if (value.textContent.includes("Abohar")) {
      navigator.clipboard.writeText(`Village - Dharampura,
      District - Abohar,Tehsil - Fazilka, State - Punjab ,Country - Punjab`);
    } else if (value.textContent.includes("this.is.kumar.prince")) {
      navigator.clipboard.writeText("this.is.kumar.prince@gmail.com");
    } else {
      navigator.clipboard.writeText(value.textContent);
    }
  });
});

const column2 = document.querySelectorAll(".column-2__section");

column2.forEach((value) => {
  value.addEventListener("mouseenter", () => {
    column2.forEach((newValue) => {
      if (newValue !== value) {
        newValue.style.opacity = "0.5";
      }
    });
  });
  value.addEventListener("mouseleave", () => {
    column2.forEach((newValue) => {
      newValue.style.opacity = "1";
    });
  });
});
