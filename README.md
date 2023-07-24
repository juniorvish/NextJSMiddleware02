# NextJSMiddleware02

This project is a Next.js middleware for token-gating a route based on the user holding a certain NFT using Holaplex Hub APIs. It allows anyone to easily use this middleware to token-gate a Next.js route. The middleware has a user-friendly configuration for setting the project and drop.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/juniorvish/NextJSMiddleware02.git
```
2. Install NPM packages
```sh
npm install
```

## Usage

This middleware can be used to gate a route based on an NFT of your choosing. 

## Files and their functions

- `middleware/tokenGate.js`: This file contains the main logic for the Next.js middleware that token-gates a route based on the user owning a specific NFT.
- `pages/api/holaplex.js`: This file interacts with the Holaplex Hub API to check if a user owns a specific NFT.
- `pages/protectedRoute.js`: This file defines the specific route that will be token-gated.
- `utils/holaplexAPI.js`: This file contains the API that will be used to interact with the Holaplex Hub.
- `package.json`: This file contains the list of project dependencies.

## Tech Used

This project uses Next.js, a React framework for building JavaScript applications, and interacts with the Holaplex Hub API to check NFT ownership.

## Testing

To test this project manually, follow the installation instructions and then navigate to the token-gated route. You should be denied access if you do not own the specified NFT.

## Contact

If you have any questions about this project, please open an issue or submit a pull request.

## Acknowledgements

Thanks to the Holaplex team for providing the design of the starter application.