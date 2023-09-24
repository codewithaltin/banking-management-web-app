package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Donation;
import com.bimi.bankingsystem.model.MobilePayment;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.service.DonationService;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/auth")
public class DonationController {
    private DonationService donationService;

    private UserServiceImpl userService;

    public DonationController(DonationService donationService, UserServiceImpl userService) {
        this.donationService = donationService;
        this.userService = userService;
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

    @PostMapping("/donation/user/{email}")
    public Donation saveDonateByUserId(@PathVariable String email, @RequestBody Donation donation){
        User user = userService.getUserByEmail(email).get();
        user.createDonation(donation);
        donation.assignUserToDonation(user);
        return donationService.createDonation(donation);
    }

    @GetMapping("/donation/user/{email}")
    public List<Donation> getDonationByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getDonations();
    }

    @DeleteMapping("donation/{id}")
    public boolean deleteDonation(@PathVariable Long id){
        return donationService.deleteDonation(id);
    }


}
