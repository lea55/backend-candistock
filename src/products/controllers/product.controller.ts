import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';


@Controller('products')
export class ProductController {
    constructor(private productService:ProductService){

    }
    @Get()
    getProducts() {
        return this.productService.getproduct();
    }
}
