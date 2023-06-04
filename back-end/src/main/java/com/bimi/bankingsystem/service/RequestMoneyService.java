package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.RequestMoney;
import com.bimi.bankingsystem.repository.RequestMoneyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestMoneyService {

    private RequestMoneyRepository rmr;

    public RequestMoneyService(RequestMoneyRepository er){ this.rmr = er;}


    public RequestMoney requestMoney(RequestMoney e){
        return rmr.save(e);
    }

    public List<RequestMoney> getAllRequest(){
        return rmr.findAll();
    }

    public RequestMoney getRequestMoneyById(Long id){
        return rmr.findById(id).get();
    }

    public boolean deleteRequest(Long id ){
        rmr.deleteById(id);
        return true;
    }
    public RequestMoney updateRequest(Long id, RequestMoney e){
        RequestMoney rm =
                rmr.findById(id).get();
        rm.setRequestedEmail(e.getRequestedEmail());
        rm.setPayeeEmail(e.getPayeeEmail());
        rm.setAmount(e.getAmount());

        return rmr.save(rm);

    }


}

