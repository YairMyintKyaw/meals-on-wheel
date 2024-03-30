const HomeAdmin = () => {
  // const [currentType, ]
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const userType = e.target.value;
    console.log(userType);
    
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-green-800 font-bold mt-10 mb-5 uppercase pb-1 border-b">User management</h2>
        <select  onChange={handleChange} className="h-fit py-2 px-3 shadow text-green-800 rounded">
          <option value="member">Member</option>
          <option value="caregiver">Care Giver</option>
          <option value="partner">Partner</option>
          <option value="donor">Donor</option>
          <option value="volunteer">Volunteer</option>
        </select>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-green-500">
          <thead className="text-xs text-white uppercase bg-green-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple Watch 5
              </th>
              <td className="px-6 py-4">
                Red
              </td>
              <td className="px-6 py-4">
                Wearables
              </td>
              <td className="px-6 py-4">
                $999
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default HomeAdmin