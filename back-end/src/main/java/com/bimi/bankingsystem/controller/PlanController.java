package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Plan;
import com.bimi.bankingsystem.model.Product;
import com.bimi.bankingsystem.service.PlanService;
import com.bimi.bankingsystem.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class PlanController {
    private PlanService planService;

    public PlanController(PlanService p ){
        this.planService = p;
    }
    @PostMapping("/plan")
    public Plan createProduct(@RequestBody Plan p){
        return planService.saveProduct(p);
    }
    @GetMapping("/plan")
    public List<Plan> getAllProducts(){
        return planService.getAllProducts();
    }
    @PutMapping("plan/{id}")
    public Plan updateProduct(@PathVariable Long id,@RequestBody Plan p){
        return planService.updateProduct(id,p);
    }
    @DeleteMapping("plan/{id}")
    public boolean deleteProduct(@PathVariable Long id){
        return planService.deleteProduct(id);
    }

}
