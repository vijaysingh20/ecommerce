import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Home() {

  const state = useSelector(s => s)
  const dispatch = useDispatch()
  const { products, tags, filters, tagname, col, order, search,loggedin } = state
  const onTagnameClick = str => {
    // console.log(str)
    dispatch({type:"tagname",value:str})
  }
  const onbuttonclicksorting = str => {
    
    dispatch({type:"col",col:str,order:!order})
    // console.log(str)
  }
  const onInputChange = str => {
    
    dispatch({type:"search",value:str})
    // console.log(str)
  }
  return (
    <main>
      <div className='left'>
        {tags.map(item => <p
          onClick={() => onTagnameClick(item.t)}
          className={tagname.some(x=>x===item.t) ? 'active' : ""}
        >{item.t} <span>{item.c}</span></p>)}
      </div>
      <div className='right'>
        <div className='filters'>
          {filters.map(item => <button onClick={() => onbuttonclicksorting(item)} className={col === item ? "active" : ""}>{item} <i className='fa fa-sort'></i></button>)}
          <input onChange={e => onInputChange(e.target.value)} value={search} placeholder='search' />
        </div>
        <div className='products'>
          {products
          .sort((x,y)=>order?(x[col]-y[col]):(y[col]-x[col]))
          .filter(x=>tagname.some(y=>y===x.tags))
          .filter(x=>Object.values(x).join('').includes(search))
          .map(x => <div className='item'>
            <img src={x.image} />
            <div>{x.title}</div>
            <div>{x.old}</div>
            <div>{x.new}</div>
            <div>
              <i style={{color:1<=x.rating?'orange':'silver'}} className='fa fa-star'></i>
              <i style={{color:2<=x.rating?'orange':'silver'}} className='fa fa-star'></i>
              <i style={{color:3<=x.rating?'orange':'silver'}} className='fa fa-star'></i>
              <i style={{color:4<=x.rating?'orange':'silver'}} className='fa fa-star'></i>
              <i style={{color:5<=x.rating?'orange':'silver'}} className='fa fa-star'></i>
            </div>
            <div className='discount'>{x.discount} % off</div>
            <div className='tags'>{x.tags}</div>
            {loggedin && <div className='cart-btn'>
              <i className='fa fa-shopping-cart'></i>
            </div>}
          </div>
          )}
        </div>
      </div>
    </main>
  )
}
