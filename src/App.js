import Card from "./components/Card.js"
const data = [
  {
    id:1,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: 4.5,
    price: 269
  },
  {
    id:2,
    image: "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg",
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
    rating: 4.5,
    price: 369
  },
  {
    id:3,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71xydFcbc2L._AC_UL604_SR604,400_.jpg",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: 4.0,
    price: 78
  },
  {
    id:4,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: 4.5,
    price: 269
  },
  {
    id:5,
    image: "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg",
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
    rating: 4.5,
    price: 369
  },
  {
    id:6,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71xydFcbc2L._AC_UL604_SR604,400_.jpg",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: 4.0,
    price: 78
  },
  {
    id:7,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: 4.5,
    price: 269
  },
  {
    id:8,
    image: "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg",
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
    rating: 4.5,
    price: 369
  },
  {
    id:9,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71xydFcbc2L._AC_UL604_SR604,400_.jpg",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: 4.0,
    price: 78
  }
];
function App() {
  return (
    <div className="App">
      {data.map((item) => {return(
        <Card key={item.id} image={item.image} title={item.title} author={item.author} rating={item.rating} price={item.price} />
      )} )}
    </div>
  );
}

export default App;
