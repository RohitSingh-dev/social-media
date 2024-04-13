package com.example.social.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.social.entity.LoginInfo;
import com.example.social.entity.User;
import com.example.social.model.UserProfileResponse;
import com.example.social.repository.LoginInfoRepository;
import com.example.social.repository.UserRepository;

@Service
@SuppressWarnings("null")
public class UserService {
    
    @Autowired
    private UserRepository repository;

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String createUser(User user){
        if(repository.findByEmailId(user.getEmailId())== null){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            repository.save(user);
            LoginInfo loginInfo= new LoginInfo(user.getEmailId(), user.getPassword());
            loginInfoRepository.save(loginInfo);
        }
        else{
            throw new RuntimeException("User already exists, Enter different email");
        }
        return "User Registered Successfully";
    }

    public String uploadPic(int id, MultipartFile pic) throws IOException{
        User existingUser = repository.findById(id).orElseThrow(()-> new RuntimeException("User Not Found"));
        validateLoggedInUser(existingUser);
        existingUser.setPic(new String(Base64.getEncoder().encode(pic.getBytes())));
        repository.save(existingUser);
        return "Pic Uploaded Successfully";
    }

    public UserProfileResponse getUser(int id){
        User user= repository.findById(id).orElseThrow(()-> new RuntimeException("User Not Found"));
        validateLoggedInUser(user);
        UserProfileResponse userProfileResponse= new UserProfileResponse();
        userProfileResponse.setName(user.getName());
        userProfileResponse.setEmailId(user.getEmailId());
        userProfileResponse.setPhNum(user.getPhNum());
        userProfileResponse.setBio(user.getBio());
        userProfileResponse.setPic(user.getPic());
        return userProfileResponse;
    }

    public User updateUser(User user){
        validateLoggedInUser(user);
        User existingUser= repository.findByEmailId(user.getEmailId());
        existingUser.setName(user.getName());
        existingUser.setBio(user.getBio());
        existingUser.setEmailId(user.getEmailId());
        existingUser.setPhNum(user.getPhNum());
        repository.save(existingUser);
        return existingUser;
    }

    public String deleteUser(int id){
        validateLoggedInUser(repository.findById(id).get());
        repository.deleteById(id);
        return "User deleted successfully";
    }

    public void addFriend(int id, int friend_id){
        User user = repository.findById(id).get();
        User friend= repository.findById(friend_id).get();

        List<User> userFriendList = user.getFriendList();
        userFriendList.add(friend);
        user.setFriendList(userFriendList);
        repository.save(user);

        List<User> otherFriendList = friend.getFriendList();
        otherFriendList.add(user);
        friend.setFriendList(otherFriendList);
        repository.save(friend);
    }

    public void removeFriend(int id, int friend_id){
        User user = repository.findById(id).get();
        User friend = repository.findById(friend_id).get();

        List<User> userFriendList = user.getFriendList();
        userFriendList.remove(friend);
        user.setFriendList(userFriendList);
        repository.save(user);

        List<User> otherFriendList = friend.getFriendList();
        otherFriendList.remove(user);
        friend.setFriendList(otherFriendList);
        repository.save(friend);
    }

    public List<User> getFriendList(int id){
        User user= repository.findById(id).get();
        List<User> friendList= user.getFriendList();
        return friendList;
    }

    public void validateLoggedInUser(User user){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User loggedInUser = repository.findByEmailId(userDetails.getUsername());
        if(!loggedInUser.getEmailId().equals(user.getEmailId())){
            throw new RuntimeException("Invalid User");
        }
    }

}