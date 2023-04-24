package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Client;
import com.bimi.bankingsystem.repository.ClientRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client creatClient(Client client){
        return clientRepository.save(client);
    }

    public List<Client> getAllClients(){
        return clientRepository.findAll();
    }

    public Client updateClient(Integer id, Client client){
        Client client1= clientRepository.findById(id).get();
        client1.setName(client.getName());
        client1.setUsername(client.getUsername());

        return clientRepository.save(client1);
    }

    public boolean deleteClient(Integer id){
        clientRepository.deleteById(id);

        return true;
    }
}
