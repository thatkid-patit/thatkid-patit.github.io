document.getElementById("side-toggler").addEventListener('click', function() {
    document.getElementById("left").classList.toggle("toggleOn");
    document.getElementById("right").classList.toggle("toggleOn");
});

xhr = new XMLHttpRequest();
xhr.open("GET", "assets/data/db.json", true);
xhr.send();

xhr.onload = function() {
    if(this.readyState == 4 && this.status == 200) {

        // data parsing
        let jsonData = JSON.parse(xhr.responseText);
        let prospectData = jsonData.prospect;
        let userData = jsonData.user;
        let productData = jsonData.product;
        let arrDashboardSales = [];
        let arrDashboardProducts = [];
        let arrDashboardPending = [];
        let arrDashboardLeads = [];
        let arrTableDataConfig = [];
        let arrMyProducts = [];
        let arrMyTeam = [];
        for(const product of productData) {
            arrMyProducts.push(product);
        }
        for(const user of userData) {
            arrMyTeam.push(user);
        }
        for(const prospect of prospectData) {
            if(prospect.status_id == 4) {
                arrDashboardProducts.push(prospect);
            }
            if(prospect.status_id == 3) {
                arrDashboardPending.push(prospect);
            }
            if(prospect.status_id == 1) {
                arrDashboardLeads.push(prospect);
            }
            for(const product of productData) {
                if(prospect.status_id == 4 && prospect.product_id == product.id) {
                    arrDashboardSales.push(product.price);
                }
            }
            arrTableDataConfig.push(prospect);
        }
        
        
        let dashboardSales = 0;
        for(var i = 0; i < arrDashboardSales.length; i++) { 
            dashboardSales += parseFloat(arrDashboardSales[i]);
        };

        // onload commands
        loadDashboard(dashboardSales, arrDashboardProducts.length, arrDashboardPending.length, arrDashboardLeads.length);
        document.querySelector("#on-load").classList.add("active");

        // side-bar commands
        document.querySelectorAll('.side-menu-item').forEach(function(sideBarItem) {
            sideBarItem.addEventListener('click', function() {
                document.querySelector('.active')?.classList.remove('active');
                this.classList.add('active');
                if(this.innerText.toLowerCase() == "dashboard") {
                    loadDashboard(dashboardSales, arrDashboardProducts.length, arrDashboardPending.length, arrDashboardLeads.length);   
                }else if(this.innerText.toLowerCase() == "reports") {
                    loadReports();
                }else if(this.innerText.toLowerCase() == "deals status") {
                    loadDealStatus();
                    drawDealsStatusTable(arrTableDataConfig);
                }else if(this.innerText.toLowerCase() == "scheduled calls") {
                    loadScheduledCalls();
                    drawScheduledCallsTable(arrTableDataConfig);
                }else if(this.innerText.toLowerCase() == "leads bank") {
                    loadLeadsBank();
                    drawLeadsBankTable(arrTableDataConfig);
                }else if(this.innerText.toLowerCase() == "my products") {
                    loadMyProducts();
                    drawMyProductsCard(arrMyProducts);
                }else if(this.innerText.toLowerCase() == "my team") {
                    loadMyTeam();
                    drawMyTeamCard(arrMyTeam)
                }
            })
        })
    }
}

//draw table commands
function drawDealsStatusTable(a) {
    tr = "";
    for(const b of a) {
        if(b.status_id == 1 || b.status_id == 2) {
            continue;
        }
        let btn = "";
        if(b.status_id == 3) {
            btn = "Pending";
        }else if(b.status_id == 4) {
            btn = "Delivered";
        }else if(b.status_id == 5) {
            btn = "Cancelled";
        }
        tr += `
            <tr>
                <td>${b.first_name}</td>
                <td>${b.last_name}</td>
                <td>${b.contact}</td>
                <td>${b.province}</td>
                <td class='btn-action'>
                    <div>
                        <button class='btn-${btn.toLowerCase()}'>${btn}</button>
                        <button class='btn-pull'>P u l l</button>
                    </div>
                </td>
            </tr>
        `;
    }
    document.querySelector("#table-deal-status").innerHTML = tr;
}

function drawScheduledCallsTable(a) {
    tr = "";
    for(const b of a) {
        if(b.status_id !== 2 ) {
            continue;
        }
        tr += `
            <tr>
                <td>${b.first_name}</td>
                <td>${b.last_name}</td>
                <td>${b.contact}</td>
                <td>${b.province}</td>
                <td>${"underdevelopment"}</td>
                <td class='btn-action'>
                    <div>
                        <button class='btn-pull'>P u l l</button>
                    </div>
                </td>
            </tr>
        `;
    }
    document.querySelector("#table-scheduled-calls").innerHTML = tr;
}

function drawLeadsBankTable(a) {
    tr = "";
    for(const b of a) {
        if(b.status_id !== 1 ) {
            continue;
        }
        tr += `
            <tr>
                <td>${b.first_name}</td>
                <td>${b.last_name}</td>
                <td>${b.contact}</td>
                <td>${b.province}</td>
                <td class='btn-action'>
                    <div>
                        <button class='btn-pull'>P u l l</button>
                    </div>
                </td>
            </tr>
        `;
    }
    document.querySelector("#table-leads-bank").innerHTML = tr;
}

//draw cards command
function drawMyProductsCard(a) {
    deck = "";
    for(const b of a) {
        deck += `
            <div class='card'>
                <section class='prod-categ'>
                    ${b.type}
                </section>
                <section class='prod-name bg-a'>
                    ${b.product_name}
                </section>
                <section class='prod-price'>
                    $ ${b.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </section>
                <section class='prod-config'>
                    <li><a href="">Edit</a></li>
                    <li><a href="">Delete</a></li>
                </section>
            </div>
        `;
    }
    document.querySelector(".product-container").innerHTML = deck;
}

function drawMyTeamCard(a) {
    deck = "";
    for(const b of a) {
        deck += `
            <div class='card'>
                <section class='teammate-categ'>
                    ${b.type}
                </section>
                <section class='teammate-name bg-a'>
                    ${b.first_name} ${b.last_name}
                </section>
                <section class='teammate-config'>
                    <li><a href="">Edit</a></li>
                    <li><a href="">Delete</a></li>
                </section>
            </div>
        `;
    }
    document.querySelector(".teammate-container").innerHTML = deck;
}

// page load functions
function loadDashboard(a = 0, b = 0, c = 0, d = 0) {
    let main = `
    <section id="dash-cards">
        <div class='card'>
            <i class='bx bx-money ic-a'></i>
            <div>
                <h3>$ ${a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h5>To Date</h5>
            </div>
        </div>
        <div class='card'>
            <i class='bx bx-category ic-a'></i>
            <div>
                <h3>${b.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h5>Products Sold</h5>
            </div>
        </div>
        <div class='card'>
            <i class='bx bxs-truck ic-a'></i>
            <div>
                <h3>${c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h5>In-transit</h5>
            </div>
        </div>
        <div class='card'>
            <i class='bx bx-library ic-a'></i>
            <div>
                <h3>${d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
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
                    <thead>
                        <tr>
                            <th class='bg-a'>First Name</th>
                            <th class='bg-a'>Last Name</th>
                            <th class='bg-a'>Contact Number</th>
                            <th class='bg-a'>Province</th>
                            <th class='bg-a'>Status/Action</th>
                        </tr>
                    </thead>
                    <tbody id="table-deal-status">
                    </tbody>
                </table>
    `;
    document.querySelector("#content-area").innerHTML = main;
}

function loadScheduledCalls() {
    let main = `
            <div id='callback-list-container' class='table'>
                <table>
                    <thead>
                        <tr>
                            <th class='bg-a'>First Name</th>
                            <th class='bg-a'>Last Name</th>
                            <th class='bg-a'>Contact Number</th>
                            <th class='bg-a'>Province</th>
                            <th class='bg-a'>Call Schedule</th>
                            <th class='bg-a'>Action</th>
                        </tr>
                    </thead>
                    <tbody id="table-scheduled-calls">
                    </tbody>
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
                    <thead>
                        <tr>
                            <th class='bg-a'>First Name</th>
                            <th class='bg-a'>Last Name</th>
                            <th class='bg-a'>Contact Number</th>
                            <th class='bg-a'>Province</th>
                            <th class='bg-a'>Action</th>
                        </tr>
                    </thead>
                    <tbody id="table-leads-bank">
                    </tbody>
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
            </section>
    `;
    document.querySelector("#content-area").innerHTML = main;
}


