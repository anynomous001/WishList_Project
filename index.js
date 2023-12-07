let wishlist = [ ];
let userName = ''
/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

/*function handleClick(){
   const inputValue =  document.getElementById('input').value
    console.log( inputValue +  'clicked')
}
document.getElementById('add-btn').addEventListener('click', handleClick)*/


document.getElementById('login-form').addEventListener('submit',(e)=>handleLogIn(e))
document.getElementById('wishlist-form').addEventListener('submit',(e)=> handleClick(e))

      renderWishlist()



function handleLogIn(e){
    e.preventDefault()
    const name =e.target.name.value
    
    if(name === ''){
        alert('Enter your Name')
    }else{
            userName = name
    }
    e.target.name.value = ''
    
    document.getElementById('username-headline').innerText = userName+ "'s Wishlist"
    document.getElementsByClassName('input-div')[0].style.display = 'unset'
    document.getElementsByClassName('login-div')[0].style.display = 'none'
    document.getElementsByClassName('wishlist')[0].style.display = 'unset'
    /*Direct Dom Manipulation is not a good practice */

}

  function handleDelete(index) {
      wishlist.splice(index, 1);
          localStorage.setItem('wishlistdata', JSON.stringify(wishlist))
      renderWishlist();
      console.log('clicked')
    }

function handleClick(e){
    e.preventDefault()
    
    const wishlistItem =  e.target.input.value 
    
    if(wishlistItem === ''){
        alert('Enter a valid Input')
    }else{
            /*wishlist.push(wishlistItem)*/
            wishlist = [wishlistItem,...wishlist]
    }
    localStorage.setItem('wishlistdata', JSON.stringify(wishlist))
    renderWishlist()
    e.target.input.value = ''

}

function renderWishlist(){
    const wistlistData = localStorage.getItem('wishlistdata')
     const wishlistInnerHTML = JSON.parse(wistlistData).map((item,index)=> 
            `<li>${item} <button  class='item-btn' onClick='handleDelete(${index})'>
            Delete</button></li>`).join('')
            console.log(wishlistInnerHTML)

    document.getElementsByClassName('wishlist')[0].innerHTML = ` <ul>${wishlistInnerHTML}</ul>`
}