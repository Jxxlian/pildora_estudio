const products = [
    {id: '1', title: 'Candelabro', description: 'Candelabros individuales fuego vienen con velas torneadas de regalo', price: '500', pictureURL: 'https://i.ibb.co/JRj1PTt/candelabro.jpg', category: 'ceramica'}, 
    
    {id: '2', title: 'Pipas', description: 'Pipas fuego y tribales', price: '200', pictureURL: 'https://i.ibb.co/xFDcdVL/pipa.jpg', category: 'ceramica'}, 

    {id: '3', title: 'Almohadones Floral', description: 'Son un sueño de hermosos, para poner en la cama,en el sillón, o para tirarse en el piso a escuchar música.', price: '1000', pictureURL: 'https://i.ibb.co/HXDk6M7/almohadon.jpg', category: 'almohadon'}, 
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {            
            resolve(products.find( p => p.id === id))
        }, 2000)
    })
} 

export const getProductbyCategory  = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter( p => p.category === category))
        }, 2000)
    })
}


