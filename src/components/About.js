import React from 'react'
import logo from '../Images/Logo.PNG';
export default function About(props) {
 
  return (
    <div className='container my-4 '>
      <div className="accordion accordion-flush" id="accordionFlushExample"  >
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="flush-headingOne"  >
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"  >
        Our Logo
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"  >
      <div className="accordion-body"  ><img className="rounded mx-auto d-block" src={logo} alt="rendering"  /></div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="flush-headingTwo"  >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  >
        Our Special Services
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"  >
      <div className="accordion-body" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia officiis quos laborum fugiat nobis magni repellat, maxime vitae ab veritatis beatae suscipit aperiam. Laudantium, unde. Necessitatibus sed officiis mollitia animi voluptatum, iste recusandae delectus, unde, amet obcaecati nisi repellat? A sunt qui saepe! Vel aliquid, nulla officia tempora soluta rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, impedit quisquam! Commodi veritatis veniam temporibus libero blanditiis error, hic quis modi tenetur est sequi deserunt impedit ea, ex fugiat recusandae provident explicabo ipsa maiores labore natus pariatur exercitationem accusamus. Sed ullam accusamus cumque laudantium voluptatum ea, quis ducimus maiores sapiente.</div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
         Future Plans
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse"   aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod commodi laboriosam atque expedita nobis placeat eveniet nam voluptate quibusdam quisquam officia reiciendis architecto distinctio doloremque illum modi praesentium, deleniti aspernatur totam deserunt eaque inventore, voluptatibus sit esse? Perspiciatis dignissimos deleniti quod quaerat! Impedit, placeat sequi consequatur cupiditate totam quaerat ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere eveniet necessitatibus maxime temporibus veritatis ipsam ea, nostrum quia magni totam obcaecati, assumenda laudantium amet reprehenderit, magnam laboriosam! Fugit alias tenetur, explicabo nisi iure, nostrum, laboriosam sequi tempora perspiciatis numquam quis incidunt assumenda quod quia laudantium molestiae soluta beatae repellendus.</div>
    </div>
  </div>
</div>
    </div>
  )
}
