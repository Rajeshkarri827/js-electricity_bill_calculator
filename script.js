document.getElementById("calculator").addEventListener("submit", function(event) {
    event.preventDefault();

    let units_p = (document.getElementById("units").value);
    let price = 0;
    units = parseFloat(units_p);
    console.log(units);

    if (units < 0) {
        document.getElementById("result").innerText = "Please enter a valid number of units.";
    } else if (units <= 30) {
        price = units * 1.9;
    } else if (units > 30 && units <= 75) {
        price = 30 * 1.9 + (units - 30) * 3;
    } else if (units > 75 && units <= 125) {
        price = 30 * 1.9 + 45 * 3 + (units - 75) * 4.5;
    } else if (units > 125 && units <= 225) {
        price = 30 * 1.9 + 45 * 3 + 50 * 4.5 + (units - 125) * 6;
    } else if (units > 225 && units <= 400) {
        price = 30 * 1.9 + 45 * 3 + 50 * 4.5 + 100 * 6 + (units - 225) * 8.75;
    } else if (units > 400) {
        price = 30 * 1.9 + 45 * 3 + 50 * 4.5 + 100 * 6 + 175 * 8.75 + (units - 400) * 9.75;
    } else {
        console.log("Please enter valid units");
    }

    document.getElementById("result").innerText = `Total Price: ₹${price.toFixed(2)}`;
});
