import { getDoc, doc, getDocs, collection, addDoc,
     query, where } from 'firebase/firestore'
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

export const createOrder = (Obj) => {
    return new Promise ((resolve) => {
        const collecionReference = collection(db, myCollections.order)
        addDoc(collecionReference, Obj).then(({id}) =>{
            resolve(id)
        })
    })
}

export const getCategory = () => {
    return new Promise ((resolve) => {
            getDocs(collection(db, 'category')).then(response => {            
            const category = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
            }) 
            resolve(category)
        })
    })
}