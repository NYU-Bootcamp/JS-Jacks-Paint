function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements

    for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        images[i].addEventListener("mouseout", removeOpacity) 
        images[i].addEventListener("mouseover", addOpacity)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    let list = event.target.classList
    list.add('dim')

    getProductInfo(event.target.id);    
}

function removeOpacity(event) {
    //remove appropriate CSS class
    let list = event.target.classList
    list.remove('dim')

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            colorName = "Lime Green"
            price = "$14.99"    
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            colorName = "Medium Brown"
            price = "$11.14"
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            colorName = "Royal Blue"
            price = "$22.99"    
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            colorName = "Solid Red"
            price = "$13.42"
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            colorName = "Solid White"
            price = "$21.98"
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            colorName = "Solid Black"
            price = "$4.99"
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid Cyan"
            price = "$8.22"
            break;
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            colorName = "Solid Purple"
            price = "$11.99"
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid Yellow"
            price = "$14.99"    
            break;   
          default:  
    }
    updatePrice(colorName, price)

    function updatePrice(colorName, price)
    {       
        // select element with corresponding id
        // display price
        let element = document.getElementById('color-price');
        element.textContent = price;

        
        // select element with corresponding id
        //display color name
        let colorElement = document.getElementById('color-name');
        colorElement.textContent = colorName; 
    }
    
}
