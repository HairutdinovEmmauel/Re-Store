export default class BookStoreService {
    
    data = [
        {   
            id: 1, 
            title: 'Production-Ready Micorservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://m.media-amazon.com/images/I/81D4AHNvMsL._AC_UY218_ML3_.jpg'},
        {   
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg'},
        ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('Something bad happend'));
            }, 700)
        })
    }
}