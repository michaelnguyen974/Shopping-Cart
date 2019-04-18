# Shopping-Retailer

This is a full-stack web application which has the the core functionality of an online retailer. 

You’ve been asked to develop a responsive website for a clothing retailer.
The retailer sells six different categories of clothes:
1. women’s footwear,
2. men’s footwear,
3. women’s casualwear,
4. men’s casualwear,
5. women’s formalwear 
6. men’s formalwear.

The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.

Below are the products available: 
![Imgur](https://imgur.com/GV14ta2.png)

There are also discount vouchers available that can be redeemed. The discount vouchers
are as follows:
● £5.00 off your order
● £10.00 off when you spend over £50.00
● £15.00 off when you have bought at least one footwear item and spent over £75.00
## How to interact with the app
To run test suite (google chrome)
```
open SpecRunner
 
```

To run the app
```
open index.html
```

## My approach
My initial thoughts on this task was to use Vanilla JS, as I am more used to this tech stack.

**1.** Firstly, my approach was to have all the items viewed in a table. 
![Imgur](https://imgur.com/rcQdMsM.png)

By doing this. I would easily be able to add an "add to cart" button and have them linked to each item in the items list.

![Imgur](https://imgur.com/jw1vLaN.png)

It made sense for me to include the buttons in the table, so that I had a clear view that each button was attached to each item.

**2.** Next, it made sense for the "add to cart" buttons to add each individual item to the shopping cart with it's name and price.
![Imgur](https://imgur.com/d66gZP7.png)

**3.** Now that items were being added to the cart, there were two options I could take - the first would be removing items from the cart, or to calculate the total in the cart. I thought it would make sense to calculate the total first in the cart so that when I added the removing feature, the total in the cart would be dynamically generated as items would be removed from my array. 

![Imgur](https://imgur.com/XAnf2X5.png)

**4.** Since the total was now being generated dynamically when items were added to the array, I could now add the remove item function which would not only remove from the cart, but at the same time update the total as items were being removed.

![Imgur](https://imgur.com/IfYoNLw.png)

**After removing from cart**

![Imgur](https://imgur.com/78OvIPy.png)


User stories in priority order (broken down): 
```
As a User,
So I can buy products,
I would like to view all products on one page

As a User,
So I can see what I've bought,
I would like to view a shopping cart

As a User,
So I can buy a product,
I would like a feature to add a product to my shopping cart

As a User,
So I can buy multiple products,
I would like to add multiple products to my shopping cart

As a User,
So I can check how much I need to pay,
I would like to view the total price for the products in my shopping cart

As a User, 
So I can get rid off unnecessary things in my cart,
I would like a feature to remove products from my shopping cart


As a User,
So I can save money,
I would like to apply a voucher to my shopping cart

As a User,
So I can see how much I have saved, 
I would like to view the total price with the discounts applied

As a User, 
So I can see if I have applied an invalid voucher,
I would like to be alerted when I apply the wrong voucher

As a User, 
So I don't accidentally add an out of stock product,
I cannot add out of stock products to my basket  

```
