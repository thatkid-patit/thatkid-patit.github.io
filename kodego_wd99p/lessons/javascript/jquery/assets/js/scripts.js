let ArrDoctors = [];
$(document).ready(function() {
    fetch();

    $("[data-trigger]").on('click',  function() {
        var  Action = $(this).attr('data-trigger');
        
        switch(Action) {
            case "add":
                let newId = ArrDoctors.length + 1;
                ArrDoctors.push({
                    id: newId,
                    title: "Mr",
                    firstname: newId + 'Jesthony',
                    lastname: 'Morales',
                    email: 'jesthony.morales@kodego.com',
                    contact_number: '091234567891'
                });

                DrawTable(ArrDoctors);
            break;

            case "delete":
                ArrDoctors.pop();

                DrawTable(ArrDoctors);
            break;
        }

        console.log(Action);
    });
});

function fetch() {
    $.ajax({
        type: 'GET',
        url: 'https://api.mydrsappt.com/api/v1/doctors',
        beforeSend: function() {
            $("#div-data").html(`<div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`);
        },
        success: function(result) {
            let doctors = result.data;
            for(const doctor in doctors) {
                ArrDoctors.push(doctors[doctor]);
            }

            DrawTable(ArrDoctors);
        },
        error: function(error) {
            console.log(error.responseText);
        }
    });
}

function DrawTable(ArrayOfDoctors) {
    let Table = `<table class='table table-dark table-hover  table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    `;
    for (const doctor of ArrayOfDoctors) {
        Table += `<tbody>
                    <tr>
                        <td>${doctor.id}</td>
                        <td>${doctor.title}</td>
                        <td>${doctor.firstname}</td>
                        <td>${doctor.lastname}</td>
                        <td>${doctor.email}</td>
                        <td>${doctor.contact_number}</td>
                    </tr>
                </tbody>`
    }

    Table += `</table>`;
    $("#div-data").html(Table);
}