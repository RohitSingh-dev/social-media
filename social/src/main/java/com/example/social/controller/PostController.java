package com.example.social.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.social.entity.Post;
import com.example.social.service.PostService;

@RestController
@RequestMapping("/post")
@SuppressWarnings("null")
public class PostController {
    
    @Autowired
    PostService service;

    @PostMapping("/{id}")
    public ResponseEntity<String> createPost(@PathVariable int id, @RequestParam("file") MultipartFile pic) throws IOException{
        return new ResponseEntity<String>(service.createPost(id,pic), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<Post>> getAllPost(){
        return new ResponseEntity<List<Post>>(service.getAllPost(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePost(@PathVariable int id){
        return new ResponseEntity<String>(service.deletePost(id), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Post>> getAllUserPosts(@PathVariable int id){
        return new ResponseEntity<List<Post>>(service.getAllUserPosts(id), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPost(@PathVariable int id){
        return ResponseEntity.ok().body(service.getPost(id));
    }

    @GetMapping("/picDownload/{id}")
    public ResponseEntity<?> getPic(@PathVariable int id) throws IOException {
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"pic.jpg\"")
                .body(service.getPost(id).getPic());
    }
}
