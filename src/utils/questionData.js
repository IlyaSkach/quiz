const questions = [
  {
    id: 1,
    type: "single-choice",
    text: "Приезд в Россию какой личности вызвал наибольший резонанс?",
    options: ["Канье Уэст", "Такер Карлсон", "Гаспар Ноэ", "Милош Бикович"],
    correctAnswer: 2,
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
    correctAnswer: [0, 2, 4],
  },
	{
    id: 5,
    type: "singleth-choice",
    text: "Приезд в Россию какой личности вызвал наибольший резонанс?",
    options: ["Канье Уэст", "Такер Карлсон", "Гаспар Ноэ",],
    correctAnswer: 2,
  },
  {
    id: 3,
    type: "matching",
    text: "Соотнесите событие и один из месяцев 2024 года",
    pairs: {
      top: ["БРИКС", "ПМЭФ", "Игры будущего"],
      bottom: ["февраль", "октябрь", "июнь"],
    },
    correctAnswer: { 0: 1, 1: 0, 2: 2 },
  },
	{
    id: 6,
    type: "single-image",
    text: "Какой ваш любимый цвет?",
    image: "https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
    options: ["Красный", "Синий", "Зеленый"],
		correctAnswer: 2,
  },

	{
		id: 4,
		type: "image-choice",
		text: "Выберите изображение, которое вам нравится:",
		options: [
			"https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
			"https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
		],
		correctAnswer: 2,
	},


];

export default questions;
