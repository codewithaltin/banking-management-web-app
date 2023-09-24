package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.FuturPlus;
import com.bimi.bankingsystem.repository.FuturPlusRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuturPlusService {
    private FuturPlusRepository futurPlusRepository;

    public FuturPlusService(FuturPlusRepository futurPlusRepository) {
        this.futurPlusRepository = futurPlusRepository;
    }

    public FuturPlus addFuturPlus(FuturPlus futurPlus){
        return futurPlusRepository.save(futurPlus);
    }

    public List<FuturPlus> getFuturPlus(){
        return futurPlusRepository.findAll();
    }

    public FuturPlus getFuturPlusById(Long id) {
        return futurPlusRepository.findById(id).get();
    }

    public boolean deleteFuturPlus (Long id) {
        futurPlusRepository.deleteById(id);
        return true;
    }

    public FuturPlus updateFuturPlus(Long id, FuturPlus e) {
        FuturPlus futurPlus = futurPlusRepository.findById(id).get();
        futurPlus.setFullName(e.getFullName());
        futurPlus.setEmail(e.getEmail());
        futurPlus.setCardInformation(e.getCardInformation());

        return futurPlusRepository.save(futurPlus);
    }
}
