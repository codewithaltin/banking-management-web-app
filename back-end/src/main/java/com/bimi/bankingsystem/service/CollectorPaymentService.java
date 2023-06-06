package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.CollectorPayment;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.repository.CollectorPaymentRepository;
import com.bimi.bankingsystem.repository.SavingGoalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectorPaymentService {

    private CollectorPaymentRepository collectorPaymentRepository;

    public CollectorPaymentService(CollectorPaymentRepository collectorPaymentRepository) {
        this.collectorPaymentRepository = collectorPaymentRepository;
    }

    public CollectorPayment addCollectorPayment(CollectorPayment collectorPayment){
        return collectorPaymentRepository.save(collectorPayment);
    }

    public List<CollectorPayment> getCollectorPayments(){
        return collectorPaymentRepository.findAll();
    }

    public CollectorPayment getCollectorPaymentById(Long id){
        return collectorPaymentRepository.findById(id).get();
    }

    public boolean deleteCollectorPayments(Long id ){
        collectorPaymentRepository.deleteById(id);
        return true;
    }
    public CollectorPayment updateCollectorPayments(Long id, CollectorPayment e){
        CollectorPayment collectorPayment =
                collectorPaymentRepository.findById(id).get();
        collectorPayment.setCollector(e.getCollector());
        collectorPayment.setSerialNo(e.getSerialNo());
        collectorPayment.setUniref(e.getUniref());
        collectorPayment.setAmount(e.getAmount());
        collectorPayment.setDescription(e.getDescription());


        return collectorPaymentRepository.save(collectorPayment);

    }


}

