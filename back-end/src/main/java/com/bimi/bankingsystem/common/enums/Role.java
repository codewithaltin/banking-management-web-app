package com.bimi.bankingsystem.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;
import java.util.EnumSet;

@AllArgsConstructor
@Getter
public enum Role {
    USER("USER"),
    ADMIN("ADMIN"),
    AUDITOR("AUDITOR"),
    DATA_MANAGER("DATA_MANAGER");

    private String value;

    public static Role fromString(String value){
        if(value == null)
            return null;

        return EnumSet.allOf(Role.class)
                .stream()
                .filter(role -> role.getValue().equals(value))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("Something went wrong, unsupported type!"));
    }
    public static String[] getRoles(Class<? extends Enum<?>> e) {
        return Arrays.stream(e.getEnumConstants()).map(Enum::name).toArray(String[]::new);
    }
}
