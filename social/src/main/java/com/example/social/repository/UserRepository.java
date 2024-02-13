package com.example.social.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.social.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByEmailId(String emailId);
}
