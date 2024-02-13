package com.example.social.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.social.entity.Comment;
import com.example.social.repository.CommentRepository;

@Service
@SuppressWarnings("null")
public class CommentService {
    
    @Autowired
    CommentRepository repository;

    public void createComment(Comment comment){
        repository.save(comment);
    }

    public List<Comment> getAllComment(int id){
        List<Comment> comments= repository.findByPost_Id(id);
        return comments;
    }

    public Comment updateComment(Comment comment) {
        Comment existingComment= repository.findById(comment.getId()).orElseThrow(()-> new RuntimeException("Comment not found"));
        existingComment.setContent(comment.getContent());
        repository.save(existingComment);
        return existingComment;
    }

    public void deleteComment(int id){
        repository.deleteById(id);
    }
}
