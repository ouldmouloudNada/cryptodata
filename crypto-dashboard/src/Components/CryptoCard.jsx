const CryptoCard = ({ name, price, marketCap, iconUrl }) => (
    <div className="crypto-card">
      <img src={iconUrl} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Market Cap: ${marketCap}</p>
    </div>
  );
  
  export default CryptoCard;
  