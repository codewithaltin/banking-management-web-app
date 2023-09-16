    package com.bimi.bankingsystem.repository;


    import com.bimi.bankingsystem.model.User;
    import org.springframework.data.jpa.repository.JpaRepository;

    import java.util.Optional;

    public interface UserRepository extends JpaRepository<User, Long> {

        Optional<User> findByEmail(String email);
        User findById(long id);
        User findByAccountNumber(long accountNumber);
    }

