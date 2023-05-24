import { Route, Routes } from 'react-router-dom'
import Print from '../components/3DPrint/3DPrint'
import App from '../App'
import IronWelding from '../components/IronWelding/IronWelding'
import Wood from '../components/Wood/Wood'
import PlasticWelding from '../components/PlasticWelding/PlasticWelding'
import NotFound from '../components/NotFound/NotFound'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/druk-3d" element={<Print />} />
        <Route path="/iron-welding" element={<IronWelding />} />
        <Route path="/wood" element={<Wood />} />
        <Route path="/plastic-welding" element={<PlasticWelding />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}
export default Routing
