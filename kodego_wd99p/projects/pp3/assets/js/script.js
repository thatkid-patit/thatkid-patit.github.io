// side-bar toggler
document.getElementById("side-toggler").addEventListener('click', () => {
    document.getElementById("left").classList.toggle("toggleOn");
    document.getElementById("right").classList.toggle("toggleOn");
});
// json data parsing
const Users = [];
const Prospects = [];
const Products = [];
const Statuses = [];
let parseData = () => {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "assets/data/db.json", true);
    xhr.send();
    xhr.onload = function() {
        if(this.readyState == 4 && this.status == 200) {
            let jsonData = JSON.parse(xhr.responseText);
            for(const user of jsonData.user) Users.push(user);
            for(const prospect of jsonData.prospect) Prospects.push(prospect);
            for(const product of jsonData.product) Products.push(product);
            for(const status of jsonData.status) Statuses.push(status);
            document.querySelector("#on-load").classList.add("active");
            loadMenuA(Prospects, Products);
        };
    };
};
parseData();
// side-bar menu toggler
document.querySelectorAll('.side-menu-item').forEach(sideMenu => {
    sideMenu.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        sideMenu.classList.add('active');
        if(sideMenu.innerText.toLowerCase() == "dashboard") {
            loadMenuA(Prospects,Products);
        }else if(sideMenu.innerText.toLowerCase() == "reports") {
            loadMenuB();
        }else if(sideMenu.innerText.toLowerCase() == "deals status") {
            loadMenuC();
            getDataC(Prospects);
            cFilter(Prospects);
        }else if(sideMenu.innerText.toLowerCase() == "scheduled calls") {
            loadMenuD();
            getDataD(Prospects);
            dFilter(Prospects);
        }else if(sideMenu.innerText.toLowerCase() == "leads bank") {
            loadMenuE();
            getDataE(Prospects);
            eFilter(Prospects);
        }else if(sideMenu.innerText.toLowerCase() == "my products") {
            loadMenuF();
            getDataF(Products);
            fFilter(Products);
        }else if(sideMenu.innerText.toLowerCase() == "my team") {
            loadMenuG();
            getDataG(Users);
            gFilter(Users);
        };
    });
});
// load side-bar menu data
let loadMenuA = (data1,data2) => {
    let delivered = [];
    let leads = [];
    let pending = [];
    for(const a of data1) {
        for(const b of data2) if(a.status_id == 4 && a.product_id == b.id) delivered.push(b.price);
        if(a.status_id == 1) leads.push(a);
        if(a.status_id == 3) pending.push(a);
    };
    let sales = 0;
    for(var x = 0; x < delivered.length; x++) sales += parseFloat(delivered[x]);
    document.querySelector("#content-area").innerHTML = `
        <section id="dash-cards">
            <div class='card'>
                <i class='bx bx-money ic-a'></i>
                <div>
                    <h3>$ ${sales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h5>To Date</h5>
                </div>
            </div>
            <div class='card'>
                <i class='bx bx-category ic-a'></i>
                <div>
                    <h3>${delivered.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h5>Products Sold</h5>
                </div>
            </div>
            <div class='card'>
                <i class='bx bxs-truck ic-a'></i>
                <div>
                    <h3>${pending.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h5>In-transit</h5>
                </div>
            </div>
            <div class='card'>
                <i class='bx bx-library ic-a'></i>
                <div>
                    <h3>${leads.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
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
        </section>`;
};
let loadMenuB = () => {
    document.querySelector("#content-area").innerHTML = `
        <section class='report-config-container'>
            <select name='select-data' id='select-data'>
                <option value=''>Select Data</option>
                <option value='report-sales'>Sales</option>
                <option value='report-product'>Product</option>
                <option value='report-people'>People</option>
            </select>
            <select name='select-chart' id='select-chart'>
                <option value=''>Select Chart</option>
                <option value='report-table'>Table</option>
                <option value='report-bar'>Bar Graph</option>
                <option value='report-line'>Line Graph</option>
                <option value='report-pie'>Pie Chart</option>
            </select>
            <button class='bc-a'>
                <i class='bx bx-customize'></i>
            </button> 
        </section>`;
};
let loadMenuC = () =>  {
    document.querySelector("#content-area").innerHTML = `
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
        </div>`;
};
let loadMenuD = () => {
    document.querySelector("#content-area").innerHTML = `
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
};
let loadMenuE = () => {
    document.querySelector("#content-area").innerHTML = `
        <section class='form-btn-container'>
            <div>Add New Lead</div>
            <button class='bc-a' onclick="getModalE2()">
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
};
let loadMenuF = ()  => {
    document.querySelector("#content-area").innerHTML = `
        <section class='form-btn-container'>
            <div>Add New Product</div>
            <button class='bc-a' onclick="getModalF2()">
                <i class='bx bxs-file-plus'></i>
            </button>
        </section>
        <section class='product-container'>
        </section>
    `;
};
let loadMenuG = () => {
    document.querySelector("#content-area").innerHTML = `
        <section class='form-btn-container'>
            <div>Add New Teammate</div>
            <button class='bc-a'>
                <i class='bx bxs-user-plus' onclick="getModalG2()"></i>
            </button>
        </section>
        <section class='teammate-container'>
        </section>
    `
};
// set parsed data from json as side-bar menu data
let getDataC = data1 => {
    abc = '';
    for(const b of data1) {
        if(b.status_id == 1 || b.status_id == 2) continue;
        abc += `
            <tr>
                <td>${b.first_name}</td>
                <td>${b.last_name}</td>
                <td>${b.contact}</td>
                <td>${b.province}</td>
                <td class='btn-action'>
                    <div>
                        <button class='btn-${b.order_status.toLowerCase()}' onclick='getModalC1(${b.id},${b.status_id})'>${b.order_status}</button>
                        <button class='btn-pull' onclick='getModalC2(${b.id})'>P u l l</button>
                    </div>
                </td>
            </tr>`;
    };
    document.querySelector("#table-deal-status").innerHTML = abc;
};
let getDataD = data1 => {
    abc = "";
    for(const a of data1) {
        if(a.status_id == 2) {
            abc += `
            <tr>
                <td>${a.first_name}</td>
                <td>${a.last_name}</td>
                <td>${a.contact}</td>
                <td>${a.province}</td>
                <td>${a.callback_date}</td>
                <td class='btn-action'>
                    <div>
                        <button class='btn-pull' onclick="getModalD1(${a.id})">P u l l</button>
                    </div>
                </td>
            </tr>`;
        };
    };
    document.querySelector("#table-scheduled-calls").innerHTML = abc;
};
let  getDataE = data1 => {
    abc = "";
    for(const a of data1) {
        if(a.status_id == 1) {
            abc += `
            <tr>
                <td>${a.first_name}</td>
                <td>${a.last_name}</td>
                <td>${a.contact}</td>
                <td>${a.province}</td>
                <td class='btn-action'>
                    <div>
                        <button class='btn-pull' onclick="getModalE1(${a.id})">P u l l</button>
                    </div>
                </td>
            </tr>`
        };
    };
    document.querySelector("#table-leads-bank").innerHTML = abc;
};
let getDataF = data1 => {
    abc = "";
    for(const a of data1) {
        abc += `
            <div class='card'>
                <section class='prod-categ'>
                    ${a.type}
                </section>
                <section class='prod-name bg-a'>
                    ${a.product_name}
                </section>
                <section class='prod-price'>
                    $ ${fixNum(a.price)}
                </section>
                <section class='prod-config'>
                    <li><a href="#" onclick="getModalF1(${a.id})">Edit</a></li>
                    <li><a href="#" onclick="putModalDelete(${a.id},4)">Delete</a></li>
                </section>
            </div>`;
    };
    document.querySelector(".product-container").innerHTML = abc;
};
let getDataG = data1 => {
    abc = "";
    for(const a of data1) {
        abc += `
            <div class='card'>
                <section class='teammate-categ'>
                    ${a.type}
                </section>
                <section class='teammate-name bg-a'>
                    ${a.first_name} ${a.last_name}
                </section>
                <section class='teammate-config'>
                    <li><a href="#" onclick="getModalG1(${a.id})">Edit</a></li>
                    <li><a href="#" onclick="putModalDelete(${a.id},5)">Delete</a></li>
                </section>
            </div>`;
    };
    document.querySelector(".teammate-container").innerHTML = abc;
};
// modal configuration
let putModalConfirm = (data1,data2) => {  
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        a.status_id = 3;
        a.order_status = "Pending";
    };
    if(data2 == 4) putModalD1(data1);
    if(data2 == 5) putModalE1(data1);
};
let putModalDelete = (data1,data2) => {
    let index = "";
    if(data2 == 1 || data2 == 2 || data2 == 3) {
        for(const a of Prospects) {
            if(data1 != a.id) continue;
            index = Prospects.indexOf(a);
        };
        Prospects.splice([index],1);
        document.querySelector('#pop').innerHTML = '';
        if(data2 == 1) getDataC(Prospects);
        if(data2 == 2) getDataD(Prospects);
        if(data2 == 3) getDataE(Prospects);
    };
    if(data2 == 4) {
        for(const a of Products) {
            if(data1 != a.id) continue;
            index = Products.indexOf(a);
        };
        Products.splice([index],1);
        document.querySelector('#pop').innerHTML = '';
        getDataF(Products);
    };
    if(data2 == 5) {
        for(const a of Users) {
            if(data1 != a.id) continue;
            index = Users.indexOf(a);
        };
        Users.splice([index],1);
        document.querySelector('#pop').innerHTML = '';
        getDataG(Users);
    };
};
let getModalC1 = (data1,data2) => {
    if(data2 == 3) h3Text = "Order is pending!";
    if(data2 == 4) h3Text = "Order has been completed!";
    if(data2 == 5) h3Text = "Order has been cancelled!";
    document.querySelector('#pop').innerHTML = `
        <div class="modal-bg" >
            <div class="modal-box modal-a" id="status-pop-deals">
                <div class="header">
                    <h3 id="status-pop-deals-header">${h3Text}</h3>
                </div>
                <h4 class="header-s">Change Status to:</h4>
                <div class="status-buttons">
                    <button id="status-pop-deals-inTransit" onclick='putModalC1(${data1},${3})'>Pending</button>
                    <button id="status-pop-deals-delivered" onclick='putModalC1(${data1},${4})'>Delivered</button>
                    <button id="status-pop-deals-cancelled" onclick='putModalC1(${data1},${5})'>Cancelled</button>
                </div>
            </div>
        </div>`;
};
let putModalC1 = (data1,data2) => {
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        a.status_id = data2;
        for(const b of Statuses) {
            if(data2 != b.id) continue;
            a.order_status = b.status_name;
        };
    };  
    document.querySelector('#pop').innerHTML = "";
    getDataC(Prospects);
};
let getModalC2 = data1 => {
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        let dataB = "";
        for(const b of Products) {
            if(a.product_id != b.id) continue;
            dataB = b;
        };
        document.querySelector('#pop').innerHTML = `
            <div class="modal-bg" >
                <div class="modal-box modal-a" id="pull-pop-deals">
                    <div class="header">
                        <h3 id="pull-pop-deals-header">${a.order_status}</h3>
                        <button id="pull-pop-deals-delete" onclick="putModalDelete(${a.id},1)">Delete Lead</button>
                    </div>
                    <div class="details">
                        <div class="details-1">
                            <div>
                                <label for="pull-pop-deals-first-name">First Name</label>
                                <h5 id="pull-pop-deals-first-name">${a.first_name}</h5>
                            </div>
                            <div>
                                <label for="pull-pop-deals-last-name">Last Name:</label>
                                <h5 id="pull-pop-deals-last-name">${a.last_name}</h5>
                            </div>
                        </div>
                        <div class="details-2">
                            <div>
                                <label for="pull-pop-deals-phone">Contact Number:</label>
                                <h5 id="pull-pop-deals-phone">${a.contact}</h5>
                            </div>
                            <div>
                                <label for="pull-pop-deals-province">Province:</label>
                                <h5 id="pull-pop-deals-province">${a.province}</h5>
                            </div>
                        </div>
                        <div class="details-3">
                            <label for="pull-pop-deals-address">Complete Address:</label>
                            <h5 id="pull-pop-deals-address">${a.address}</h5>
                        </div>
                        <div class="details-p">
                            <div>
                                <label for="pull-pop-deals-order">Order:</label>
                                <h5 id="pull-pop-deals-order">${dataB.type}: ${dataB.product_name}</h5>
                            </div>
                            <div>
                                <label for="pull-pop-deals-price">Price:</label>
                                <h5 id="pull-pop-deals-price">$ ${dataB.price}</h5>
                            </div>
                        </div>
                        <div class="details-4">
                            <label for="pull-pop-deals-note">Notes:</label>
                            <h5 id="show-notes">${a.notes}</h5>
                            <textarea name="notation" id="pull-pop-deals-note" cols="30" rows="1" value="" placeholder="Change notes here ..."></textarea>
                        </div>
                        <div class="details-5">
                            <div class="details-5-1">
                                <select name='select-product' id='select-product'>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="btn-cancel-save">
                        <button id="pull-pop-deals-cancel">Cancel</button>
                        <button id="pull-pop-deals-save" onclick='putModalC2(${a.id})'>Save</button>
                    </div>
                </div>
            </div>`;
    };
    selectProduct(Products);
    document.querySelector('#pull-pop-deals-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    });
};
let putModalC2 = data1 => {
    let pCode = document.getElementById('select-product').value;
    let notes = document.getElementById('pull-pop-deals-note').value;
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        a.notes = notes;
        for(const b of Products) {
            if(pCode != b.id) continue;
            a.product_id = b.id;
        };
    };
    getDataC(Prospects);
    document.querySelector('#pop').innerHTML = "";
};
let getModalD1 = data1 => {
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        document.querySelector('#pop').innerHTML = `
            <div class="modal-bg" >
                <div class="modal-box modal-a" id="pull-pop-callback">
                    <div class="header">
                        <h3 id="pull-pop-callback-header">${a.order_status}</h3>
                        <button id="pull-pop-callback-delete" onclick="putModalDelete(${a.id},2)">Delete Lead</button>
                    </div>
                    <div class="details">
                        <div class="details-1">
                            <div>
                                <label for="pull-pop-callback-first-name">First Name:</label>
                                <input value="${a.first_name}" type="text" id="pull-pop-callback-first-name" placeholder="Enter first name">
                            </div>
                            <div>
                                <label for="pull-pop-callback-last-name">Last Name:</label>
                                <input value="${a.last_name}" type="text" id="pull-pop-callback-last-name" placeholder="Enter last name">
                            </div>
                        </div>
                        <div class="details-2">
                            <div>
                                <label for="pull-pop-callback-phone">Contact Number:</label>
                                <input value="${a.contact}" type="text" id="pull-pop-callback-phone" placeholder="Enter phone">
                            </div>
                            <div>
                                <label for="pull-pop-callback-province">Province:</label>
                                <input value="${a.province}" type="text" id="pull-pop-callback-province" placeholder="Enter province">
                            </div>
                        </div>
                        <div class="details-3">
                            <label for="pull-pop-callback-address">Complete Address:</label>
                            <input value="${a.address}" type="text" id="pull-pop-callback-address" placeholder="Enter full address">
                        </div>
                        <div class="details-4">
                            <label for="pull-pop-callback-note">Notes:</label>
                            <h5 id="show-notes">${a.notes}</h5>
                            <textarea name="notation" id="pull-pop-callback-note" cols="30" rows="1" value="" placeholder="Change notes here ..."></textarea>
                        </div>
                        <div class="details-5">
                            <div class="details-5-1">
                                <select name='select-product' id='select-product'>
                                </select>
                                <button id="pull-pop-callback-confirm" onclick='putModalConfirm(${a.id},4)'>Confirm Order</button>
                            </div>
                            <div class="details-5-2">
                                <div>
                                    <input type="text" class="none" id="none" value="${a.callback_date}">
                                    <input type="checkbox" id="schedule" name="schedule">
                                    <label for="schedule">Schedule a Call</label><br>
                                </div>
                                <input type="datetime-local" id="calendar" value="">
                            </div>
                        </div>
                    </div>
                    <div class="btn-cancel-save">
                        <button id="pull-pop-callback-cancel">Cancel</button>
                        <button id="pull-pop-callback-save" onclick="putModalD1(${a.id})">Save</button>
                    </div>
                </div>
            </div>`;
    };
    selectProduct(Products);
    document.querySelector('#pull-pop-callback-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    });
};
let putModalD1 = data1 => {
    let fName = document.getElementById('pull-pop-callback-first-name').value;
    let lName = document.getElementById('pull-pop-callback-last-name').value;
    let cNum = document.getElementById('pull-pop-callback-phone').value;
    let prov = document.getElementById('pull-pop-callback-province').value;
    let addr = document.getElementById('pull-pop-callback-address').value;
    let notes = document.getElementById('pull-pop-callback-note').value;
    let pCode = document.getElementById('select-product').value;
    let cBox = document.getElementById('schedule');
    let dtSched = document.getElementById('calendar').value;
    let cBack = document.getElementById('none').value;
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        a.first_name = fName;
        a.last_name = lName;
        a.contact = cNum;
        a.province = prov;
        a.address = addr;
        a.notes = notes;
        for(const b of Products) {
            if(pCode != b.id) continue;
            a.product_id = b.id;
        };
        if(cBox.checked && dtSched != "") a.callback_date = fixDateTime(dtSched);
        else a.callback_date = cBack;
    };
    selectProduct(Products);
    getDataD(Prospects);
    document.querySelector('#pop').innerHTML = "";
};
let getModalE1 = data1 => {
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        let dataB = "";
        for(const b of Statuses) {
            if(a.status_id != b.id) continue;
            dataB = b;
        };
        document.querySelector('#pop').innerHTML = `
        <div class="modal-bg" >
            <div class="modal-box modal-a" id="pull-pop-bank">
                <div class="header">
                    <h3 id="pull-pop-bank-header">${dataB.status_name}</h3>
                    <button id="pull-pop-bank-delete" onclick="putModalDelete(${a.id},3)">Delete Lead</button>
                </div>
                <div class="details">
                    <div class="details-1">
                        <div>
                            <label for="pull-pop-bank-first-name">First Name:</label>
                            <input type="text" value="${a.first_name}" id="pull-pop-bank-first-name" placeholder="Enter first name">
                        </div>
                        <div>
                            <label for="pull-pop-bank-last-name">Last Name:</label>
                            <input type="text" value="${a.last_name}" id="pull-pop-bank-last-name" placeholder="Enter last name">
                        </div>
                    </div>
                    <div class="details-2">
                        <div>
                            <label for="pull-pop-bank-phone">Contact Number:</label>
                            <input type="text" value="${a.contact}" id="pull-pop-bank-phone" placeholder="Enter phone">
                        </div>
                        <div>
                            <label for="pull-pop-bank-province">Province:</label>
                            <input type="text" value="${a.province}" id="pull-pop-bank-province" placeholder="Enter province">
                        </div>
                    </div>
                    <div class="details-3">
                        <label for="pull-pop-bank-address">Complete Address:</label>
                        <input type="text" value="${a.address}" id="pull-pop-bank-address" placeholder="Enter full address">
                    </div>
                    <div class="details-4">
                        <label for="pull-pop-callback-note">Notes:</label>
                            <h5 id="show-notes">${a.notes}</h5>
                            <textarea name="notation" id="pull-pop-bank-note" cols="30" rows="1" value="" placeholder="Change notes here ..."></textarea>
                    </div>
                    <div class="details-5">
                        <div class="details-5-1">
                            <select name='select-product' id='select-product'>
                            </select>
                            <button id="pull-pop-bank-confirm" onclick="putModalConfirm(${a.id},5)">Confirm Order</button>
                        </div>
                        <div class="details-5-2">
                            <div>
                                <input type="checkbox" id="schedule" name="schedule" value="">
                                <label for="schedule">Schedule a Call</label><br>
                            </div>
                            <input type="datetime-local" id="calendar">
                        </div>
                    </div>
                </div>
                <div class="btn-cancel-save">
                    <button id="pull-pop-bank-cancel">Cancel</button>
                    <button id="pull-pop-bank-save" onclick="putModalE1(${a.id})">Save</button>
                </div>
            </div>
        </div>`;
    };
    selectProduct(Products);
    document.querySelector('#pull-pop-bank-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    }); 
};
let putModalE1 = data1 => {
    let fName = document.getElementById('pull-pop-bank-first-name').value;
    let lName = document.getElementById('pull-pop-bank-last-name').value;
    let cNum = document.getElementById('pull-pop-bank-phone').value;
    let prov = document.getElementById('pull-pop-bank-province').value;
    let addr = document.getElementById('pull-pop-bank-address').value;
    let notes = document.getElementById('pull-pop-bank-note').value;
    let pCode = document.getElementById('select-product').value;
    let cBox = document.getElementById('schedule');
    let dtSched = document.getElementById('calendar').value;
    for(const a of Prospects) {
        if(data1 != a.id) continue;
        a.first_name = fName;
        a.last_name = lName;
        a.contact = cNum;
        a.province = prov;
        a.address = addr;
        a.notes = notes;
        for(const b of Products) {
            if(pCode != b.id) continue;
            a.product_id = b.id;
        };
        if(cBox.checked && dtSched != "") a.callback_date = fixDateTime(dtSched);
    };
    selectProduct(Products);
    getDataE(Prospects);
    document.querySelector('#pop').innerHTML = "";
};
let getModalE2 = () => {
    document.querySelector('#pop').innerHTML = `
        <div class="modal-bg" >
            <div class="modal-box modal-a" id="add-new-lead">
                <h3>Add New Lead</h3>
                <div class="details">
                    <div class="details-1">
                        <div>
                            <label for="add-new-lead-first-name">First Name:</label>
                            <input type="text" id="add-new-lead-first-name" placeholder="Enter first name">
                        </div>
                        <div>
                            <label for="add-new-lead-last-name">Last Name:</label>
                            <input type="text" id="add-new-lead-last-name" placeholder="Enter last name">
                        </div>
                    </div>
                    <div class="details-2">
                        <div>
                            <label for="add-new-lead-phone">Contact Number:</label>
                            <input type="text" id="add-new-lead-phone" placeholder="Enter phone">
                        </div>
                        <div>
                            <label for="add-new-lead-province">Province:</label>
                            <input type="text" id="add-new-lead-province" placeholder="Enter province">
                        </div>
                    </div>
                    <div class="details-3">
                        <label for="add-new-lead-address">Complete Address:</label>
                        <input type="text" id="add-new-lead-address" placeholder="Enter full address">
                    </div>
                    <div class="details-4">
                        <label for="add-new-lead-note">Notes:</label>
                        <textarea name="notation" id="add-new-lead-note" cols="30" rows="3"></textarea>
                    </div>
                </div>
                <div class="btn-cancel-save">
                    <button id="add-new-lead-cancel">Cancel</button>
                    <button id="add-new-lead-add" onclick="putModalE2()">Add</button>
                </div>
            </div>
        </div>`;
    document.querySelector('#add-new-lead-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    }); 
};
let putModalE2 = () => {
    let fName = document.getElementById('add-new-lead-first-name').value;
    let lName = document.getElementById('add-new-lead-last-name').value;
    let cNum = document.getElementById('add-new-lead-phone').value;
    let prov = document.getElementById('add-new-lead-province').value;
    let addr = document.getElementById('add-new-lead-address').value;
    let nNotes = document.getElementById('add-new-lead-note').value;
    let abc = {
        id: Prospects.length + 1,
        first_name: fName,
        last_name: lName,
        contact: cNum,
        address: addr,
        province: prov,
        status_id: 1,
        order_status: "",
        status_date_change: "",
        product_id: "",
        callback_date: "",
        notes: nNotes
    };
    if(fName == "" || lName == "" || cNum == "" || prov == "" || addr == "") {
        alert("All fields from first name to address cannot be blank!");
        document.querySelector('#pop').innerHTML = "";
        return;
    }
    Prospects.push(abc);
    getDataE(Prospects);
    document.querySelector('#pop').innerHTML = "";
};
let getModalF1 = data1 => {
    for(const a of Products) {
        if(data1 != a.id) continue; 
        document.querySelector('#pop').innerHTML = `
            <div class="modal-bg">
                <div class="modal-box modal-a" id="edit-product-details">
                    <h3>Edit Product Details</h3>
                    <div class="details">
                        <div class="details-1">
                            <div>
                                <label for="edit-product-details-item-name">Change Product Name:</label>
                                <input type="text" value="${a.product_name}" id="edit-product-details-item-name" placeholder="Enter new product name">
                            </div>
                            <div>
                                <label for="edit-product-details-item-code">Change Product Code:</label>
                                <input type="text" value="${a.product_code}" id="edit-product-details-item-code" placeholder="Enter new product code">
                            </div>
                        </div>
                        <div class="details-2">
                            <div>
                                <label for="edit-product-details-type">Change Category/Type:</label>
                                <input type="text" value="${a.type}" id="edit-product-details-type" placeholder="Enter new category/type">
                            </div>
                            <div>
                                <label for="edit-product-details-price">Change Price:</label>
                                <input type="text" value="${a.price}" id="edit-product-details-price" placeholder="Enter new price">
                            </div>
                        </div>
                    </div>
                    <div class="btn-cancel-save">
                        <button id="edit-product-details-cancel">Cancel</button>
                        <button id="edit-product-details-save" onclick="putModalF1(${a.id})">Save</button>
                    </div>
                </div>
            </div>`;
    };
    document.querySelector('#edit-product-details-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    });
};
let putModalF1 = data1 => {
    let pName = document.getElementById('edit-product-details-item-name').value;
    let pCode = document.getElementById('edit-product-details-item-code').value;
    let pType = document.getElementById('edit-product-details-type').value;
    let pPrice = document.getElementById('edit-product-details-price').value;
    for(const a of Products) {
        if(data1 != a.id) continue;
        a.type = pType;
        a.product_name = pName;
        a.product_code = pCode;
        a.price = pPrice;   
    };
    getDataF(Products);
    document.querySelector('#pop').innerHTML = "";
};
let getModalF2 = () => {
    document.querySelector('#pop').innerHTML = `
        <div class="modal-bg" >
            <div class="modal-box modal-a" id="add-new-product">
                <h3>Add New Product</h3>
                <div class="details">
                    <div class="details-1">
                        <div>
                            <label for="add-new-product-item-name">Product Name:</label>
                            <input type="text" id="add-new-product-item-name" placeholder="Enter product name">
                        </div>
                        <div>
                            <label for="add-new-product-item-code">Product Code:</label>
                            <input type="text" id="add-new-product-item-code" placeholder="Enter product code">
                        </div>
                    </div>
                    <div class="details-2">
                        <div>
                            <label for="add-new-product-type">Category/Type:</label>
                            <input type="text" id="add-new-product-type" placeholder="Enter category/type">
                        </div>
                        <div>
                            <label for="add-new-product-price">Price:</label>
                            <input type="text" id="add-new-product-price" placeholder="Enter price">
                        </div>
                    </div>
                </div>
                <div class="btn-cancel-save">
                    <button id="add-new-product-cancel">Cancel</button>
                    <button id="add-new-product-add" onclick="putModalF2()">Add</button>
                </div>
            </div>
        </div>`;
    document.querySelector('#add-new-product-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    }); 
};
let putModalF2 = () => {
    let pName = document.getElementById('add-new-product-item-name').value;
    let pCode = document.getElementById('add-new-product-item-code').value;
    let pType = document.getElementById('add-new-product-type').value;
    let pPrice = document.getElementById('add-new-product-price').value;
    let abc = {
        id: Products.length + 1,
        type: pType,
        product_name: pName,
        product_code: pCode,
        price: pPrice,
    };
    if(pName == "" || pCode == "" || pType == "" || pPrice == "") {
        alert("All fields cannot be blank!");
        document.querySelector('#pop').innerHTML = "";
        return;
    };
    Products.push(abc);
    getDataF(Products);
    document.querySelector('#pop').innerHTML = "";
};
let getModalG1 = data1 => {
    for(const a of Users) {
        if(data1 != a.id) continue;
        document.querySelector('#pop').innerHTML = `
            <div class="modal-bg" >
                <div class="modal-box modal-a" id="edit-user-details">
                    <h3>Edit Teammate Detailsr</h3>
                    <div class="details">
                        <div class="details-1">
                            <div>
                                <label for="edit-user-details-first-name">Change First Name:</label>
                                <input type="text" value="${a.first_name}" id="edit-user-details-first-name" placeholder="Enter new first name">
                            </div>
                            <div>
                                <label for="edit-user-details-last-name">Change Last Name:</label>
                                <input type="text" value="${a.last_name}" id="edit-user-details-last-name" placeholder="Enter new last name">
                            </div>
                        </div>
                        <div class="details-t">
                            <select name='select-position' id='select-position'>
                                <option value='0'>Change Teammate Position</option>
                                <option value='1'>Admin</option>
                                <option value='2'>Member</option>
                            </select>
                        </div>
                    </div>
                    <div class="btn-cancel-save">
                        <button id="edit-user-details-cancel">Cancel</button>
                        <button id="edit-user-details-save" onclick="putModalG1(${a.id})">Save</button>
                    </div>
                </div>
            </div>`;
    };
    document.querySelector('#edit-user-details-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    });
};
let putModalG1 = data1 => {
    let fName = document.getElementById('edit-user-details-first-name').value;
    let lName = document.getElementById('edit-user-details-last-name').value;
    let pType = document.getElementById('select-position').value;
    for(const a of Users) {
        if(data1 != a.id) continue;
        if(pType == 1) a.type = "Admin";
        if(pType == 2) a.type = "Member";
        a.first_name = fName;
        a.last_name = lName;
    };
    getDataG(Users);
    document.querySelector('#pop').innerHTML = "";
};
let getModalG2 = () => {
    document.querySelector('#pop').innerHTML = `
        <div class="modal-bg" >
            <div class="modal-box modal-a" id="add-new-user">
                <h3>Add New Teammate</h3>
                <div class="details">
                    <div class="details-1">
                        <div>
                            <label for="add-new-user-first-name">First Name:</label>
                            <input type="text" id="add-new-user-first-name" placeholder="Enter first name">
                        </div>
                        <div>
                            <label for="add-new-user-last-name">Last Name:</label>
                            <input type="text" id="add-new-user-last-name" placeholder="Enter last name">
                        </div>
                    </div>
                    <div class="details-t">
                        <select name='select-position' id='select-position'>
                            <option value='0'>Select Teammate Position</option>
                            <option value='1'>Admin</option>
                            <option value='2'>Member</option>
                        </select>
                    </div>
                </div>
                <div class="btn-cancel-save">
                    <button id="add-new-user-cancel">Cancel</button>
                    <button id="add-new-user-add" onclick="putModalG2()">Add</button>
                </div>
            </div>
        </div>`;
    document.querySelector('#add-new-user-cancel').addEventListener('click', () => {
        document.querySelector('#pop').innerHTML = "";
    });
};
let putModalG2 = () => {
    let fName = document.getElementById('add-new-user-first-name').value;
    let lName = document.getElementById('add-new-user-last-name').value;
    let pType = document.getElementById('select-position').value;
    if(pType == 1) typeVal = "Admin";
    if(pType == 2) typeVal = "Member";
    let abc = {
        id: Users.length + 1,
        type: typeVal,
        first_name: fName,
        last_name: lName,
        employee_ID: "",
        password: "",
        acquisition_date: "",
        promotion_date: "",
        demotion_date: "",
        numOf_sales: "",
        numOf_pending: "",
        numOf_cancelled: "",
        numwOf_new: "",
        numOf_callback: ""
    };
    if(fName == "" || lName == "" || pType == 0) {
        alert("All fields cannot be blank!");
        document.querySelector('#pop').innerHTML = "";
        return;
    };
    Users.push(abc);
    getDataG(Users);
    document.querySelector('#pop').innerHTML = "";
};
// search filter functions
let cFilter = data1 => {
    document.querySelector('#search-bar').addEventListener('keyup', () => {
        let searchKeys = document.querySelector('#search-bar').value;
        let output = data1.filter(data => {
            return data.first_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.last_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.contact.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.province.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.address.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.order_status.toLowerCase().includes(searchKeys.toLowerCase());
        });
        getDataC(output);
    });
};
let dFilter = data1 => {
    document.querySelector('#search-bar').addEventListener('keyup', () => {
        let searchKeys = document.querySelector('#search-bar').value;
        let output = data1.filter(data => {
            return data.first_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.last_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.contact.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.province.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.address.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.callback_date.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.order_status.toLowerCase().includes(searchKeys.toLowerCase());
        });
        getDataD(output);
    });
};
let eFilter = data1 => {
    document.querySelector('#search-bar').addEventListener('keyup', () => {
        let searchKeys = document.querySelector('#search-bar').value;
        let output = data1.filter(data => {
            return data.first_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.last_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.contact.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.province.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.address.toLowerCase().includes(searchKeys.toLowerCase());
        });
        getDataE(output);
    });
};
let fFilter = data1 => {
    document.querySelector('#search-bar').addEventListener('keyup', () => {
        let searchKeys = document.querySelector('#search-bar').value;
        let output = data1.filter(data => {
            return data.type.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.product_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.product_code.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.price.toLowerCase().includes(searchKeys.toLowerCase());
        });
        getDataF(output);
    });
};
let gFilter = data1 => {
    document.querySelector('#search-bar').addEventListener('keyup', () => {
        let searchKeys = document.querySelector('#search-bar').value;
        let output = data1.filter(data => {
            return data.type.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.first_name.toLowerCase().includes(searchKeys.toLowerCase()) ||
            data.last_name.toLowerCase().includes(searchKeys.toLowerCase());
        });
        getDataG(output);
    });
};
// other functions
let selectProduct = data1 => {
    abc = "<option value='0'>Select to add/change product</option>";
    for(const a of data1) {
        abc += `
            <option value='${a.id}'>${a.product_code}</option>
        `;
    };
    document.querySelector('#select-product').innerHTML = abc;
};
let fixDateTime = data1 => {
    let date = new Date(data1);
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    abc = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${days[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`;
    return abc;
};
let fixNum = data1 => {
    let num = parseFloat(data1);
    return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
