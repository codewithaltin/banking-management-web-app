package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.exception.NotFoundException;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.SavingGoalRepository;
import com.bimi.bankingsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SavingGoalService {

    private final SavingGoalRepository savingGoalRepository;
    private UserRepository userRepository = null;

    public SavingGoalService(SavingGoalRepository savingGoalRepository){ this.savingGoalRepository = savingGoalRepository;}


    public SavingGoal addSavingGoal(SavingGoal savingGoal){
        return savingGoalRepository.save(savingGoal);
    }

    public List<SavingGoal> getSavingGoals(){
        return savingGoalRepository.findAll();
    }

    public SavingGoal getSavingGoalsById(Long id) {
        try {
            return savingGoalRepository.findById(id).orElseThrow(() -> new NotFoundException("SavingGoal with id " + id + " not found"));
        } catch (NotFoundException ex) {
            System.out.println("SavingGoal could not be found, id: " + id);
            throw ex;
        }
    }

    public SavingGoal getSavingGoalByUserId(Long id) {
        try {
            return savingGoalRepository.findById(id).orElseThrow(() -> new NotFoundException("SavingGoal with id " + id + " not found"));
        } catch (NotFoundException ex) {
            System.out.println("SavingGoal could not be found, id: " + id);
            throw ex;
        }
    }

    public boolean deleteSavingGoal(Long id) {
        SavingGoal savingGoal =  savingGoalRepository.findById(id).get();
        savingGoalRepository.delete(savingGoal);
        return true;
    }
    public SavingGoal updateSavingGoals(Long id, SavingGoal e){
        SavingGoal savingGoal =
                savingGoalRepository.findById(id).get();
        savingGoal.setSavingReason(e.getSavingReason());
        savingGoal.setAmount(e.getAmount());
        savingGoal.setDate(e.getDate());
        savingGoal.setGoalName(e.getGoalName());
        savingGoal.setGoalDescription(e.getGoalDescription());

        return savingGoalRepository.save(savingGoal);

    }



}
