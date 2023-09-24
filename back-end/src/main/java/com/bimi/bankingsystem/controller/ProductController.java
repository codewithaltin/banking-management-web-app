package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Product;
import com.bimi.bankingsystem.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService p ){
        this.productService = p;
    }
    @PostMapping("/product")
    public Product createProduct(@RequestBody Product p){
        return productService.saveProduct(p);
    }
    @GetMapping("/product")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }
    @PutMapping("product/{id}")
    public Product updateProduct(@PathVariable Long id,@RequestBody Product p){
        return productService.updateProduct(id,p);
    }
    @DeleteMapping("product/{id}")
    public boolean deleteProduct(@PathVariable Long id){
        return productService.deleteProduct(id);
    }

}
