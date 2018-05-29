import swal from 'sweetalert'
import SupermarketController from './controllers/SupermarketController'

let supermarketController = new SupermarketController();
document.querySelector("#btn-empty").onclick = supermarketController.removeAllProducts.bind(supermarketController);
document.querySelector('.form').onsubmit = supermarketController.addProduct.bind(supermarketController);
document.querySelector('.fa-info-circle').onclick = supermarketController.info.bind(supermarketController);