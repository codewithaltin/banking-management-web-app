package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.FeedbackEntity;
import com.bimi.bankingsystem.repository.FeedbackRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService implements FeedbackServ{


    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }


//        public FeedbackService(FeedbackRepository feedbackRepository) {
//            this.feedbackRepository = feedbackRepository;
//        }
//
//        public FeedbackEntity createLoan(FeedbackEntity feedbackEntity){
//            return FeedbackEntity.save(loan);
//        }
//
//        public List<Loan> getAllLoans(){
//            return loanRepository.findAll();
//        }
//
//        public Loan updateLoan(Integer id, Loan loan){
//            Loan loan1= loanRepository.findById(id).get();
//            loan1.setFullName(loan.getFullName());
//            loan1.setEmail(loan.getEmail());
//            loan1.setPhoneNumber(loan.getPhoneNumber());
//            loan1.setAddress(loan.getAddress());
//            loan1.setLoanAmount(loan.getLoanAmount());
//            loan1.setMonthlyIncome(loan.getMonthlyIncome());
//            loan1.setPurpouse(loan.getPurpouse());
//
//            return loanRepository.save(loan1);
//        }
//
//        public boolean deleteLoan(Integer id){
//            loanRepository.deleteById(id);
//            return true;
//        }

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
        return feedbackRepository.save(feedbackEntity);
    }

//    @Override
//    public FeedbackEntity updateFeedback(FeedbackEntity feedbackEntity) {
//        return null;
//    }
    @Override
    public FeedbackEntity updateFeedback(long id, FeedbackEntity feedbackEntity){
        FeedbackEntity feedback1= feedbackRepository.findById(id).get();
        feedback1.setFirstName(feedbackEntity.getFirstName());
        feedback1.setLastName(feedbackEntity.getLastName());
        feedback1.setPhoneNumber(feedbackEntity.getPhoneNumber());
        feedback1.setCategory(feedbackEntity.getCategory());
        feedback1.setFeedbackTitle(feedbackEntity.getFeedbackTitle());
        feedback1.setRating(feedbackEntity.getRating());

        return feedbackEntity.save(feedback1);
    }

//    public FeedbackEntity updateFeedback(long id, FeedbackEntity feedbackEntity) {
//        Optional<FeedbackEntity> optionalFeedback = feedbackRepository.findById(id);
//
//        if (optionalFeedback.isPresent()) {
//            FeedbackEntity feedback1 = optionalFeedback.get();
//            feedback1.setFirstName(feedbackEntity.getFirstName());
//            feedback1.setLastName(feedbackEntity.getLastName());
//            feedback1.setPhoneNumber(feedbackEntity.getPhoneNumber());
//            feedback1.setCategory(feedbackEntity.getCategory());
//            feedback1.setFeedbackTitle(feedbackEntity.getFeedbackTitle());
//            feedback1.setRating(feedbackEntity.getRating());
//
//            return feedbackRepository.save(feedback1);
//        } else {
//            // Handle the case where the feedback with the given ID is not found
//            // You can choose to return null or throw a custom exception, or handle it differently based on your requirements
//            return null;
//        }
//    }
//

    @Override
    public void deleteFeedback(long id) {
    feedbackRepository.deleteById(id);
    }



}
