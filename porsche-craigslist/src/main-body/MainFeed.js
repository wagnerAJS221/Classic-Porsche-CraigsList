import mainFeed from './mainFeed.css'

function MainFeed() {
  return (
    <div className="Main">
      <div>
        <h1>Search Filters</h1>
        <fieldset>
          <legend>Price</legend>
          <div className="price-radio-btn">
            <input type="radio" name="price" />
          </div>
          <div>
            <input type="radio" name="price" />
          </div>
          <div>
            <input type="radio" name="price" />
          </div>
          <div>
            <input type="radio" name="price" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Colour</legend>
          <div className="colour-radio-btn">
            <input type="radio" name="colour" />
          </div>
          <div>
            <input type="radio" name="colour" />
          </div>
          <div>
            <input type="radio" name="colour" />
          </div>
          <div>
            <input type="radio" name="colour" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Model</legend>
          <div className="model-radio-btn">
            <input type="radio" name="model" />
          </div>
          <div>
            <input type="radio" name="model" />
          </div>
          <div>
            <input type="radio" name="model" />
          </div>
          <div>
            <input type="radio" name="model" />
          </div>
        </fieldset>
      </div>

      <div className="car-feed">
        <h1>Porsches Galore</h1>
        <div className="single-post">
          <h3>car title to go here</h3>
          <img alt="porsche car" src="porsche-craigslist\Assets\Image2.jpg" />
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
