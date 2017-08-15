
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('moods').del()
    .then(function () {
      // Inserts seed entries
      return knex('moods').insert([
        {id: 1, mood_name: 'Amused', mood_type: "pos", mood_color: "#f78f4a", mood_icon: "/images/zoidberg.png"},
        {id: 2, mood_name: 'Calm', mood_type: "pos", mood_color: "#4a80f7", mood_icon: "/images/content.png"},
        {id: 3, mood_name: 'Cheerful', mood_type: "pos", mood_color: "#f4f74a", mood_icon: "/images/dance.gif"},
        {id: 4, mood_name: 'Content', mood_type: "pos", mood_color: "#97f74a", mood_icon: "/images/awthanks.png"},
        {id: 5, mood_name: 'Dreamy', mood_type: "pos", mood_color: "#d74af7", mood_icon: "/images/coffee.png"},
        {id: 6, mood_name: 'Excited', mood_type: "pos", mood_color: "#d1f74a", mood_icon: "/images/badtime.png"},
        {id: 7, mood_name: 'Good', mood_type: "pos", mood_color: "#d74af7", mood_icon: "/images/dance.gif"},
        {id: 8, mood_name: 'Happy', mood_type: "pos", mood_color: "#894af7", mood_icon: "/images/gangnamstyle.gif"},
        {id: 9, mood_name: 'Joyful', mood_type: "pos", mood_color: "#d44af7", mood_icon: "/images/trump.png"},
        {id: 10, mood_name: 'Loving', mood_type: "pos", mood_color: "#f74adf", mood_icon: "/images/heart.png"},
        {id: 11, mood_name: 'Optimistic', mood_type: "pos", mood_color: "#4a80f7", mood_icon: "/images/awesome.png"},
        {id: 12, mood_name: 'Peaceful', mood_type: "pos", mood_color: "#4a97f7", mood_icon: "/images/arya.png"},
        {id: 13, mood_name: 'Silly', mood_type: "pos", mood_color: "#4ab1f7", mood_icon: "/images/chompy.png"},
        {id: 14, mood_name: 'Sympathetic', mood_type: "pos", mood_color: "#4abaf7", mood_icon: "/images/"},
        {id: 15, mood_name: 'Angry', mood_type: "neg", mood_color: "#4addf7", mood_icon: "/images/angry.png"},
        {id: 16, mood_name: 'Annoyed', mood_type: "neg", mood_color: "#4aeef7", mood_icon: "/images/drool.png"},
        {id: 17, mood_name: 'Bad', mood_type: "neg", mood_color: "#4af7d4", mood_icon: "/images/boom.png"},
        {id: 18, mood_name: 'Cranky', mood_type: "neg", mood_color: "#4af79d", mood_icon: "/images/trump.png"},
        {id: 19, mood_name: 'Depressed', mood_type: "neg", mood_color: "#d74af7", mood_icon: "/images/wtf.png"},
        {id: 20, mood_name: 'Frustrated', mood_type: "neg", mood_color: "#97f74a", mood_icon: "/images/frustrated.png"},
        {id: 21, mood_name: 'Gloomy', mood_type: "neg", mood_color: "#d1f74a", mood_icon: "/images/turkey.png"},
        {id: 22, mood_name: 'Grumpy', mood_type: "neg", mood_color: "#f4f74a", mood_icon: "/images/bad.png"},
        {id: 23, mood_name: 'Irritated', mood_type: "neg", mood_color: "#f7da4a", mood_icon: "/images/bad.png"},
        {id: 24, mood_name: 'Mad', mood_type: "neg", mood_color: "#f7c34a", mood_icon: "/images/wtf.png"},
        {id: 25, mood_name: 'Melancholy', mood_type: "neg", mood_color: "#f7b44a", mood_icon: "/images/zoidberg.pmg"},
        {id: 26, mood_name: 'Sad', mood_type: "neg", mood_color: "#f78f4a", mood_icon: "/images/frustrated.pmg"},
        {id: 27, mood_name: 'Stressed', mood_type: "neg", mood_color: "#f46241", mood_icon: "/images/stressed.png"},
        {id: 28, mood_name: 'Weird', mood_type: "neg", mood_color: "#f44242", mood_icon: "/images/trump.png"}
      ]);
    });
};
