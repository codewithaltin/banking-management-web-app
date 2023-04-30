package com.bimi.bankingsystem.service;
import com.bimi.bankingsystem.entity.ContactEntity;
import com.bimi.bankingsystem.model.Contact;
import com.bimi.bankingsystem.repository.ContactRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class ContactService {

    private ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository){
        this.contactRepository = contactRepository;
    }

    public Contact saveContact(Contact contact) {
        ContactEntity contactEntity = new ContactEntity();
        BeanUtils.copyProperties(contact, contactEntity);
        contactRepository.save(contactEntity);
        return contact;
    }

    public List<ContactEntity> getAllContact() {
        List<ContactEntity> contactEntities
                = contactRepository.findAll();

        List<ContactEntity> contacts = contactEntities
                .stream()
                .map(contactEntity -> new ContactEntity(
                        contactEntity.getId(),
                        contactEntity.getFullName(),
                        contactEntity.getEmail(),
                        contactEntity.getText()
                ))
                .collect(Collectors.toList());

        return contacts;
    }


    public Contact getContactById(Integer id) {
        ContactEntity contactEntity
                = contactRepository.findById(id).get();
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactEntity, contact);
        return contact;
    }


    public boolean deleteContact(Integer id) {
        ContactEntity contact =  contactRepository.findById(id).get();
        contactRepository.delete(contact);
        return true;
    }


    public Contact updateContact(Integer id, Contact contact) {
        ContactEntity contactEntity =
                contactRepository.findById(id).get();
        contactEntity.setFullName(contact.getFullName());
        contactEntity.setEmail(contact.getEmail());
        contactEntity.setText(contact.getText());

        contactRepository.save(contactEntity);
        return contact;
    }

}
