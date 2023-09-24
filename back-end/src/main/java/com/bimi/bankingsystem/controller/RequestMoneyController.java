package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.RequestMoney;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.RequestMoneyService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/auth/")
public class RequestMoneyController {
    private RequestMoneyService rqService;

    @Autowired
    private UserServiceImpl userService;
    public RequestMoneyController(RequestMoneyService rqService) {
        this.rqService = rqService;
    }

    @PostMapping("requestmoney")
    public RequestMoney createRequest(@RequestBody RequestMoney requestmoney){
        return rqService.requestMoney(requestmoney);
    }
    @GetMapping("requestmoney")
    public List<RequestMoney> getAllRequests(){
        return rqService.getAllRequest();
    }

    @GetMapping("/requestmoney/{id}")
    public ResponseEntity<RequestMoney> getRequestById(@PathVariable("id") Long id) {
        RequestMoney rq = null;
        rq = rqService.getRequestMoneyById(id);
        return ResponseEntity.ok(rq);
    }

    @PutMapping("requestmoney/{id}")
    public RequestMoney updateRequest(@PathVariable Long id,@RequestBody RequestMoney requestmoney){
        return rqService.updateRequest(id,requestmoney);
    }
    @DeleteMapping("requestmoney/{id}")
    public boolean deleteRequest(@PathVariable Long id){
        return rqService.deleteRequest(id);
    }

    @PostMapping("requestmoney/userRequest/{email}")
    public RequestMoney saveRequstMoneyByUserId(@PathVariable String email, @RequestBody RequestMoney requestMoney){
        User user = userService.getUserByEmail(email).get();
        user.addRequestMoney(requestMoney);
        requestMoney.setUser(user);
        return rqService.requestMoney(requestMoney);
    }

    @GetMapping("requestmoney/userRequest/{email}")
    public List<RequestMoney> getRequestMoneyByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getRequestedMoney();
    }

}
