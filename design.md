# Design Decisions

## Directory Structure

I'm a big fan of having all files neatly tucked away into logical groups. I think this helps to make the code more intuitive and easy to navigate. As you can see, I've placed the client (there could be more in the future) in a 'client' directory, the models in a 'models' directory, and what I call resources (could also be entities, subjects, etc.) into a 'resources' directory.

## Fetch vs. other client lib

To be honest, I've never used the fetch global function before. I usually use `axios`. However, using fetch has the advantage of giving the SDK a smaller footprint, slightly improving performance. I had fun learning about it :)

## Models

One of the distinct advantages of using Typescript is the ability to create contracts (or types) in your application. This helps to reduce bugs by making your code more deterministic from a typing standpoint. There were a few more types I could have made given more time (e.g. one for each resource, or a superset type for all of them), but I believe the response objects were the most important to create a blueprint for.

## Classes

### Client

This class uses the `fetch` global method to make its API calls. I've exposed one method, `fetch`, that handles this. The constructor excepts an optional api key param due to the fact that the book endpoint does not require auth.

### Resource

At first I didn't use abstraction, but after I saw that most of both resources were using repeated code, I decided to create a parent class that contains most of the logic. This 1.) cleans up the movie and quote classes quite a bit, making them more readable 2) Makes it easier to add resources in the future. and 3) Keeps the code DRY.

### One File to Rule Them All

This is the class that a developer will use to interact with The One API endpoints. It's a bit of a facade for the different resources, since you technically could use them too. I think using a facade makes the api much more readable and understandable, with the added benefit of only having to work with one file instead of many.

## Tests

If I had more time, I would have added unit tests for each method in `one_file_to_rule_them_all`. I would have also tested the resource classes. As it is, I decided to test the client as this is the lynch pin of the entire SDK. I made sure that the client both returns the expected response in the expected format on success, and that it throws an error on failure. I mocked the `fetch` calls so that we aren't hitting the actual API and potentially getting rate limited.