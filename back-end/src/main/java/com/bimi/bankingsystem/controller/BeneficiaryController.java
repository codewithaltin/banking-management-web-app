package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Beneficiary;
import com.bimi.bankingsystem.service.BeneficiaryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class BeneficiaryController {

    private final BeneficiaryService beneficiaryService;

    public BeneficiaryController(BeneficiaryService beneficiaryService) {
        this.beneficiaryService=beneficiaryService;
    }

    @PostMapping("/beneficiary")
    public Beneficiary createBeneficiary(@RequestBody Beneficiary beneficiary){
        return beneficiaryService.createBeneficiary(beneficiary);
    }

    @GetMapping("/beneficiary")
    public List<Beneficiary> getAllBeneficiary(){
        return beneficiaryService.getAllBeneficiary();
    }

    @PutMapping("beneficiary/{id}")
    public Beneficiary updateBeneficiary(@PathVariable Integer id,@RequestBody Beneficiary beneficiary){
        return beneficiaryService.updateBeneficiary(id,beneficiary);
    }

    @DeleteMapping("beneficiary/{id}")
    public boolean deleteBeneficiary(@PathVariable Integer id){
        return beneficiaryService.deleteBeneficiary(id);
    }
}
