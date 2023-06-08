package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.entity.FeedbackEntity;
import com.bimi.bankingsystem.service.FeedbackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class FeedbackController {


    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/feedback")
    public FeedbackEntity saveFeedback(@RequestBody FeedbackEntity feedbackEntity){
        return feedbackService.saveFeedback(feedbackEntity);
    }

    @GetMapping("/feedback")
    public List<FeedbackEntity> getAllfeedback() {
        return feedbackService.findAllfeedback();
    }


    @PutMapping("/feedback/{id}")
        public FeedbackEntity updateFeedback(@PathVariable long id, @RequestBody FeedbackEntity feedbackEntity){
            return feedbackService.updateFeedback(id, feedbackEntity);
        }

    @DeleteMapping("feedback/{id}")
    public void deleteFeedback(@PathVariable long id){
        feedbackService.deleteFeedback(id);
    }


}

//    // Get all feedback
//    @GetMapping
//    public List<FeedbackEntity> getAllFeedback() {
//        return feedbackRepository.findAll();
//    }
//
//    // Get feedback by ID
//    @GetMapping("/{id}")
//    public Optional<FeedbackEntity> getFeedbackById(@PathVariable Long id) {
//        return feedbackRepository.findById(id);
//    }
//
//    // Create feedback
//    @PostMapping("/feedback")
//    public FeedbackEntity createFeedback(@ModelAttribute FeedbackEntity feedback)  {
//        return feedbackRepository.save(feedback);
//    }
//
//    // Update feedback
//    @PutMapping("feedback/{id}")
//    public FeedbackEntity updateFeedback(@PathVariable Long id, @ModelAttribute FeedbackEntity updatedFeedback) {
//        Feedback existingFeedback = feedbackRepository.findById(id);
//        return feedbackRepository.save(existingFeedback);
//    }
//
//    // Delete feedback
//    @DeleteMapping("feedback/{id}")
//    public void deleteFeedback(@PathVariable Long id) {
//        feedbackRepository.deleteById(id);
//    }

