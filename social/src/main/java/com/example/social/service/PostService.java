package com.example.social.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.social.entity.Post;
import com.example.social.entity.User;
import com.example.social.repository.PostRepository;
import com.example.social.repository.UserRepository;

@Service
public class PostService {
    
    @Autowired
    PostRepository repository;

    @Autowired
    UserRepository userRepository;

    public String createPost(int id, MultipartFile pic) throws IOException{
        Post post= new Post();
        User existingUser= userRepository.findById(id).get();
        post.setUser(existingUser);
        post.setPic(pic.getBytes());
        repository.save(post);
        return "Post Uploaded";
    }

    public List<Post> getAllPost(){
        return (List<Post>) repository.findAll();
    }

    public String deletePost(int id){
        repository.deleteById(id);
        return "Post deleted successfully";
    }

    public List<Post> getAllUserPosts(int id){
        List<Post> posts = repository.findByUser_Id(id);
        return posts;
    }

    public Post getPost(int id){
        return repository.findById(id).orElseThrow(()-> new RuntimeException("Post not Found"));
    }
}
