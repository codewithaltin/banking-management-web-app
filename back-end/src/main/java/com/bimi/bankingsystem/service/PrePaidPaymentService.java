package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.PrePaidPayment;
import com.bimi.bankingsystem.repository.PrePaidPaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrePaidPaymentService {

    private PrePaidPaymentRepository prePaidPaymentRepository;

    public PrePaidPaymentService(PrePaidPaymentRepository prePaidPaymentRepository) {
        this.prePaidPaymentRepository = prePaidPaymentRepository;
    }

    public PrePaidPayment addPrePaidPayment(PrePaidPayment prePaidPayment){
        return prePaidPaymentRepository.save(prePaidPayment);
    }

    public List<PrePaidPayment> getPrePaidPayment(){
        return prePaidPaymentRepository.findAll();
    }

    public PrePaidPayment getPrePaidPaymentById(Long id){
        return prePaidPaymentRepository.findById(id).get();
    }

    public boolean deletePrePaidPayments(Long id ){
        prePaidPaymentRepository.deleteById(id);
        return true;
    }
    public PrePaidPayment updatePrePaidPayments(Long id, PrePaidPayment e){
        PrePaidPayment prePaidPayment =
                prePaidPaymentRepository.findById(id).get();
        prePaidPayment.setOperator(e.getOperator());
        prePaidPayment.setProduct(e.getProduct());
        prePaidPayment.setAmount(e.getAmount());


        return prePaidPaymentRepository.save(prePaidPayment);

    }


}
