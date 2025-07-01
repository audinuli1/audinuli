document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("https://be035b8b-7ef1-4929-bba8-f45362e2dc77-00-2br6m7r9brek6.picard.replit.dev/api/deals");
  const data = await response.json();

  const container = document.getElementById("deals-list");
  const deals = Object.values(data);

  deals.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  deals.forEach((deal, index) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl p-4 shadow";

    card.innerHTML = `
  <h2>💼 ${deal.name || 'Без названия'}</h2>
  <p>💸 <strong>Сумма:</strong> ${deal.rubAmount} ₽</p>
  <p>📉 <strong>Обналичка:</strong> ${deal.percent} %</p>
  <p>💱 <strong>Курс:</strong> ${deal.rate}</p>
  <p>👥 <strong>Сотрудники:</strong> ${deal.people.join(', ')}</p>
  <p>🕒 <strong>Дата:</strong> ${new Date(deal.timestamp || deal.date).toLocaleString()}</p>
`;
    container.appendChild(card);
  });
});
