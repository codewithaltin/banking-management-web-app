package com.bimi.bankingsystem.service;


import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.TransferRepository;
import com.bimi.bankingsystem.repository.UserRepository;
import org.springframework.beans.BeanUtils;
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

    public User findReceiver(long number){
        User receiver = null;

        List<User> users = userServiceImp.getAllUsers();
        for (User value : users) {
            if (number == value.getAccountNumber()) {
                receiver = value;
            }
        }
        return receiver;
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

        User sender = this.findByAccountNumber(transferRequest.getAccountNumber());

        User receiver = this.findReceiver(transferRequest.getReciverAccountNumber());


        if (sender == null) {
            throw new IllegalArgumentException("Sender account not found.");
        }


        if (sender.getBalance() < transferRequest.getAmount()) {
            throw new IllegalArgumentException("Insufficient balance.");
        }

        double senderBalance = sender.getBalance() - transferRequest.getAmount();
        sender.setBalance(senderBalance);

        double receiverBalance = receiver.getBalance() + transferRequest.getAmount();
        receiver.setBalance(receiverBalance);


        userRepository.save(sender);
        userRepository.save(receiver);
    }



    public Transfer updateTransfer(Integer id, Transfer transfer) {
        Transfer transferEntity =
                transferRepository.findById(id).get();
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

}
