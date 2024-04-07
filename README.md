
# MerryMeal	🏛️

A full-stack app for an organization called MerryMeal. Merry Wheel is a charitable organization that provides a vital service by preparing and delivering a hot noon meal to eligible adults residing at home. These individuals face challenges in cooking for themselves or maintaining their nutritional needs due to factors such as age, illness, or disability.


## Tech Stack

**Client:** React, Typescript, Redux Toolkit, TailwindCSS, Formik, Axios

**Server:** Laravel

Backend Repo: https://github.com/AyeMinan/Meals_on_Wheels

*I only develop the frontend, and backend is developed by others


## Installation

Clone the repo first

```bash
  git clone https://github.com/YairMyintKyaw/meals-on-wheel.git
  cd meals-on-wheel
```

Install packages with yarn

```bash
  yarn
```
Run the project

```bash
  yarn dev
```
## About the project

As the charity organization that donates food. The main feature of the project is the eligible user can order food from the website. Moreover, there are 4 types of user in this project.

1. Member/ Caregiver (who can order meal)
2. Partner shops owner (who will make meal Member/Caregiver)
3. Delivery Rider (who will deliver the food)
4. Donor and supporter (who can support financially for the organization)

## Features

There are features for each type of user.

### Member
1. can register the account.
2. can update the profile.
3. can see all the meals and each meal detail from the partner shops which are in the same town.
4. can order the meal.
5. can see detail status of the order before it is delivered. The status are shown according to the Partner's meal creation status and Delivery status.
Member can see 5 status. (Order Received, Meal Preparing,Meal Ready, On the Way, Delivered)

### Partner shop
1. can register the account.
2. can update the profile.
3. can make Meal management (CRUD).
4. can see the order from member.
5. can update the order status. 
Partner shop has 3 status(Start Prepare, Preparing, Finished)

### Delivery
1. can register the account.
2. can update the profile.
3. can see the availble order to deliver
4. can deliver the order just by clicking the pick up button.
5. can update the status of the order delivery.
The delivery can see 3 status(Pickup, Delivering, Delivered)


### Donor and supporter
1. can register the account.
2. can update the profile.
3. can donate the certain amount of money.

### Admin
1. can manage all users' account. 





