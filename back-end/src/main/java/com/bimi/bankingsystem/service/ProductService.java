package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Product;
import com.bimi.bankingsystem.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository  productRepository;
    public ProductService(ProductRepository er){ this.productRepository = er;}


    public Product saveProduct(Product e){
        return productRepository.save(e);
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).get();
    }

    public boolean deleteProduct(Long id ){
        productRepository.deleteById(id);
        return true;
    }
    public Product updateProduct(Long id, Product p){
        Product product =
                productRepository.findById(id).get();
        product.setName(p.getName());
        product.setDesc(p.getDesc());
        product.setPageUrl(p.getPageUrl());
        product.setType(p.getType());
        product.setImageUrl(p.getImageUrl());

        return productRepository.save(product);

    }


}
