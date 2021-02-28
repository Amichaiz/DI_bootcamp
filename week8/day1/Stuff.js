import React from 'react';

const Stuff = () => {
    const obj = {
        first_name: 'Bob',
        last_name: 'Dylan'
    };
    const data = {
        image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
        cardTitle: "Bob Dylan",
        cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        button: {
            url: "https://en.wikipedia.org/wiki/Bob_Dylan",
            label: "Go to wikipedia"
        }
    };
    let navlinkItems=[]
    navlinkItems.push("https://www.google.co.il/")
    navlinkItems.push("https://www.facebook.com/")
    navlinkItems.push("https://www.amazon.com/")

    const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];
    const all =animals.map((item,i)=>
        <li key={i}>{item}</li>
    )
    console.log(all);
    return (
        <div>
            <ul>{all}</ul>
        {/*<div>
            <ul className='nav'>
            <li class="nav-item">
    <a class="nav-link" href={navlinkItems[0]}>Link to google.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={navlinkItems[1]}>Link to facebook.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={navlinkItems[2]}>Link to amazon.com</a>
  </li>
</ul>
        <div>
             <header style={{color:'red',backgroundColor:'lightblue'}}>This is a header</header>
                {obj.first_name + obj.last_name }
                <p className='mystyle'>This is a paragraph</p>
                <a href=''>This is a link</a>
                <form className='newStyle'>
                    Enter your name:<br></br>
                    <input type='text'></input>
                    <input type="submit" value="Submit"></input>
                </form>
                <list>
                    <li>Cofee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </list> 
            <div className="card m-5" style={{ width: '30rem' }}>
                <img className="card-img-top" src={data.image} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.cardTitle}</h5>
                    <p className="card-text">{data.cardDescription}</p>
                    <a href={data.button.url} className="btn btn-primary">{data.button.label}</a>
                </div>
            </div>
        </div>*/}
 </div>
    )
}


export default Stuff;