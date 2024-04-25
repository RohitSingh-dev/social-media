package com.example.social.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.social.entity.User;
import com.example.social.model.LoginResponse;
import com.example.social.repository.UserRepository;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public LoginResponse login(String username, String token){
        LoginResponse loginResponse= new LoginResponse();
        User user= userRepository.findByEmailId(username);
        loginResponse.setUser_id(user.getId());
        loginResponse.setUser_name(user.getName());
        loginResponse.setUser_token(token);
        return loginResponse;
    }
}
