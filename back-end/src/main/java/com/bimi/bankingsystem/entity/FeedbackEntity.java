package com.bimi.bankingsystem.entity;

import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "feedback")
public class FeedbackEntity {

    @Id
    @SequenceGenerator(name = "client_sequence", sequenceName = "client_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_sequence")
    @Column(updatable = false)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phonenumber")
    private String phoneNumber;

    @Column(name = "category")
    private String category;

    @Column(name = "feedbacktitle")
    private String feedbackTitle;

//    @Column(name = "fileurl")
//    private String fileUrl;
//
    @Column(name = "rating")
    private int rating;

    @Transient
    private MultipartFile file;

    public FeedbackEntity() {

    }

    public FeedbackEntity(Long id, String firstName, String lastName,
                          String phoneNumber, String category, String feedbackTitle,
                          String fileUrl, int rating, MultipartFile file) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.category = category;
        this.feedbackTitle = feedbackTitle;
//        this.fileUrl = fileUrl;
        this.rating = rating;
//        this.file = file;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getFeedbackTitle() {
        return feedbackTitle;
    }

    public void setFeedbackTitle(String feedbackTitle) {
        this.feedbackTitle = feedbackTitle;
    }

//    public String getFileUrl() {
//        return fileUrl;
//    }
//
//    public void setFileUrl(String fileUrl) {
//        this.fileUrl = fileUrl;
//    }
//
    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public FeedbackEntity save(FeedbackEntity feedbackEntity) {
        return feedbackEntity;
    }
}
