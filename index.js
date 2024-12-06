let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

        // Чыгымдарды кошуу функциясы
        function addExpense() {
            const expenseValue = document.getElementById('expenseValue').value.trim();
            const expenseReason = document.getElementById('expenseReason').value.trim();

            if (expenseValue !== '' && expenseReason !== '') {
                const expense = {
                    value: parseFloat(expenseValue),
                    reason: expenseReason,
                    date: new Date()
                };

                expenses.push(expense);
                expenses.sort((a, b) => a.date - b.date); // Убакыт боюнча сорттоо

                // localStorageка чыгымдарды сактоо
                localStorage.setItem('expenses', JSON.stringify(expenses));

                displayExpenses();
                document.getElementById('expenseValue').value = ''; // Киргизүү формасын тазалоо
                document.getElementById('expenseReason').value = ''; // Киргизүү формасын тазалоо
            }
        }

        // Чыгымдарды экранда көрсөтүү функциясы
        function displayExpenses() {
            const expenseList = document.getElementById('expenseList');
            expenseList.innerHTML = ''; // Эски тизмени тазалоо

            expenses.forEach(expense => {
                const expenseItem = document.createElement('div');
                expenseItem.classList.add('expense');
                expenseItem.textContent = `${expense.date.toLocaleString()}: ${expense.value} сом (${expense.reason})`;

                expenseList.appendChild(expenseItem);
            });
        }

        // Баштапкы жүктөө
        displayExpenses();


        