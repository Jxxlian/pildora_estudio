import { getDoc, doc, getDocs, collection, addDoc, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db, myCollections } from '.'

export const getProducts = (category) =>{
    return new Promise ((resolve, reject) =>{
        const filter = category 
            ? query(collection(db, myCollections.product), where('category', "==", category))
            : collection(db, myCollections.product)

            getDocs(filter).then(response => {            
            const product = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    }) }   

export const getProductById = (productID) => {
    return new Promise ((resolve, reject) => {
        getDoc(doc(db, myCollections.product, productID)).then(response => {
            const product ={ id: response.id, ...response.data()}            
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    })
}


export const createOrder = (Obj, cart) => {
        
    const idsWantToBuy = cart.map(prod => prod.id)
    const withOutStock = []
    const batch = writeBatch(db)
 
    return new Promise ((resolve) => { 
        const collecionReference = collection(db, myCollections.product)
        
        getDocs(query(collecionReference, where(documentId(),'in',idsWantToBuy)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const productQ = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= productQ) {
                    batch.update(doc.ref, {stock: dataDoc.stock - productQ})                    
                } else {
                    withOutStock.push({id: doc.id, ...dataDoc})                    
                }       
                })                       
            }).then(() => {               
                if(withOutStock.length === 0 ) {                    
                    const orderCollection = collection(db, myCollections.order)
                    return addDoc(orderCollection, Obj)                    
                } else {                    
                    return Promise.reject()
                }                
            }).then(({id}) => {
                batch.commit()       
                resolve(id)
            }).catch(error => {                
                console.log(error)                
            })
        })
       
    
}



export const getPurchaseByID = (idData) => {
    getDoc(doc(db, myCollections.order, idData)).then(response => {
        const myOrder = {id: response.id, ...response.data()}
        console.log(myOrder)
    })
    
   
} 
