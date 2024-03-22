let xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            let table = "";
            let tData = JSON.parse(xhr.responseText);
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
        }else{
            alert("Failed to get 200 Ok!")
        }
    }
}
pgSel(1);

function pgSel(pgNum) {
    if(pgNum == "1") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=1", true);
        xhr.send();
        document.querySelector("#page-nav").innerHTML = `
            <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item"><a class="page-link x-active bg-dark border-warning text-warning" href="#" onclick="pgSel(1);">1</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(2);">2</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(3);">3</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(4);">4</a></li>
            </ul>`;
    }else if(pgNum == "2") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=2", true);
        xhr.send();
        document.querySelector("#page-nav").innerHTML = `
            <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item"><a class="page-link bg-dark border-warning text-warning" href="#" onclick="pgSel(1);">1</a></li>
                <li class="page-item"><a class="page-link x-active bg-dark border-warning text-white" href="#" onclick="pgSel(2);">2</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(3);">3</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(4);">4</a></li>
            </ul>`;
    }else if(pgNum == "3") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=3", true);
        xhr.send();
        document.querySelector("#page-nav").innerHTML = `
            <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item"><a class="page-link bg-dark border-warning text-warning" href="#" onclick="pgSel(1);">1</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(2);">2</a></li>
                <li class="page-item"><a class="page-link x-active bg-dark border-warning text-white" href="#" onclick="pgSel(3);">3</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(4);">4</a></li>
            </ul>`;
    }else if(pgNum == "4") {
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=4", true);
        xhr.send();
        document.querySelector("#page-nav").innerHTML = `
            <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item"><a class="page-link bg-dark border-warning text-warning" href="#" onclick="pgSel(1);">1</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(2);">2</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(3);">3</a></li>
                <li class="page-item"><a class="page-link x-active bg-dark border-warning text-white" href="#" onclick="pgSel(4);">4</a></li>
            </ul>`;
    }else{
        xhr.open("GET", "https://api.mydrsappt.com/api/v1/doctors?page=1", true);
        xhr.send();
        document.querySelector("#page-nav").innerHTML = `
            <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item"><a class="page-link x-active bg-dark border-warning text-warning" href="#" onclick="pgSel(1);">1</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(2);">2</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(3);">3</a></li>
                <li class="page-item"><a class="page-link bg-dark border-warning text-white" href="#" onclick="pgSel(4);">4</a></li>
            </ul>`;
    }
}
