import React, { useState } from "react";

const Order = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "ORD-001",
      date: "May 20, 2024",
      total: "PKR 8,500",
      status: "Delivered",
      statusColor: "green",
      items: [
        {
          name: "Women Round Neck Cotton Top",
          price: "PKR 2,500",
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=60",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "PKR 3,000",
          quantity: 2,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=60",
        },
      ],
      deliveryDate: "May 23, 2024",
      trackingNumber: "TRACK-12345",
    },
    {
      id: "ORD-002",
      date: "May 18, 2024",
      total: "PKR 5,200",
      status: "In Transit",
      statusColor: "blue",
      items: [
        {
          name: "Men Printed Pure Cotton T-shirt",
          price: "PKR 2,600",
          quantity: 2,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=60",
        },
      ],
      deliveryDate: "May 25, 2024",
      trackingNumber: "TRACK-12346",
    },
    {
      id: "ORD-003",
      date: "May 15, 2024",
      total: "PKR 12,000",
      status: "Delivered",
      statusColor: "green",
      items: [
        {
          name: "Kids Printed Pure Cotton T-shirt",
          price: "PKR 1,500",
          quantity: 2,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=60",
        },
        {
          name: "Women Pure Cotton T-shirt",
          price: "PKR 4,500",
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=60",
        },
      ],
      deliveryDate: "May 18, 2024",
      trackingNumber: "TRACK-12347",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return "✓";
      case "In Transit":
        return "→";
      case "Processing":
        return "⏳";
      default:
        return "•";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">My Orders</h1>
          <p className="mt-2 text-gray-600">Track and manage your orders</p>
        </div>

        {selectedOrder ? (
          // Order Details View
          <div>
            <button
              onClick={() => setSelectedOrder(null)}
              className="mb-6 flex items-center gap-2 text-black font-semibold hover:underline"
            >
              ← Back to Orders
            </button>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              {/* Order Header */}
              <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedOrder.id}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Order Status</p>
                  <div
                    className={`mt-1 inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${
                      selectedOrder.statusColor === "green"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <span>{getStatusIcon(selectedOrder.status)}</span>
                    {selectedOrder.status}
                  </div>
                </div>
              </div>

              {/* Order Timeline */}
              <div className="mb-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-600">Ordered</p>
                  <p className="mt-2 font-semibold text-gray-900">
                    {selectedOrder.date}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-600">Expected Delivery</p>
                  <p className="mt-2 font-semibold text-gray-900">
                    {selectedOrder.deliveryDate}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-600">Tracking Number</p>
                  <p className="mt-2 font-semibold text-gray-900">
                    {selectedOrder.trackingNumber}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="mb-8 rounded-lg bg-gray-50 p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-semibold text-gray-900">PKR 8,000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-semibold text-gray-900">PKR 500</p>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg">
                    <p className="font-bold text-gray-900">Total</p>
                    <p className="font-bold text-gray-900">
                      {selectedOrder.total}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-900 transition-colors">
                  Track Order
                </button>
                <button className="flex-1 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Orders List View
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-gray-300"
              >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-sm text-gray-600">Order Number</p>
                    <p className="mt-1 font-bold text-gray-900">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {order.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="mt-1 font-bold text-gray-900">
                      {order.total}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <div
                      className={`mt-1 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                        order.statusColor === "green"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      <span>{getStatusIcon(order.status)}</span>
                      {order.status}
                    </div>
                  </div>
                </div>

                {/* Items Preview */}
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Items ({order.items.length})
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-8 w-8 rounded object-cover"
                        />
                        <span className="text-xs text-gray-700">
                          {item.name.substring(0, 20)}... x{item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {orders.length === 0 && !selectedOrder && (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-lg font-semibold text-gray-900">No orders yet</p>
            <p className="mt-2 text-gray-600">
              Start shopping to see your orders here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
