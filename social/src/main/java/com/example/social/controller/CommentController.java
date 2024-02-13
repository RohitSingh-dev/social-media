package com.example.social.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.social.entity.Comment;
import com.example.social.service.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {
    
    @Autowired
    CommentService service;

    @PostMapping("")
    public ResponseEntity<String> createComment(@RequestBody Comment comment){
        service.createComment(comment);
        return new ResponseEntity<String>("Comment added", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Comment>> getAllComment(@PathVariable int id){
        return new ResponseEntity<List<Comment>>(service.getAllComment(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@RequestBody Comment comment){
        return new ResponseEntity<Comment>(service.updateComment(comment), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable int id){
        service.deleteComment(id);
        return new ResponseEntity<String>("Comment deleted", HttpStatus.NO_CONTENT);
    }
}
