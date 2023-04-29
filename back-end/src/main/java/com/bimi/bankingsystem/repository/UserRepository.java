package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.entity.UserEntity;
import com.bimi.bankingsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
