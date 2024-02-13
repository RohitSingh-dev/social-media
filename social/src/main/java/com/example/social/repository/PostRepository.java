package com.example.social.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.social.entity.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer>{

    public List<Post> findByUser_Id(int id);
}
