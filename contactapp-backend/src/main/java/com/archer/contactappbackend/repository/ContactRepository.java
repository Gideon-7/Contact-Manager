package com.archer.contactappbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.archer.contactappbackend.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{
    
}
