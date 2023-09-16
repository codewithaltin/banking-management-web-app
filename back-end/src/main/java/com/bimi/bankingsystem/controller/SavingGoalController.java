package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.SavingGoalRepository;
import com.bimi.bankingsystem.repository.UserRepository;
import com.bimi.bankingsystem.service.SavingGoalService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class SavingGoalController {

    @Autowired
    private SavingGoalService savingGoalService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private SavingGoalRepository savingGoalRepository;


    public SavingGoalController(SavingGoalService savingGoalService) {
        this.savingGoalService = savingGoalService;
    }
    @PostMapping("/savingGoal")
    public SavingGoal saveSavingGoals(@RequestBody SavingGoal savingGoal){
        return savingGoalService.addSavingGoal(savingGoal);

    }

    @GetMapping("/savingGoal")
    public List<SavingGoal> getAllSavingGoals() {
        return savingGoalService.getSavingGoals();
    }

    @GetMapping("/savingGoal/{id}")
    public ResponseEntity<SavingGoal> getSavingGoalsById(@PathVariable("id") Long id) {
        SavingGoal savingGoal = null;
        savingGoal = savingGoalService.getSavingGoalsById(id);
        return ResponseEntity.ok(savingGoal);
    }

    @DeleteMapping("/savingGoal/{id}")
    public boolean deleteSavingGoal(@PathVariable("id") Long id) {
        return savingGoalService.deleteSavingGoal(id);
    }


    @PutMapping("/savingGoal/{id}")
    public ResponseEntity<SavingGoal> updateSavingGoal(@PathVariable("id") Long id,
                                                       @RequestBody SavingGoal savingGoal){
        savingGoal = savingGoalService.updateSavingGoals(id,savingGoal);
        return ResponseEntity.ok(savingGoal);
    }

//    @PutMapping("/{savingGoalId}/user/{userId}")
//    SavingGoal assignTeacherToSubject(
//            @PathVariable Long savingGoalId,
//            @PathVariable Long userId
//    ) {
//        SavingGoal savingGoal = savingGoalRepository.findById(savingGoalId).get();
//        User user = userRepository.findById(userId).get();
//        savingGoal.assignUser(user);
////        return savingGoalRepository.save(savingGoal);
//    }

    @PostMapping("/savingGoal/{userId}")
    public SavingGoal saveSavingGoalByUserId(@PathVariable Long userId, @RequestBody SavingGoal savingGoal){
        User user = userService.getUserById(userId).get();
        savingGoal.assignUser(user);
        return savingGoalService.addSavingGoal(savingGoal);
    }

    @GetMapping("/savingGoalByUser/{userId}")
    public SavingGoal getSavingGoalByUserId(@RequestBody SavingGoal savingGoal, @PathVariable Long userId){
        User user = userService.getUserById().get();
        savingGoal = savingGoalService.getSavingGoalByUserId(id);

        return ResponseEntity.ok(savingGoal);

    }

}
