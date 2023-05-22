package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.TransferEntity;
import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.repository.TransferRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransferService {

    private TransferRepository transferRepository;

    public TransferService(TransferRepository transferRepository){ this.transferRepository = transferRepository;}

    public Transfer saveTransfer(Transfer transfer) {
        TransferEntity transferEntity = new TransferEntity();
        BeanUtils.copyProperties(transfer, transferEntity);
        transferRepository.save(transferEntity);
        return transfer;
    }

    public List<TransferEntity> getAllTransfers() {
        List<TransferEntity> transferEntities
                = transferRepository.findAll();

        List<TransferEntity> transfers = transferEntities
                .stream()
                .map(contactEntity -> new TransferEntity(
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
        TransferEntity transferEntity
                = transferRepository.findById(id).get();
        Transfer contact = new Transfer();
        BeanUtils.copyProperties(transferEntity, contact);
        return contact;
    }


}
