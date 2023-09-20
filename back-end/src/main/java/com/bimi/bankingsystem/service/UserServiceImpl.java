package com.bimi.bankingsystem.service;
import com.bimi.bankingsystem.common.enums.City;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class UserServiceImpl implements UserService {


    private UserRepository userRepository;
    private SavingGoalService savingGoalService;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    @Override

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    public String[] getCities(){
        return City.getNames(City.class);
    }

    @Override
    public boolean deleteUser(Long id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public User updateUser(Long id, User user) {
        User u =
                userRepository.findById(id).get();
        u.setEmail(user.getEmail());
        u.setFirstName(user.getFirstName());
        u.setLastName(user.getLastName());
        u.setBalance(user.getBalance());
        u.setPassword(user.getPassword());
        u.setCity(user.getCity());
        u.setPhoneNumber(user.getPhoneNumber());

        return userRepository.save(u);

    }



}