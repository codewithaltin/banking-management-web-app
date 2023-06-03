package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.RequestMoney;
import com.bimi.bankingsystem.service.RequestMoneyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class RequestMoneyController {
    private RequestMoneyService rqService;

    public RequestMoneyController(RequestMoneyService rqService) {
        this.rqService = rqService;
    }

    @PostMapping("/loan")
    public RequestMoney createRequest(@RequestBody RequestMoney loan){
        return rqService.requestMoney(loan);
    }

    @GetMapping("/loan")
    public List<RequestMoney> getAllRequests(){
        return rqService.getAllRequest();
    }

    @PutMapping("loan/{id}")
    public RequestMoney updateRequest(@PathVariable Long id,@RequestBody RequestMoney loan){
        return rqService.updateRequest(id,loan);
    }

    @DeleteMapping("loan/{id}")
    public boolean deleteRequest(@PathVariable Long id){
        return rqService.deleteRequest(id);
    }

}
