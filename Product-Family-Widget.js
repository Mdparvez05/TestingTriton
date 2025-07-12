
function updateView() {
  const params = new URLSearchParams(window.location.search);
  const listView = document.getElementById("listView");
  const detailView2 = document.getElementById("detailView2");
  const webComponentContainer = document.getElementById("webcomponent-container");

  if (params.has("productID")) {
    listView.style.display = "none";
    detailView2.style.display = "block";
    webComponentContainer.style.display = "block"; // Show web component only on detail view
    document.title = params.get("productName");
  } else {
    listView.style.display = "block";
    detailView2.style.display = "none";
    webComponentContainer.style.display = "none"; // Hide web component when in list view
    document.title = "Product";
  }
}

updateView();
window.addEventListener("popstate", updateView);

document.body.appendChild(webConnectStylesLink);
class Family extends HTMLElement {
  allItems = [];
  displayedItems = [];
  itemsPerPage = 16;
  currentPage = 1;
  connectedCallback() {

    this.attachShadow({ mode: "open" });

    // 1. Load Font Awesome



    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "Product-Family-Widget.css?v=1");
    // 2. Internal CSS styles
    const style = document.createElement("style");
    style.textContent = `
    .toggle-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .arrow-box {
      width: 20px;
      height: 20px;
      border: 1px solid #aaa;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
    }

    .arrow-up {
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid black;
    }

    .arrow-down {
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid black;
    }

    .filter-content {
      display: none;
      margin-left: 5px;
    }

    .filter-content.show {
      display: block;
    }

    .filter {
      margin-bottom: 10px;
    }
  .item:hover {
  box-shadow:
  }

  `;
    this.shadowRoot.appendChild(style);



    // HTML content

    this.shadowRoot.innerHTML = `
  
       <div class="container" >
     
            <div class="filters">
              <div class="filter">
                <label for="searchItemName">Product Name  </label>
                <input type="text" id="searchItemName" placeholder="Type Product Name" style="width:88%;" />
                <ul id="autocompleteList" class="autocomplete-list"></ul>
              </div>
            <div class="filter">
                 <label class="toggle-filter">Brand <span class="arrow-box"><div class="arrow-down"></div></span>
              
                </label>
                <div class="filter-content" id="brandFilterContainer"></div>
            </div>
             <div class="filter">
                <label class="toggle-filter">Color <span class="arrow-box"><div class="arrow-down"></div></span>
               
                </label>
                <div class="filter-content" id="colorFilterContainer"></div>
              </div>
         <div class="filter">
              <label class="toggle-filter">Material Type <span class="arrow-box"><div class="arrow-down"></div></span>
              <!-- Directly append the down arrow here -->
              </label>
              <div class="filter-content" id="categoryFilterContainer"></div>
          </div>
             <div class="filter">
        <label class="toggle-filter"> Origin<span class="arrow-box"><div class="arrow-down"></div></span>  
          
        </label>
        <div class="filter-content" id="locationFilterContainer"></div>
      </div>

     
      <div class="filter">
    <label class="toggle-filter">Product Type  <span class="arrow-box"><div class="arrow-down"></div></span>
       
    </label>
    <div class="filter-content" id="ItemTypeFilterContainer"></div>
</div>
      <div class="filter">
    <label class="toggle-filter">Style <span class="arrow-box"><div class="arrow-down"></div></span> 
      
    </label>
    <div class="filter-content" id="styleFilterContainer"></div>
</div>
 

 
    </div>
   <div class="inventory">
    <div class="inventory-header">
        <h2> <span id="countDisplay" class="count-display"></span></h2>
        
    </div>
   <div class="items-container" id="itemsContainer"></div>
</div>
`;
    this.shadowRoot.appendChild(link);
    this.initialize();
  }

  async fetchData() {
    try {
      const res = await fetch("https://stage.stoneprofits.com/tritonno/development/Custom/Tritonno/WebWidgetAPI.aspx?act=getProductFamilies");

      const data = await res.json();
      this.allItems = data;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }


    // Restore search input
    if (savedFilters.search) {
      this.shadowRoot.getElementById('searchItemName').value = savedFilters.search;
    }

    // Restore selected filters
    const restoreCheckboxes = (className, savedValues) => {
      this.shadowRoot.querySelectorAll(`.${className}`).forEach(cb => {
        if (savedValues.includes(cb.value)) {
          cb.checked = true;
        }
      });
    };

    restoreCheckboxes("location-checkbox", savedFilters.locations || []);
    restoreCheckboxes("category-checkbox", savedFilters.materials || []);
    restoreCheckboxes("style-checkbox", savedFilters.styles || []);
    restoreCheckboxes("brand-checkbox", savedFilters.brands || []);
    restoreCheckboxes("color-checkbox", savedFilters.colors || []);
    restoreCheckboxes("ItemType-checkbox", savedFilters.ItemTypes || []);

    this.renderItems();

  }

  // Add all the Filters
  populateFilters(data) {
    const locationSet = new Set();
    const categorySet = new Set();
    const styleSet = new Set();
    const brandSet = new Set();
    const colorSet = new Set();
    const ItemTypeSet = new Set();

    data.forEach(item => {
      if (item.Location) locationSet.add(item.Location);
      if (item.CategoryName) categorySet.add(item.CategoryName);
      if (item.Style) styleSet.add(item.Style);
      if (item.Brand) brandSet.add(item.Brand);
      if (item.ProductColors) {
        item.ProductColors.split(",").forEach(color => {
          colorSet.add(color.trim()); // Trim spaces and add each color separately
        });
      }
      if (item.ItemType) ItemTypeSet.add(item.ItemType);
    });

    this.createFilterOptions("locationFilterContainer", locationSet, "location-checkbox");
    this.createFilterOptions("categoryFilterContainer", categorySet, "category-checkbox");
    this.createFilterOptions("styleFilterContainer", styleSet, "style-checkbox");
    this.createFilterOptions("brandFilterContainer", brandSet, "brand-checkbox");
    this.createFilterOptions("colorFilterContainer", colorSet, "color-checkbox");// Create Color Filter 
    this.createFilterOptions("ItemTypeFilterContainer", ItemTypeSet, "ItemType-checkbox");
  }

  createFilterOptions(containerId, options, checkboxClass) {
    const container = this.shadowRoot.getElementById(containerId);
    container.innerHTML = '';

    options.forEach(option => {
      const wrapper = document.createElement('div');
      wrapper.className = 'filter-option';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = option;
      checkbox.className = checkboxClass;
      checkbox.id = `${checkboxClass}-${option}`;

      const label = document.createElement('label');
      label.htmlFor = `${checkboxClass}-${option}`;
      label.textContent = option;

      wrapper.appendChild(checkbox);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
  }

  renderItems(loadMore = false) {
    const container = this.shadowRoot.getElementById("itemsContainer");

    if (!loadMore) {
      container.innerHTML = "";
      this.currentPage = 1;
    }

    const searchValue = this.shadowRoot.getElementById("searchItemName").value.toLowerCase();
    const selectedLocations = Array.from(this.shadowRoot.querySelectorAll('.location-checkbox:checked')).map(cb => cb.value);
    const selectedMaterials = Array.from(this.shadowRoot.querySelectorAll('.category-checkbox:checked')).map(cb => cb.value);
    const selectedStyles = Array.from(this.shadowRoot.querySelectorAll('.style-checkbox:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(this.shadowRoot.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
    const selectedColors = Array.from(this.shadowRoot.querySelectorAll('.color-checkbox:checked')).map(cb => cb.value);
    const selectedItemTypes = Array.from(this.shadowRoot.querySelectorAll('.ItemType-checkbox:checked')).map(cb => cb.value);

    // Start fresh
    const newParams = new URLSearchParams();

    // Add filters only if they have values
    if (searchValue) newParams.set("search", searchValue);
    if (selectedLocations.length > 0) newParams.set("locations", selectedLocations.join(","));
    if (selectedMaterials.length > 0) newParams.set("materials", selectedMaterials.join(","));
    if (selectedStyles.length > 0) newParams.set("styles", selectedStyles.join(","));
    if (selectedBrands.length > 0) newParams.set("brands", selectedBrands.join(","));
    if (selectedColors.length > 0) newParams.set("colors", selectedColors.join(","));
    if (selectedItemTypes.length > 0) newParams.set("ItemTypes", selectedItemTypes.join(","));

    // Preserve productID and ProductName if it's part of the current URL
    const currentParams = new URLSearchParams(window.location.search);
    const productID = currentParams.get("productID");
    const productName = currentParams.get("productName");

    if (productID) newParams.set("productID", productID);
    if (productName) newParams.set("productName", productName);

    // ✅ Update the URL (even if no filters are selected)
    const newUrl = `${window.location.pathname}${newParams.toString() ? '?' + newParams.toString() : ''}`;
    history.pushState(null, '', newUrl);

    let filteredData = this.allItems.filter(item => {
      const itemColors = item.ProductColors ? item.ProductColors.split(",").map(c => c.trim()) : [];

      return (
        item.ItemName.toLowerCase().includes(searchValue) &&
        (selectedLocations.length === 0 || selectedLocations.includes(item.Location)) &&
        (selectedMaterials.length === 0 || selectedMaterials.includes(item.CategoryName)) &&
        (selectedStyles.length === 0 || selectedStyles.includes(item.Style)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(item.Brand)) &&
        (selectedColors.length === 0 || itemColors.some(color => selectedColors.includes(color))) &&
        (selectedItemTypes.length === 0 || selectedItemTypes.includes(item.ItemType))
      );

    });

    this.shadowRoot.getElementById("countDisplay").textContent = `Showing ${filteredData.length} items`;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedItems = filteredData.slice(startIndex, endIndex);
    // Check if items are already displayed
    const existingItemIds = Array.from(container.children).map(item => item.dataset.itemId);

    this.displayedItems.forEach(item => {
      if (!existingItemIds.includes(item.ItemID)) {
        const itemDiv = document.createElement("div");
        // itemDiv.className = "col-xs-12 col-sm-6 col-md-3";
        itemDiv.className = "item";

        itemDiv.dataset.itemId = item.ItemID;

        const link = document.createElement("a");
        link.href = `?productID=${encodeURIComponent(item.ItemID)}&productName=${encodeURIComponent(item.ItemName)}`;
        if (selectedColors.length > 0) {
          link.href += `&colors=${encodeURIComponent(selectedColors.join(','))}`;
        }

        const imageSrc = item.CatalogImage && item.CatalogImage !== "Image Coming Soon"
          ? `https://dyq9nr4i000mv.cloudfront.net/${item.CatalogImage}?width=500`
          : null;

        const itemContent = document.createElement("div");
        itemContent.className = "item-content";

        if (imageSrc) {
          itemContent.innerHTML = `<img class="lazy-load" data-src="${imageSrc}" alt="Product Image">`;
        } else {
          itemContent.innerHTML = `<div class="empty-image-container"></div>`;
        }

        const itemTitle = document.createElement("h2");
        itemTitle.className = "item-title";
        itemTitle.textContent = item.ItemName;

        link.appendChild(itemTitle);
        itemContent.appendChild(link);
        itemDiv.appendChild(itemContent);
        container.appendChild(itemDiv);


      }
    });

    this.lazyLoadImages();
  }




  lazyLoadImages() {
    const images = this.shadowRoot.querySelectorAll(".lazy-load");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Load actual image
          img.classList.remove("lazy-load");
          observer.unobserve(img); // Stop observing after loading
        }
      });
    });

    images.forEach(img => observer.observe(img));
  }
  enableScrollPagination() {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (scrollPosition >= documentHeight - 100) { // User reached near bottom
        this.currentPage++;
        this.renderItems(true);
      }
    });
  }


  toggleFilterVisibility(event) {
    const label = event.currentTarget;
    const filterContent = label.nextElementSibling;
    const arrowBox = label.querySelector('.arrow-box div');

    filterContent.classList.toggle('show');

    if (filterContent.classList.contains('show')) {
      arrowBox.classList.remove('arrow-down');
      arrowBox.classList.add('arrow-up');
    } else {
      arrowBox.classList.remove('arrow-up');
      arrowBox.classList.add('arrow-down');
    }
  }



  initialize() {
    this.fetchData().then(data => {
      if (data) {
        this.populateFilters(data);

        // Get filters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const selectedFilters = {
          search: urlParams.get("search") || '',
          locations: urlParams.get("locations") ? urlParams.get("locations").split(",") : [],
          materials: urlParams.get("materials") ? urlParams.get("materials").split(",") : [],
          styles: urlParams.get("styles") ? urlParams.get("styles").split(",") : [],
          brands: urlParams.get("brands") ? urlParams.get("brands").split(",") : [],
          colors: urlParams.get("colors") ? urlParams.get("colors").split(",") : [],
          ItemTypes: urlParams.get("ItemTypes") ? urlParams.get("ItemTypes").split(",") : []
        };

        // Restore search input
        this.shadowRoot.getElementById('searchItemName').value = selectedFilters.search;

        // Restore selected filters
        const restoreCheckboxes = (className, savedValues) => {
          this.shadowRoot.querySelectorAll(`.${className}`).forEach(cb => {
            if (savedValues.includes(cb.value)) {
              cb.checked = true;
            }
          });
        };

        restoreCheckboxes("location-checkbox", selectedFilters.locations);
        restoreCheckboxes("category-checkbox", selectedFilters.materials);
        restoreCheckboxes("style-checkbox", selectedFilters.styles);
        restoreCheckboxes("brand-checkbox", selectedFilters.brands);
        restoreCheckboxes("color-checkbox", selectedFilters.colors);
        restoreCheckboxes("ItemType-checkbox", selectedFilters.ItemTypes);

        this.renderItems();
        this.enableScrollPagination();
        this.shadowRoot.getElementById('searchItemName').addEventListener('input', () => this.renderItems());
        this.shadowRoot.addEventListener('change', () => this.renderItems());

        // Add event listeners for toggle buttons
        this.shadowRoot.querySelectorAll('.toggle-filter').forEach(label => {
          label.addEventListener('click', (e) => this.toggleFilterVisibility(e));
        });
      }
    });
  }


}

customElements.define("family-element", Family);

class FamilyDetail extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "styles/Product-Family-Detail-Widget.css");

    const owlStyle1 = document.createElement("link");
    owlStyle1.rel = "stylesheet";
    owlStyle1.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";

    const owlStyle2 = document.createElement("link");
    owlStyle2.rel = "stylesheet";
    owlStyle2.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css";

    this.shadowRoot.innerHTML = `
      <style>
        .owl-nav {
          display: none !important;
        }
        .owl-dots {
          text-align: center;
          margin-top: 10px;
        }
       
          }
      </style>
      <div class="container">
        <div class="product-page">
          

          <div class="product-grid">
            <!-- Left column: main image -->
            <div class="left-column spswc col-md-6">
            <div class="carousel-container">
              <div class="carousel-slide" id="carouselSlide">
                <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_101442_AGATA_BLUE_BM.jpg?width=500" alt="1" />
                <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_28335_Agate_Onyx_607_51_full.JPG?width=500" alt="2" />
                <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_126990_Item_Img_126990_ALEXANDRITA_3CM_POLISHED___00006720U___00006720U_A02_72561_BND_5_76730.jpg?width=500" alt="3" />
                <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_101447_BAOBAB_SODALITE_BM.jpg?width=500" alt="4" />
              </div>

              <button class="nav-btn prev-btn" onclick="moveSlide(-1)"></button>
              <button class="nav-btn next-btn" onclick="moveSlide(1)"></button>
            </div>
            <div class="thumbnails" id="thumbnailContainer">
              <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_101442_AGATA_BLUE_BM.jpg?width=500" onclick="goToSlide(0)" />
              <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_28335_Agate_Onyx_607_51_full.JPG?width=500" onclick="goToSlide(1)" />
              <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_126990_Item_Img_126990_ALEXANDRITA_3CM_POLISHED___00006720U___00006720U_A02_72561_BND_5_76730.jpg?width=500" onclick="goToSlide(2)" />
              <img src="https://s3.us-east-1.amazonaws.com/hilltopstones-sps-files/Item_Img_101447_BAOBAB_SODALITE_BM.jpg?width=500" onclick="goToSlide(3)" />
            </div>

            </div>

            <!-- Right column: name, benefits, table -->
            <div class="rightColumn">
              <h2 id="productNameDisplay"></h2>

              <table border="1">
                <colgroup>
                  <col style="width: 30%;">
                  <col style="width: 70%;">
                </colgroup>
                <tbody>
                  <tr>
                    <td>COUNTRY OF ORIGIN</td>
                    <td id="originDisplay"></td>
                  </tr>
                  <tr>
                    <td>MATERIAL</td>
                    <td id="categoryDisplay"></td>
                  </tr>
                  <tr>
                    <td>COLORS</td>
                    <td id="colorDisplay"></td>
                  </tr>
                </tbody>
              </table>
              <div id="benefitsSection">
                <h4>Benefits:</h4>
                <div id="benefitsGrid">
                  <div class="benefit-row">
                    <div class="benefit">Indoor/ outdoor use</div>
                    <div class="benefit">Scratch Resistant</div>
                    <div class="benefit">Stain Resistant</div>
                  </div>
                  <div class="benefit-row">
                    <div class="benefit">Heat Resistant</div>
                    <div class="benefit">Book Match Available</div>
                    <div class="benefit">Environmental friendly</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    `;

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(owlStyle1);
    this.shadowRoot.appendChild(owlStyle2);
    setTimeout(() => {
    this.setupCarousel();
  }, 0);
    this.loadScripts().then(() => this.updateProductWidget());
  }

  loadScripts() {
    return new Promise((resolve) => {
      const jqueryScript = document.createElement("script");
      jqueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      jqueryScript.onload = () => {
        const owlScript = document.createElement("script");
        owlScript.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
        owlScript.onload = resolve;
        document.body.appendChild(owlScript);
      };
      document.body.appendChild(jqueryScript);
    });
  }

  getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  setupCarousel() {
      const slide = this.shadowRoot.getElementById("carouselSlide");
      const thumbnails = this.shadowRoot.querySelectorAll("#thumbnailContainer img");
      const images = slide?.querySelectorAll("img") || [];

      if (!slide || images.length === 0) return;

      let index = 0;
      const totalSlides = images.length;
      let interval;

      const showSlide = (i) => {
        const slideWidth = this.shadowRoot.querySelector(".carousel-container").clientWidth;
        index = (i + totalSlides) % totalSlides;
        slide.style.transform = `translateX(-${index * slideWidth}px)`;
        updateThumbnails();
      };

      const updateThumbnails = () => {
        thumbnails.forEach((thumb, i) => {
          thumb.classList.toggle("active", i === index);
        });
      };

      const moveSlide = (step) => showSlide(index + step);
      const goToSlide = (i) => {
        clearInterval(interval);
        showSlide(i);
        startAutoSlide();
      };

      const startAutoSlide = () => {
        interval = setInterval(() => {
          moveSlide(1);
        }, 3000);
      };

      // 🟡 Attach listeners to arrow buttons and thumbnails
      const prevBtn = this.shadowRoot.querySelector(".prev-btn");
      const nextBtn = this.shadowRoot.querySelector(".next-btn");

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => moveSlide(-1));
        nextBtn.addEventListener("click", () => moveSlide(1));
      }

      thumbnails.forEach((thumb, i) => {
        thumb.addEventListener("click", () => goToSlide(i));
      });

      window.addEventListener("resize", () => showSlide(index));

      // ✅ Start the carousel
      startAutoSlide();
      showSlide(0);
  }

  updateProductWidget() {
    const productID = this.getQueryParam("productID");
    if (!productID) return;

    fetch(`https://stage.stoneprofits.com/tritonno/development/Custom/Tritonno/WebWidgetAPI.aspx?act=getProductFamiliesDetails&ID=${encodeURIComponent(productID)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const product = data[0];

        const {
          ItemName: productName,
          Location: productOrigin,
          CategoryName: productCategory,
          CatalogImage: productImage,
          AllImages: detailImages,
          ProductColors
        } = product;

        this.shadowRoot.getElementById("productNameDisplay").textContent = productName || "";
        console.log("done")
        this.shadowRoot.getElementById("originDisplay").textContent = productOrigin || "";
        this.shadowRoot.getElementById("categoryDisplay").textContent = productCategory || "";

        const productImageEl = this.shadowRoot.getElementById("productImage");
        productImageEl.src = `https://dyq9nr4i000mv.cloudfront.net/${productImage}?width=500`;
        productImageEl.alt = productName;

        const colorDisplay = this.shadowRoot.getElementById("colorDisplay");
        const allColors = ProductColors ? ProductColors.split(",").map(c => c.trim()) : [];
        const selectedColorsParam = this.getQueryParam("colors");
        let filteredColors = allColors;

        if (selectedColorsParam) {
          const selectedColors = selectedColorsParam.split(',').map(c => c.trim().toLowerCase());
          filteredColors = allColors.filter(color => selectedColors.includes(color.toLowerCase()));
        }

        colorDisplay.textContent = filteredColors.length > 0 ? filteredColors.join(", ") : " ";

        // Populate and initialize image carousel
        const imageGallery = this.shadowRoot.getElementById("imageGallery");
        imageGallery.innerHTML = "";

        if (detailImages) {
          const imageArray = detailImages.split(",");
          const validExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

          const uniqueImages = Array.from(
            new Set(
              imageArray.map((img) => img.trim()).filter((img) =>
                validExtensions.includes(img.split(".").pop().toLowerCase())
              )
            )
          );

          uniqueImages.forEach((img) => {
            const fullImageUrl = `https://dyq9nr4i000mv.cloudfront.net/${img}?width=800`;
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            const boxDiv = document.createElement("div");
            boxDiv.className = "image-box";
            const imgEl = document.createElement("img");
            imgEl.src = fullImageUrl;
            imgEl.alt = productName;
            imgEl.addEventListener("click", () => {
              productImageEl.src = fullImageUrl;
              productImageEl.alt = productName;
            });
            boxDiv.appendChild(imgEl);
            itemDiv.appendChild(boxDiv);
            imageGallery.appendChild(itemDiv);
          });

          // ✅ Initialize OwlCarousel AFTER images are added
          setTimeout(() => {
            $(imageGallery).owlCarousel({
              loop: false,
              margin: 0,
              nav: false,
              dots: true,
              // ✅ Show dots
              items: 3,
              responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
              }
            });
          }, 50);
        }
      })
      .catch((err) => {
        console.error("Failed to load product details:", err);
      });
  }
}

customElements.define("family-element-detail", FamilyDetail);




// carousel js start

  // carousel js end


