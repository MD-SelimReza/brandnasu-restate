'use client';

import React, { useState } from 'react';

// Format date as "Mar 18, 2024"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const SupportPage = () => {
  const [newTicket, setNewTicket] = useState('');
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: 'Issue with order #UORD001',
      status: 'Open',
      date: 'Mar 18, 2024',
    },
    {
      id: 2,
      subject: 'Payment not processed',
      status: 'Closed',
      date: 'Mar 10, 2024',
    },
    {
      id: 3,
      subject: 'Account login issue',
      status: 'Open',
      date: 'Mar 5, 2024',
    },
  ]);

  const handleNewTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTicket.trim()) {
      const newTicketData = {
        id: tickets.length + 1,
        subject: newTicket,
        status: 'Open',
        date: formatDate(new Date().toLocaleDateString()),
      };
      setTickets([...tickets, newTicketData]);
      setNewTicket('');
    }
  };

  return (
    <div className="space-y-6 flex-1 pt-6">
      {/* Create New Ticket Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-darkIndigo mb-4">
          Create New Support Ticket
        </h2>
        <form onSubmit={handleNewTicketSubmit}>
          <textarea
            className="w-full p-4 border border-indigo100 rounded-xl text-sm text-darkGray focus:outline-none focus:ring-2 focus:ring-indigo"
            placeholder="Describe your issue here..."
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
            rows={4}
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-indigo text-white rounded hover:bg-darkIndigo transition duration-300"
          >
            Submit Ticket
          </button>
        </form>
      </div>

      {/* Support Tickets List */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-darkIndigo mb-4">
          Your Support Tickets
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-darkGray">
            <thead className="bg-gray100 text-darkIndigo font-medium">
              <tr>
                <th className="px-4 py-3">Ticket ID</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Date Created</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-t border-gray100">
                    <td className="px-4 py-3">#{ticket.id}</td>
                    <td className="px-4 py-3">{ticket.subject}</td>
                    <td className="px-4 py-3">{ticket.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          ticket.status === 'Open'
                            ? 'text-green-700 bg-green-100'
                            : 'text-red-700 bg-red-100'
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center px-4 py-3 text-darkGray"
                  >
                    No support tickets found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
