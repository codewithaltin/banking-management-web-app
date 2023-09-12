package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.entity.ContactEntity;
import com.bimi.bankingsystem.service.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bimi.bankingsystem.model.Contact;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/contact")
    public Contact saveContact(@RequestBody Contact contact){
        return contactService.saveContact(contact);
    }

    @GetMapping("/contact")
    public List<ContactEntity> getAllContact() {
        return contactService.getAllContact();
    }

    @GetMapping("/contact/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable("id") Integer id) {
        Contact contact = null;
        contact = contactService.getContactById(id);
        return ResponseEntity.ok(contact);
    }
    @DeleteMapping("/contact/{id}")
    public boolean deleteContact(@PathVariable("id") Integer id){
        return contactService.deleteContact(id);
    }

    @PutMapping("/contact/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable("id") Integer id,
                                                 @RequestBody Contact contact){
        contact = contactService.updateContact(id,contact);
        return ResponseEntity.ok(contact);
    }
}











