package com.example.social.service;

import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.social.entity.LoginInfo;
import com.example.social.entity.User;
import com.example.social.repository.LoginInfoRepository;
import com.example.social.repository.UserRepository;

@Service
public class RegisterService {

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String registerUser(Map<String, String> params){
        LoginInfo loginInfo= loginInfoRepository.findByUsername(params.get("username"));
        if(Objects.nonNull(loginInfo)){
            throw new RuntimeException("User already exists, Enter different username");
        }
        String password= passwordEncoder.encode(params.get("password"));
        loginInfo= new LoginInfo(params.get("username"), password);
        loginInfoRepository.save(loginInfo);
        User user = new User();
        user.setEmailId(params.get("username"));
        user.setPassword(password);
        userRepository.save(user);
        return "User Registered, Please Login to continue";
    }
    
}
