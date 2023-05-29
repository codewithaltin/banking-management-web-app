package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.repository.SavingGoalRepository;

import java.util.List;

public class SavingGoalService {

    private SavingGoalRepository savingGoalRepository;

    public SavingGoalService(SavingGoalRepository savingGoalRepository){ this.savingGoalRepository = savingGoalRepository;}


    public SavingGoal addSavingGoal(SavingGoal savingGoal){
        return savingGoalRepository.save(savingGoal);
    }

    public List<SavingGoal> getSavingGoals(){
        return savingGoalRepository.findAll();
    }

    public SavingGoal getSavingGoalsById(Long id){
        return savingGoalRepository.findById(id).get();
    }

    public boolean deleteSavingGoals(Long id ){
        savingGoalRepository.deleteById(id);
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
