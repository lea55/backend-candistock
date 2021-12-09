import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { CategoriesIngredientController } from './controllers/categories-ingredient.controller';
import { ControlStockController } from './controllers/control-stock.controller';
import { CategoriesProductController } from './controllers/categories-product.controller';
import { IngredientController } from './controllers/ingredient.controller';
import { StockMovementController } from './controllers/stock-movement.controller';
import { ProductService } from './services/product.service';
import { CategoriesIngredientService } from './services/categories-ingredient.service';
import { ControlStockService } from './services/control-stock.service';
import { CategoriesProductService } from './services/categories-product.service';
import { IngredientService } from './services/ingredient.service';
import { StockMovementService } from './services/stock-movement.service';
import { ListPriceController } from './controllers/list-price.controller';
import { ListPriceService } from './services/list-price.service';


@Module({
    controllers: [ProductController, CategoriesIngredientController, ControlStockController,CategoriesProductController,IngredientController,StockMovementController,ListPriceController],
    providers: [ProductService, CategoriesIngredientService, ControlStockService,CategoriesProductService,IngredientService,StockMovementService,ListPriceService],
    exports:[ProductService],
    
  })
  export class ProductModule {}
  