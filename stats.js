async function loadStats() {
  try {
    const response = await fetch('https://be035b8b-7ef1-4929-bba8-f45362e2dc77-00-2br6m7r9brek6.picard.replit.dev/api/employee-stats');
    const data = await response.json();

    // Преобразуем объект в массив
    const employees = Object.entries(data).map(([id, stats]) => ({
      employee_id: id,
      ...stats
    }));

    const employeesList = document.getElementById('employeesList');
    const totalAmount = document.getElementById('totalAmount');

    const total = Array.isArray(employees)
  ? employees.reduce((acc, emp) => acc + emp.total_payout, 0)
  : 0;
    totalAmount.textContent = `$${total.toFixed(2)}`;

    employeesList.innerHTML = employees.map(emp => `
      <div class="employee-card">
        <div class="employee-id">Сотрудник №${emp.employee_id}</div>
        <div class="deals-count">${emp.deals_count} сделок</div>
        <div class="earnings">$${emp.total_earned.toFixed(2)}</div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Ошибка загрузки статистики:', error);
  }
}

loadStats();
