package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.User;
import java.util.*;

public interface UserService {

    User saveUser(User user);

    List<User> getAllUsers();


    User getUserById(Long id);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);

}
