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

    public Donation updateDonation(Integer id, Donation donation) {
        Donation donation1 = donationRepository.findById(id).get();
        donation1.setFullName(donation.getFullName());
        donation1.setEmail(donation.getEmail());
        donation1.setPhoneNumber(donation.getPhoneNumber());
        donation1.setAddress(donation.getAddress());
        donation1.setDonationAmount(donation.getDonationAmount());
        donation1.setCardInformation(donation.getCardInformation());
        donation1.setComment(donation.getComment());

        return donationRepository.save(donation1);
    }

    public boolean deleteDonation(Integer id) {
        donationRepository.deleteById(id);

        return true;
    }
}
