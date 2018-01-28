const parseQuestionAnswers = (answersList, trueAnswerId ) => answersList.map(({ id, text }) =>
  id === trueAnswerId ? { id, text, isTrueAnswer: true } : { id, text });


const parseQuestionsList = ({ questions, stat }) => questions.map((question, index) => {
  const { id, text, answers } = question;
  const { question_id, true_answer_id } = stat[index];

  return question_id === id ? {
    id,
    text,
    answers: parseQuestionAnswers(answers, true_answer_id),
  } : {};
});

module.exports = parseQuestionsList;
