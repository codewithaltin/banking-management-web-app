
package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Client;
import com.bimi.bankingsystem.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/v1")
public class ClientController {

    private ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/client")
    public Client createClient(@RequestBody Client client) {
        return clientService.creatClient(client);
    }

    @GetMapping("/client")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @PutMapping("client/{id}")
    public Client updateClient(@PathVariable Integer id, @RequestBody Client client) {
        return clientService.updateClient(id, client);
    }

    @DeleteMapping("client/{id}")
    public boolean deleteClient(@PathVariable Integer id) {
        return clientService.deleteClient(id);
    }
}
