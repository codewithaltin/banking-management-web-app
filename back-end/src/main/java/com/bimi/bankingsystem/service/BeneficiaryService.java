package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Beneficiary;
import com.bimi.bankingsystem.repository.BeneficiaryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeneficiaryService {
    private BeneficiaryRepository beneficiaryRepository;

    public BeneficiaryService(BeneficiaryRepository beneficiaryRepository) {
        this.beneficiaryRepository = beneficiaryRepository;
    }

    public Beneficiary createBeneficiary(Beneficiary beneficiary){
        return beneficiaryRepository.save(beneficiary);
    }

    public List<Beneficiary> getAllBeneficiary(){
        return beneficiaryRepository.findAll();
    }

    public Beneficiary updateBeneficiary (Integer id, Beneficiary beneficiary){

        Beneficiary beneficiary1 = beneficiaryRepository.findById(id).get();

        beneficiary1.setFirstName(beneficiary.getFirstName());
        beneficiary1.setSurname(beneficiary.getSurname());
        beneficiary1.setSecondSurname(beneficiary.getSecondSurname());
        beneficiary1.setMiddleName(beneficiary.getMiddleName());
        beneficiary1.setEmail(beneficiary.getEmail());
        beneficiary1.setSecondSurname(beneficiary.getSecondSurname());
        beneficiary1.setEmail(beneficiary.getEmail());
        beneficiary1.setGender(beneficiary.getGender());
        beneficiary1.setCountry(beneficiary.getCountry());
        beneficiary1.setCity(beneficiary.getCity());
        beneficiary1.setRelatedPerson(beneficiary.getRelatedPerson());
        beneficiary1.setPostalCode(beneficiary.getPostalCode());
        beneficiary1.setDate(beneficiary.getDate());
        beneficiary1.setAddress(beneficiary.getAddress());
        beneficiary1.setPercentage(beneficiary.getPercentage());

        return beneficiaryRepository.save(beneficiary1);
    }

    public boolean deleteBeneficiary(Integer id){
        beneficiaryRepository.deleteById(id);
        return true;
    }
}
