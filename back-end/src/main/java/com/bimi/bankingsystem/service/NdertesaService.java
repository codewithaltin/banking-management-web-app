package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Ndertesa;
import com.bimi.bankingsystem.repository.NdertesaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NdertesaService {

    private NdertesaRepository er;

    public NdertesaService(NdertesaRepository er){ this.er = er;}


    public Ndertesa addNdertesa(Ndertesa e){
        return er.save(e);
    }

    public List<Ndertesa> getAllNdertesa(){
        return er.findAll();
    }

    public Ndertesa getNdertesaById(Long id){
        return er.findById(id).get();
    }

    public boolean deleteNdertesa(Long id ){
        er.deleteById(id);
        return true;
    }
    public Ndertesa updateNdertesa(Long id, Ndertesa e){
        Ndertesa ndertesa =
                er.findById(id).get();
        ndertesa.setName(e.getName());
        ndertesa.setDate(e.getDate());

        return er.save(ndertesa);

    }


}
