package com.example.social.service;

import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.social.entity.LoginInfo;
import com.example.social.repository.LoginInfoRepository;

@Service
public class RegisterService {

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    public String registerUser(Map<String, String> params){
        LoginInfo loginInfo= loginInfoRepository.findByUsername(params.get("username"));
        if(Objects.nonNull(loginInfo)){
            throw new RuntimeException("User already exists, Enter different username");
        }
        loginInfo= new LoginInfo(params.get("username"), params.get("password"));
        loginInfoRepository.save(loginInfo);
        return "User Registered, Please Login to continue";
    }
    
}
