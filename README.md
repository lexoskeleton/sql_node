# Amazon Database App 


## Overview

This app is an Amazon-like storefront built with Node.js and MySQL that is run through the command line. The app will take in orders from customers and deplete stock from the store's inventory, as well as calculate the total of each order. 


## Using the App

First, initialize the app in the command line. Once this is done, the inventory of the database will be displayed and you will be prompted to enter the ID of the item you wish to order.

![image]
(https://user-images.githubusercontent.com/9019265/43680713-3b922482-980e-11e8-9947-5fa6254e1e27.png)

Next, you will be prompted to enter the quantity of the item you wish to order. 

![image]
(https://user-images.githubusercontent.com/9019265/43680714-3d1e67fc-980e-11e8-9432-2fbf0401e98b.png)

If there is enough of the item in stock, you will receive the total price of your order as well as the updated inventory quantity. The connection to the database will close.

![image]
(https://user-images.githubusercontent.com/9019265/43680719-4170e820-980e-11e8-9a32-dfcf0dd1b8e0.png)

If not, the error function will run and you will be notified that there is an insufficient quantity. The connection to the database will close.

![image]
(https://user-images.githubusercontent.com/9019265/43680718-3fe8c45a-980e-11e8-976f-62580c04de77.png)
