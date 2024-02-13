package com.example.social.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.social.entity.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer>{
    
    public List<Comment> findByPost_Id(int id);
}
