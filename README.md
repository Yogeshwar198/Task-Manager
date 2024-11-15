### Task Manager

The Task Manager Application is a simple React-based application designed for managing tasks effectively. It provides features to create, edit, delete, and track the status of tasks. The app supports filtering, searching, and deadline management, making it easier to handle tasks in different states like "To-Do," "In Progress," "Done," and "Expired."

---

## Features

- **Task Creation:** Add new tasks with details like title, description, deadline, and priority.
- **Task Status Management:** Update task statuses (e.g., Todo, In Progress, Done, Expired).
- **Editing and Deleting Tasks:** Modify or remove tasks as needed.
- **Search and Filter:** Search for tasks by title or filter by status.
- **Deadline Tracking:** Automatically flags expired tasks.
- **Local Storage Support:** Saves tasks persistently in the browser’s local storage.

## Application Structure

**Components:**

1. **Navbar:** Includes a search bar and filter dropdown for tasks.
2. **TaskCard:** Form for adding or editing tasks.
3. **TaskManager:** Displays all tasks with functionalities like status updates and deletion.
4. **TaskStatus:** Shows task summaries categorized by their status.
5. **SuccessModal:** Provides confirmation feedback for successful actions.
6. **StoreContext:** Manages global state for tasks, search query, and filters.

## Screenshots

1. **Navbar:** Search and Filter
![Screenshot (1633)](https://github.com/user-attachments/assets/f1f85ad5-f445-4c28-bcef-8d362f8579d8)
![Screenshot (1530)](https://github.com/user-attachments/assets/e52bc75d-99cb-4bd0-88b4-2128e756374b)

2. **Task Manager:** Task List
![Screenshot (1632)](https://github.com/user-attachments/assets/9f12d15c-c5e0-4aa1-9e15-f7629233e84f)
![Screenshot (1637)](https://github.com/user-attachments/assets/905cbfc5-aba7-4459-980f-6b2e350c1dc0)

3. **Task Modal:** Add/Edit Task
![Screenshot (1556)](https://github.com/user-attachments/assets/3c532c34-1232-4e27-8a09-520fff940ce1)
![Screenshot (1635)](https://github.com/user-attachments/assets/4294e776-2b78-42d4-a3da-1b981b37216e)

4. **Success Modal** Add/Edit Task successfully and Please fill all the fields
![Screenshot (1616)](https://github.com/user-attachments/assets/97dac4d8-fb7f-4b5b-a1b1-3c950379b7ef)
![Screenshot (1636)](https://github.com/user-attachments/assets/bf220b1a-e5de-47c4-8f28-9d4c6d5be05c)
![Screenshot (1556)](https://github.com/user-attachments/assets/2d07235d-0b5a-4b43-8033-f91491d6b1e1)
![Screenshot (1615)](https://github.com/user-attachments/assets/514a974a-4370-430b-a347-56c672e54c72)

5. **Responsiveness**
![Screenshot (1641)](https://github.com/user-attachments/assets/8fc9369e-7977-448a-950d-6938428c5499)
![Screenshot (1640)](https://github.com/user-attachments/assets/6a68de6a-b81e-4b30-8140-4b3d7fce8d09)
![Screenshot (1639)](https://github.com/user-attachments/assets/3bbebaa6-1637-4043-86e7-c277ca18debe)
![Screenshot (1638)](https://github.com/user-attachments/assets/8b961a7d-4efe-4e4f-9245-e7a2f123967f)


## Installation and Setup

**Prerequisites**

- Node.js and npm installed.
- A modern web browser (e.g., Chrome, Firefox).

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
```bash
cd <filename>
```

3. **Install the dependencies:**
```bash
npm install
```
4. **Run the application:**
```bash
npm start
```
5. **Open your browser and visit:**
```bash
http://localhost:3000
```

## Assumptions Made
1. **Local Storage:** The application persists tasks using the browser's local storage. No backend is integrated.
2. **Deadline Management:** The "expired" status is determined solely by comparing the current date with the task deadline.
3. **Responsiveness:** The UI is designed to be responsive and adaptable to different screen sizes but may need further testing on smaller devices.
4. **Unique Task IDs:** Tasks are assigned unique IDs based on the current timestamp.


## Technologies Used

- **React:** For building the UI.
- **React Context API:** For state management.
- **React Icons:** For UI enhancements with icons.
- **React DatePicker:** For deadline selection.
- **Tailwind CSS:** For styling the application.

## Contact
Yogeshwar Singh - yogeshwaredu198@gmail.com
