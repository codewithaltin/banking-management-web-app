package com.bimi.bankingsystem.auth;


import com.bimi.bankingsystem.controller.UserController;
import com.bimi.bankingsystem.exception.UnauthorizedException;
import com.bimi.bankingsystem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;





    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    )

    {
        if(service.checkEmailUnique(request.getEmail()) && (service.checkAccountNumberUnique(request.getAccountNumber()) || (request.getAccountNumber() == 0))) {
            return ResponseEntity.ok(service.register(request));
        }else{
            throw new UnauthorizedException("User already exist");
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));

    }


}