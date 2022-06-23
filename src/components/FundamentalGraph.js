function FundamentalGraph({ currentPartials, currentFundamental }) {
  console.log(currentFundamental);
  console.log(currentPartials);
  let undertones = currentPartials.filter(
    (noteObj) => noteObj.frq < currentFundamental.frq
  );

  let overtones = currentPartials.filter(
    (noteObj) => noteObj.frq > currentFundamental.frq
  );

  let overtoneRows = overtones.map((overtone) => {
    return (
      <p>
        {overtone.name}: {overtone.frq}
      </p>
    );
  });

  let undertoneRows = undertones.map((undertone) => {
    return (
      <p>
        {undertone.name}: {undertone.frq}
      </p>
    );
  });

  return (
    <div>
      <div>
        <h1>Undertones</h1>
        {undertoneRows}
      </div>
      <div>
        <h1>Overtones</h1>
        {overtoneRows}
      </div>
    </div>
  );
}

export default FundamentalGraph;
