import { Route, Routes } from 'react-router-dom'
import Print from '../components/3DPrint/3DPrint'
import App from '../App'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/druk-3d" element={<Print />} />
      </Routes>
    </>
  )
}
export default Routing
