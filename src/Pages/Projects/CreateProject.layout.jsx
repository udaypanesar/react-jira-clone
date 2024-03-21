const Projects = () => {
  return (
    <div className="container my-auto flex justify-center py-8 mx-auto">
      <div className="w-full  bg-white rounded-lg shadow-md sm:max-w-2xl">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold  text-gray-900">Project Details</h1>
          <div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">URL</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500"
                />
              <p className="mt-2 text-xs text-gray-500">Describe the project in as much detail as you would like.</p>
            </div>
            <div className="mb-7">
              <label className="block mb-2 text-sm font-medium text-gray-900">Project Category</label>
              <select className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5">
                <option>Business</option>
                <option>Software</option>
                <option>Marketing</option>
              </select>
            </div>
            <button className="text-white bg-blue-700 rounded-md hover:bg-blue-800 font-bold text-sm w-auto p-2">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
