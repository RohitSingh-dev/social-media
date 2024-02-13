package com.example.social.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.social.entity.LoginInfo;
import com.example.social.repository.LoginInfoRepository;

@Service
public class AuthService implements UserDetailsService{
    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {

        LoginInfo loginInfo = Optional.ofNullable(loginInfoRepository.findByUsername(username))
                    .orElseThrow(() -> new RuntimeException("User not found"));
        return User.builder().username(loginInfo.getUsername()).password(loginInfo.getPassword()).build();
    }
}
