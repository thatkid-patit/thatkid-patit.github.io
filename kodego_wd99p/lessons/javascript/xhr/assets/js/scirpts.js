let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {
        if (xhr.status == 200)
        {
            let divs = "";
            let result = JSON.parse(xhr.responseText);

            for(const student in result) {
                divs += ` 
                        <div class="col-md-3">
                            <div class="card">
                                <img src="${result[student].photo}" class="card-img-top" style="height: 300px;">
                                <div class="card-body">
                                <h5 class="card-title">${result[student].name} - ${result[student].age}</h5>
                                <p class="card-text">
                                    ${result[student].year} - ${result[student].section}
                                </p>
                                </div>
                            </div>
                        </div>
                        `;
            }

            document.querySelector("#div-gallery").innerHTML = divs;
        } else {
            alert("failed to fetch data");
        }
    }
}
xhr.open("GET", "assets/file/students.json", true);
xhr.send();


function CallDogsApi() {
    let dogsxhr = new XMLHttpRequest();
    dogsxhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200)
            {
                let dogres = JSON.parse(dogsxhr.responseText);
                let dogdiv = ` 
                            <div class="col-md-3">
                                <div class="card">
                                    <img src="${dogres.message}" class="card-img-top" style="height: 300px;">
                                    <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text">
                                        DOG
                                    </p>
                                    </div>
                                </div>
                            </div>
                            `;

                document.querySelector("#dog-gallery").innerHTML = dogdiv;
            } else {
                alert("failed to fetch data");
            }
        }
    }
    dogsxhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    dogsxhr.send();
}

// CallDogsApi();
setInterval("CallDogsApi()", 5000);