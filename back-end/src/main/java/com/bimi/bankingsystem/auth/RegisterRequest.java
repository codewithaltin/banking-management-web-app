package com.bimi.bankingsystem.auth;


import com.bimi.bankingsystem.common.enums.City;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstName;
    private String lastName;
    private long accountNumber;
    private City city;
    private String email;
    private String phoneNumber;
    private String password;

}
