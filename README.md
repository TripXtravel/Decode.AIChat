## Inspirational Dynamic Packaging with Generative AI: Powered by Camino Network

### How It Works – The Traveler’s Journey

Step 1: Initial Interaction
-	The traveler starts a conversation with generative AI bot.
-	They provide preferences such as destination, near airports, travel dates, and any special requests.

Step 2: Package Creation
-	Camino Messenger processes the data in real-time. 
-	Connects with suppliers to create a highly personalized travel package, including flights, hotels, activities, and local experiences.
-	The system offers multiple package options based on the traveler’s preferences.

Step 3: Booking and Confirmation
-	Once the traveler is satisfied with their customized package, they can complete the booking process directly through Camino Messenger. The package is confirmed, and all necessary information (NFTs) is delivered instantly.

![image](https://github.com/user-attachments/assets/517c917b-9f2d-426e-a035-3f3ae8612af4)

### Repo information

-	https://github.com/TripXtravel/Decode.AIChat, the booking UI powered by AI, website to get/collect the information for the trip, departure airport, destination country, region, city, or city break with sunny weather etc, family or single, what products to include like insurance, car rental, transfer, activities and so on. The main goal is to offer packages tailor made for the customer needs and wishes. To get all the information we are integrated with AI API using it as a chat bot and to convert customer answers into search criteria. The Smart Contract can be found in the folder.
-	https://github.com/TripXtravel/Decode.PackagesApi.Combinator, developed as a Supply bot (new subtype Combinator (named by Sam 😊)) connected with Camino Messenger API. We managed to integrate with CM API (hosted a bot locally) to get Accommodation data, and for other products, because of the lack of test data, we developed our own internal mock services. This is a prototype service that later can transform/evolve into a new service for Packages in Camino Messenger.
-	https://github.com/TripXtravel/Decode.PackagesApi.Distributor, developed as a Distributor bot to get access of the Packages service (Combinator bot) and support the UI. Currently the communication between both bots is standard HTTP/JSON protocol. Protobuf message definition is for future development.

