

const Tasks = () => {
    return (
        <div className=" grid grid-cols-5">
            <div className="w-48 bg-purple-100">
                <h3 className="bg-purple-500 p-2 rounded-t-md text-white text-center font-semibold">Pending</h3>
                <p>task-1</p>
            </div>
            <div className="w-48 bg-purple-100">
                <h3 className="bg-purple-500 p-2 rounded-t-md text-white text-center font-semibold">on going</h3>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Task1</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Complete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-48 bg-purple-100">
                <h3 className="bg-purple-500 p-2 rounded-t-md text-white text-center font-semibold">Pending</h3>
                <p>task-1</p>
            </div>
            <div className="w-48 bg-purple-100">
                <h3 className="bg-purple-500 p-2 rounded-t-md text-white text-center font-semibold">Pending</h3>
                <p>task-1</p>
            </div>
            <div className="w-48 bg-purple-100">
                <h3 className="bg-purple-500 p-2 rounded-t-md text-white text-center font-semibold">Pending</h3>
                <p>task-1</p>
            </div>


        </div>
    );
};

export default Tasks;