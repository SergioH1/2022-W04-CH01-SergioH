import { ArrayFamous } from './Array';
// import { Button } from './button';
export function Gentleman() {
  return (
    <>
      <ul className="gentlemen">
        {ArrayFamous.map((item) => (
          <li key={item.name} className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={'./img/' + item.picture}
                alt={item.alternativeText}
              />
              <span className="gentleman__initial">
                {item.name === 'The Farytale' ? item.name[4] : item.name[0]}
              </span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">{item.name}</h2>
              <ul className="gentleman__data-list">
                <li key={item.profession} className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  {item.profession}
                </li>
                <li key={item.status} className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span>{' '}
                  {item.status}
                </li>
                <li key={item.twitter} className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>
                  {item.twitter}
                </li>
              </ul>
              <i className="icon gentleman__icon fas fa-check"></i>
              <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </div>
          </li>
        ))}
        ;
      </ul>
      <>
        {/* <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src="../img/julio.jpg"
          alt="Julius Churchs pointing at you"
        />
        <span className="gentleman__initial">J</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">Julius Churchs</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            Youtuber
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> Alive
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            @julius_churchs
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src="../img/bertin.jpg"
          alt="Bertin Osbourne pointing at you"
        />
        <span className="gentleman__initial">B</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">Bertin Osbourne</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            Java developer
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> Alive
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> @osbourne
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li> */}
      </>
    </>
  );
}
