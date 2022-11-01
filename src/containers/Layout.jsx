import Header from '../components/Header'
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
