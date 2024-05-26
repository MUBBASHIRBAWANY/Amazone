import { parseRequestURL } from '../utiles.js'
import {getProduct} from '../api.js'

const Productscreen = {
    render: async () =>{
        const request = parseRequestURL()
        const product = await getProduct(request.id)
        const detail = document.getElementById("detail")
        return detail.innerHTML=`<h1>dsajdhsakjd</h1>`
    }
}

export default Productscreen