package com.example.demo.service;

import com.example.demo.entity.ContactUs;
import com.example.demo.entity.User;
import com.example.demo.repo.ContactRepo;
import com.example.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    ContactRepo contactRepo;

    public User signup(User user){
        return userRepo.save(user);
    }


    public User isValid(String email, String password) {
        return userRepo.findByEmailAndPassword(email,password);
    }

    public ContactUs contactUsMethod(ContactUs contactUs) {
        return contactRepo.save(contactUs);
    }
}
