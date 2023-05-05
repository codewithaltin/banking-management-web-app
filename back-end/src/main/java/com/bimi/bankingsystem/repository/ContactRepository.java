package com.bimi.bankingsystem.repository;
import com.bimi.bankingsystem.entity.ContactEntity;
import com.bimi.bankingsystem.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactEntity, Integer> {
}
