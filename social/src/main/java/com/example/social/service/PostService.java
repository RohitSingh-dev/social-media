package com.example.social.service;

import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.social.entity.Post;
import com.example.social.entity.User;
import com.example.social.model.PostResponse;
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
        post.setCreatedDate(new Date(System.currentTimeMillis()));
        repository.save(post);
        return "Post Uploaded";
    }

    public List<PostResponse> getAllPost(){
        List<Post> posts = (List<Post>) repository.findAll();
        List<PostResponse> postResponses= new ArrayList<>();
        for(Post post : posts){
            PostResponse postResponse= new PostResponse();
            postResponse.setUser_name(post.getUser().getName());
            postResponse.setPic(post.getPic());
            postResponse.setLikes(post.getLikes());
            postResponses.add(postResponse);
        }
        return postResponses;
    }

    public String deletePost(int id){
        validateLoggedInUser(repository.findById(id).get().getUser());
        repository.deleteById(id);
        return "Post deleted successfully";
    }

    public List<PostResponse> getAllUserPosts(int id){
        validateLoggedInUser(userRepository.findById(id).get());
        List<Post> posts = repository.findByUser_Id(id);
        List<PostResponse> postResponses= new ArrayList<>();
        for(Post post : posts){
            PostResponse postResponse= new PostResponse();
            postResponse.setUser_name(post.getUser().getName());
            postResponse.setPic(post.getPic());
            postResponse.setLikes(post.getLikes());
            postResponses.add(postResponse);
        }
        return postResponses;
    }

    public PostResponse getPost(int id){
        Post post= repository.findById(id).orElseThrow(()-> new RuntimeException("Post not Found"));
        PostResponse postResponse= new PostResponse();
        postResponse.setUser_name(post.getUser().getName());
        postResponse.setPic(post.getPic());
        postResponse.setLikes(post.getLikes());
        return postResponse;
    }


    public void validateLoggedInUser(User user){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User loggedInUser = userRepository.findByEmailId(userDetails.getUsername());
        if(loggedInUser.getId()!= user.getId()){
            throw new RuntimeException("Invalid User");
        }
    }
}
