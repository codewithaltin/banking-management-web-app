package com.bimi.bankingsystem.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;

@Service
public class JwtService {

    private static final String SECRET_KEY="2646294A404E635266546A576E5A7234753778214125442A472D4B6150645367";
    public String extractUserName(String token) {
        return null;
    }

    private Claims extractAllClains(String token){
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigningKey() {
        byte[]  keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);}
}
