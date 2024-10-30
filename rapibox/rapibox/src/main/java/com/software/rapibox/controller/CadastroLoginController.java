package com.software.rapibox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.service.CadastroLoginService;

@RestController
@CrossOrigin(origins = "http://localhost:5173/") //Encaminhando requisição para o React
public class CadastroLoginController {
    
    @Autowired
    CadastroLoginService cadastroLoginService;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Cadastro_Login>> AllUsuarios() {
        List<Cadastro_Login> usuarios = cadastroLoginService.mostrar_usuarios();
        return ResponseEntity.ok(usuarios);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Cadastro_Login cadastrologin){
        return cadastroLoginService.cadastrar(cadastrologin);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Cadastro_Login cadastrologin){
        return cadastroLoginService.login(cadastrologin);
    }
}
