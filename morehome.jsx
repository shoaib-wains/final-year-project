import handsignn from './assets/handsignn.png'
import slide1nn from './assets/slide1nn.png'
import slide5n from './assets/slide5n.png'
import slide7n from './assets/slide7n.png'
// import img22 from './assets/img22.png'
// import img22 from './assets/img22.png'

function More(){
    return(
        <div>
            <h2  className="fw-bolder">Life of Valour</h2>
            <h2  className="fw-bolder">Path of Warrior</h2>
            <table class="table">
  <tbody>
    <tr>
      <td><img src={slide1nn} className="img-fluid " alt="" /></td>
      <td><img src={handsignn} className="img-fluid " alt="" /></td>
    </tr>
    <tr>
    <td><img src={slide5n} className="img-fluid " alt="" /></td>
    <td><img src={slide7n} className="img-fluid " alt="" /></td>
    </tr>
  </tbody>
</table>


            {/* {/* <div className="container-fluid">
                <img src={handsignn} className="img-fluid w-50" alt="" />
            </div>
            <div className="container-fluid">
                <img src={slide1n} className="img-fluid w-50" alt="" />
            </div>
            <div className="container-fluid">
                <img src="" className="img-fluid" alt="" />
            </div>
            <div className="container-fluid">
                <img src="" className="img-fluid" alt="" />
            </div>
            <div>
                 */}
            {/* </div> */} 
        </div>
    )
 }
 export default More;