const Data = [
    {
        heading: "Enjoy On your TV",
        text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      },
      {
        heading: "Download your shows to watch offline",
        text: "Save your favourites easily and always have something to watch.",
        image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      },
      {
        heading: "Watch everywhere",
        text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
      },
      {
        heading: "Create profiles for kids",
        text: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
        image: "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d",
      },
];

interface AllTypes {
  [key: string]: number;
}

export const MoviesGenresID : AllTypes = {
  "Netflix Originals": 28,
  "Trending Now": 12,
  "Top Rated": 18,
  "Action Movies": 10749,
  "Horror Movies": 27,
  "Science Fiction & Fantasy":878
}

export const ShowsGenresID: AllTypes = {
  "Critically Aclaimed TV Shows": 10759,
  "TV Action & Adventure": 18,
  "Familiar TV Favourites": 10749,
  "TV Comedies": 9648,
  "TV Sci-Fi & Horror": 10765
}
export default Data;