# TB Billing v1.2

## Overview
TB Billing v1.2 is a comprehensive billing system designed to manage and automate the billing processes for businesses. This project leverages Node.js and Express.js for the backend, and integrates with MySQL for database management.

## Features
- **Automated Billing**: Automatically generate and send invoices to clients.
- **Error Handling**: Robust error handling mechanisms to ensure smooth operation.
- **Logging**: Detailed logging for monitoring and debugging purposes.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/mrhanji/tb_billing_v1.2.git
    ```
2. Navigate to the project directory:
    ```sh
    cd tb_billing_v1.2
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration
1. Create a `.env` file in the root directory and add your MySQL configuration:
    ```env
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    ```

### Running the Application
1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on port 3001 by default. You can access it at `http://localhost:3001`.

## Logging
Logs are stored in the `logs/` directory. You can find detailed logs for server activities and error tracking.

## Error Handling
The project includes robust error handling mechanisms. Errors are logged with detailed stack traces to help with debugging.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or issues, please contact sagarsharma995899@gmail.com.
