import { Inject, Injectable,NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import {Db} from 'mongodb';

@Injectable()
export class ProductService {
constructor(
    @Inject('PRODUCTS') private product:any[],
    @Inject('MONGO') private database:Db,
    @Inject(config.KEY) private configService:ConfigType<typeof config>,
){}

   
getDatabase(): string {
    const apiKEY = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Database ${apiKEY} ${name}`;
}

getproduct(){
    const products =  this.database.collection('products');
    return products.find().toArray();
}


}

