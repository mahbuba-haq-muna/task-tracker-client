const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;


    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const addTask = { name, brand, type, description, price, rating, photo };
    console.log(addTask);

    // send data 

    fetch('https://fashion-apparel-server-navy.vercel.app/product', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'product Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

const AddTask = () => {
    
    return (
        <div>
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="assignee" className="block text-sm font-medium text-gray-700"> Assignee</label>
                    <input
                      type="text"
                      id="assignee"
                      name="assignee"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                    <select
                      id="priority"
                      name="priority"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="low">P0</option>
                      <option value="medium">P1</option>
                      <option value="high">P2</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
        </div>
    );
};

export default AddTask;