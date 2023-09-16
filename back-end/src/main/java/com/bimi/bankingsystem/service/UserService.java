package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.User;
import java.util.*;

public interface UserService {

    User saveUser(User user);

    List<User> getAllUsers();
    String[]  getCities();

    Optional<User> getUserById(Long id);

    Optional<User> getUserByEmail(String email);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);

   //void addSavingGoalToUser(Long userId, Long savingGoalId);



    //SavingGoal createSavingGoalUser(Optional<User> user, SavingGoal savingGoal);
}