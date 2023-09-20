package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.ContactService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bimi.bankingsystem.model.Contact;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    private UserServiceImpl userService;

    public ContactController(ContactService contactService, UserServiceImpl userService) {
        this.contactService = contactService;
        this.userService = userService;
    }

    @PostMapping("/contact")
    public Contact saveContact(@RequestBody Contact contact){
        return contactService.saveContact(contact);
    }

    @GetMapping("/contact")
    public List<Contact> getAllContact() {
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

    @PostMapping("/contact/user/{email}")
    public Contact saveContactFormByUserId(@PathVariable String email, @RequestBody Contact contact){
        User user = userService.getUserByEmail(email).get();
        user.addContact(contact);
        contact.assignUserToContact(user);
        return contactService.saveContact(contact);
    }

    @GetMapping("/contact/user/{email}")
    public List<Contact> getContactFormByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getContacts();
    }



}











