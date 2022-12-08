import mainFeed from './mainFeed.css'

function MainFeed() {
  return (
    <div className="Main">
      <div>
        <h1>Search Filters</h1>
        <fieldset>
          <legend>Price</legend>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Colour</legend>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Model</legend>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
          </div>
        </fieldset>
      </div>

      <div className="car-feed">
        <h1>Porsches Galore</h1>
        <div className="single-post">
          <h3>car title to go here</h3>
          <p>porsche image to go here</p>
        </div>
        <div className="single-post">
          <h3>car title to go here</h3>
          <p>porsche image to go here</p>
        </div>
        <div className="single-post">
          <h3>car title to go here</h3>
          <p>porsche image to go here</p>
        </div>
      </div>

      <p></p>
    </div>
  )
}
export default MainFeed
