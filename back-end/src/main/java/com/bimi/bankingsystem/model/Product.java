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
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;
    @Column
    @NonNull
    private String name;
    @Column
    private String desc;
    @Column
   private String type;
    @Column
   private String pageUrl;
    @Column
   private String imageUrl;


   public Product() {
    }
}
