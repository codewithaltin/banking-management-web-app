package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.MobilePayment;
import com.bimi.bankingsystem.repository.MobilePaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MobilePaymentService {

    private MobilePaymentRepository mobilePaymentRepository;

    public MobilePaymentService(MobilePaymentRepository mobilePaymentRepository) {
        this.mobilePaymentRepository = mobilePaymentRepository;
    }

    public MobilePayment addMobilePayment(MobilePayment mobilePayment) {
        return mobilePaymentRepository.save(mobilePayment);
    }

    public List<MobilePayment> getMobilePayments() {
        return mobilePaymentRepository.findAll();
    }

    public MobilePayment getMobilePaymentById(Long id) {
        return mobilePaymentRepository.findById(id).get();
    }

    public boolean deleteMobilePayments(Long id) {
        mobilePaymentRepository.deleteById(id);
        return true;
    }

    public MobilePayment updateMobilePayments(Long id, MobilePayment e) {
        MobilePayment mobilePayment =
                mobilePaymentRepository.findById(id).get();
        mobilePayment.setServiceProvider(e.getServiceProvider());
        mobilePayment.setNumberCode(e.getNumberCode());
        mobilePayment.setPhoneNumber(e.getPhoneNumber());
        mobilePayment.setAmount(e.getAmount());


        return mobilePaymentRepository.save(mobilePayment);

    }


}

