package com.bimi.bankingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.bimi.bankingsystem")
@EntityScan("com.bimi.bankingsystem")
@SpringBootApplication(scanBasePackages = {"com.bimi.bankingsystem"})
public class BankingMenagmentSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankingMenagmentSystemApplication.class, args);
	}
}
