package com.example.social.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
        validateLoggedInUser(userRepository.findById(id).get());
        User existingUser= userRepository.findById(id).get();
        post.setUser(existingUser);
        post.setPic(new String(Base64.getEncoder().encode(pic.getBytes())));
        repository.save(post);
        return "Post Uploaded";
    }

    public List<Post> getAllPost(){
        return (List<Post>) repository.findAll();
    }

    public String deletePost(int id){
        validateLoggedInUser(repository.findById(id).get().getUser());
        repository.deleteById(id);
        return "Post deleted successfully";
    }

    public List<Post> getAllUserPosts(int id){
        validateLoggedInUser(userRepository.findById(id).get());
        List<Post> posts = repository.findByUser_Id(id);
        return posts;
    }

    public Post getPost(int id){
        return repository.findById(id).orElseThrow(()-> new RuntimeException("Post not Found"));
    }


    public void validateLoggedInUser(User user){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User loggedInUser = userRepository.findByEmailId(userDetails.getUsername());
        if(loggedInUser.getId()!= user.getId()){
            throw new RuntimeException("Invalid User");
        }
    }
}
