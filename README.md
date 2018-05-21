# Node.js & MySQL: BAMAZON Customer View

## Overview

Bamazon is an Amazon-like storefront. The app takes orders from customers and updates quantity on hand. It uses npm's MySQL and Inquirer packages for data input and storage.  

## App Demo

* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

To see how the app works, [click here for a demo](https://guides.github.com/features/mastering-markdown/).

### Functionality 

1. The application starts with a display of all of the items available for purchase.  

2. The user is then prompted to select the ID of the product they want to buy followed by the number of units they want to purchase. 

3. Once the user has placed the order, the application checks the quantity on hand to make sure it is sufficient to fill the order.

4. If the quantity on hand is not sufficient, the order is canceled and the following message is displayed: `Insufficient quantity!`.

5. If the quantity on hand is sufficient, the SQL database is updated to reflect the remaining quantity and the user is shown the total cost of their purchase. 

- - -