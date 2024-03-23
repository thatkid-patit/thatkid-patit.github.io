let xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            jsonData = JSON.parse(xhr.responseText).data;
            displayTable(jsonData);
        }else{
            alert("Failed to get 200 Ok!")
        }
    }
}
pgSel(0);

function displayTable(tData) {
    let table = "";
    for(const rData in tData) {
        table += `
            <tr>
                <th class="head">${tData[rData].id}</th>
                <td>${tData[rData].title}</td>
                <td>${tData[rData].firstname}</td>
                <td>${tData[rData].lastname}</td>
                <td>${tData[rData].practice_name}</td>
                <td>${tData[rData].provider_specialty}</td>
                <td>${tData[rData].contact_number}</td>
                <td>${tData[rData].email}</td>
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

let selectFilter = document.querySelector("#search-filter");
selectFilter.addEventListener('change', function () {
    filterReady = selectFilter.value;
    document.querySelector("#filter-output").value = filterReady;
    document.querySelector("#search-bar").value = "Search";
    document.querySelector("#search-bar").focus();
})

let typeKeyword = document.querySelector("#search-bar");
typeKeyword.addEventListener('keyup', function() {
    keyWordOutput = typeKeyword.value;
    if(document.querySelector("#filter-output").value == 0) {
        jsonData = JSON.parse(xhr.responseText).data;
    }else if(document.querySelector("#filter-output").value == 1) {
        jsonData = JSON.parse(xhr.responseText).data.filter(function (fname) {
            return fname.firstname.toLowerCase().includes(keyWordOutput.toLowerCase());
        });
    }else if(document.querySelector("#filter-output").value == 2) {
        jsonData = JSON.parse(xhr.responseText).data.filter(function (lname) {
            return lname.lastname.toLowerCase().includes(keyWordOutput.toLowerCase());
        });
    }
    displayTable(jsonData);
})




// let searchFilter = document.querySelector("#search-bar");
// searchFilter.addEventListener('keyup', function() {
//     searchKeyWord = searchFilter.value;
//     if()
    
// })

// let searchFilter = document.querySelector("#search-bar");
// searchFilter.addEventListener('keyup',function() {
//     let filterOutput = document.querySelector("#search-filter").value;
//     if(filterOutput = 0) {
//         jsonData = JSON.parse(xhr.responseText).data;
//     }else if(filterOutput = 1) {
//         jsonData = JSON.parse(xhr.responseText).data.filter(function (fname) {
//             return fname.firstname.toLowerCase().includes(searchFilter.value.toLowerCase());
//         })
//     }else if(filterOutput = 2) {
//         jsonData = JSON.parse(xhr.responseText).data.filter(function (lname) {
//             return lname.lastname.toLowerCase().includes(searchFilter.value.toLowerCase());
//         })
//     }
//     displayTable(jsonData);
// })

// let filterOutput = document.querySelector("#search-filter").value;
// let searchFilter = document.querySelector("#search-bar");
// if(filterOutput = 1) {
//     searchFilter.addEventListener('keyup',function() {
//         console.log(filterOutput);
//         // jsonData = JSON.parse(xhr.responseText).data.filter(function (fname) {
//         //     return fname.firstname.toLowerCase().includes(searchFilter.value.toLowerCase());
//         // })
//         // displayTable(jsonData);
//     })   
// }

// if(filterOutput = 2) {
//     searchFilter.addEventListener('keyup',function() {
//         console.log(filterOutput);
//         // jsonData = JSON.parse(xhr.responseText).data.filter(function (lname) {
//         //     return lname.lastname.toLowerCase().includes(searchFilter.value.toLowerCase());
//         // })
//         // displayTable(jsonData);
//     })
// }

// if(filterOutput = 0) {
//     searchFilter.addEventListener('keyup',function() {
//         console.log(filterOutput);
//         // jsonData = JSON.parse(xhr.responseText).data;
//         // displayTable(jsonData);
//     })
// }