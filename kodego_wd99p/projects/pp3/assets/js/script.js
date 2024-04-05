document.getElementById("side-toggler").addEventListener('click', function() {
    document.getElementById("left").classList.toggle("toggleOn");
    document.getElementById("right").classList.toggle("toggleOn");
});

document.querySelectorAll('.side-menu-item').forEach(function(sideBarItem) {
    sideBarItem.addEventListener('click', function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
        if(this.innerText.toLowerCase() == "dashboard") {
            loadDashboard();
        }else if(this.innerText.toLowerCase() == "reports") {
            loadReports();
        }else if(this.innerText.toLowerCase() == "deals status") {
            loadDealStatus();
        }else if(this.innerText.toLowerCase() == "scheduled calls") {
            loadScheduleCalls();
        }else if(this.innerText.toLowerCase() == "leads bank") {
            loadLeadsBank();
        }else if(this.innerText.toLowerCase() == "my products") {
            loadMyProducts();
        }else if(this.innerText.toLowerCase() == "my team") {
            loadMyTeam();
        }
    })
})

xhr = new XMLHttpRequest();
xhr.open("GET", "assets/data/db.json", true);
xhr.send();

xhr.onload = function() {
    if(this.readyState == 4 && this.status == 200) {
        let jsonData = JSON.parse(this.responseText);
        let prospectData = jsonData.prospect;
        let userData = jsonData.user;
        let productData = jsonData.product;
        let statusData = jsonData.status;
        
        loadDashboard();
        document.querySelector("#on-load").classList.add("active");
    }
}

// page load functions
function loadDashboard() {
    let main = `
    <section id="dash-cards">
        <div class='card'>
            <i class='bx bx-money ic-a'></i>
            <div>
                <h3>$9,999</h3>
                <h5>This Month</h5>
            </div>
        </div>
        <div class='card'>
            <i class='bx bx-category ic-a'></i>
            <div>
                <h3>9,999</h3>
                <h5>Products Sold</h5>
            </div>
        </div>
        <div class='card'>
            <i class='bx bxs-truck ic-a'></i>
            <div>
                <h3>9,999</h3>
                <h5>In-transit</h5>
            </div>
        </div>
        <div class='card'>
            <i class='bx bx-library ic-a'></i>
            <div>
                <h3>9,999</h3>
                <h5>Cold Leads</h5>
            </div>
        </div>
    </section>
    <section id='dash-graphs'>
        <div class='graph'>
            <div id='sales-graph'>
            </div>
            <h3>Sales Trend</h3>
        </div>
        <div class='graph'>
            <div id='product-graph'>
            </div>
            <h3>Top Selling Product</h3>
        </div>
    </section>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadReports() {
    let main = `
            <section class='report-config-container'>
                <select name='select-data' id='select-data'>
                    <option value=''>Select Data</option>
                    <option value='report-sales'>Sales</option>
                    <option value='report-product'>Product</option>
                    <option value='report-people'>People</option>
                </select>
                <select name='select-chart' id='rselect-chart'>
                    <option value=''>Select Chart</option>
                    <option value='report-table'>Table</option>
                    <option value='report-bar'>Bar Graph</option>
                    <option value='report-line'>Line Graph</option>
                    <option value='report-pie'>Pie Chart</option>
                </select>
                <button class='bc-a'>
                    <i class='bx bx-customize'></i>
                </button> 
            </section>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadDealStatus() {
    let main = `
            <div id='deals-status-container' class='table'>
                <table>
                    <tr>
                        <th class='bg-a'>First Name</th>
                        <th class='bg-a'>Last Name</th>
                        <th class='bg-a'>Contact Number</th>
                        <th class='bg-a'>Province</th>
                        <th class='bg-a'>Status/Action</th>
                        </tr>
                    <tr>
                        <td>Gloria</td>
                        <td>de Jesus</td>
                        <td>09565412354</td>
                        <td>Oriental Mindoro</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-delivered'>Delivered</button>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Rodolfo</td>
                        <td>Macaraig</td>
                        <td>09855456332</td>
                        <td>Batangas</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-cancelled'>Cancelled</button>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Angelika</td>
                        <td>Aceveda</td>
                        <td>09963255414</td>
                        <td>Laguna</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pending'>In-Transit</button>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                </table>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadScheduleCalls() {
    let main = `
            <div id='callback-list-container' class='table'>
                <table>
                    <tr>
                        <th class='bg-a'>First Name</th>
                        <th class='bg-a'>Last Name</th>
                        <th class='bg-a'>Contact Number</th>
                        <th class='bg-a'>Province</th>
                        <th class='bg-a'>Call Schedule</th>
                        <th class='bg-a'>Action</th>
                        </tr>
                    <tr>
                        <td>Gloria</td>
                        <td>de Jesus</td>
                        <td>09565412354</td>
                        <td>Oriental Mindoro</td>
                        <td>Jan 01 2023 | 14:00</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Rodolfo</td>
                        <td>Macaraig</td>
                        <td>09855456332</td>
                        <td>Batangas</td>
                        <td>Jan 01 2023 | 14:00</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Angelika</td>
                        <td>Aceveda</td>
                        <td>09963255414</td>
                        <td>Laguna</td>
                        <td>Jan 01 2023 | 14:00</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                </table>     
            </div>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadLeadsBank() {
    let main = `
            <section class='form-btn-container'>
                <div>Add New Lead</div>
                <button class='bc-a'>
                    <i class='bx bx-list-plus'></i>
                </button>
            </section>
            <div id='lead-bank-container' class='table'>
                <table>
                    <tr>
                        <th class='bg-a'>First Name</th>
                        <th class='bg-a'>Last Name</th>
                        <th class='bg-a'>Contact Number</th>
                        <th class='bg-a'>Province</th>
                        <th class='bg-a'>Action</th>
                        </tr>
                    <tr>
                        <td>Gloria</td>
                        <td>de Jesus</td>
                        <td>09565412354</td>
                        <td>Oriental Mindoro</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Rodolfo</td>
                        <td>Macaraig</td>
                        <td>09855456332</td>
                        <td>Batangas</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Angelika</td>
                        <td>Aceveda</td>
                        <td>09963255414</td>
                        <td>Laguna</td>
                        <td class='btn-action'>
                            <div>
                                <button class='btn-pull'>P u l l</button>
                            </div>
                        </td>
                    </tr>
                </table>
                
            </div>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadMyProducts() {
    let main = `
            <section class='form-btn-container'>
                <div>Add New Product</div>
                <button class='bc-a'>
                    <i class='bx bxs-file-plus'></i>
                </button>
            </section>
            <section class='product-container'>
                <div class='card'>
                    <section class='prod-categ'>
                        Business Fiber
                    </section>
                    <section class='prod-name bg-a'>
                        50 MBPS
                    </section>
                    <section class='prod-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='prod-categ'>
                        Business Fiber
                    </section>
                    <section class='prod-name bg-a'>
                        50 MBPS
                    </section>
                    <section class='prod-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='prod-categ'>
                        Business Fiber
                    </section>
                    <section class='prod-name bg-a'>
                        50 MBPS
                    </section>
                    <section class='prod-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='prod-categ'>
                        Business Fiber
                    </section>
                    <section class='prod-name bg-a'>
                        50 MBPS
                    </section>
                    <section class='prod-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='prod-categ'>
                        Business Fiber
                    </section>
                    <section class='prod-name bg-a'>
                        50 MBPS
                    </section>
                    <section class='prod-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='prod-categ'>
                        Business Fiber
                    </section>
                    <section class='prod-name bg-a'>
                        50 MBPS
                    </section>
                    <section class='prod-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
            </section>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadMyTeam() {
    let main = `
            <section class='form-btn-container'>
                <div>Add New Teammate</div>
                <button class='bc-a'>
                    <i class='bx bxs-user-plus'></i>
                </button>
            </section>
            <section class='teammate-container'>
                <div class='card'>
                    <section class='teammate-categ'>
                        Admin
                    </section>
                    <section class='teammate-name bg-a'>
                        Yohanan Patricius
                    </section>
                    <section class='teammate-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='teammate-categ'>
                        Admin
                    </section>
                    <section class='teammate-name bg-a'>
                        Yohanan Patricius
                    </section>
                    <section class='teammate-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='teammate-categ'>
                        Admin
                    </section>
                    <section class='teammate-name bg-a'>
                        Yohanan Patricius
                    </section>
                    <section class='teammate-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='teammate-categ'>
                        Member
                    </section>
                    <section class='teammate-name bg-a'>
                        Yohanan Patricius
                    </section>
                    <section class='teammate-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
                <div class='card'>
                    <section class='teammate-categ'>
                        Member
                    </section>
                    <section class='teammate-name bg-a'>
                        Yohanan Patricius
                    </section>
                    <section class='teammate-config'>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Delete</a></li>
                    </section>
                </div>
            </section>
    `;
    document.querySelector("#content-area").innerHTML = main;
}


