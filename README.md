## Introduction

Pet Project is a pet management app that takes stock of current pet medications, grooming appointments, veterinarian appointments, and food/treat brands.

## Registration

Registration is a 4 part process. New Users will be asked to sign up using a unique username, a password, their email, and, optionally, their phone. Users will then be asked to include information about their pets. Pet information requires a pet name, a species, and a birth date for pets in order to process. It will also ask for weight, sex, breed, an image url, and the microchip should the pet be chipped. Registration will error out if the username is taken, or if the date inputs are not in dd-mm-yyyy format.

## User Page

The user page or landing page is where the new user will find a list of their pets. The user page is where a user can add a new pet by clicking the cat-outline. [Add Icon](/documentation/images/addicon.png)

Clicking this silhouette yields the pet registration form. Pets rendered on the user page are also clickable. Selecting a pet moves the user to the pet details which displays information regarding that particular pet.

## Pet Details Page

The Pet Details page includes all these registered information associated with any one pet. This includes their sex, weight, breed, etc. Below the registered information are four (4) icons indicating different pages associated with that pet. From left to right the icons represent the [Food Details Page](/documentation/images/FoodIcon.png),
[Groomer Details Page](/documentation/images/GroomerIcon.png),
[Medicine Details Page](/documentation/images/MedicineIcon.png), and the [Veterinarian Details Page](/documentation/images/VeterinarianIcon.png). These pages are tied to each pet's specific resources. The Groomer Page, Medicine Page, and Veterinarian Pages are a separate, collective of each pets resources which can be found in the top right of the application in the nav bar.

## Food Page

The food page represents all of the food brands and treats associated with the selected pet. Users can scan new food items using the ['Scan Barcode'](/documentation/images/scan.png) button below the food table. In lieu of a barcode, users can also manually enter a new food item by clicking ['add brand'](/documentation/images/addbrand.png). There is no collective page for all pet food brands like there are with groomers, medicines, and veterinarians.

## Groomer Page

The Groomer Page is a collective of all registered pet grooming appointments. Users can delete appointments from this page.

## Groomer Details Page

Users on the groomer details page can [edit, delete](/documentation/images/edit.png) and add new appointments. The details page will only show appointments for the selected pets.

## Medicine Page

Medicine Page is a collective of all registered pet medications. Users can delete medications from this page.

## Medicine Details Page

This detail page offers barcode scanning similar to the food page. Users can scan medications to add new entries to the database. Likewise there is an 'add brand' button on this page for manually entering dates. Futhermore, users can edit entries

## Veterinarian Page

Similar to the groomer and medicine pages, the veterinarian page lists all current vet appointments. It, like the other list pages, provides the option to delete an appointment.

## Veterinarian Details Page

Veterinarian details page lists all appointments for the selected pet. It provides the option to add, delete, or modify appointments.
