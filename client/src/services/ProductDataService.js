import http from '../http-common'
class ProductDataService {
  getAll () {
    // dar inja az noghte etesale front , back etelaat az server gerefteh mishavad./http hamoon axios
    // http://localhost:8080/api/products     method: GET
    return http.get('/product')
  }

  getProduct (id) {
    // http://localhost:8080/api/products   method: POST
    return http.get('/product/' + id)
  }

  create (data) {
    // http://localhost:8080/api/products   method: POST
    return http.post('/product', data)
  }

  update (id, data) {
    return http.put('/product/' + id, data)
  }

  delete (id) {
    return http.delete('/product/' + id)
  }
}
// chon kelass hast bayad new bezanim
export default new ProductDataService()
