package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.service.SavingGoalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SavingGoalController {

    private SavingGoalService savingGoalService;

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
    public ResponseEntity<Map<String,Boolean>> deleteSavingGoal(@PathVariable("id") Long id) {
        boolean deleted = false;
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/savingGoal/{id}")
    public ResponseEntity<SavingGoal> updateSavingGoal(@PathVariable("id") Long id,
                                                 @RequestBody SavingGoal savingGoal){
        savingGoal = savingGoalService.updateSavingGoals(id,savingGoal);
        return ResponseEntity.ok(savingGoal);
    }
}
