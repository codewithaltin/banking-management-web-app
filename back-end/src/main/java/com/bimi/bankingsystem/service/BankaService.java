package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Banka;
import com.bimi.bankingsystem.model.Personi;
import com.bimi.bankingsystem.repository.BankaRepository;
import com.bimi.bankingsystem.repository.PersoniRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankaService {

    private BankaRepository er;

    public BankaService(BankaRepository er){ this.er = er;}


    public Banka addBanka(Banka e){
        return er.save(e);
    }

    public List<Banka> getAllBanka(){
        return er.findAll();
    }

    public Banka getBankaById(Long id){
        return er.findById(id).get();
    }

    public boolean deleteBanka(Long id ){
        er.deleteById(id);
        return true;
    }
    public Banka updateBanka(Long id, Banka e){
        Banka banka =
                er.findById(id).get();
        banka.setName(e.getName());

        return er.save(banka);

    }


}
