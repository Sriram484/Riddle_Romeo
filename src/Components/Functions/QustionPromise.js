import UrlCreator from "./UrlCreator";
import QuestionObjectCreator from "./QuestionObjectCreator";

export function handleQuestionsPromise(result, navigate) {
    const URL = UrlCreator(result);
    const QuestionsPromise = QuestionObjectCreator(URL);

    QuestionsPromise
        .then(({ responseCode, questions }) => {
            if (responseCode === 1) {
                navigate("/missing");
            } else {
                navigate('/QuestionDisplayer', { state: { questions, responseCode } });
            }
        })
        .catch(error => {
            console.error("Error fetching questions:", error);
        });
}