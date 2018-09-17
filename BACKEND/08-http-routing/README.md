![cf](http://i.imgur.com/7v5ASc8.png) 08: HTTP Routing
===

## Learning Objectives
* Students will learn to use ES6 Promises to manage asynchronous Javascript
* Students will learn to build RESTful HTTP servers

## Resources
* Read [getting started with promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
* Watch [promises](https://www.youtube.com/watch?v=2d7s3spWAzo)

## Outline

### URI vs URL
A URI (uniform resource indicator) is a string of characters used to identify a resource. A URI could be an book ISBN, a street address, a web address, or anything else. URLs are URIs that identify resources on the world wide web. A URL (uniform resource locator) must contain everything it needs to retrieve a resource. `/dashboard` is a URI where `https://www.example.com/dashboard` is a URL.

### Anatomy of a URI
```
   scheme          auth             host      port      path             query         fragment
  ┌────┴────┐┌──────┴─────────┐┌─────┴───────┐┌─┴─┐┌─────┴──────┐┌─────────┴──────────┐┌──┴───┐
  protocol://username:password@api.example.com:3000/path/resource?key=value&key2=value2#fragid1
```

### [REST](https://www.w3.org/2001/sw/wiki/REST)
The HTTP specification describes an interface for making requests to an HTTP server but does not provide semantic guidelines on how that interface should be used. There are many semantic schemas for how HTTP servers should be designed but Representational State Transfer (REST) is the most common. REST places constraints on how servers can manage requests.  This aids in improving scalability, simplicity, modifiability, visibility, portability, and reliability. RESTful services must subscribe to a client-server architecture in order to separate the user interface concerns from data storage concerns. RESTful services must be stateless, which prevents the server manage session state and forces all requests to contain all the information necessary to service the request. RESTful services must support caching. RESTful services should support a layered system, which means clients should not care if the server is the end server or an intermediary server (load balancer or cache).  RESTful services should enforce a uniform interface that follows four specific constraints.

### Four User Interface Constraints
| Constraint | Explanation |
| --- | --- |
| Resource identification in requests  | The resource (model) is identified using the URI |
| Resource manipulation through representations | The representation of a resource (JSON) should contain enough information for a client to modify or delete a resource |
| Self-descriptive messages | Each request should describe how it should be processed (The client should set headers like `Content-Type: application/json` and query strings like `page=3`) |
| Hypermedia as the engine of application state | The client should be able to dynamically discover all the available actions and resources it needs using an OPTIONS request |

### RESTful HTTP Methods
| METHOD | URI | Function |
| --- | --- | --- |
| POST | /api/notes | Create a note resource |
| GET | /api/notes or /api/notes/:id  | Read a note resources or a note resource |
| Put/Patch | /api/notes/:id | Update a note resource |
| Delete |  /api/notes/:id | Delete a note resource |
| HEAD | /api/notes/:id | Read metadata about note a resource |
| OPTIONS |  /api/notes | Discover methods available for a note resources |

### Server Side Routers
Server side routers provide an interface to define how a server should respond to a given endpoint. An endpoint is defined as a HTTP method in combination with a URI path. Routers help simplify complexity and increase readability.
