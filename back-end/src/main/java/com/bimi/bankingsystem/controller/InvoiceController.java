package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Invoice;
import com.bimi.bankingsystem.service.InvoiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class InvoiceController {
    private InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService=invoiceService;
    }

    @PostMapping("/invoice")
    public Invoice createInvoice(@RequestBody Invoice invoice){
        return invoiceService.createInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getAllInvoice(){
        return invoiceService.getAllInvoice();
    }

    @PutMapping("invoice/{id}")
    public Invoice updateClient(@PathVariable Integer id,@RequestBody Invoice invoice){
        return invoiceService.updateInvoice(id,invoice);
    }

    @DeleteMapping("invoice/{id}")
    public boolean deleteInvoice(@PathVariable Integer id){
        return invoiceService.deleteInvoice(id);
    }

}
