package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Invoice;
import com.bimi.bankingsystem.repository.InvoiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceService {

    private InvoiceRepository invoiceRepository;

    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    public Invoice createInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }

    public List<Invoice> getAllInvoice(){
        return invoiceRepository.findAll();
    }

    public Invoice updateInvoice (Integer id, Invoice invoice){
        Invoice invoice1 = invoiceRepository.findById(id).get();
        invoice1.setAddress(invoice.getAddress());
        invoice1.setFullName(invoice.getFullName());
        invoice1.setCountry(invoice.getCountry());
        invoice1.setPostCode(invoice.getPostCode());
        invoice1.setEmail(invoice.getEmail());
        invoice1.setEmailBill(invoice.getEmailBill());
        invoice1.setDate(invoice.getDate());
        invoice1.setItem(invoice.getItem());
        invoice1.setPrice(invoice.getPrice());
        invoice1.setQty(invoice.getQty());
        invoice1.setNote(invoice.getNote());

        return invoiceRepository.save(invoice1);
    }

    public boolean deleteInvoice(Integer id){
        invoiceRepository.deleteById(id);
        return true;
    }

}
