package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Donation;
import com.bimi.bankingsystem.service.DonationService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/auth")
public class DonationController {
    private DonationService donationService;

    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    @PostMapping("/donation")
    public Donation createDonation(@RequestBody Donation donation){
        return donationService.createDonation(donation);
    }

    @GetMapping("/donation")
    public List<Donation> getAllDonations() {
        return donationService.getAllDonations();
    }

    @GetMapping("/donation/{id}")
    public List<Donation> getDonationById(@PathVariable("id") Long id) {
        Donation donation = null;
        donation = donationService.getDonationById(id);
        return donationService.getAllDonations();
    }

    @PutMapping("/donation/{id}")
    public Donation updateDonation(@PathVariable ("id") Long id,@RequestBody Donation donation) {
        return donationService.updateDonation(id, donation);
    }

    @DeleteMapping("donation/{id}")
    public boolean deleteDonation(@PathVariable Long id){
        return donationService.deleteDonation(id);
    }


}
