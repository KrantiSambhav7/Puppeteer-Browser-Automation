# **Puppeteer Browser Automation**

This project demonstrates basic browser automation using Puppeteer, a Node.js library for controlling headless Chrome. It automates a Google search for "pepcoding" and clicks the first result.

## **Features**
- Opens a browser (non-headless mode)
- Navigates to Google
- Searches for "pepcoding"
- Clicks on the first search result

## **Installation and Setup**
Follow these steps to run the project on your local machine:

### **Prerequisites**
- Install [Node.js](https://nodejs.org/) (v14+ recommended)
- Install npm (comes with Node.js)

### **Clone the Repository**
```sh
git clone https://github.com/yourusername/puppeteer-automation.git
cd puppeteer-automation
```

### **Install Dependencies**
```sh
npm install
```

### **Run the Script**
```sh
node index.js
```

## **Project Structure**
```
puppeteer-automation/
│-- index.js  # Main Puppeteer script
│-- package.json  # Project dependencies
│-- README.md  # Documentation
```

## **Troubleshooting**
- If Puppeteer fails to launch Chrome, try running:
  ```sh
  npm install puppeteer --save
  ```
- For debugging, add `console.log()` statements inside the `.then()` chains.

## **Contributing**
Feel free to fork the repository and submit pull requests.

## **License**
This project is open-source and available under the MIT License.

---
