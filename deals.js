document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("https://cash-bot.vercel.app/api/deals");
  const data = await response.json();

  const container = document.getElementById("deals-list");
  const deals = Object.values(data);

  deals.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  deals.forEach((deal, index) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl p-4 shadow";

    card.innerHTML = `
      <div class="text-lg font-semibold mb-1">#${index + 1} — ${deal.name}</div>
      <div><strong>Дата:</strong> ${new Date(deal.timestamp).toLocaleString()}</div>
      <div><strong>Сумма RUB:</strong> ${deal.rub.toLocaleString()}</div>
      <div><strong>% Обнала:</strong> ${deal.percent}%</div>
      <div><strong>Курс:</strong> ${deal.rate}</div>
      <div><strong>Чистыми $:</strong> ${deal.clean_usd.toFixed(2)}</div>
      <div><strong>Распределено:</strong> $${deal.total_distributed.toFixed(2)}</div>
      <div><strong>Сотрудники:</strong> ${deal.employees.join(", ")}</div>
    `;
    container.appendChild(card);
  });
});
