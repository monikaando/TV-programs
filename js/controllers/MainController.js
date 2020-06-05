app.controller("MainController", [
  "$scope",
  function ($scope) {
    ($scope.program = {
      series: "Sherlock",
      series_img: "img/sherlock.jpg",
      genre: "Crime drama",
      season: 3,
      episode: "The Empty Hearse",
      description:
        "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
      datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
    }),
      ($scope.program2 = {
        series: "Rock&Morty",
        series_img:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Rick_and_Morty_season_1.png/250px-Rick_and_Morty_season_1.png",
        genre: "Animation",
        season: 4,
        episode: "Never Ricking Morty",
        description:
          "An anthology episode that follows Rick and Morty on a train with people who don't like Rick. They have to find their way out but they bump into unexpected situations along the way.",
        datetime: new Date(2020, 05, 04, 03, 30, 00, 00),
      });
  },
]);
