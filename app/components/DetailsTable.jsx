
export default function DetailsTable({user}){
  return (
    <table>
        <tbody>
        <tr className="border py-2 px-3 border-gray-300">
            <td className="font-medium bg-gray-100 px-2">ID</td>
            <td className="px-4 py-1">{user.id}</td>
        </tr>
        <tr className="border py-2 px-3 border-gray-300">
            <td className="font-medium bg-gray-100 px-2">Username</td>
            <td className="px-4 py-1">{user.username}</td>
        </tr>
        <tr className="border py-2 px-3 border-gray-300">
            <td className="font-medium bg-gray-100 px-2">Email</td>
            <td className="px-4 py-1">{user.email}</td>
        </tr>
        <tr className="border py-2 px-3 border-gray-300">
            <td className="font-medium bg-gray-100 px-2">Phone</td>
            <td className="px-4 py-1">{user.phone}</td>
        </tr>
        <tr className="border py-2 px-3 border-gray-300">
            <td className="font-medium bg-gray-100 px-2">Creation Date</td>
            <td className="px-4 py-1">{user.creationDate}</td>
        </tr>
        </tbody>
    </table>
  )
}
