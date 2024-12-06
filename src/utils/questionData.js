import Image from './pic.png';


const questions = [
  {
    id: 1,
    type: "single-choice",
    text: "Приезд в Россию какой личности вызвал наибольший резонанс?",
    options: ["Канье Уэст", "Такер Карлсон", "Гаспар Ноэ", "Милош Бикович"],
    correctAnswer: 0,
  },
  {
    id: 2,
    type: "multi-choice",
    text: "Регистрация канала в РКН позволяет:",
    options: [
      "размещать рекламу и зарабатывать",
      "публиковать материалы в канале",
      "цитировать ваш контент законно",
      "не попасть под блокировку РКН",
      "не стать иноагентом",
    ],
    correctAnswer: [0, 1],
  },
	{
    id: 5,
    type: "singleth-choice",
    text: "Какой хештег стал самым популярным в мире в момент ареста Павла Дурова во Франции?",
    options: ["#FREEDUROV", "#Дуроввернистену", "#DUROVBOLGAR",],
    correctAnswer: 0,
  },
  {
    id: 3,
    type: "matching",
    text: "Соотнесите событие и один из месяцев 2024 года",
    pairs: {
      top: ["БРИКС", "ПМЭФ", "Игры будущего"],
      bottom: ["февраль", "октябрь", "июнь"],
    },
    correctAnswer: { 0: 0, 1: 1, 2: 2 },
  },
	{
    id: 6,
    type: "single-image",
    text: "Определите кадр по фрагменту",
    // image: "https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
    image: Image,
    options: ["Голосование в Госдуме по законопроекту о «Наливайках»", "Выход Австралии из Содружества наций", "Покушение на Дональда Трампа"],
		correctAnswer: 0,
  },

	{
		id: 4,
		type: "image-choice",
		text: "Выберите изображение, которое вам нравится:",
		options: [
			// "https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
			// "https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
      Image,
      Image
		],
		correctAnswer: 0,
	},


];

export default questions;
