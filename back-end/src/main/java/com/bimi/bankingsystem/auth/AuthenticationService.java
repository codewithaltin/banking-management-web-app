package com.bimi.bankingsystem.auth;


import com.bimi.bankingsystem.common.enums.Role;
import com.bimi.bankingsystem.config.JwtService;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
//                .id(1L)
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user);
    var jwtToken =jwtService.generateToken(user);
    return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        request.getEmail(),
//                        request.getPassword()
//                )
//        );
        log.info("AUTHENTICATED");
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        log.info("{}",user);
        var jwtToken =jwtService.generateToken(user);
        log.info("{}",jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
