document.getElementById("submit-btn").addEventListener("click", () => {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const birthDay = parseInt(document.getElementById("birth-day").value);
  const birthMonth = parseInt(document.getElementById("birth-month").value);
  const birthYear = parseInt(document.getElementById("birth-year").value);

  if (!firstName || !lastName || !birthDay || !birthMonth || !birthYear) {
    alert("Please fill out all fields.");
    return;
  }

  const zodiac = getZodiacSign(birthDay, birthMonth);
  if (!zodiac) {
    alert("Invalid birthdate. Could not match zodiac.");
    return;
  }

  document.getElementById("zodiac-name").textContent = `${firstName} ${lastName},your Zodiac sign is ${zodiac.name}`;
  document.getElementById("complement-message").textContent = `Complement: ${zodiac.complement}`;
  document.getElementById("empathy-message").textContent = `Empathy: ${zodiac.empathy}`;
  document.getElementById("recommendation").textContent = `Recommendation: ${zodiac.recommendation}`;
  document.getElementById("zodiac-card").style.display = "block";
});


const zodiacData = [
  {
    name: "Aquarius",
    startDate: { month: 1, day: 20 },
    endDate: { month: 2, day: 18 },
    complement: "Your creativity is limitless!",
    empathy: "You bring light to those around you, even on their darkest days.",
    recommendation:
      "Embrace new challenges that allow your innovative spirit to shine!"
  },
  {
    name: "Pisces",
    startDate: { month: 2, day: 19 },
    endDate: { month: 3, day: 20 },
    complement:
      "Your empathy knows no bounds, making the world a kinder place.",
    empathy: "Trust your intuition, it guides you to make the right decisions.",
    recommendation:
      "Spend time with nature to rejuvenate your spirit and creativity."
  },
  {
    name: "Aries",
    startDate: { month: 3, day: 21 },
    endDate: { month: 4, day: 19 },
    complement: "Your energy and enthusiasm are contagious!",
    empathy: "You’re a natural leader, but remember to listen to others too.",
    recommendation:
      "Take time to plan before rushing into projects, it’ll lead to better results."
  },
  {
    name: "Taurus",
    startDate: { month: 4, day: 20 },
    endDate: { month: 5, day: 20 },
    complement:
      "You are steadfast and reliable, a rock for your friends and family.",
    empathy: "Your loyalty and warmth touch everyone you meet.",
    recommendation:
      "Explore creative outlets that help you express your thoughts and emotions."
  }
];

function Date(dateObj) {
  return { month: dateObj.month, day: dateObj.day };
}

function getZodiacSign(day, month) {
  for (const zodiac of zodiacData) {
    const start = zodiac.startDate;
    const end = zodiac.endDate;

    if (
      (month === start.month && day >= start.day) ||
      (month === end.month && day <= end.day) ||
      (month > start.month && month < end.month)
    ) {
      return zodiac;
    }
  }
  return null;
}

