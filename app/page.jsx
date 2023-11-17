export default function Home() {
  return (
    <div className="mx-4 lg:mx-0">
      <h2 className="text-3xl lg:text-4xl font-bold text-background mt-6 mb-4">
        Welcome
      </h2>
      <hr />
      <div>
      <p className="text-lg mt-4 lg:w-2/3">
          This is a User Management Dashboard made using NextJS version 14. <br/><br/>
          It contains two tabs :- <b>Account</b> and <b>User Details</b> having a create account form and user table respectively. <br/> <br/>
          Explore the tabs in the sidebar/navbar to get started.
        </p>
      </div>
    </div>
  )
}
