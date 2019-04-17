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
Cmd + Option + i if you are on MAC 
ctrl + shift + j if you are on linux/windows 
```

To run the app
```
open index.html
```

## My approach
In this attempt, I am using the Jasmine Framework to test my code. The items are stored in a separate file and looks aesthetically better in terms of code and functionality.


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
So I can get rid off unnecessary things in my cart,
I would like a feature to remove products from my shopping cart

As a User,
So I can check how much I need to pay,
I would like to view the total price for the products in my shopping cart

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
