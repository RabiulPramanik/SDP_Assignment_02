
const allLoadProducts = (value) =>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>{
            let fag = true;
            const productContainer = document.getElementById("products-box");
            data.categories.forEach(element =>{
                let name = element.strCategory.toLowerCase();
                if(name.includes(value)){
                    fag = false;
                    const div = document.createElement("div");
                    div.classList.add("card");
                    div.innerHTML = `
                        <img class="card-img" src=${element.strCategoryThumb} alt="">
                        <p>
                        <button class="ditails-buttom" onclick="singleProduct('${element.strCategory}')"><h1>${element.strCategory}</h1></button>
                        </p>
                    `
                    productContainer.appendChild(div);
                }
            })
            if(fag){
                const div = document.createElement("div");
                div.classList.add("card");
                div.innerHTML = `
                    <h1>Empty</h1>
                `
                productContainer.appendChild(div);
            }

    })
}
// ShowDitails idCategory//
const singleProduct = (name)=>{
    const elements = document.getElementsByClassName("ditails-card");
            while (elements.length > 0) {
                elements[0].remove();
            }
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>res.json())
        .then(data=>{
            data.categories.forEach(element =>{
                if(name == element.strCategory){
                    const showContainer = document.getElementById("ditails");
                    const div = document.createElement("div");
                    div.classList.add("ditails-card");
                    div.innerHTML=`
                        <img class="card-img" src=${element.strCategoryThumb} alt="">
                        <p>${element.strCategoryDescription}</p>
                        <h1>${element.strCategory}</h1>
                    `
                    showContainer.appendChild(div);
                    
                }
            })
        })

}

document.getElementById("hendleAdd").addEventListener('click',(event) =>{    
    const elements = document.getElementsByClassName("card");
            while (elements.length > 0) {
                elements[0].remove();
            }
    const top_elements = document.getElementsByClassName("ditails-card");
            while (top_elements.length > 0) {
                top_elements[0].remove();
            }
    const inputValue = document.getElementById("search-box").value;
    allLoadProducts(inputValue);
})

