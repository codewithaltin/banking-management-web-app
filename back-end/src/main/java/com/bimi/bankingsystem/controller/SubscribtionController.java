package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Subscribtion;
import com.bimi.bankingsystem.service.SubscribtionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class SubscribtionController {
    private SubscribtionService subscribtionService;

    public SubscribtionController(SubscribtionService s ){
        this.subscribtionService = s;
    }
    @PostMapping("/subscribtion")

    public Subscribtion createSubscribtion(@RequestBody Subscribtion s){
        return subscribtionService.saveSubscribtion(s);
    }
    @GetMapping("/subscribtion")
    public List<Subscribtion> getAllSubscribtion(){
        return subscribtionService.getAllSubscribtions();
    }
    @PutMapping("subscribtion/{id}")
    public Subscribtion updateSubscribtion(@PathVariable Long id,@RequestBody Subscribtion p){
        return subscribtionService.updateSubscribtion(id,p);
    }
    @DeleteMapping("subscribtion/{id}")
    public boolean deleteSubscribtion(@PathVariable Long id){
        return subscribtionService.deleteSubscribtion(id);
    }

}
