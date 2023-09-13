package com.bimi.bankingsystem.exception;

public class NotFoundException extends RuntimeException{
    public NotFoundException(String msg){
        super(msg);
    }
}
