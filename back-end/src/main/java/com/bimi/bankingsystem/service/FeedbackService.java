package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.FeedbackEntity;
import com.bimi.bankingsystem.repository.FeedbackRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService implements FeedbackServ{


    private FeedbackRepository feedbackRepository;

    @Override
    public List<FeedbackEntity> findAllfeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public Optional<FeedbackEntity> findById(Long id) {
        return feedbackRepository.findById(id);
    }

    @Override
    public FeedbackEntity saveFeedback(FeedbackEntity feedbackEntity) {
        return feedbackEntity.save(feedbackEntity);
    }

    @Override
    public FeedbackEntity updateFeedback(FeedbackEntity feedbackEntity) {
        return feedbackEntity.save(feedbackEntity);
    }

    @Override
    public void deleteFeedback(long id) {
        feedbackRepository.deleteById(id);
    }
}
