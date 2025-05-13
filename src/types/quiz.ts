export type AnswerOption = {
    text: string;
    isCorrect: boolean;
  };
  
  export type QuizQuestion = {
    question: string;
    options: AnswerOption[];
  };
  
  export const quizData: QuizQuestion[] = [
    {
      question: "Quem é o único jogador de futebol a conquistar 3 Copas do Mundo?",
      options: [
        { text: "Messi", isCorrect: false },
        { text: "Maradona", isCorrect: false },
        { text: "Pelé", isCorrect: true },
        { text: "Ronaldo", isCorrect: false },
      ],
    },
    {
      question: "Qual é a seleção com mais títulos mundiais?",
      options: [
        { text: "Alemanha", isCorrect: false },
        { text: "Brasil", isCorrect: true },
        { text: "Itália", isCorrect: false },
        { text: "Argentina", isCorrect: false },
      ],
    },
    {
      question: "Quem é o maior artilheiro das copas?",
      options: [
        { text: "Klose", isCorrect: true },
        { text: "Ronaldo Fenômeno", isCorrect: false },
        { text: "Messi", isCorrect: false },
        { text: "Mbappé", isCorrect: false },
      ],
    },
    {
      question: "Qual foi a primeira seleção campeã mundial?",
      options: [
        { text: "Uruguai", isCorrect: true },
        { text: "Itália", isCorrect: false },
        { text: "Alemanha", isCorrect: false },
        { text: "Inglaterra", isCorrect: false },
      ],
    },
    {
      question: "Em qual país foi disputada a primeira copa do mundo?",
      options: [
        { text: "Brasil", isCorrect: false },
        { text: "Itália", isCorrect: false },
        { text: "Alemanha", isCorrect: false },
        { text: "Uruguai", isCorrect: true },
      ],
    },
  ];