import Rating from "../components/Rating.js";
const HomeScreen = {
    render: async () =>{
        // const {products} = data
        const response = await fetch ("http://localhost:5000/api/product", {
          headers: {
            "Content-Type" : "application/json"
          }
        })
        const products = await response.json(); 
        return `
        <ul class="products">
          ${products
            .map(
              (product) => 
              `
          <li>
            <div class="product">
              <a href="/#/product/${product._id}">
                <img src="${product.image}" id=${product._id} class="pr" alt="${product.name}" />
              </a>
            <div class="product-name">
              <a href="/#/product/1">
                ${product.pname}
              </a>
            </div>
            <div class="product-rating">
            ${Rating.render({
              value : product.rating,
              text : `${product.numberReviews} Reviews`
            })}
            
            <div>
            <div class="product-brand">
              ${product.brand}
            </div>
            <div class="product-price">
              $${product.price}
            </div>
            <div>
            <button onClick="getVal(${product._id})" value=${product._id} id="bun">
            Add To Card
            </button>
            </div>
            </div>
          </li>
          `
        )}
        </ul>
        `
    }
}

export default HomeScreen;