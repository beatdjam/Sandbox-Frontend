import "reflect-metadata";
import {plainToClass} from "class-transformer";
import _ from 'lodash';
import {Product} from "./product.model";
import {validate} from "class-validator";

console.log(_.shuffle([1, 2, 3]));

// class-transformer
const product = new Product(`商品1`, 100);
console.log(product.getInformation());

const products = [
    {title: `商品1`, price: 100},
    {title: `商品2`, price: 200}
];

const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
});

console.log(loadedProducts);

const loadedProducts2 = plainToClass(Product, products);
console.log(loadedProducts2);


// class-validator
const newProd = new Product('', -100);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('エラー');
        console.log(errors);
    } else {
        console.log('正常');
        console.log(newProd.getInformation());
    }
});
