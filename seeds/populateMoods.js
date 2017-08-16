
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('moods').del()
    .then(function () {
      // Inserts seed entries
      return knex('moods').insert([
        {id: 1, mood_name: 'Good', mood_type: "pos", mood_color: "#c9c9cf", mood_icon: "/images/dance.gif"},
        {id: 2, mood_name: 'Happy', mood_type: "pos", mood_color: "#cfccff", mood_icon: "/images/gangnamstyle.gif"},
        {id: 3, mood_name: 'Loving', mood_type: "pos", mood_color: "#c4c4d4", mood_icon: "/images/heart.png"},
        {id: 4, mood_name: 'Cheerful', mood_type: "pos", mood_color: "#bfbfd9", mood_icon: "/images/dance.gif"},
        {id: 5, mood_name: 'Excited', mood_type: "pos", mood_color: "#babade", mood_icon: "/images/badtime.png"},
        {id: 6, mood_name: 'Content', mood_type: "pos", mood_color: "#b5b5e3", mood_icon: "/images/awthanks.png"},
        {id: 7, mood_name: 'Amused', mood_type: "pos", mood_color: "#b0b0e8", mood_icon: "/images/zoidberg.png"},
        {id: 8, mood_name: 'Joyful', mood_type: "pos", mood_color: "#ababed", mood_icon: "/images/trump.png"},
        {id: 9, mood_name: 'Silly', mood_type: "pos", mood_color: "#a6a6f2", mood_icon: "/images/chompy.png"},
        {id: 10, mood_name: 'Optimistic', mood_type: "pos", mood_color: "#a1a1f7", mood_icon: "/images/awesome.png"},
        {id: 11, mood_name: 'Dreamy', mood_type: "pos", mood_color: "#9c9cfc", mood_icon: "/images/coffee.png"},
        {id: 12, mood_name: 'Peaceful', mood_type: "pos", mood_color: "#9999ff", mood_icon: "/images/arya.png"},
        {id: 13, mood_name: 'Calm', mood_type: "pos", mood_color: "#8080ff", mood_icon: "/images/content.png"},
        {id: 14, mood_name: 'Sympathetic', mood_type: "pos", mood_color: "#6666ff", mood_icon: "/images/"},
        {id: 15, mood_name: 'Weird', mood_type: "neg", mood_color: "#4d4dff", mood_icon: "/images/trump.png"},
        {id: 16, mood_name: 'Melancholy', mood_type: "neg", mood_color: "#3333ff", mood_icon: "/images/zoidberg.png"},
        {id: 17, mood_name: 'Gloomy', mood_type: "neg", mood_color: "#1a1aff", mood_icon: "/images/turkey.png"},
        {id: 18, mood_name: 'Grumpy', mood_type: "neg", mood_color: "#0000ff", mood_icon: "/images/bad.png"},
        {id: 19, mood_name: 'Cranky', mood_type: "neg", mood_color: "#0000e6", mood_icon: "/images/trump.png"},
        {id: 20, mood_name: 'Annoyed', mood_type: "neg", mood_color: "#0000cc", mood_icon: "/images/drool.png"},
        {id: 21, mood_name: 'Depressed', mood_type: "neg", mood_color: "#0000b3", mood_icon: "/images/wtf.png"},
        {id: 22, mood_name: 'Frustrated', mood_type: "neg", mood_color: "#000099", mood_icon: "/images/frustrated.png"},
        {id: 23, mood_name: 'Irritated', mood_type: "neg", mood_color: "#000080", mood_icon: "/images/bad.png"},
        {id: 24, mood_name: 'Mad', mood_type: "neg", mood_color: "#000066", mood_icon: "/images/wtf.png"},
        {id: 25, mood_name: 'Stressed', mood_type: "neg", mood_color: "#00004d", mood_icon: "/images/stressed.png"},
        {id: 26, mood_name: 'Sad', mood_type: "neg", mood_color: "#000033", mood_icon: "/images/frustrated.pmg"},
        {id: 27, mood_name: 'Angry', mood_type: "neg", mood_color: "#00001a", mood_icon: "/images/angry.png"},
        {id: 28, mood_name: 'Bad', mood_type: "neg", mood_color: "#000000", mood_icon: "/images/boom.png"},
      ]);
    });
};
