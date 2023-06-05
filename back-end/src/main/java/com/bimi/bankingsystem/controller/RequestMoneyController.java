package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.RequestMoney;
import com.bimi.bankingsystem.service.RequestMoneyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class RequestMoneyController {
    private RequestMoneyService rqService;

    public RequestMoneyController(RequestMoneyService rqService) {
        this.rqService = rqService;
    }

    @PostMapping("/requestmoney")
    public RequestMoney createRequest(@RequestBody RequestMoney requestmoney){
        return rqService.requestMoney(requestmoney);
    }
    @GetMapping("/requestmoney")
    public List<RequestMoney> getAllRequests(){
        return rqService.getAllRequest();
    }
    @PutMapping("requestmoney/{id}")
    public RequestMoney updateRequest(@PathVariable Long id,@RequestBody RequestMoney requestmoney){
        return rqService.updateRequest(id,requestmoney);
    }
    @DeleteMapping("requestmoney/{id}")
    public boolean deleteRequest(@PathVariable Long id){
        return rqService.deleteRequest(id);
    }

}
