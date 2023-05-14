package com.example.demo.repo;

import com.example.demo.entity.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<ContactUs,Long> {
}
