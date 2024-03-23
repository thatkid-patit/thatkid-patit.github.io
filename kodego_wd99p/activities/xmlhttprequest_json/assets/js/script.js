let xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            displayTable(JSON.parse(xhr.responseText));
        }else{
            alert("Failed to get 200 Ok!")
        }
    }
}
pgSel(0);

function displayTable(tData) {
    let table = "";
    for(const rData in tData.data) {
        table += `
            <tr>
                <th class="head">${tData.data[rData].id}</th>
                <td>${tData.data[rData].title}</td>
                <td>${tData.data[rData].firstname}</td>
                <td>${tData.data[rData].lastname}</td>
                <td>${tData.data[rData].practice_name}</td>
                <td>${tData.data[rData].provider_specialty}</td>
                <td>${tData.data[rData].contact_number}</td>
                <td>${tData.data[rData].email}</td>
            </tr>
        `;
    }
    document.querySelector("#table-body").innerHTML = table;
};

function pgSel(pgNum) {
    document.querySelector("#page-1").classList.remove("x-active");
    document.querySelector("#page-2").classList.remove("x-active");
    document.querySelector("#page-3").classList.remove("x-active");
    document.querySelector("#page-4").classList.remove("x-active");
    if(pgNum == "1") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=1", true);
        xhr.send();
        document.querySelector("#page-1").classList.add("x-active");
    }else if(pgNum == "2") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=2", true);
        xhr.send();
        document.querySelector("#page-2").classList.add("x-active");     
    }else if(pgNum == "3") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=3", true);
        xhr.send();
        document.querySelector("#page-3").classList.add("x-active");
    }else if(pgNum == "4") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=4", true);
        xhr.send();
        document.querySelector("#page-4").classList.add("x-active");
    }else{
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=1", true);
        xhr.send();
        document.querySelector("#page-1").classList.add("x-active");
    }
}

function filter() {
    // searchFilter = document.getElementById("#search-bar").value;
    console.log("hello");
}

// function filter() {
//     // let searchFilter = document.querySelector("#search-bar").value;
//     // if(document.getElementById("search-filter").value = 1) {
//     //     jsonData = JSON.parse(xhr.responseText).data.filter(function (fname) {
//     //         return fname.firstname.toLowerCase().includes(searchFilter.toLowerCase());
//     //     })
//     // }
//     console.log(searchFilter);
// }

