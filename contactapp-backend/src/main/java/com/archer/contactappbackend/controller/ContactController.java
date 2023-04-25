package com.archer.contactappbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.archer.contactappbackend.entity.Contact;
import com.archer.contactappbackend.repository.ContactRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactRepository conRepo;

    @GetMapping("/contacts")
    public List<Contact> getAllContact() {

        return conRepo.findAll();

    }

    @PostMapping("/contacts")
    public Contact saveContactDetails(@RequestBody Contact contact) {
        return conRepo.save(contact);

    }

    @GetMapping("/contacts/{id}")
    public Contact  getSingleContact(@PathVariable Long id) {
        return conRepo.findById(id).get();
    }
    
    @PutMapping("/contacts")
    public Contact updateContactDetails(@RequestBody Contact contact) {
        return conRepo.save(contact);
    }

    @DeleteMapping("/contacts/{id}")
    public ResponseEntity<HttpStatus> deleteContactById(@PathVariable Long id) {
        conRepo.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);

    }
}
