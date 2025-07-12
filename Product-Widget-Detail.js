const jquerySlimScript = document.createElement('script');
jquerySlimScript.src = "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js";
document.body.appendChild(jquerySlimScript);


const spsBootstrap5Link = document.createElement('link');
spsBootstrap5Link.rel = 'stylesheet';
spsBootstrap5Link.type = 'text/css';
spsBootstrap5Link.href = 'https://webwidget.stoneprofitsweb.com/tritonno/css/sps-bootstrap5.css';
document.head.appendChild(spsBootstrap5Link);

const webConnectStylesLink = document.createElement('link');
webConnectStylesLink.rel = 'stylesheet';
webConnectStylesLink.type = 'text/css';
webConnectStylesLink.href = 'https://webwidget.stoneprofitsweb.com/tritonno/css/WebConnectStyles.css';
document.head.appendChild(webConnectStylesLink);

const preFontGoogleApisLink = document.createElement('link');
preFontGoogleApisLink.rel = 'preconnect';
preFontGoogleApisLink.href='https://fonts.googleapis.com';
document.head.appendChild(preFontGoogleApisLink);

const preFontGstatic = document.createElement('link');
preFontGstatic.rel = 'preconnect';
preFontGstatic.href='https://fonts.gstatic.com';
preFontGstatic.crossOrigin = "anonymous";
document.head.appendChild(preFontGstatic);

const googleApisCss2Link = document.createElement('link');
googleApisCss2Link.rel = 'stylesheet';
googleApisCss2Link.href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
document.head.appendChild(googleApisCss2Link);

const spsIconsLink = document.createElement('link');
spsIconsLink.rel = 'stylesheet';
spsIconsLink.type = 'text/css';
spsIconsLink.href = 'https://webwidget.stoneprofitsweb.com/tritonno/css/SPS-Icons/css/sps-icons.css';
document.head.appendChild(spsIconsLink);

const bootstrapCSSLink = document.createElement('link');
bootstrapCSSLink.rel = 'stylesheet';
bootstrapCSSLink.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
bootstrapCSSLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
bootstrapCSSLink.crossOrigin = "anonymous";
document.head.appendChild(bootstrapCSSLink);

const swiperCSSLink = document.createElement('link');
swiperCSSLink.rel = 'stylesheet';
swiperCSSLink.href = "https://unpkg.com/swiper/swiper-bundle.min.css";
document.head.appendChild(swiperCSSLink);

const bootstrapBundleScript = document.createElement('script');
bootstrapBundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
bootstrapBundleScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
bootstrapBundleScript.crossOrigin = "anonymous";
document.body.appendChild(bootstrapBundleScript);

const swiperBundleScript = document.createElement('script');
swiperBundleScript.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
document.body.appendChild(swiperBundleScript);

const popperScript = document.createElement('script');
popperScript.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";
document.body.appendChild(popperScript);

const style = document.createElement('style');
style.textContent = `
  #inventorynav {
    background-color: #f8f9fa;
    line-height: 1;
    margin-bottom: 30px;
    padding: 16px 14px 18px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    font-size: 24px;
    font-family: 'Montserrat';

    position: relative;
    left: 50%;
    right: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
  }
     @media (max-width: 768px) {
    #inventorynav {
      font-size: 20px;
      padding: 14px 12px 16px;
    }
  }

    @media (max-width: 480px) {
      #inventorynav {
        font-size: 18px;
        padding: 12px 10px 14px;
      }
    }
    @media (min-width: 576px) {
      #inventorynav > .container {
          max-width: 540px;
      }
  }
        @media (min-width: 768px) {
     #inventorynav > .container {
        max-width: 720px;
    }
}
      @media (min-width: 992px) {
      #inventorynav > .container{
          max-width: 960px ;
      }
}

  

 
  .group-title:hover{
  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
      --bs-link-hover-color-rgb: 54, 54, 54;
  }
     
  @media (max-width: 768px) {
      h3{
      font-size: 16px!important;
    }
      .ItemInfo{
      font-size:14px!important;
      font-family: font-family: Roboto Serif, sans-serif!important;
      }

  }
  
  .item-group {
  overflow: hidden;
  transition: height 0.6s ease;
  transition: padding 0.3s ease;
  height: auto;
  // margin-top: 2rem;
  padding:10px;
      border: 1px solid #ddd;
      background-color: #f8f9fa;
          border-radius: 0px 0px 5px 5px;
              border-top: none;
  }
      .item-group.collapsed{
      padding:0px;
      border-bottom:none;
      }
 .InvItem.ItemLabel{
 border:none!important;}
    
@media (min-width: 1400px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
        max-width: 1600px!important;
    }
}
    @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
       // max-width: 1300px !important;
    }
}
    
 .sps-chevron-down {
    transition: transform 0.4s ease;
    display: inline-block;
    font-size:24px;
  }
  .sps-chevron-down.rotate {
    transform: rotate(180deg);
  }
     .group-title{
      margin-bottom:0px!important;
          width: 100%;
    // border-radius: 5px;
        border: 1px solid var(--border-color);
        padding: 10px;
        border-radius: 5px 5px 0px 0px;
        
      }

   
  :root{
      --primary-font: 'Montserrat';!important;
  }

  
`;
document.head.appendChild(style);
function groupBy(array, key) {
  return array.reduce((result, item) => {
    const keyValue = item[key];
    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
    return result;
  }, {});
}
class ProductDetails extends HTMLElement {
  static get observedAttributes() {
    return ['ProductName', 'ProductBundleNo', 'ProductLocationName','Productcategory', 'ProductLocationID', 'ProductIDs', 'ProductThickness', 'ProductFinish'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'ProductName' || name === 'ProductBundleNo' || name === 'ProductLocationName' || name === 'Productcategory' || name === 'ProductIDs' || name === 'ProductThickness' || name === 'ProductFinish' || name === 'ProductLocationID') {
      this.render();
    }
  }
  
  async render() {
    window.productNameFilter = this.getAttribute('ProductName');
    window.thicknessFilter = this.getAttribute('ProductThickness');
    window.productIDFilter = parseInt(this.getAttribute('ProductIDs'));
    window.finishFilter = this.getAttribute('ProductFinish');
    window.LocationIDFilter = parseInt(this.getAttribute('ProductLocationID'));
    window.BundleNoFilter = this.getAttribute('ProductBundleNo');
    window.LocationNameFilter = this.getAttribute('ProductLocationName');
    window.ProductcategoryFilter = this.getAttribute('Productcategory');
    try {
      //Item name
       //const res = await fetch("https://stage.stoneprofits.com/tritonno/Development/Custom/TritonNO/WebWidgetAPI.aspx?act=getProductFamilesDetail&hideLocations=17,4,20,21,60377&ItemName="+ productNameFilter +"&Category="+ProductcategoryFilter+"&id=&InventoryGroupBy=IDTwo_&TrimmedUserID=4349965748834115&OnHold=null&OnSO=null&Intransit=null&SelectedLocation=&ShowLocationinGallery=on&LotPicturesRestrictToSIPL=True&VirtualDirectory=tritonno");
      
      //ItemID
      const res = await fetch("https://stage.stoneprofits.com/tritonno/Development/Custom/TritonNO/FetchDataWebWidget.ashx?act=getItemInventory&hideLocations=17,4,20,21,60377&Category="+ProductcategoryFilter+"&ItemName=&id=94972,52325,62525,62526&InventoryGroupBy=IDTwo_&TrimmedUserID=4349965748834115&OnHold=null&OnSO=null&Intransit=null&SelectedLocation=&ShowLocationinGallery=on&LotPicturesRestrictToSIPL=True&VirtualDirectory=tritonno");
      if (!res.ok) {
      throw new Error('Failed to fetch data');
      }
      
      const data = await res.json();
      const jsonobj = data.filter(item => item.ProductFormValue === "SLAB");
      const productName = [...new Set(jsonobj.map(item => item.ItemName))];
      const ProductBundleNo = [...new Set(jsonobj.map(item => item.IDOne))];
      const ProductLocationName = [...new Set(jsonobj.map(item => item.Location))];
      const ProductThickness = [...new Set(jsonobj.map(item => {
        const match = item.ItemName.match(/\b(\d+(?:\.\d+)?)CM\b/i);
        return match ? match[0] : null;
      }).filter(item => item !== null))];
      const ProductFinish = ["Honed","Polished","Leathered"];
      let ProductNameDropdownHTML = '<option value="select" >Products</option>';
      productName.forEach(productName => {
        ProductNameDropdownHTML += `<option value="${productName}" ${productName === previousFilters['productName'] ? 'selected' : ''}>${productName}</option>`;
      });
      let ProductBundleNoDropdownHTML = '<option value="select" >Bundles</option>';
      ProductBundleNo.forEach(ProductBundleNo => {
        ProductBundleNoDropdownHTML += `<option value="${ProductBundleNo}" ${ProductBundleNo === previousFilters['ProductBundleNo'] ? 'selected' : ''}>${ProductBundleNo}</option>`;
      });
      let ProductLocationNameDropdownHTML = '<option value="select" >Location</option>';
      ProductLocationName.forEach(ProductLocationName => {
        ProductLocationNameDropdownHTML += `<option value="${ProductLocationName}" ${ProductLocationName === previousFilters['ProductLocationName'] ? 'selected' : ''}>${ProductLocationName}</option>`;
      });
      let ProductThicknessDropdownHTML = '<option value="select" >Thickness</option>';
      ProductThickness.forEach(ProductThickness => {
        ProductThicknessDropdownHTML += `<option value="${ProductThickness}" ${ProductThickness === previousFilters['ProductThickness'] ? 'selected' : ''}>${ProductThickness}</option>`;
      });
      let ProductFinishDropdownHTML = '<option value="select" >Finish</option>';
      ProductFinish.forEach(ProductFinish => {
        ProductFinishDropdownHTML += `<option value="${ProductFinish}" ${ProductFinish === previousFilters['ProductFinish'] ? 'selected' : ''}>${ProductFinish}</option>`;
      });
      
    const filteredData = jsonobj.filter(item => {
      return (!productNameFilter || item.ItemName.toString().toLowerCase().includes(productNameFilter.toString().toLowerCase())) &&
             (!thicknessFilter || item.ItemName.toString().toLowerCase().includes(thicknessFilter.toString().toLowerCase())) &&
             (!productIDFilter || item.ItemID === productIDFilter) &&
             (!finishFilter || item.ItemName.toString().toLowerCase().includes(finishFilter.toString().toLowerCase())) &&
             (!LocationIDFilter || item.LocationID === LocationIDFilter) &&
             (!BundleNoFilter || item.IDOne.toString().toLowerCase().includes(BundleNoFilter.toString().toLowerCase())) &&
             (!LocationNameFilter || item.Location.toString().toLowerCase().includes(LocationNameFilter.toString().toLowerCase()));
    });

    const groupedItems = groupBy(filteredData, 'ItemName');
    console.log(groupedItems);
      let listproductshtml = '';
      listproductshtml += `
        <div class="mobile-filter-toggle" onClick="toggleMobileView()" style="cursor: pointer;display:none;"><span class='sps-filter'></span>Inventory Filters</div>
        <div id="inventorynav"> <div class="container">Live Inventory</div></div>
        <div class="filter-row" id="filter-row" style="display:none;">
          <div class="filter-header"><h3>Inventory Filters</h3><span class='sps-close' onClick="toggleMobileView()" style="cursor: pointer;"></span></div>
          <div class="spswc-select">
          <select name="productName" id="productName" style="cursor: pointer;font-family: 'Montserrat';" onchange="showProductInventory(this.value, 'productName')">${ProductNameDropdownHTML}</select>
          </div>
          <div class="spswc-select">
            <select name="ProductBundleNo" id="ProductBundleNo"  style="cursor: pointer;font-family: 'Montserrat';" onchange="showProductInventory(this.value, 'ProductBundleNo')">${ProductBundleNoDropdownHTML}</select>
          </div>
          <div class="spswc-select">
            <select name="ProductLocationName" id="ProductLocationName"  style="cursor: pointer;font-family: 'Montserrat';" onchange="showProductInventory(this.value, 'ProductLocationName')">${ProductLocationNameDropdownHTML}</select>
          </div>
          <div class="spswc-select">
            <select name="ProductThickness" id="ProductThickness"  style="cursor: pointer;font-family: 'Montserrat';" onchange="showProductInventory(this.value, 'ProductThickness')">${ProductThicknessDropdownHTML}</select>
          </div>
          <div class="spswc-select">
            <select name="ProductFinish" id="ProductFinish" style="cursor: pointer;font-family: 'Montserrat';" onchange="showProductInventory(this.value, 'ProductFinish')">
            ${ProductFinishDropdownHTML}
            </select>
          </div>
          <div class="filter-footer"><button onClick="toggleMobileView()" style="cursor: pointer;font-family: 'Montserrat';">Apply Filters</button></div>
        </div>
        </div>
        `;
      console.log(document.getElementById("Products"))
      for (const ItemName in groupedItems) {
        listproductshtml += `
            <div class="group-title" style='cursor: pointer;' onClick='expandGroup("item-group-"+${groupedItems[ItemName][0].ItemID})'>
                <h3 style="padding:0px 0px;margin: 0px;font-size:16px;font-family: 'Montserrat';color:#1D1D1D;">${ItemName}</h3>
                <div class="group-toggle "><span class="sps-chevron-down rotate"  style='cursor: pointer;' ></span></div>
            </div>
            <div class="item-group" id="item-group-${groupedItems[ItemName][0].ItemID}" style="display:block;">
              <div class="row"  id="inventory-thumbs">`;
        groupedItems[ItemName].forEach((item, index) => {
            const imageElement = item.FileName ? `
                <img src="https://dyq9nr4i000mv.cloudfront.net/${item.FileName}" onclick="handleChange('${item.ItemName.replace(/\s+/g, '-').toLowerCase()}', ${index})" alt="${item.ItemName}">` :
                `<div _ngcontent-all-10="" class="NoImg"><div _ngcontent-all-10="" class="NoImgText"></div></div>`;
            listproductshtml += `
                <div class="col">
                    <div class="card">
                        <div class="ImgWrap">
                            ${imageElement}
                            <div class='IconBG IconLayer'>
                                <div class='sps-resize-full' onclick="handleChange('${item.ItemName}', ${index})"></div>
                            </div>
                        </div>
                        <div class="InvItem ItemLabel">
                            <p class="ItemInfo" style="display:none;">${item.ItemName}</p>
                            <p class="ItemInfo">Lot/Block: <span>${item.IDOne}</span></p>
                            <p class="ItemInfo">Bundle:<span> ${item.IDTwo}</span></p>
                            <p class="ItemInfo">Avg Size: <span>${item.AverageLength}" X ${item.AverageWidth}"</span></p> 
                            <p class="ItemInfo">Qty:<span>${item.AvailableQty}${item.UOM} / ${item.AvailableSlabs}Slabs</span> </p>
                            <p class="ItemInfo">Location: <span>${item.Location}</span></p>
                        </div>
                    </div>
                </div> `;
        });
        listproductshtml += `</div></div>`;
    
        const carouselId = `demo-${ItemName.replace(/\s+/g, '-').toLowerCase()}`;
        listproductshtml += `
            <div id="${carouselId}" class="overlay-layer" data-interval="false">
              <div class="overlay-container">  
                <div class="carousel">
                    <!-- Indicators -->
                    <ul class="carousel-indicators">
                        ${groupedItems[ItemName].map((item, index) => `
                            <li data-target="#${carouselId}" data-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></li>
                        `).join('')}
                    </ul>
                    <!-- The slideshow -->
                    <div class="carousel-inner" id="overlay-${ItemName.replace(/\s+/g, '-').toLowerCase()}-Group">
                        ${groupedItems[ItemName].map((item, index) => `
                            <div class='carousel-item ${index === 0 ? 'active' : ''}'>
                            <div id='overlay-${item.ItemName.replace(/\s+/g, '-').toLowerCase()}-${index}'>
                                <div class='overlay-header'>
                                    <h2>Get More Details and Share</h2>
                                    <span class='sps-close cursor-pointer' onClick="handleClose('${item.ItemName}')"></span>
                                </div>
                                <div class='swiper-slide'>
                                    <div class='ImgWrap'>${item.FileName ? // Check if FileName exists
                                        `<img src="https://dyq9nr4i000mv.cloudfront.net/${item.FileName}" alt="">` :
                                        `<div _ngcontent-all-10="" class="NoImg"><div _ngcontent-all-10="" class="NoImgText"></div></div>`
                                    }</div>
                                    <div class='overlay-card'> <!-- This is where overlay-card should be -->
                                        <h3>${item.ItemName}</h3>
                                        <ul>
                                            <li>Lot/Block: ${item.IDOne}</li>
                                            <li>Bundle: ${item.IDTwo}</li>
                                            <li>Avg Size: ${item.AverageLength}"x${item.AverageWidth}"</li>
                                            <li>Qty: ${item.AvailableQty}${item.UOM} / ${item.AvailableSlabs}Slabs</li>
                                            <li>In ${item.Location}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `).join('')}
                        <!-- Left and right controls -->
                        <a class="carousel-control-prev" href="#${carouselId}" onclick="goToPrev('${ItemName.replace(/\s+/g, '-').toLowerCase()}')" data-slide="prev" >
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#${carouselId}" onclick="goToNext('${ItemName.replace(/\s+/g, '-').toLowerCase()}')" data-slide="next" >
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                  </div>
                </div>
            </div>
        `;
    }
            this.innerHTML = listproductshtml;
        } catch (error) {
            console.error('Error fetching data:', error);
            this.innerHTML = "Error loading component";
        }
  }
  connectedCallback() {
    
    this.render();
    
  }
}

customElements.define("product-widget-container", ProductDetails);

//Other Functionalities starts
var firstHtml = document.getElementById('webcomponent-container').innerHTML;
const attributeRegex = /(\w+)\s*=\s*["']([^"']*)["']/g;
let match;
const attributes = {};
while ((match = attributeRegex.exec(firstHtml)) !== null) {
    const attributeName = match[1];
    const attributeValue = match[2];
    if (attributeValue !== "") { 
        attributes[attributeName] = attributeValue;
    }
}
for (const attributeName in attributes) {
    if (attributes.hasOwnProperty(attributeName)) {
        const attributeValue = attributes[attributeName];
        console.log(`Attribute: ${attributeName}, Value: ${attributeValue}`);
    }
}
let previousFilters = {};
function showProductInventory(val, filtername) {

  if (val === "select") {
    delete previousFilters[filtername];
  } else {
    previousFilters[filtername] = val;
  }
  let filters = Object.entries(previousFilters)
    .filter(([_, value]) => value !== "")
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  for (const attributeName in attributes) {
    if (attributes.hasOwnProperty(attributeName)) {
        if (!filters.includes(`${attributeName}="${attributes[attributeName]}"`) && attributes[attributeName] !== "") {
          const attributeValue = attributes[attributeName];
          filters += ` ${attributeName}="${attributeValue}"`;
        }
    }
  }

  if (Object.keys(previousFilters).length === 0) {
    document.getElementById("webcomponent-container").innerHTML = firstHtml;
  } else {
    document.getElementById("webcomponent-container").innerHTML =
      `<product-widget-container id='detailwidget' ${filters}></product-widget-container>`;
  }
}
function toggleMobileView() {
  var filterRow = document.getElementById('filter-row');
  filterRow.classList.toggle('show');
}

function expandGroup(id) {
  const group = document.getElementById(id);
  const titleDiv = group.previousElementSibling;
  const chevron = titleDiv.querySelector('.sps-chevron-down'); // much cleaner and faster
  const isCollapsed = group.classList.contains('collapsed');

  if (isCollapsed) {
    group.style.height = group.scrollHeight + "px";
    group.classList.remove('collapsed');
    chevron.classList.add('rotate');

    group.addEventListener('transitionend', function handler() {
      group.style.height = "auto";
      group.removeEventListener('transitionend', handler);
    });
  } else {
    group.style.height = group.scrollHeight + "px";
    group.offsetHeight;
    group.style.height = "0px";
    group.classList.add('collapsed');
    chevron.classList.remove('rotate');
  }
}




function goToPrev(id) {
  var carousel  = document.getElementById('overlay-'+ id +'-Group')
  var items = carousel.querySelectorAll('.carousel-item');
  var activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
  var prevIndex = (activeIndex - 1 + items.length) % items.length;
  items[prevIndex].classList.add('active');
  items[activeIndex].classList.remove('active');
}
function goToNext(id) {
  var carousel  = document.getElementById('overlay-'+ id +'-Group')
  var items = carousel.querySelectorAll('.carousel-item');
  var activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
  var nextIndex = (activeIndex + 1) % items.length;
  items[nextIndex].classList.add('active');
  items[activeIndex].classList.remove('active');
}
function handleChange(itemName, index) {
  console.log(itemName,index)
  const overlayLayer = document.getElementById('demo-'+itemName.replace(/\s+/g, '-').toLowerCase());
  overlayLayer.style.display = 'block';
  const carouselItems = overlayLayer.querySelectorAll('.carousel-item');
  console.log(carouselItems)
  carouselItems.forEach(item => {
    item.classList.remove('active');
    Array.from(item.children).forEach(child => {
      if ((child.id).replace(/\s+/g, '-').toLowerCase() === 'overlay-'+itemName.replace(/\s+/g, '-').toLowerCase()+'-'+index) {
        item.classList.add('active');
      }
    });
  });
}
var url = window.location.href;

function handleClose(itemName) {
  const overlayLayer = document.getElementById('demo-'+itemName.replace(/\s+/g, '-').toLowerCase());
  overlayLayer.style.display = 'none';
  location.href=url;
} 
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function updateProductWidget() {
  const Item = getQueryParam('product'); // Get product from URL
  console.log(Item);
  if (!Item) {
    alert("No product selected.");
    return;
  }

  const productWidget = document.getElementById('detailwidget');

  
  productWidget.setAttribute('productname', Item);

  
  document.getElementById('productNameDisplay').textContent =  Item;
}


window.onload = updateProductWidget;