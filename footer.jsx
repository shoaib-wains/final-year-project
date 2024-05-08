import './footer.css'
import qrcode from'./assets/pakwheelsn.png'
function Myfooter(){
    return(
        <div className="footer-basic">
        <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
            <table class="table table-dark table-responsive">
  <thead>
    <tr>
      <th scope="col">Traffic Police</th>
      <th scope="col">Go to</th>
      <th scope="col">Links</th>
      <th scope="col">About</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row" className=' align-center'><p>Traffic Police in Punjab <br /> 
        has two main components<br /> under 
        the current command <br />
        & control structure.</p>
        <img src={qrcode} className="img-fluid" alt="" /></td>
      <td>                
      <a href="/">Home</a><br />
      <a href="/Adduser">Challan</a><br />
      <a href="/ReadProducts">Record</a></td>
      <td>                
      <a href="https://nab.gov.pk/">National Accountability Bureau</a><br />
      <a href="https://punjabpolice.gov.pk/">Punjab Police</a><br />
      <a href="https://www.nadra.gov.pk/">NADRA</a></td>
      <td><p>An officer of SSP rank <br />known as Chief Traffic Officer (CTO) <br /> is the incharge of Traffic Police <br /> in City districts Rawalpindi, <br />Faisalabad, Multan & Gujranwala, and <br />are under the operational control <br /> of their respective CPOs, whereas <br /> in Lahore it is under the <br /> administrative and operational control <br /> of CCPO Lahore.</p></td>
    </tr>
  </tbody>
</table>




                {/* <table class="table-success table-reposnsive">...
                <thead><tr>
                <th scope="row">Traffic Police</th>
                </tr></thead><tbody>
                <tr>Hello</tr>
                <tr>Hello2</tr>
                <td>Hello3</td>
                <tr>Hello4</tr>
                </tbody></table>



                <table class="table-success table-reposnsive list-inline-item">...
                <thead><tr>
                <th scope="row">Go to</th>
                </tr></thead><tbody>
                <tr><a href="/">Home</a></tr>
                <tr><a href="/Adduser">Challan</a></tr>
                <td><a href="/ReadProducts">Record</a></td>
                <tr><a href="/">Home</a></tr> */}
                {/* </tbody></table> */}
                {/* <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li> */}
            </ul>
            <p className="copyright">Copyright © Muhammad Shoaib Ali  2020-ag-6519</p>
        </footer>
    </div>
    )
}
export default Myfooter;