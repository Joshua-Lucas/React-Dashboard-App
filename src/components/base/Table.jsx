import DropDown from "./DropDown";

export default function Table({
  tableHeaders,
  tableData,
  gridLayout,
  dropDownOptions,
  dropDownState,
  setDropDownState,
}) {
  return (
    <div className={` ${gridLayout} flex flex-col w-full `}>
      <div className="self-center mt-4   ">
        <div className="py-2 align-middle inline-block ">
          <div className=" border-b border-gray-200 sm:rounded-lg shadow-2xl">
            <table className="   block divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeaders.map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((data) => (
                  <tr key={data.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {data.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{data.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {data.employeeNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.phoneNumber}
                    </td>
                    {dropDownOptions == null ? null : (
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <DropDown
                          list={dropDownOptions}
                          parentStateSelect={dropDownState}
                          setParentStateSelect={setDropDownState}
                        />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
