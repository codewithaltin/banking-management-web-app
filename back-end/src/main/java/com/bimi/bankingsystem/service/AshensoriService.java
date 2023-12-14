package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Ashensori;
import com.bimi.bankingsystem.repository.AshensoriRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AshensoriService {

    private AshensoriRepository er;

    public AshensoriService(AshensoriRepository er){ this.er = er;}


    public Ashensori addAshensor(Ashensori e){
        return er.save(e);
    }

    public List<Ashensori> getAllAshensor(){
        return er.findAll();
    }

    public Ashensori getAshensorById(Long id){
        return er.findById(id).get();
    }

    public boolean deleteAshensor(Long id ){
        er.deleteById(id);
        return true;
    }
    public Ashensori updateAshensor(Long id, Ashensori e){
        Ashensori ashensori =
                er.findById(id).get();
        ashensori.setPershkrim(e.getPershkrim());
        ashensori.setNdertesa(e.getNdertesa());

        return er.save(ashensori);

    }


}
