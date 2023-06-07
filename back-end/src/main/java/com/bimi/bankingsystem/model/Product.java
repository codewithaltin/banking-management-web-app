package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    private String name;

   private String desc;

   private String type;

   private String pageUrl;

   private String imageUrl;


   public Product() {
    }
}
