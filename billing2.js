document.addEventListener("DOMContentLoaded", function () {
    let rowCount = 1;
    const addRowButton = document.querySelector(".add-row");
    const calculateTotalButton = document.getElementById("calculate-total");
    const invoiceTotal = document.getElementById("invoice-total");
  
    addRowButton.addEventListener("click", addRow);
    calculateTotalButton.addEventListener("click", calculateTotal);
  
    function addRow() {
      const table = document.querySelector("table");
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td><button type="button" class="delete-row">Delete</button></td>
        <td><input type="text" class="serial-no" /></td>
        <td><input type="text" class="product-name" /></td>
        <td><input type="number" class="quantity" /></td>
        <td><input type="number" class="price" /></td>
        <td><input type="text" class="total" readonly /></td>
      `;
      table.appendChild(newRow);
      rowCount++;
    }
  
    function calculateTotal() {
      let total = 0;
      const rows = document.querySelectorAll("tr");
      for (let i = 1; i < rows.length; i++) {
        const quantity = parseFloat(rows[i].querySelector(".quantity").value);
        const price = parseFloat(rows[i].querySelector(".price").value);
        const rowTotal = quantity * price;
        rows[i].querySelector(".total").value = rowTotal.toFixed(2);
        total += rowTotal;
      }
      invoiceTotal.textContent = total.toFixed(2);
    }
  
    document.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("delete-row")) {
        const row = e.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
        calculateTotal();
      }
    });
  });
  