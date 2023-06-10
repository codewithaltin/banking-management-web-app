package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Plan;
import com.bimi.bankingsystem.model.Product;
import com.bimi.bankingsystem.repository.PlanRepository;
import com.bimi.bankingsystem.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {

    private final PlanRepository planRepository;
    public PlanService(PlanRepository er){ this.planRepository = er;}


    public Plan saveProduct(Plan e){
        return planRepository.save(e);
    }

    public List<Plan> getAllProducts(){
        return planRepository.findAll();
    }

    public Plan getProductById(Long id){
        return planRepository.findById(id).get();
    }

    public boolean deleteProduct(Long id ){
        planRepository.deleteById(id);
        return true;
    }
    public Plan updateProduct(Long id, Plan p){
        Plan plan =
                planRepository.findById(id).get();
        plan.setPlanName(p.getPlanName());
        plan.setPlanDesc(p.getPlanDesc());
        plan.setMonthQuanity(p.getMonthQuanity());
        return planRepository.save(plan);

    }


}
