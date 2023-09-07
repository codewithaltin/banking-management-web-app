package com.bimi.bankingsystem.service;
import com.bimi.bankingsystem.exception.NotFoundException;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.UserRepository;
import org.springframework.stereotype.Service;


import java.util.List;

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
    public User getUserById(Long id) {
        try {
            return userRepository.findById(id).orElseThrow(() -> new NotFoundException("User with id " + id + " not found"));
        } catch (NotFoundException ex) {
            System.out.println("User could not be found, id: " + id);
            throw ex;
        }
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
        u.setEmailId(user.getEmailId());
        u.setFirstName(user.getFirstName());
        u.setLastName(user.getLastName());
        u.setPassword(user.getPassword());
        u.setPhoneNumber(user.getPhoneNumber());

        return userRepository.save(u);

    }

    @Override
    public void addSavingGoalToUser(Long userId, Long savingGoalId) {
        SavingGoal savingGoal = savingGoalService.getSavingGoalsById(savingGoalId);

        User user = getUserById(userId);

        user.addSavingGoals(savingGoal);

        saveUser(user);
    }
}