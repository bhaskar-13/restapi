import logo from './logo.svg';
import './App.css';

function App() {
  const users=[{MovieName:"Avatar",Poster:"http://imgs.abduzeedo.com/files/articles/Avatar/4154691413_a695e033a8_o.jpg",rating:7.8,summary:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world."},

  {MovieName:"Sivaji",Poster:"https://images.hindustantimes.com/img/2021/06/15/1600x900/Sivaji_The_Boss_1623762218379_1623762234022.jpg",rating:7.5,summary:"Sivaji returns from the US to invest his money here for good causes. But seeing his rising popularity, the politicians cheat him and steal all of his property. Sivaji takes this as a challenge."},

  {MovieName:"Aayirathil Oruvan ",Poster:"https://www.sify.com/uploads/maxresdefault_umxhj8jfiaddb.jpeg",rating:8,summary:"Anitha, a government official, embarks on a journey to find Chandramouli, an archaeologist, who went to Vietnam in order to search for any existence of the prince of the Chola dynasty."},

  {MovieName:"7 Aum Arivu",Poster:"https://im.rediff.com/movies/2011/nov/23sl1.jpg",rating:6.5,summary:"The legendary Bodhi Dharma, a revered fighter and medic who brought Zen to China and was the foundation of the Shaolin temple has almost been forgotten in his place of birth in Tamil Nadu, India. Now a genetic engineering student needs to awaken the Genetic Memory in his descendant today to use ancient and long forgotten skills to prevent a Biological war between the two most populous nations on the earth."},

  {MovieName:"Ghajini ",Poster:"https://instube.com/uploads/images/1584698030.jpg",rating:7.3,summary:"The legendary Bodhi Dharma, a revered fighter and medic who brought Zen to China and was the foundation of the Shaolin temple has almost been forgotten in his place of birth in Tamil Nadu, India. Now a genetic engineering student needs to awaken the Genetic Memory in his descendant today to use ancient and long forgotten skills to prevent a Biological war between the two most populous nations on the earth."}
              
  ];
  return (
      <div className="App">
      {users.map((ur)=><Msg MovieName={ur.MovieName} Poster={ur.Poster} rating={ur.rating} summary={ur.summary}/>
      )}
    </div>
     );
}

export default App;

function Msg({MovieName,Poster,rating,summary}) {
  // console.log(props);
  return (
    <div className="user-name">
      <h1>{MovieName}</h1>
      <img className="movie-picture" src={Poster} alt={MovieName}/>
      <p>{rating}</p>
      <p>{summary}</p>
    </div>
  );
}
