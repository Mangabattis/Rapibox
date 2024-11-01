package com.software.rapibox.model;

import java.sql.Blob;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cadastro_login")
@Getter
@Setter
public class Cadastro_Login {

    public Cadastro_Login() {
    }

    public Cadastro_Login(String email, String senha){
        this.email = email;
        this.senha = senha;
    }

    public Cadastro_Login(String nomeCompleto, String email, String nomeUsuario, String senha, String confirmeSenha){
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.confirmeSenha = confirmeSenha;
    }

    public Cadastro_Login(Long telefone, Blob fotoUsuario){
        this.telefone = telefone;
        this.fotoUsuario = fotoUsuario;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_completo", nullable = false)
    private String nomeCompleto;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "nome_usuario", nullable = false, unique = true)
    private String nomeUsuario;

    @Column(name = "senha", nullable = false)
    private String senha;

    // Este campo não será persistido no banco
    @Transient
    private String confirmeSenha;

    @Column(name = "foto_usuario", nullable = true) // Atributo para armazenar a foto do usuário
    private Blob fotoUsuario;

    @Column(name = "telefone", nullable = true)
    @Size(min = 11, max = 13)
    private Long telefone;

    // Relacionamento com a tabela BusinessInfo
    @OneToOne(mappedBy = "cadastroLogin", cascade = CascadeType.ALL)
    private Info_Negocio infoNegocio;


}