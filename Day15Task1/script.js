document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let foodOptions = document.querySelectorAll('input[name="food"]:checked');
    let foods = [];
    foodOptions.forEach(option => foods.push(option.value));
    
    if (foods.length < 2) {
        alert("Please choose at least 2 food options.");
        return;
    }

    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    let tableBody = document.getElementById('tableBody');
    let newRow = tableBody.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);
    let cell9 = newRow.insertCell(8);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = email;
    cell4.innerHTML = address;
    cell5.innerHTML = pincode;
    cell6.innerHTML = gender;
    cell7.innerHTML = foods.join(", ");
    cell8.innerHTML = state;
    cell9.innerHTML = country;

    document.getElementById('dataForm').reset();
});