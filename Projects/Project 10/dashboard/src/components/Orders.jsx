const orders = [
  { id: 1, item: 'Wireless Headphones', date: '12 Mar 2025', status: 'Delivered', amount: 79  },
  { id: 2, item: 'Yoga Mat',            date: '28 Feb 2025', status: 'Delivered', amount: 25  },
  { id: 3, item: 'Coffee Maker',        date: '10 Jan 2025', status: 'Cancelled', amount: 45  },
  { id: 4, item: 'Desk Lamp',           date: '02 Jan 2025', status: 'Delivered', amount: 35  },
  { id: 5, item: 'Backpack',            date: '20 Dec 2024', status: 'Pending',   amount: 50  },
]

function Orders() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Date</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.item}</td>
            <td>{order.date}</td>
            <td>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </td>
            <td>${order.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Orders