var quiz = {
	title: 'My quiz',
	questions: [
	{
		text: "'Bring me your finest food stuffed with your second finest'. Whare the foods?",
		image: "https://pbs.twimg.com/media/BUsYfTVCUAAqREr.jpg",
		responses: [
		{text: 'lobster, stuffed with burritos', correct: false},
		{text: 'Prawns, stuffed with tortillas'},
		{text: 'Lobster, stuffed with tacos', correct: true},
	   ]
	},  {
		text: "Marge starts a food business, what is she selling?",
		image:"http://static-media.fxx.com/img/FX_Networks_-_FXX/7/427/Simpsons_08_12_P3.jpg",
	        responses: [
		{text: 'Pretzels', correct: true},
	        {text: 'hotdogs', correct: false},
	        {text: 'donuts'},
	   ]
	}
   ]
 };

new Vue({
   el: '#app',
   data: {
	 quiz: quiz,
	 questionIndex: 0,
	 userResponses: Array(quiz.questions.length).fill(false)
   },
   methods: {
	 next: function() {
		 this.questionIndex++;
	 },
	 prev: function() {
		 this.questionIndex--;
	 },
	   score: function() {
		 return this.userResponses.filter(function(val) { return val }).length;
	   }
   }
});

