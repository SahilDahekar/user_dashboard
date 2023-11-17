export default function TableRow({id, user , handleUserClick}) {
  return (
    <tr className="hover:bg-gray-100 transition" onClick={() => handleUserClick(user)}>
        <td className="border-b py-2 px-3 font-semibold border-gray-300">{user.id}</td>
        <td className="border-b py-2 px-3 border-gray-300">{user.username}</td>
        <td className="border-b py-2 px-3 border-gray-300">{user.email}</td>
        <td className="border-b py-2 px-3 border-gray-300">{user.phone}</td>
        <td className="border-b py-2 px-3 border-gray-300">{user.creationDate}</td>
    </tr>
  )
}