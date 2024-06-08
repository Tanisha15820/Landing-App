import React, { useState } from 'react';
import './index.css';

function FifthPage() {
  const questions = [
    {
      question: 'What is the capital of France?',
      answer: 'The capital of France is Paris.',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answer: 'William Shakespeare wrote "Romeo and Juliet".',
    },
    {
      question: 'What is the tallest mountain in the world?',
      answer: 'Mount Everest is the tallest mountain in the world.',
    },
    {
      question: 'What is the chemical symbol for water?',
      answer: 'The chemical symbol for water is H2O.',
    },
    {
      question: 'Who painted the Mona Lisa?',
      answer: 'Leonardo da Vinci painted the Mona Lisa.',
    },
    {
      question: 'What is the currency of Japan?',
      answer: 'The currency of Japan is the Japanese yen.',
    },
  ];

  return (
    <div className="FifthPage">
      {/* FAQ Section */}
      <div className="faq-section">
        <h1 style={{ color: '#FF4500' }}>FAQ</h1>
        <br />
        <h2><b style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>Frequently Asked Questions</b></h2>
        <br />
        <br />
      </div>

      <div className="faq-grid">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`faq-cell ${index % 2 === 0 ? 'black-cell' : 'grey-cell'}`}
            onClick={() => alert(item.answer)} // Show answer in alert for demonstration
            style={{ fontSize: '24px', padding: '20px' }} // Adjust font size and padding
          >
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FifthPage;
