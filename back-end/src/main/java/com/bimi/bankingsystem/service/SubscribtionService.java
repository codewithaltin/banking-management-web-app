package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Subscribtion;
import com.bimi.bankingsystem.repository.SubscribtionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscribtionService {

    private final SubscribtionRepository subRepository;
    public SubscribtionService(SubscribtionRepository er){ this.subRepository = er;}


    public Subscribtion saveSubscribtion(Subscribtion e){
        return subRepository.save(e);
    }

    public List<Subscribtion> getAllSubscribtions(){
        return subRepository.findAll();
    }

    public Subscribtion getSubcribtionById(Long id){
        return subRepository.findById(id).get();
    }

    public boolean deleteSubscribtion(Long id ){
        subRepository.deleteById(id);
        return true;
    }
    public Subscribtion updateSubscribtion(Long id, Subscribtion s){
        Subscribtion sub =
                subRepository.findById(id).get();
        sub.setName(s.getName());
        sub.setPrice(s.getPrice());
        sub.setMonthQuanity(s.getMonthQuanity());
        sub.setPrice(s.getPrice());
        sub.setPlanId(s.getPlanId());
        sub.setProductId(s.getProductId());

        return subRepository.save(sub);

    }


}
