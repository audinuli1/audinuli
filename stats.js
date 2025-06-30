fetch("https://be035b8b-7ef1-4929-bba8-f45362e2dc77-00-2br6m7r9brek6.picard.replit.dev/api/employee-stats")
  .then(response => response.json())
  .then(data => {
    console.log("📊 Статистика получена:", data);

    // Здесь можно будет позже обновлять DOM-элементы на странице, например:
    // document.getElementById("totalDeals").textContent = data.total_deals;
    // document.getElementById("totalAmount").textContent = data.total_amount;
  })
  .catch(error => {
    console.error("❌ Ошибка при получении статистики:", error);
  });
