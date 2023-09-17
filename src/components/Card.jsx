const Card = () => {
  return (
    <div className="card">
      <div className="profile">
        <img src="../assets/photo2.png" alt="profile photo" />
        <div className="details">
          <h6>Aliza Webber</h6>
          <p>Interior designer</p>
        </div>
      </div>
      <h4 className="content">Designed in 2020 by Aliza Webber</h4>
    </div>
  );
};

export default Card;
