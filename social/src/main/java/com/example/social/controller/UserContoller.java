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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.social.entity.User;
import com.example.social.service.UserService;

@RestController
@RequestMapping("/user")
@SuppressWarnings("null")
public class UserContoller {

    @Autowired
    UserService service;

    @PostMapping("")
    public ResponseEntity<?> createUser(@RequestBody User user){
        return ResponseEntity.status(201).body(service.createUser(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> uploadPic(@PathVariable int id, @RequestParam("file") MultipartFile file) throws IOException{
        return new ResponseEntity<String>(service.uploadPic(id, file), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable int id){
        return new ResponseEntity<User>(service.getUser(id), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User>(service.updateUser(user), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        return new ResponseEntity<String>(service.deleteUser(id), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/addFriend/{uid}/{fid}")
    public ResponseEntity<Boolean> addFriend(@PathVariable("uid") int user_id, @PathVariable("fid") int friend_id){
        service.addFriend(user_id, friend_id);
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/getFriendList/{id}")
    public ResponseEntity<List<User>> getFriendList(@PathVariable int id){
        return new ResponseEntity<List<User>>(service.getFriendList(id), HttpStatus.OK);
    }

    @DeleteMapping("/removeFriend/{uid}/{fid}")
    public ResponseEntity<Boolean> removeFriend(@PathVariable("uid") int user_id, @PathVariable("fid") int friend_id){
        service.removeFriend(user_id, friend_id);
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/picDownload/{id}")
    public ResponseEntity<?> getUserPic(@PathVariable int id) throws IOException {
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"studentpic.jpg\"")
                .body(service.getUser(id).getPic());
    }
  
}