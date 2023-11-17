// Defining client side component
"use client"
import React, { useState } from 'react';
import TableRow from '../components/TableRow';
import ModalDetails from '../components/ModalDetails';
import ModalReportGenerated from '../components/ModalReportGenerated';

// Function to get user data
function getUsers(){
  // User data array
    const users = [
        {
          id: 1,
          username: 'john_doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          creationDate: '2022-01-01',
        },
        {
          id: 2,
          username: 'jane_smith',
          email: 'jane.smith@example.com',
          phone: '9876543210',
          creationDate: '2022-02-15',
        },
        {
          id: 3,
          username: 'sam_jackson',
          email: 'sam.jackson@example.com',
          phone: '5551234567',
          creationDate: '2022-03-10',
        },
        {
          id: 4,
          username: 'emma_watson',
          email: 'emma.watson@example.com',
          phone: '7890123456',
          creationDate: '2022-04-20',
        },
        {
          id: 5,
          username: 'michael_jordan',
          email: 'michael.jordan@example.com',
          phone: '1237894560',
          creationDate: '2022-05-05',
        },
        {
          id: 6,
          username: 'sarah_connor',
          email: 'sarah.connor@example.com',
          phone: '9870123456',
          creationDate: '2022-06-30',
        },
        {
          id: 7,
          username: 'peter_parker',
          email: 'peter.parker@example.com',
          phone: '5559876543',
          creationDate: '2022-07-15',
        },
        {
          id: 8,
          username: 'lisa_smith',
          email: 'lisa.smith@example.com',
          phone: '1235557890',
          creationDate: '2022-08-25',
        },
        {
          id: 9,
          username: 'tony_stark',
          email: 'tony.stark@example.com',
          phone: '7893214560',
          creationDate: '2022-09-10',
        },
        {
          id: 10,
          username: 'olivia_jones',
          email: 'olivia.jones@example.com',
          phone: '5557890123',
          creationDate: '2022-10-05',
        },
      ];
      
    return users;
}

// Userdetails component for displaying and managing user details page
export default function Userdetails() {
  // State variables for managing search text, modal visibility, selected user, and report generated modal
  const [searchText, setSearchText] = useState(''); 
  const [showModal, setShowModal] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const [reportGeneratedModal, setReportGeneratedModal] = useState(false);

  //Fetch user data
  const users = getUsers(); 

  // Handle user click to show details modal
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  
  // Handle report generation
  const handleReportGeneration = () => {
    console.log(`Generating report for user ${selectedUser.username}`);
    handleCloseModal();
    setReportGeneratedModal(true);
  };

  // Handle closing the report generated modal
  const handleCloseReportGeneratedModal = () => {
    setReportGeneratedModal(false);
  };

  // Handle closing the details modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="mx-4 lg:mx-0">
      <h2 className="text-3xl lg:text-4xl font-bold text-background mt-6 mb-4">User Details</h2>
      <hr />
      <div className="md:flex justify-start items-center mt-8 mb-6">
        {/* Search input */}
          <label className="pr-2 md:px-3 py-2" htmlFor="search">
            Search :
          </label>
          <input
            className="py-1 px-3 rounded-lg border border-zinc-200 focus:outline-1 outline-background"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            value={searchText} // Set initial value from search state
            onChange={(event) => setSearchText(event.target.value)} // Update search state on input change
          />
      </div>


      {/* Display details modal if showModal is true */}
      {showModal && (
        <ModalDetails user={selectedUser} handleCloseModal={() => handleCloseModal()} handleReportGeneration={() => handleReportGeneration()} />
      )}

      {/* Display report generated modal if reportGeneratedModal is true */}
      {reportGeneratedModal && (
        <ModalReportGenerated handleCloseModal={() => handleCloseReportGeneratedModal()} />
      )}

      {/* User table */}
      <div className="mb-6 overflow-y-scroll h-60">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-foreground">
            {/* Table headers */}
            <tr>
              <th className="border-b py-2 px-3 text-left font-medium text-gray-400 border-gray-300">ID</th>
              <th className="border-b py-2 px-3 text-left font-medium text-gray-400 border-gray-300">Username</th>
              <th className="border-b py-2 px-3 text-left font-medium text-gray-400 border-gray-300">Email</th>
              <th className="border-b py-2 px-3 text-left font-medium text-gray-400 border-gray-300">Phone</th>
              <th className="border-b py-2 px-3 text-left font-medium text-gray-400 border-gray-300">Creation Date</th>
            </tr>
          </thead>

          <tbody>
            {/* Map through and render table rows based on filtered users */}
            {users.filter((user) => {
                if (!searchText) return true; // Show all users if search term is empty
                return user.username.toLowerCase().includes(searchText.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchText.toLowerCase()) ||
                  user.phone.includes(searchText) ||
                  user.id == searchText ||
                  user.creationDate.includes(searchText);
              }).map((user) => (
                <TableRow key={user.id} user={user} handleUserClick={(as) => handleUserClick(as)}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
