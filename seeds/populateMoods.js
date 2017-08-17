
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('moods').del()
    .then(function () {
      // Inserts seed entries
      return knex('moods').insert([
        {id: 1, mood_name: 'Good', mood_type: "pos", mood_color: "#ffcc66", mood_icon: "/images/dance.gif"},
        {id: 2, mood_name: 'Happy', mood_type: "pos", mood_color: "#ffaa00", mood_icon: "/images/gangnamstyle.gif"},
        {id: 3, mood_name: 'Loving', mood_type: "pos", mood_color: "#ff99cc", mood_icon: "/images/heart.png"},
        {id: 4, mood_name: 'Cheerful', mood_type: "pos", mood_color: "#ffffcc", mood_icon: "/images/dance.gif"},
        {id: 5, mood_name: 'Excited', mood_type: "pos", mood_color: "#ffff99", mood_icon: "/images/badtime.png"},
        {id: 6, mood_name: 'Content', mood_type: "pos", mood_color: "#e6ffcc", mood_icon: "/images/awthanks.png"},
        {id: 7, mood_name: 'Amused', mood_type: "pos", mood_color: "#ff9999", mood_icon: "/images/zoidberg.png"},
        {id: 8, mood_name: 'Joyful', mood_type: "pos", mood_color: "#ababed", mood_icon: "/images/trump.png"},
        {id: 9, mood_name: 'Silly', mood_type: "pos", mood_color: "#d9b3ff", mood_icon: "/images/chompy.png"},
        {id: 10, mood_name: 'Optimistic', mood_type: "pos", mood_color: "#d1e0e0", mood_icon: "/images/awesome.png"},
        {id: 11, mood_name: 'Dreamy', mood_type: "pos", mood_color: "#9c9cfc", mood_icon: "/images/coffee.png"},
        {id: 12, mood_name: 'Peaceful', mood_type: "pos", mood_color: "#cce6ff", mood_icon: "/images/arya.png"},
        {id: 13, mood_name: 'Calm', mood_type: "pos", mood_color: "#f2f2f2", mood_icon: "/images/content.png"},
        {id: 14, mood_name: 'Sympathetic', mood_type: "pos", mood_color: "#ffe6e6", mood_icon: "/images/"},
        {id: 15, mood_name: 'Weird', mood_type: "neg", mood_color: "#ff9f80", mood_icon: "/images/trump.png"},
        {id: 16, mood_name: 'Melancholy', mood_type: "neg", mood_color: "#3333ff", mood_icon: "/images/zoidberg.png"},
        {id: 17, mood_name: 'Gloomy', mood_type: "neg", mood_color: "#7575a3", mood_icon: "/images/turkey.png"},
        {id: 18, mood_name: 'Grumpy', mood_type: "neg", mood_color: "#6666cc", mood_icon: "/images/bad.png"},
        {id: 19, mood_name: 'Cranky', mood_type: "neg", mood_color: "#ababed", mood_icon: "/images/trump.png"},
        {id: 20, mood_name: 'Annoyed', mood_type: "neg", mood_color: "#cc6666", mood_icon: "/images/drool.png"},
        {id: 21, mood_name: 'Depressed', mood_type: "neg", mood_color: "#4471ba", mood_icon: "/images/wtf.png"},
        {id: 22, mood_name: 'Frustrated', mood_type: "neg", mood_color: "#c3603c", mood_icon: "/images/frustrated.png"},
        {id: 23, mood_name: 'Irritated', mood_type: "neg", mood_color: "#e57046", mood_icon: "/images/bad.png"},
        {id: 24, mood_name: 'Mad', mood_type: "neg", mood_color: "#b47273", mood_icon: "/images/wtf.png"},
        {id: 25, mood_name: 'Stressed', mood_type: "neg", mood_color: "#b08e8f", mood_icon: "/images/stressed.png"},
        {id: 26, mood_name: 'Sad', mood_type: "neg", mood_color: "#999999", mood_icon: "/images/frustrated.pmg"},
        {id: 27, mood_name: 'Angry', mood_type: "neg", mood_color: "#ff0000", mood_icon: "/images/angry.png"},
        {id: 28, mood_name: 'Bad', mood_type: "neg", mood_color: "#bf4040", mood_icon: "/images/boom.png"},
      ]);
    });
};
