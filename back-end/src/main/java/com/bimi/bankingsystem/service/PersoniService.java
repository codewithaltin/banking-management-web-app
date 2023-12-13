package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Personi;
import com.bimi.bankingsystem.repository.PersoniRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersoniService {

    private PersoniRepository er;

    public PersoniService(PersoniRepository er){ this.er = er;}


    public Personi addPerson(Personi e){
        return er.save(e);
    }

    public List<Personi> getAllPerson(){
        return er.findAll();
    }

    public Personi getPersonById(Long id){
        return er.findById(id).get();
    }

    public boolean deletePerson(Long id ){
        er.deleteById(id);
        return true;
    }
    public Personi updatePerson(Long id, Personi e){
        Personi employee =
                er.findById(id).get();
        employee.setFirstName(e.getFirstName());
        employee.setLastName(e.getLastName());
        employee.setBanka(e.getBanka());

        return er.save(employee);

    }


}
