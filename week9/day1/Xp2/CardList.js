import Card from './Card';


const CardList = (props) => {
  const {robots,post} = props;
  return (
    <div className='tc'>
    {
      robots.map((item, i) => {
        return <Card robot={item} key={i} post = {post}/>
      })
    }
    </div>
  );
}
export default CardList
