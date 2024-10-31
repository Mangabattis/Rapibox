package com.software.rapibox.service;

import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.model.RespostaModel;
import com.software.rapibox.repository.CadastroLoginRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CadastroLoginService {

    @Autowired
    private CadastroLoginRepository cadastroLoginRepository;

    private final RespostaModel rm = new RespostaModel(); 

    private final BCryptPasswordEncoder criptografia = new BCryptPasswordEncoder();

    public List<Cadastro_Login> mostrar_usuarios(){
        return cadastroLoginRepository.findAll();
    }

    public ResponseEntity<?> cadastrar(Cadastro_Login cadastroLogin) {
        if (cadastroLogin.getNomeCompleto() == null || cadastroLogin.getNomeCompleto().isEmpty() ||
            cadastroLogin.getEmail() == null || cadastroLogin.getEmail().isEmpty() || cadastroLogin.getNomeUsuario() == null || 
            cadastroLogin.getNomeUsuario().isEmpty() || cadastroLogin.getSenha() == null || cadastroLogin.getSenha().isEmpty() ||
            cadastroLogin.getConfirmeSenha() == null || cadastroLogin.getConfirmeSenha().isEmpty()) {
            
            rm.setMensagem("Preencha todos os campos.");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        }
    
        else if (!cadastroLogin.getSenha().equals(cadastroLogin.getConfirmeSenha())) {
            rm.setMensagem("As senhas não coincidem.");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        }
    
        else if (cadastroLoginRepository.existsByEmail(cadastroLogin.getEmail()) || cadastroLoginRepository.existsBySenha(cadastroLogin.getSenha()) ||  cadastroLoginRepository.existsByNomeUsuario(cadastroLogin.getNomeUsuario())) {
            rm.setMensagem("Esta conta já existe.");
            return new ResponseEntity<>(rm, HttpStatus.CONFLICT);
        }

        cadastroLogin.setSenha(criptografia.encode(cadastroLogin.getSenha()));
        Cadastro_Login salvar_cadastro = cadastroLoginRepository.save(cadastroLogin);
        return new ResponseEntity<>(salvar_cadastro, HttpStatus.CREATED);
    }

    public ResponseEntity<?> login(Cadastro_Login cadastroLogin){
        Cadastro_Login login = cadastroLoginRepository.findByEmail(cadastroLogin.getEmail());

        if (login != null && criptografia.matches(cadastroLogin.getSenha(), login.getSenha())){
            return new ResponseEntity<>(HttpStatus.OK);
        }

        rm.setMensagem("Email ou Senha incorretos.");
        return new ResponseEntity<RespostaModel>(rm, HttpStatus.UNAUTHORIZED);
    }
    
}