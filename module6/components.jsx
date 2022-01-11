const SideNavBar = props => {
  return (
    <nav>
      <MenuItem label='Dashboard' isActive={false} />
      <MenuItem label='Calendar' />
      <MenuItem label='Transactions' isActive={true} />
      <MenuItem label='Settings' />
    </nav>
  )
}

// List Items
const Dashboard = () => {
  return <li>Dashboard</li>
}

const Calendar = () => {
  return <li>Calendar</li>
}
const Transactions = () => {
  return <li style='color:orange'>Transactions</li>
}
const Settings = () => {
  return <li>Settings</li>
}

const MenuItem = props => {
  const style = {
    color: props.isActive ? 'orange' : 'white',
  }
  return <li style={style}>{props.label}</li>
}

// if we don't have a prop set, it's value is undefined

const App = () => {
  return (
    <>
      <SideNavBar />
      <Content />
    </>
  )
}
