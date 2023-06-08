package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.FeedbackEntity;

import java.util.List;
import java.util.Optional;

public interface FeedbackServ {

    List<FeedbackEntity> findAllfeedback();
    Optional<FeedbackEntity> findById(Long id);

    FeedbackEntity saveFeedback(FeedbackEntity feedbackEntity);


    //    @Override
    //    public FeedbackEntity updateFeedback(FeedbackEntity feedbackEntity) {
    //        return null;
    //    }
    FeedbackEntity updateFeedback(long id, FeedbackEntity feedbackEntity);

    void deleteFeedback(long id);

}
