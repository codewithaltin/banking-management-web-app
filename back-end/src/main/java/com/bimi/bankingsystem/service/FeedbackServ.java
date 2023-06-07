package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.FeedbackEntity;

import java.util.List;
import java.util.Optional;

public interface FeedbackServ {

    List<FeedbackEntity> findAllfeedback();
    Optional<FeedbackEntity> findById(Long id);

    FeedbackEntity saveFeedback(FeedbackEntity feedbackEntity);

    FeedbackEntity updateFeedback(FeedbackEntity feedbackEntity);

    void deleteFeedback(long id);

}
