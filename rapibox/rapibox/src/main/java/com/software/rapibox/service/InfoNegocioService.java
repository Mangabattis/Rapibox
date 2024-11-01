package com.software.rapibox.service;

import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.model.RespostaModel;
import com.software.rapibox.repository.CadastroLoginRepository;

@Service
public class InfoNegocioService {
    
    @Autowired
    private CadastroLoginRepository cadastroLoginRepository;

    private final RespostaModel rm = new RespostaModel(); 
    
}
