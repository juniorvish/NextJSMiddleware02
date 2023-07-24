# NextJSMiddleware02

This project is a Next.js middleware for token-gating a route based on the user holding a certain NFT using Holaplex Hub APIs. It allows anyone to easily use this middleware to token-gate a Next.Js route. The middleware has user-friendly configuration for setting the project and drop.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
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

After installation, you can use this middleware to token-gate a Next.Js route based on the user owning a specific NFT using the Holaplex Hub API.

## Project Structure

- `middleware/tokenGate.js`: This file contains the main logic for the Next.js middleware that token-gates a route based on the user owning a specific NFT.
- `pages/api/holaplex.js`: This file contains the API routes for interacting with the Holaplex Hub.
- `pages/protectedRoute.js`: This file contains the protected route that is token-gated.
- `utils/holaplexAPI.js`: This file contains utility functions for interacting with the Holaplex Hub API.
- `package.json`: This file contains the list of project dependencies.

## Tech Stack

- Next.js: The core framework for building the server-side rendered application.
- Holaplex Hub API: Used to interact with the Holaplex Hub and check if a user owns a specific NFT.

## Testing

To test the project manually, follow the installation instructions and then navigate to the protected route. You should be redirected to a login page if you do not own the required NFT.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/juniorvish/NextJSMiddleware02](https://github.com/juniorvish/NextJSMiddleware02)