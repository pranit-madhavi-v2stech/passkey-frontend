const Dashboard = () => {
  return (
    <div className="container px-6 pt-16 bg-gray-100">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="px-4 py-5 bg-white rounded shadow">
          <h2 className="mb-2 text-xl font-bold">Card 1</h2>
          <p>Placeholder for content</p>
        </div>

        <div className="px-4 py-5 bg-white rounded shadow">
          <h2 className="mb-2 text-xl font-bold">Card 2</h2>
          <p>Placeholder for content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
