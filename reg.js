let data_in_rows = JSON.parse(localStorage.getItem("Data")) || [];

// LOAD EXISTING DATA ON START
display_records();

document.querySelector("#add_records").addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const f_name = document.querySelector("#f_name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const qualification = document.querySelector("#qualification").value;
    const country = document.querySelector("#country").value;

    // VALIDATION
    if (!name || !f_name || !gender || !qualification || !country) {
        alert("Please fill all fields!");
        return;
    }

    let data = {
        Name: name,
        F_Name: f_name,
        Gender: gender.value,
        Qualification: qualification,
        Country: country
    };

    data_in_rows.push(data);

    localStorage.setItem("Data", JSON.stringify(data_in_rows));

    display_records();

    // RESET FORM
    document.querySelector("#name").value = "";
    document.querySelector("#f_name").value = "";
    document.querySelector("#qualification").value = "";
    document.querySelector("#country").value = "";

    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
});

// DISPLAY RECORDS
function display_records() {

    let Html = "";

    data_in_rows.forEach((data, index) => {
        Html += `
        <tr>
            <td>${data.Name}</td>
            <td>${data.F_Name}</td>
            <td>${data.Gender}</td>
            <td>${data.Qualification}</td>
            <td>${data.Country}</td>
            <td>
                <button onclick="delete_records(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.querySelector("#tb2").innerHTML = Html;
}

// DELETE RECORD
function delete_records(index) {
    data_in_rows.splice(index, 1);

    localStorage.setItem("Data", JSON.stringify(data_in_rows));

    display_records();
}