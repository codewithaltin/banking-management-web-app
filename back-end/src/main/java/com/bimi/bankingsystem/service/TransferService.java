package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.TransferEntity;
import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.TransferRepository;
import com.bimi.bankingsystem.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransferService {


    private UserServiceImpl userServiceImp;
    private UserRepository userRepository;
    private TransferRepository transferRepository;

    public TransferService(UserServiceImpl userServiceImp, UserRepository userRepository, TransferRepository transferRepository){
        this.userServiceImp = userServiceImp;
        this.userRepository = userRepository;
        this.transferRepository = transferRepository;}

    /*public Transfer saveTransfer(Transfer transfer) {
        Transfer transferEntity = new Transfer();
        BeanUtils.copyProperties(transfer, transferEntity);
        transferRepository.save(transferEntity);
        return transfer;
    }*/

    public Transfer saveTransfer(Transfer transfer){
        return transferRepository.save(transfer);
    }

    public List<Transfer> getAllTransfers() {
        List<Transfer> transferEntities
                = transferRepository.findAll();

        List<Transfer> transfers = transferEntities
                .stream()
                .map(contactEntity -> new Transfer(
                        contactEntity.getId(),
                        contactEntity.getFirstName(),
                        contactEntity.getLastName(),
                        contactEntity.getAccountNumber(),
                        contactEntity.getAmount(),
                        contactEntity.getDate(),
                        contactEntity.getReciverAccountNumber(),
                        contactEntity.getCity(),
                        contactEntity.getCountry(),
                        contactEntity.getPostCode(),
                        contactEntity.getDescription()
                ))
                .collect(Collectors.toList());

        return transfers;
    }


    public Transfer getTransferById(Integer id) {
        Transfer transferEntity
                = transferRepository.findById(id).get();
        Transfer contact = new Transfer();
        BeanUtils.copyProperties(transferEntity, contact);
        return contact;
    }

    public boolean deleteTransfer(Integer id) {
        Transfer transfer =  transferRepository.findById(id).get();
        transferRepository.delete(transfer);
        return true;
    }

    public User findByAccountNumber(long number){

        User user = null;

        List<User> users = userServiceImp.getAllUsers();
        for (User value : users) {
            if (number == value.getAccountNumber()) {
                user = value;
            }
        }
        return user;
    }

    public void transferAmount(Transfer transferRequest) {
        // Retrieve the sender's user from the database using the sender's account number
        User sender = this.findByAccountNumber(transferRequest.getAccountNumber());

        if (sender == null) {
            throw new IllegalArgumentException("Sender account not found.");
        }

        // Check if the sender has sufficient balance
        if (sender.getBalance() < transferRequest.getAmount()) {
            throw new IllegalArgumentException("Insufficient balance.");
        }

        // Deduct the amount from the sender's balance
        double newBalance = sender.getBalance() - transferRequest.getAmount();
        sender.setBalance(newBalance);

        // Update the sender's balance in the database
        userRepository.save(sender);
    }



    public Transfer updateTransfer(Integer id, Transfer transfer) {
        Transfer transferEntity =
                transferRepository.findById(id).get();
        transferEntity.setFirstName(transfer.getFirstName());
        transferEntity.setLastName(transfer.getLastName());
        transferEntity.setAccountNumber(transfer.getAccountNumber());
        transferEntity.setAmount(transfer.getAmount());
        transferEntity.setDate(transfer.getDate());
        transferEntity.setReciverAccountNumber(transfer.getReciverAccountNumber());
        transferEntity.setCity(transfer.getCity());
        transferEntity.setCountry(transfer.getCountry());
        transferEntity.setPostCode(transfer.getPostCode());
        transferEntity.setDescription(transfer.getDescription());

        transferRepository.save(transferEntity);
        return transfer;
    }


    public void transferAmount(long accountNumber, int amount) {
    }
}
