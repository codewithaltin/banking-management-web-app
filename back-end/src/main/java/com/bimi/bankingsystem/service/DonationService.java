package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Donation;
import com.bimi.bankingsystem.repository.DonationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationService {
    private DonationRepository donationRepository;

    public DonationService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    public Donation createDonation(Donation donation) {
        return donationRepository.save(donation);
    }

    public List<Donation> getAllDonations(){
        return donationRepository.findAll();
    }

    public Donation getDonationById(Long id) {
        return donationRepository.findById(id).get();
    }

    public Donation updateDonation(Long id, Donation d) {
        Donation donation1 = donationRepository.findById(id).get();
        donation1.setFullName(d.getFullName());
        donation1.setEmail(d.getEmail());
        donation1.setPhoneNumber(d.getPhoneNumber());
        donation1.setAddress(d.getAddress());
        donation1.setDonationAmount(d.getDonationAmount());
        donation1.setCardInformation(d.getCardInformation());
        donation1.setComment(d.getComment());

        return donationRepository.save(donation1);
    }

    public boolean deleteDonation(Long id) {
        donationRepository.deleteById(id);
        return true;
    }
}
