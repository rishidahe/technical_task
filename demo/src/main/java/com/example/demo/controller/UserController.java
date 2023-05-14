package com.example.demo.controller;

import com.example.demo.entity.ContactUs;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/sign-up")
    public User signupUser(@RequestBody User user){
        return userService.signup(user);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String email, @RequestParam String password){
        if (userService.isValid(email,password)!=null){
            System.out.println("go to home page");
            return ResponseEntity.ok().body("Successful");
        }
        else {
            return ResponseEntity.badRequest().body("Username/Password Not Found");
        }
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/contact-us")
    public ContactUs contact(@RequestBody ContactUs contactUs){
        return userService.contactUsMethod(contactUs);
    }

}
