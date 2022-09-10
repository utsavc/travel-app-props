import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cardElements=data.map(cardData=>{ 
    return <Card title={cardData.title} 
    description={cardData.description} 
    googleMapsUrl={cardData.googleMapsUrl} 
    imageUrl={cardData.imageUrl} 
    startDate={cardData.startDate} 
    endDate={cardData.endDate} 
    location={cardData.location} />
  })

  return (
    <div className="App">
      <Navbar/>
      {cardElements}
    </div>
  );
}

export default App;
