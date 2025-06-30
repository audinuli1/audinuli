async function loadStats() {
  try {
    const response = await fetch('/api/employee-stats');
    const data = await response.json();

    // Преобразуем объект в массив
    const employees = Object.entries(data).map(([id, stats]) => ({
      employee_id: id,
      ...stats
    }));

    const employeesList = document.getElementById('employeesList');
    const totalAmount = document.getElementById('totalAmount');

    const total = employees.reduce((sum, emp) => sum + emp.total_earned, 0);
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
