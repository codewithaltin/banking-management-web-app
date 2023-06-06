package com.bimi.bankingsystem.service;


import com.bimi.bankingsystem.model.InstitutionPayment;
import com.bimi.bankingsystem.repository.InstitutionPaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstitutionPaymentService {

    private InstitutionPaymentRepository institutionPaymentRepository;

    public InstitutionPaymentService(InstitutionPaymentRepository institutionPaymentRepository){ this.institutionPaymentRepository = institutionPaymentRepository;}


    public InstitutionPayment addInstitutionPayment(InstitutionPayment institutionPayment){
        return institutionPaymentRepository.save(institutionPayment);
    }

    public List<InstitutionPayment> getInstitutionPayments(){
        return institutionPaymentRepository.findAll();
    }

    public InstitutionPayment getInstitutionPaymentsById(Long id){
        return institutionPaymentRepository.findById(id).get();
    }

    public boolean deleteInstitutionPayments(Long id ){
        institutionPaymentRepository.deleteById(id);
        return true;
    }
    public InstitutionPayment updateInstitutionPayments(Long id, InstitutionPayment e){
        InstitutionPayment institutionPayment =
                institutionPaymentRepository.findById(id).get();
        institutionPayment.setInstitution(e.getInstitution());
        institutionPayment.setCompany(e.getCompany());
        institutionPayment.setReferenceNumber(e.getReferenceNumber());
        institutionPayment.setAmount(e.getAmount());



        return institutionPaymentRepository.save(institutionPayment);

    }


}
