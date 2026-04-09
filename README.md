# Daily Work Tracker (n8n + Google Sheets + Custom UI)

## Overview

This project is a web-based Daily Work Tracker that allows users to submit structured daily reports through a custom UI. The submitted data is automatically processed using n8n and stored in Google Sheets.

The system eliminates manual data entry and provides a lightweight, automated reporting workflow without requiring a traditional backend.

---

## Architecture

```
Frontend (HTML/CSS/JS)
        ↓
n8n Webhook
        ↓
Data Processing (Clean + Transform + Split)
        ↓
Google Sheets (Data Storage)
```

---

## Technology Stack

* Frontend: HTML, CSS, JavaScript
* Automation: n8n (cloud)
* Data Storage: Google Sheets
* Integration: Webhook API

---

## Features

### Employee Reporting

* Name, Employee ID, Date
* Mood tracking

### Task Management

* Multiple task entries
* Status, time spent, ETA

### Blockers and Risk Tracking

* Blocker reporting
* Escalation handling
* Risk categorization

### Research Tracking

* Research questions
* Time allocation
* Decision status

### Tomorrow Planning

* Priority-based planning
* Coordination and ETA

### Daily Reflection

* One-line summary of the day

---

## Workflow (n8n)

The automation workflow performs the following steps:

1. **Webhook Trigger**
   Receives data from the frontend form.

2. **Data Cleaning**
   Removes empty entries and normalizes incoming data.

3. **Conditional Logic**
   Processes optional fields such as blockers and research only if present.

4. **Data Splitting**
   Separates tasks, blockers, and plans into structured records.

5. **Google Sheets Integration**
   Appends data into dedicated sheets:

   * Employee_Log
   * Tasks
   * Research
   * Blockers
   * Tomorrow_Plan

---

## Google Sheets Structure

| Sheet Name    | Description              |
| ------------- | ------------------------ |
| Employee_Log  | Summary of daily reports |
| Tasks         | Task-level details       |
| Research      | Research entries         |
| Blockers      | Issues and risks         |
| Tomorrow_Plan | Next day planning        |

---

## Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/your-username/daily-work-tracker.git
```

### 2. Run Frontend

Open `index.html` in a browser or use a local server such as VS Code Live Server.

---

### 3. Configure n8n

* Create a new workflow in n8n
* Add a Webhook node
* Set method to POST
* Copy the production webhook URL

---

### 4. Connect Google Sheets

* Create a Google Sheet with required tabs:

  * Employee_Log
  * Tasks
  * Research
  * Blockers
  * Tomorrow_Plan

* Connect Google Sheets via OAuth in n8n

* Use "Append" operations for data insertion

---

### 5. Update Webhook URL

In `script.js`, replace the webhook URL:

```javascript
fetch("YOUR_N8N_WEBHOOK_URL", {
```

---

## Usage

1. Open the application in a browser
2. Fill in the daily report form
3. Submit the report
4. Data is automatically processed and stored in Google Sheets

---

## Use Cases

* Internal team reporting systems
* Daily productivity tracking
* Project monitoring
* Lightweight workflow automation

---

## Future Enhancements

* Authentication system
* Dashboard integration (Power BI or web dashboard)
* Email notifications
* AI-based summaries and analytics

---

## Author

Vijay Bairagi
Email: [vijayvaishnav906@gmail.com](mailto:vijayvaishnav906@gmail.com)
Website: smartstockadda.com

---

## License

This project is open-source and available for modification and use.
